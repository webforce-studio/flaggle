import fs from "fs"
import path from "path"

interface FinalMonumentData {
  id: string
  name: string
  location: string
  country: string
  continent: string
  type: string
  yearBuilt: number
  height: number
  latitude: number
  longitude: number
  image: string
  photographer?: string
  photographerUrl?: string
  imageSource?: string
}

/**
 * Convert CSV back to TypeScript monument database
 */
function csvToMonumentDatabase(csvPath: string): string {
  const csvContent = fs.readFileSync(csvPath, "utf-8")
  const lines = csvContent.split("\n")
  const headers = lines[0].split(",")

  const monuments: FinalMonumentData[] = []

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue

    const values = lines[i].split(",").map((val) => val.replace(/^"|"$/g, ""))
    const monument: any = {}

    headers.forEach((header, index) => {
      const value = values[index]

      switch (header.trim()) {
        case "yearBuilt":
        case "height":
          monument[header.trim()] = Number.parseInt(value) || 0
          break
        case "latitude":
        case "longitude":
          monument[header.trim()] = Number.parseFloat(value) || 0
          break
        default:
          monument[header.trim()] = value || ""
      }
    })

    monuments.push(monument)
  }

  // Generate TypeScript code
  const tsCode = `// Auto-generated monument database
export interface MonumentData {
  id: string
  name: string
  location: string
  country: string
  continent: string
  type: string
  yearBuilt: number
  height: number
  latitude: number
  longitude: number
  image: string
  photographer?: string
  photographerUrl?: string
  imageSource?: string
}

export const MONUMENTS_DATABASE: MonumentData[] = [
${monuments
  .map(
    (monument) => `  {
    id: "${monument.id}",
    name: "${monument.name}",
    location: "${monument.location}",
    country: "${monument.country}",
    continent: "${monument.continent}",
    type: "${monument.type}",
    yearBuilt: ${monument.yearBuilt},
    height: ${monument.height},
    latitude: ${monument.latitude},
    longitude: ${monument.longitude},
    image: "${monument.image}",${
      monument.photographer
        ? `
    photographer: "${monument.photographer}",`
        : ""
    }${
      monument.photographerUrl
        ? `
    photographerUrl: "${monument.photographerUrl}",`
        : ""
    }${
      monument.imageSource
        ? `
    imageSource: "${monument.imageSource}",`
        : ""
    }
  }`,
  )
  .join(",\n")}
]

// Helper function to calculate distance between two points
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const d = R * c // Distance in kilometers
  return Math.round(d)
}
`

  return tsCode
}

/**
 * Generate the final monument database file
 */
function generateFinalDatabase(csvPath: string, outputPath: string) {
  const tsCode = csvToMonumentDatabase(csvPath)
  fs.writeFileSync(outputPath, tsCode)
  console.log(`✅ Final monument database generated: ${outputPath}`)
}

// Usage
const csvPath = path.join(process.cwd(), "data", "monuments-with-images-final.csv")
const outputPath = path.join(process.cwd(), "lib", "expanded-monument-database.ts")

if (fs.existsSync(csvPath)) {
  generateFinalDatabase(csvPath, outputPath)
} else {
  console.error(`CSV file not found: ${csvPath}`)
  console.log("Please ensure you have completed the image collection process.")
}
