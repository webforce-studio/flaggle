import fs from "fs"
import path from "path"
import { marked } from "marked"
import fetch from "node-fetch"
import sharp from "sharp"

// Configuration
const CONFIG = {
  inputFile: "MONUMENT_IMAGE_PLANNING.md",
  outputDir: "public/images/monuments",
  outputDatabase: "lib/monument-database.ts",
  tempJsonFile: "processed-monuments.json",
  imageSizes: {
    thumbnail: { width: 300, height: 200, quality: 80 },
    medium: { width: 800, height: 600, quality: 85 },
    large: { width: 1200, height: 900, quality: 90 },
  },
  imageFormats: ["webp", "jpg"],
}

// Ensure directories exist
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true })
}

// Utility to create kebab-case IDs
function toKebabCase(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
}

// Extract photo ID from Unsplash URL
function extractUnsplashPhotoId(url) {
  if (!url) return null

  // Handle URLs like https://unsplash.com/photos/photo-name-PHOTOID
  const match = url.match(/unsplash\.com\/photos\/[^-]+-([a-zA-Z0-9_-]+)$/)
  if (match && match[1]) return match[1]

  // Handle URLs that end with the ID directly
  const directMatch = url.match(/unsplash\.com\/photos\/([a-zA-Z0-9_-]+)$/)
  if (directMatch && directMatch[1]) return directMatch[1]

  return null
}

// Extract photo ID from Pexels URL
function extractPexelsPhotoId(url) {
  if (!url) return null
  const match = url.match(/pexels\.com\/photo\/[^/]+-(\d+)/)
  return match ? match[1] : null
}

// Parse the planning document to extract monument data
async function parseMonumentPlanningDoc() {
  console.log("📄 Reading planning document...")

  const mdContent = fs.readFileSync(CONFIG.inputFile, "utf-8")
  const tokens = marked.lexer(mdContent)

  const monuments = []
  let currentContinent = ""
  let inTable = false

  for (const token of tokens) {
    // Track continent sections
    if (token.type === "heading" && token.depth === 2) {
      const heading = token.text
      if (heading.includes("Europe")) currentContinent = "Europe"
      else if (heading.includes("Asia")) currentContinent = "Asia"
      else if (heading.includes("North America")) currentContinent = "North America"
      else if (heading.includes("South America")) currentContinent = "South America"
      else if (heading.includes("Africa")) currentContinent = "Africa"
      else if (heading.includes("Oceania")) currentContinent = "Oceania"
      else if (heading.includes("Middle East")) currentContinent = "Middle East"
    }

    // Process tables
    if (token.type === "table") {
      inTable = true

      // Skip header row
      for (let i = 1; i < token.rows.length; i++) {
        const row = token.rows[i]
        const [id, name, location, country, type, imageUrl] = row

        // Only process rows with image URLs
        if (imageUrl && imageUrl !== "") {
          monuments.push({
            id: Number.parseInt(id, 10),
            name,
            location,
            country,
            continent: currentContinent,
            type,
            imageUrl,
            kebabId: toKebabCase(name),
          })
        }
      }

      inTable = false
    }
  }

  console.log(`✅ Found ${monuments.length} monuments with image URLs`)
  return monuments
}

// Process a single monument
async function processMonument(monument) {
  try {
    console.log(`\n🏛️  Processing: ${monument.name} (ID: ${monument.id})`)

    // Create directory for this monument
    const monumentDir = path.join(CONFIG.outputDir, monument.kebabId)
    if (!fs.existsSync(monumentDir)) {
      fs.mkdirSync(monumentDir, { recursive: true })
    }

    // Determine image source and extract ID
    let photoId = null
    let imageSource = null

    if (monument.imageUrl.includes("unsplash.com")) {
      photoId = extractUnsplashPhotoId(monument.imageUrl)
      imageSource = "Unsplash"
      console.log(`📸 Unsplash photo ID: ${photoId}`)
    } else if (monument.imageUrl.includes("pexels.com")) {
      photoId = extractPexelsPhotoId(monument.imageUrl)
      imageSource = "Pexels"
      console.log(`📸 Pexels photo ID: ${photoId}`)
    } else {
      console.log(`⚠️ Unsupported image source: ${monument.imageUrl}`)
      return null
    }

    if (!photoId) {
      console.log(`⚠️ Could not extract photo ID from URL: ${monument.imageUrl}`)
      return null
    }

    // Fetch image and metadata
    let imageBuffer
    let attribution = {}

    if (imageSource === "Unsplash") {
      // For demo purposes, we'll use a direct approach
      // In production, you should use the Unsplash API with proper authentication
      const directUrl = `https://source.unsplash.com/${photoId}`
      console.log(`🔗 Fetching image from: ${directUrl}`)

      const response = await fetch(directUrl)
      if (!response.ok) {
        console.log(`⚠️ Failed to fetch image: ${response.status} ${response.statusText}`)
        return null
      }

      imageBuffer = Buffer.from(await response.arrayBuffer())

      // In a real implementation, fetch attribution from Unsplash API
      attribution = {
        source: "Unsplash",
        photoId,
        url: monument.imageUrl,
        // These would come from the API in production
        photographer: "Unknown (Demo)",
        photographerUrl: "https://unsplash.com",
      }
    } else if (imageSource === "Pexels") {
      // Similar approach for Pexels
      // In production, use the Pexels API
      const directUrl = `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg`
      console.log(`🔗 Fetching image from: ${directUrl}`)

      const response = await fetch(directUrl)
      if (!response.ok) {
        console.log(`⚠️ Failed to fetch image: ${response.status} ${response.statusText}`)
        return null
      }

      imageBuffer = Buffer.from(await response.arrayBuffer())

      attribution = {
        source: "Pexels",
        photoId,
        url: monument.imageUrl,
        photographer: "Unknown (Demo)",
        photographerUrl: "https://www.pexels.com",
      }
    }

    // Process images in different sizes and formats
    const images = {}

    for (const [sizeName, config] of Object.entries(CONFIG.imageSizes)) {
      images[sizeName] = {}

      for (const format of CONFIG.imageFormats) {
        const filename = `${sizeName}.${format}`
        const outputPath = path.join(monumentDir, filename)

        console.log(`🖼️  Creating ${sizeName} ${format} image...`)

        await sharp(imageBuffer)
          .resize(config.width, config.height, {
            fit: "cover",
            position: "center",
          })
          .toFormat(format, { quality: config.quality })
          .toFile(outputPath)

        images[sizeName][format] = `/images/monuments/${monument.kebabId}/${filename}`
      }
    }

    // Add additional monument data
    // In production, you would fetch this from APIs or databases
    const additionalData = await getMonumentData(monument)

    return {
      ...monument,
      ...additionalData,
      images,
      attribution,
    }
  } catch (error) {
    console.error(`❌ Error processing ${monument.name}:`, error)
    return null
  }
}

