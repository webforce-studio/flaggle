import { type NextRequest, NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import { join } from "path"

// Helper function to generate kebab-case ID
function generateKebabId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// Helper function to generate image URLs
function generateImageUrls(baseUrl: string) {
  if (!baseUrl) {
    return {
      thumbnail: { webp: "", jpg: "" },
      medium: { webp: "", jpg: "" },
      large: { webp: "", jpg: "" },
    }
  }

  // Clean the base URL to remove existing parameters
  const cleanBaseUrl = baseUrl.split('?')[0]
  
  return {
    thumbnail: {
      webp: `${cleanBaseUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`,
      jpg: `${cleanBaseUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`,
    },
    medium: {
      webp: `${cleanBaseUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`,
      jpg: `${cleanBaseUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`,
    },
    large: {
      webp: `${cleanBaseUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`,
      jpg: `${cleanBaseUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`,
    },
  }
}

// Helper function to extract photo ID from URL
function extractPhotoId(url: string): string {
  if (!url) return ""

  if (url.includes("unsplash.com")) {
    const match = url.match(/photo-([a-zA-Z0-9_-]+)/)
    return match ? match[1] : ""
  }

  if (url.includes("pexels.com")) {
    const match = url.match(/photos\/(\d+)/)
    return match ? match[1] : ""
  }

  return ""
}

// Persistent storage using file system
let currentMonuments: any[] = []
let isInitialized = false

// Helper function to load monuments from the original database
async function loadInitialMonuments() {
  try {
    const { monuments } = await import("@/lib/monument-database")
    console.log(`Loaded ${monuments.length} monuments from database file`)
    return [...monuments] // Create a copy to avoid modifying the original
  } catch (error) {
    console.error("Error loading initial monuments:", error)
    return []
  }
}

// Helper function to save monuments back to the database file
async function saveMonumentsToFile(monuments: any[]) {
  try {
    const timestamp = new Date().toISOString()
    
    // Generate the TypeScript file content
    const fileContent = `// Complete monument database with ${monuments.length} monuments
// Last updated: ${timestamp}

export interface Monument {
  id: number
  name: string
  location: string
  country: string
  continent: string
  type: string
  kebabId?: string
  description: string
  yearBuilt: number | null
  height: number | null
  latitude: number | null
  longitude: number | null
  images: {
    thumbnail: { webp: string; jpg: string }
    medium: { webp: string; jpg: string }
    large: { webp: string; jpg: string }
  }
  attribution: {
    source: string
    photoId: string
    url: string
    photographer: string
    photographerUrl: string
  }
}

export const monuments: Monument[] = ${JSON.stringify(monuments, null, 2)}

// Export additional utilities
export const MONUMENTS_DATABASE = monuments
export default monuments
`

    const filePath = join(process.cwd(), 'lib', 'monument-database.ts')
    await writeFile(filePath, fileContent, 'utf8')
    console.log(`✅ Successfully saved ${monuments.length} monuments to database file`)
    return true
  } catch (error) {
    console.error('❌ Error saving monuments to file:', error)
    return false
  }
}

// Initialize monuments on startup
async function initializeMonuments() {
  if (!isInitialized) {
    currentMonuments = await loadInitialMonuments()
    isInitialized = true
    console.log(`Initialized with ${currentMonuments.length} monuments (FILE PERSISTENCE ENABLED)`)
  }
}

// GET - Fetch all monuments
export async function GET() {
  try {
    await initializeMonuments()
    console.log(`Returning ${currentMonuments.length} monuments`)

    return NextResponse.json({
      success: true,
      monuments: currentMonuments,
      storageType: "file-persistent",
      message: "Data is persisted to the monument database file",
    })
  } catch (error) {
    console.error("Error fetching monuments:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch monuments" }, { status: 500 })
  }
}

// POST - Add new monument
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("=== ADDING NEW MONUMENT (PERSISTENT) ===")
    console.log("Received data:", JSON.stringify(data, null, 2))

    // Initialize monuments if needed
    await initializeMonuments()
    console.log("Current monuments count:", currentMonuments.length)

    // Calculate new ID
    const maxId = Math.max(...currentMonuments.map((m: any) => m.id), 0)
    const newId = maxId + 1
    console.log(`Assigning new ID: ${newId}`)

    // Parse year built
    let yearBuilt: number | null = null
    if (data.yearBuilt) {
      const year = Number.parseInt(data.yearBuilt)
      if (!isNaN(year)) {
        yearBuilt = year
      }
    }

    // Parse coordinates
    const latitude = data.latitude ? Number.parseFloat(data.latitude) : null
    const longitude = data.longitude ? Number.parseFloat(data.longitude) : null
    const height = data.height ? Number.parseFloat(data.height) : null

    // Generate image URLs
    const images = generateImageUrls(data.imageUrl || "")

    // Extract photo ID
    const photoId = data.photoId || extractPhotoId(data.imageUrl || "")

    // Create new monument
    const newMonument = {
      id: newId,
      name: data.name || "",
      location: data.location || "",
      country: data.country || "",
      continent: data.continent || "",
      type: data.type || "",
      kebabId: generateKebabId(data.name || ""),
      description: data.description || "",
      yearBuilt,
      height,
      latitude,
      longitude,
      images,
      attribution: {
        source: data.source || "Unsplash",
        photoId,
        url: data.sourceUrl || data.imageUrl || "",
        photographer: data.photographerName || "",
        photographerUrl: data.photographerUrl || "",
      },
    }

    console.log("Created monument:", JSON.stringify(newMonument, null, 2))

    // Add to current array
    currentMonuments.push(newMonument)
    console.log(`Total monuments after addition: ${currentMonuments.length}`)

    // Save to file system
    const saved = await saveMonumentsToFile(currentMonuments)
    
    if (!saved) {
      // Rollback the addition if save failed
      currentMonuments.pop()
      return NextResponse.json({ 
        success: false, 
        error: "Failed to save monument to database file" 
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: `Monument "${newMonument.name}" added and saved permanently to database`,
      monument: newMonument,
      totalMonuments: currentMonuments.length,
      storageType: "file-persistent",
      notice: "Monument has been permanently saved to the database file",
    })
  } catch (error) {
    console.error("=== ERROR ADDING MONUMENT ===", error)
    return NextResponse.json({ success: false, error: `Failed to add monument: ${error instanceof Error ? error.message : String(error)}` }, { status: 500 })
  }
}

