import fs from "fs"
import path from "path"

interface RawMonumentData {
  name: string
  city: string
  country: string
  description: string
}

interface ProcessedMonumentData {
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
  description: string
  searchTerms: string[]
}

// Continent mapping
const CONTINENT_MAP: { [key: string]: string } = {
  // North America
  USA: "North America",
  "United States": "North America",
  Canada: "North America",
  Mexico: "North America",
  Guatemala: "North America",

  // South America
  Brazil: "South America",
  Argentina: "South America",
  Peru: "South America",
  Chile: "South America",
  Colombia: "South America",
  Venezuela: "South America",
  Ecuador: "South America",
  Bolivia: "South America",

  // Europe
  France: "Europe",
  Germany: "Europe",
  Italy: "Europe",
  Spain: "Europe",
  UK: "Europe",
  "United Kingdom": "Europe",
  England: "Europe",
  Greece: "Europe",
  Russia: "Europe",
  Turkey: "Europe",
  Netherlands: "Europe",
  Belgium: "Europe",
  Switzerland: "Europe",
  Austria: "Europe",
  Portugal: "Europe",
  Norway: "Europe",
  Sweden: "Europe",
  Denmark: "Europe",
  Finland: "Europe",
  Iceland: "Europe",
  Ireland: "Europe",
  Scotland: "Europe",
  Wales: "Europe",
  "Czech Republic": "Europe",
  Poland: "Europe",
  Hungary: "Europe",
  Romania: "Europe",
  Croatia: "Europe",

  // Asia
  China: "Asia",
  India: "Asia",
  Japan: "Asia",
  Cambodia: "Asia",
  Jordan: "Asia",
  UAE: "Asia",
  "United Arab Emirates": "Asia",
  "Saudi Arabia": "Asia",
  Iran: "Asia",
  Myanmar: "Asia",
  Indonesia: "Asia",
  Vietnam: "Asia",
  Thailand: "Asia",
  Malaysia: "Asia",
  Singapore: "Asia",
  Philippines: "Asia",
  "South Korea": "Asia",
  Mongolia: "Asia",
  Kazakhstan: "Asia",
  Afghanistan: "Asia",
  Pakistan: "Asia",
  Bangladesh: "Asia",
  "Sri Lanka": "Asia",
  Nepal: "Asia",
  Israel: "Asia",
  Lebanon: "Asia",
  Syria: "Asia",
  Iraq: "Asia",

  // Africa
  Egypt: "Africa",
  Tanzania: "Africa",
  "South Africa": "Africa",
  Kenya: "Africa",
  Morocco: "Africa",
  Ethiopia: "Africa",
  Nigeria: "Africa",
  Ghana: "Africa",
  Tunisia: "Africa",
  Algeria: "Africa",
  Libya: "Africa",
  Sudan: "Africa",

  // Oceania
  Australia: "Oceania",
  "New Zealand": "Oceania",
  Fiji: "Oceania",
}

// Monument type detection
function detectMonumentType(name: string, description: string): string {
  const nameL = name.toLowerCase()
  const descL = description.toLowerCase()

  // Specific patterns
  if (nameL.includes("tower") || descL.includes("tower")) return "Tower"
  if (nameL.includes("bridge") || descL.includes("bridge")) return "Bridge"
  if (nameL.includes("castle") || descL.includes("castle")) return "Castle"
  if (nameL.includes("palace") || descL.includes("palace")) return "Palace"
  if (nameL.includes("cathedral") || descL.includes("cathedral")) return "Cathedral"
  if (nameL.includes("basilica") || descL.includes("basilica")) return "Basilica"
  if (nameL.includes("church") || descL.includes("church")) return "Church"
  if (nameL.includes("mosque") || descL.includes("mosque")) return "Mosque"
  if (nameL.includes("temple") || descL.includes("temple")) return "Temple"
  if (nameL.includes("statue") || descL.includes("statue")) return "Statue"
  if (nameL.includes("pyramid") || descL.includes("pyramid")) return "Pyramid"
  if (nameL.includes("wall") || descL.includes("wall")) return "Wall"
  if (nameL.includes("falls") || descL.includes("waterfall") || descL.includes("falls")) return "Waterfall"
  if (nameL.includes("mountain") || nameL.includes("mount") || nameL.includes("peak")) return "Mountain"
  if (nameL.includes("park") || descL.includes("national park")) return "National Park"
  if (nameL.includes("museum") || descL.includes("museum")) return "Museum"
  if (nameL.includes("opera") || descL.includes("opera house")) return "Opera House"
  if (nameL.includes("theater") || nameL.includes("theatre")) return "Theater"
  if (nameL.includes("stadium") || descL.includes("stadium")) return "Stadium"
  if (nameL.includes("market") || descL.includes("market")) return "Market"
  if (nameL.includes("square") || descL.includes("square")) return "Square"
  if (nameL.includes("beach") || descL.includes("beach")) return "Beach"
  if (nameL.includes("island") || descL.includes("island")) return "Island"
  if (nameL.includes("lake") || descL.includes("lake")) return "Lake"
  if (nameL.includes("desert") || descL.includes("desert")) return "Desert"
  if (nameL.includes("garden") || descL.includes("garden")) return "Garden"

  // Description-based detection
  if (descL.includes("archaeological") || descL.includes("ruins")) return "Archaeological Site"
  if (descL.includes("amphitheater") || descL.includes("amphitheatre")) return "Amphitheater"
  if (descL.includes("mausoleum")) return "Mausoleum"
  if (descL.includes("tomb")) return "Tomb"
  if (descL.includes("monastery")) return "Monastery"
  if (descL.includes("fortress") || descL.includes("fort")) return "Fortress"
  if (descL.includes("citadel")) return "Citadel"
  if (descL.includes("skyscraper") || descL.includes("building")) return "Building"
  if (descL.includes("lighthouse")) return "Lighthouse"
  if (descL.includes("memorial")) return "Memorial"
  if (descL.includes("monument")) return "Monument"

  return "Landmark"
}