// Get additional monument data (in production, this would use APIs)
async function getMonumentData(monument) {
  // This is a simplified version - in production you would:
  // 1. Use geocoding APIs to get coordinates
  // 2. Use Wikipedia or other APIs to get historical data
  // 3. Use cultural heritage databases for additional information

  // For now, we'll return some placeholder data based on the monument
  const data = {
    description: `The ${monument.name} is a famous ${monument.type.toLowerCase()} located in ${monument.location}, ${monument.country}.`,
    yearBuilt: null,
    height: null,
    latitude: null,
    longitude: null,
  }

  // Add some specific data for well-known monuments
  switch (monument.kebabId) {
    case "eiffel-tower":
      data.yearBuilt = 1889
      data.height = 330
      data.latitude = 48.8584
      data.longitude = 2.2945
      data.description =
        "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
      break
    case "taj-mahal":
      data.yearBuilt = 1653
      data.height = 73
      data.latitude = 27.1751
      data.longitude = 78.0421
      data.description =
        "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
      break
    case "statue-of-liberty":
      data.yearBuilt = 1886
      data.height = 93
      data.latitude = 40.6892
      data.longitude = -74.0445
      data.description =
        "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City. The copper statue was a gift from the people of France to the people of the United States."
      break
    // Add more as needed
  }

  return data
}

// Generate TypeScript database file
function generateTypeScriptDatabase(monuments) {
  console.log("\n📝 Generating TypeScript database...")

  const tsContent = `// Auto-generated monument database
// Last updated: ${new Date().toISOString()}

export interface Monument {
  id: number;
  name: string;
  location: string;
  country: string;
  continent: string;
  type: string;
  description: string;
  yearBuilt: number | null;
  height: number | null;
  latitude: number | null;
  longitude: number | null;
  images: {
    thumbnail: { webp: string; jpg: string };
    medium: { webp: string; jpg: string };
    large: { webp: string; jpg: string };
  };
  attribution: {
    source: string;
    photoId: string;
    url: string;
    photographer: string;
    photographerUrl: string;
  };
}

export const monuments: Monument[] = ${JSON.stringify(monuments, null, 2)};

export const getMonumentById = (id: number): Monument | undefined => {
  return monuments.find(monument => monument.id === id);
};

export const getMonumentByName = (name: string): Monument | undefined => {
  return monuments.find(monument => monument.name.toLowerCase() === name.toLowerCase());
};

export const getMonumentsByContinent = (continent: string): Monument[] => {
  return monuments.filter(monument => monument.continent === continent);
};

export const getMonumentsByCountry = (country: string): Monument[] => {
  return monuments.filter(monument => monument.country === country);
};

export const getMonumentsByType = (type: string): Monument[] => {
  return monuments.filter(monument => monument.type === type);
};
`

  fs.writeFileSync(CONFIG.outputDatabase, tsContent)
  console.log(`✅ Database written to ${CONFIG.outputDatabase}`)
}

// Main function
async function main() {
  console.log("🏁 Starting monument processing...")

  // Parse planning document
  const monumentsWithUrls = await parseMonumentPlanningDoc()

  // Process monuments (limit for demo)
  const processedMonuments = []
  const limit = monumentsWithUrls.length // Process all

  for (let i = 0; i < Math.min(limit, monumentsWithUrls.length); i++) {
    const result = await processMonument(monumentsWithUrls[i])
    if (result) {
      processedMonuments.push(result)
    }
  }

  // Save intermediate JSON for inspection
  fs.writeFileSync(CONFIG.tempJsonFile, JSON.stringify(processedMonuments, null, 2))
  console.log(`✅ Saved ${processedMonuments.length} processed monuments to ${CONFIG.tempJsonFile}`)

  // Generate TypeScript database
  generateTypeScriptDatabase(processedMonuments)

  console.log("\n🎉 Processing complete!")
  console.log(`📊 Processed ${processedMonuments.length} out of ${monumentsWithUrls.length} monuments with URLs`)
  console.log("🔍 Check the output files for results")
}

// Run the script
main().catch((error) => {
  console.error("❌ Fatal error:", error)
  process.exit(1)
})