// PUT - Update existing monument
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data

    if (!id) {
      return NextResponse.json({ success: false, error: "Monument ID is required" }, { status: 400 })
    }

    const monumentId = Number.parseInt(id)
    console.log(`=== UPDATING MONUMENT ID: ${monumentId} (PERSISTENT) ===`)

    // Initialize monuments if needed
    await initializeMonuments()

    // Parse year built
    let yearBuilt: number | null = null
    if (updateData.yearBuilt) {
      const year = Number.parseInt(updateData.yearBuilt)
      if (!isNaN(year)) {
        yearBuilt = year
      }
    }

    // Parse coordinates
    const latitude = updateData.latitude ? Number.parseFloat(updateData.latitude) : null
    const longitude = updateData.longitude ? Number.parseFloat(updateData.longitude) : null
    const height = updateData.height ? Number.parseFloat(updateData.height) : null

    // Generate image URLs
    const images = generateImageUrls(updateData.imageUrl || "")

    // Extract photo ID
    const photoId = updateData.photoId || extractPhotoId(updateData.imageUrl || "")

    // Find monument in current monuments
    const monumentIndex = currentMonuments.findIndex((m: any) => m.id === monumentId)

    if (monumentIndex === -1) {
      return NextResponse.json({ success: false, error: "Monument not found" }, { status: 404 })
    }

    const existingMonument = currentMonuments[monumentIndex]

    // Update monument
    const updatedMonument = {
      ...existingMonument,
      name: updateData.name || existingMonument.name,
      location: updateData.location || existingMonument.location,
      country: updateData.country || existingMonument.country,
      continent: updateData.continent || existingMonument.continent,
      type: updateData.type || existingMonument.type,
      kebabId: updateData.name ? generateKebabId(updateData.name) : existingMonument.kebabId,
      description: updateData.description || existingMonument.description,
      yearBuilt,
      height,
      latitude,
      longitude,
      images,
      attribution: {
        source: updateData.source || existingMonument.attribution.source,
        photoId,
        url: updateData.sourceUrl || updateData.imageUrl || existingMonument.attribution.url,
        photographer: updateData.photographerName || existingMonument.attribution.photographer,
        photographerUrl: updateData.photographerUrl || existingMonument.attribution.photographerUrl,
      },
    }

    // Update in memory
    currentMonuments[monumentIndex] = updatedMonument

    // Save to file system
    const saved = await saveMonumentsToFile(currentMonuments)
    
    if (!saved) {
      // Rollback the update if save failed
      currentMonuments[monumentIndex] = existingMonument
      return NextResponse.json({ 
        success: false, 
        error: "Failed to save updated monument to database file" 
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Monument updated and saved permanently to database",
      monument: updatedMonument,
      storageType: "file-persistent",
      notice: "Monument has been permanently saved to the database file",
    })
  } catch (error) {
    console.error("Error updating monument:", error)
    return NextResponse.json({ success: false, error: "Failed to update monument" }, { status: 500 })
  }
}

// DELETE - Remove monument
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = Number.parseInt(searchParams.get("id") || "")

    if (!id) {
      return NextResponse.json({ success: false, error: "Monument ID is required" }, { status: 400 })
    }

    console.log(`=== DELETING MONUMENT ID: ${id} (PERSISTENT) ===`)

    // Initialize monuments if needed
    await initializeMonuments()

    // Find monument in current monuments
    const monumentIndex = currentMonuments.findIndex((m: any) => m.id === id)

    if (monumentIndex === -1) {
      return NextResponse.json({ success: false, error: "Monument not found" }, { status: 404 })
    }

    // Keep a backup for rollback
    const deletedMonument = currentMonuments[monumentIndex]

    // Remove monument from array
    currentMonuments.splice(monumentIndex, 1)

    // Save to file system
    const saved = await saveMonumentsToFile(currentMonuments)
    
    if (!saved) {
      // Rollback the deletion if save failed
      currentMonuments.splice(monumentIndex, 0, deletedMonument)
      return NextResponse.json({ 
        success: false, 
        error: "Failed to save changes to database file" 
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Monument deleted and changes saved permanently to database",
      storageType: "file-persistent",
      notice: "Monument has been permanently removed from the database file",
    })
  } catch (error) {
    console.error("Error deleting monument:", error)
    return NextResponse.json({ success: false, error: "Failed to delete monument" }, { status: 500 })
  }
}
