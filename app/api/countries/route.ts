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

// Persistent storage using file system
let currentCountries: any[] = []
let isInitialized = false

// Helper function to load countries from the original database
async function loadInitialCountries() {
  try {
    const { countries } = await import("@/lib/country-database")
    console.log(`Loaded ${countries.length} countries from database file`)
    return [...countries] // Create a copy to avoid modifying the original
  } catch (error) {
    console.error("Error loading initial countries:", error)
    return []
  }
}

// Helper function to save countries back to the database file
async function saveCountriesToFile(countries: any[]) {
  try {
    const timestamp = new Date().toISOString()
    
    // Generate the TypeScript file content
    const fileContent = `// Complete country database with ${countries.length} countries
// Last updated: ${timestamp}

export interface Country {
  id: string
  name: string
  code: string
  flagUrl: string
  region: string
  capital: string
  population: number
  coordinates: {
    lat: number
    lng: number
  }
}

export const countries: Country[] = ${JSON.stringify(countries, null, 2)}

// Export additional utilities
export const COUNTRIES_DATABASE = countries
export default countries
`

    const filePath = join(process.cwd(), 'lib', 'country-database.ts')
    await writeFile(filePath, fileContent, 'utf8')
    console.log(`✅ Successfully saved ${countries.length} countries to database file`)
    return true
  } catch (error) {
    console.error('❌ Error saving countries to file:', error)
    return false
  }
}

// Initialize countries on startup
async function initializeCountries() {
  if (!isInitialized) {
    currentCountries = await loadInitialCountries()
    isInitialized = true
    console.log(`Initialized with ${currentCountries.length} countries (FILE PERSISTENCE ENABLED)`)
  }
}

// GET - Fetch all countries
export async function GET() {
  try {
    await initializeCountries()
    console.log(`Returning ${currentCountries.length} countries`)

    return NextResponse.json({
      success: true,
      countries: currentCountries,
      storageType: "file-persistent",
      message: "Data is persisted to the country database file",
    })
  } catch (error) {
    console.error("Error fetching countries:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch countries" }, { status: 500 })
  }
}

// POST - Add new country
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    console.log("=== ADDING NEW COUNTRY (PERSISTENT) ===")
    console.log("Received data:", JSON.stringify(data, null, 2))

    // Initialize countries if needed
    await initializeCountries()
    console.log("Current countries count:", currentCountries.length)

    // Parse population
    const population = data.population ? Number.parseInt(data.population) : 0
    const latitude = data.latitude ? Number.parseFloat(data.latitude) : 0
    const longitude = data.longitude ? Number.parseFloat(data.longitude) : 0

    // Create new country
    const newCountry = {
      id: generateKebabId(data.name || ""),
      name: data.name || "",
      code: data.code || "",
      flagUrl: data.flagUrl || "",
      region: data.region || "",
      capital: data.capital || "",
      population,
      coordinates: {
        lat: latitude,
        lng: longitude,
      },
    }

    console.log("Created country:", JSON.stringify(newCountry, null, 2))

    // Add to current array
    currentCountries.push(newCountry)
    console.log(`Total countries after addition: ${currentCountries.length}`)

    // Save to file system
    const saved = await saveCountriesToFile(currentCountries)
    
    if (!saved) {
      // Rollback the addition if save failed
      currentCountries.pop()
      return NextResponse.json({ 
        success: false, 
        error: "Failed to save country to database file" 
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: `Country "${newCountry.name}" added and saved permanently to database`,
      country: newCountry,
      totalCountries: currentCountries.length,
      storageType: "file-persistent",
      notice: "Country has been permanently saved to the database file",
    })
  } catch (error) {
    console.error("=== ERROR ADDING COUNTRY ===", error)
    return NextResponse.json({ success: false, error: `Failed to add country: ${error instanceof Error ? error.message : String(error)}` }, { status: 500 })
  }
}

// PUT - Update existing country
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json()
    const { id, ...updateData } = data

    if (!id) {
      return NextResponse.json({ success: false, error: "Country ID is required" }, { status: 400 })
    }

    console.log(`=== UPDATING COUNTRY ID: ${id} (PERSISTENT) ===`)

    // Initialize countries if needed
    await initializeCountries()

    // Parse population and coordinates
    const population = updateData.population ? Number.parseInt(updateData.population) : 0
    const latitude = updateData.latitude ? Number.parseFloat(updateData.latitude) : 0
    const longitude = updateData.longitude ? Number.parseFloat(updateData.longitude) : 0

    // Find country in current countries
    const countryIndex = currentCountries.findIndex((c: any) => c.id === id)

    if (countryIndex === -1) {
      return NextResponse.json({ success: false, error: "Country not found" }, { status: 404 })
    }

    const existingCountry = currentCountries[countryIndex]

    // Update country
    const updatedCountry = {
      ...existingCountry,
      name: updateData.name || existingCountry.name,
      code: updateData.code || existingCountry.code,
      flagUrl: updateData.flagUrl || existingCountry.flagUrl,
      region: updateData.region || existingCountry.region,
      capital: updateData.capital || existingCountry.capital,
      population,
      coordinates: {
        lat: latitude,
        lng: longitude,
      },
    }

    // Update in memory
    currentCountries[countryIndex] = updatedCountry

    // Save to file system
    const saved = await saveCountriesToFile(currentCountries)
    
    if (!saved) {
      // Rollback the update if save failed
      currentCountries[countryIndex] = existingCountry
      return NextResponse.json({ 
        success: false, 
        error: "Failed to save updated country to database file" 
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Country updated and saved permanently to database",
      country: updatedCountry,
      storageType: "file-persistent",
      notice: "Country has been permanently saved to the database file",
    })
  } catch (error) {
    console.error("Error updating country:", error)
    return NextResponse.json({ success: false, error: "Failed to update country" }, { status: 500 })
  }
}

// DELETE - Remove country
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ success: false, error: "Country ID is required" }, { status: 400 })
    }

    console.log(`=== DELETING COUNTRY ID: ${id} (PERSISTENT) ===`)

    // Initialize countries if needed
    await initializeCountries()

    // Find country in current countries
    const countryIndex = currentCountries.findIndex((c: any) => c.id === id)

    if (countryIndex === -1) {
      return NextResponse.json({ success: false, error: "Country not found" }, { status: 404 })
    }

    // Keep a backup for rollback
    const deletedCountry = currentCountries[countryIndex]

    // Remove country from array
    currentCountries.splice(countryIndex, 1)

    // Save to file system
    const saved = await saveCountriesToFile(currentCountries)
    
    if (!saved) {
      // Rollback the deletion if save failed
      currentCountries.splice(countryIndex, 0, deletedCountry)
      return NextResponse.json({ 
        success: false, 
        error: "Failed to save changes to database file" 
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: "Country deleted and changes saved permanently to database",
      storageType: "file-persistent",
      notice: "Country has been permanently removed from the database file",
    })
  } catch (error) {
    console.error("Error deleting country:", error)
    return NextResponse.json({ success: false, error: "Failed to delete country" }, { status: 500 })
  }
} 