// Extract year from description
function extractYear(description: string): number {
  // Look for patterns like "built in 1889", "completed in 1931", "dating from 72-80 AD"
  const patterns = [
    /built in (\d{4})/i,
    /completed in (\d{4})/i,
    /constructed in (\d{4})/i,
    /dating from (\d{4})/i,
    /from (\d{4})/i,
    /(\d{4})/g,
  ]

  for (const pattern of patterns) {
    const match = description.match(pattern)
    if (match) {
      const year = Number.parseInt(match[1])
      if (year > 0 && year <= new Date().getFullYear()) {
        return year
      }
    }
  }

  // Look for BCE dates
  const bceMatch = description.match(/(\d+)\s*BCE/i)
  if (bceMatch) {
    return -Number.parseInt(bceMatch[1])
  }

  // Look for BC dates
  const bcMatch = description.match(/(\d+)\s*BC/i)
  if (bcMatch) {
    return -Number.parseInt(bcMatch[1])
  }

  return 0 // Unknown
}

// Generate search terms for finding images
function generateSearchTerms(name: string, location: string, country: string, type: string): string[] {
  const terms = [
    name,
    `${name} ${location}`,
    `${name} ${country}`,
    `${name} ${location} ${country}`,
    `${name} landmark`,
    `${name} monument`,
    `${name} ${type.toLowerCase()}`,
  ]

  // Add variations without common words
  const cleanName = name.replace(/\b(the|of|and|in|at|on)\b/gi, "").trim()
  if (cleanName !== name) {
    terms.push(cleanName)
    terms.push(`${cleanName} ${location}`)
  }

  return [...new Set(terms)] // Remove duplicates
}

// Process raw monument data
export function processMonumentData(rawData: RawMonumentData[]): ProcessedMonumentData[] {
  return rawData.map((monument, index) => {
    const continent = CONTINENT_MAP[monument.country] || "Unknown"
    const type = detectMonumentType(monument.name, monument.description)
    const yearBuilt = extractYear(monument.description)
    const searchTerms = generateSearchTerms(monument.name, monument.city, monument.country, type)

    return {
      id: (index + 1).toString(),
      name: monument.name,
      location: monument.city,
      country: monument.country,
      continent,
      type,
      yearBuilt,
      height: 0, // To be filled manually or via API
      latitude: 0, // To be filled via geocoding API
      longitude: 0, // To be filled via geocoding API
      image: "", // To be filled with image URL
      description: monument.description,
      searchTerms,
    }
  })
}

// Save processed data to JSON
export function saveProcessedData(data: ProcessedMonumentData[], filename: string) {
  const outputPath = path.join(process.cwd(), "data", filename)

  // Ensure data directory exists
  const dataDir = path.dirname(outputPath)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))
  console.log(`✅ Processed data saved to ${outputPath}`)
}

// Generate CSV for manual review/editing
export function generateCSV(data: ProcessedMonumentData[], filename: string) {
  const headers = [
    "id",
    "name",
    "location",
    "country",
    "continent",
    "type",
    "yearBuilt",
    "height",
    "latitude",
    "longitude",
    "image",
    "photographer",
    "photographerUrl",
    "imageSource",
    "searchTerms",
  ]

  const csvContent = [
    headers.join(","),
    ...data.map((monument) =>
      [
        monument.id,
        `"${monument.name}"`,
        `"${monument.location}"`,
        `"${monument.country}"`,
        `"${monument.continent}"`,
        `"${monument.type}"`,
        monument.yearBuilt,
        monument.height,
        monument.latitude,
        monument.longitude,
        `"${monument.image}"`,
        `"${monument.photographer || ""}"`,
        `"${monument.photographerUrl || ""}"`,
        `"${monument.imageSource || ""}"`,
        `"${monument.searchTerms.join("; ")}"`,
      ].join(","),
    ),
  ].join("\n")

  const outputPath = path.join(process.cwd(), "data", filename)
  fs.writeFileSync(outputPath, csvContent)
  console.log(`✅ CSV saved to ${outputPath}`)
}
