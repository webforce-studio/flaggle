import { kv } from "@vercel/kv"
import { type NextRequest, NextResponse } from "next/server"
import { MONUMENTS_DATABASE, type Monument } from "@/lib/monument-database"

const KV_KEY = "monuments:additional"

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

  return {
    thumbnail: {
      webp: `${baseUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`,
      jpg: `${baseUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`,
    },
    medium: {
      webp: `${baseUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`,
      jpg: `${baseUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`,
    },
    large: {
      webp: `${baseUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`,
      jpg: `${baseUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`,
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

// Get additional monuments from KV
async function getAdditionalMonuments(): Promise<Monument[]> {
  try {
    const additional = await kv.get<Monument[]>(KV_KEY)
    return additional || []
  } catch (error) {
    console.error("Error fetching additional monuments from KV:", error)
    return []
  }
}

// Save additional monuments to KV
async function saveAdditionalMonuments(monuments: Monument[]): Promise<void> {
  try {
    await kv.set(KV_KEY, monuments)
  } catch (error) {
    console.error("Error saving additional monuments to KV:", error)
    throw error
  }
}

// GET - Fetch all monuments
export async function GET() {
  try {
    const additionalMonuments = await getAdditionalMonuments()
    const allMonuments = [...MONUMENTS_DATABASE, ...additionalMonuments]

    return NextResponse.json({
      success: true,
      monuments: allMonuments,
    })
  } catch (error) {
    console.error("Error fetching monuments:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch monuments" }, { status: 500 })
  }
}

// POST - Add new monument (stored in KV)
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Get existing additional monuments
    const additionalMonuments = await getAdditionalMonuments()
    const allMonuments = [...MONUMENTS_DATABASE, ...additionalMonuments]

    // Generate new ID
    const maxId = Math.max(...allMonuments.map((m) => m.id), 0)
    const newId = maxId + 1

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
    const newMonument: Monument = {
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

    // Add to additional monuments and save to KV
    const updatedAdditional = [...additionalMonuments, newMonument]
    await saveAdditionalMonuments(updatedAdditional)

    return NextResponse.json({
      success: true,
      message: "Monument added successfully and stored permanently",
      monument: newMonument,
    })
  } catch (error) {
    console.error("Error adding monument:", error)
    return NextResponse.json({ success: false, error: "Failed to add monument" }, { status: 500 })
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

    // Get additional monuments
    const additionalMonuments = await getAdditionalMonuments()
    const monumentIndex = additionalMonuments.findIndex((m) => m.id === id)

    if (monumentIndex !== -1) {
      // Update additional monument
      const existingMonument = additionalMonuments[monumentIndex]

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

      // Update monument
      const updatedMonument: Monument = {
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

      additionalMonuments[monumentIndex] = updatedMonument
      await saveAdditionalMonuments(additionalMonuments)

      return NextResponse.json({
        success: true,
        message: "Monument updated successfully",
        monument: updatedMonument,
      })
    }

    // Check if it's a database monument
    const dbMonument = MONUMENTS_DATABASE.find((m) => m.id === id)
    if (dbMonument) {
      return NextResponse.json(
        {
          success: false,
          error: "Cannot update core database monuments. This monument is part of the original database.",
        },
        { status: 403 },
      )
    }

    return NextResponse.json({ success: false, error: "Monument not found" }, { status: 404 })
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

    // Get additional monuments
    const additionalMonuments = await getAdditionalMonuments()
    const monumentIndex = additionalMonuments.findIndex((m) => m.id === id)

    if (monumentIndex !== -1) {
      // Remove from additional monuments
      additionalMonuments.splice(monumentIndex, 1)
      await saveAdditionalMonuments(additionalMonuments)

      return NextResponse.json({
        success: true,
        message: "Monument deleted successfully",
      })
    }

    // Check if it's a database monument
    const dbMonument = MONUMENTS_DATABASE.find((m) => m.id === id)
    if (dbMonument) {
      return NextResponse.json(
        {
          success: false,
          error: "Cannot delete core database monuments. This monument is part of the original database.",
        },
        { status: 403 },
      )
    }

    return NextResponse.json({ success: false, error: "Monument not found" }, { status: 404 })
  } catch (error) {
    console.error("Error deleting monument:", error)
    return NextResponse.json({ success: false, error: "Failed to delete monument" }, { status: 500 })
  }
}
