import fs from "fs"
import path from "path"
import fetch from "node-fetch"
import sharp from "sharp"

// Configuration
const CONFIG = {
  outputDir: "public/images/monuments",
  imageSizes: {
    thumbnail: { width: 300, height: 200, quality: 80 },
    medium: { width: 800, height: 600, quality: 85 },
    large: { width: 1200, height: 900, quality: 90 },
  },
  imageFormats: ["webp", "jpg"],
}

// New monuments to add (missing from our current database)
const NEW_MONUMENTS = [
  {
    id: 42,
    name: "Sagrada Familia",
    location: "Barcelona",
    country: "Spain",
    continent: "Europe",
    type: "Church",
    kebabId: "sagrada-familia",
    imageUrl: "https://images.pexels.com/photos/11773991/pexels-photo-11773991.jpeg",
  },
  {
    id: 43,
    name: "Pantheon",
    location: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "Temple",
    kebabId: "pantheon",
    imageUrl: "https://images.unsplash.com/photo-1614354987493-a010f414d0d1",
  },
  {
    id: 44,
    name: "Trevi Fountain",
    location: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "Fountain",
    kebabId: "trevi-fountain",
    imageUrl: "https://images.unsplash.com/photo-1525874684015-58379d421a52",
  },
  {
    id: 45,
    name: "St. Peter's Basilica",
    location: "Vatican City",
    country: "Vatican",
    continent: "Europe",
    type: "Church",
    kebabId: "st-peters-basilica",
    imageUrl: "https://images.pexels.com/photos/1207962/pexels-photo-1207962.jpeg",
  },
  {
    id: 46,
    name: "Arc de Triomphe",
    location: "Paris",
    country: "France",
    continent: "Europe",
    type: "Monument",
    kebabId: "arc-de-triomphe",
    imageUrl:
      "https://images.pexels.com/photos/17064527/pexels-photo-17064527/free-photo-of-arc-de-triomphe-in-paris-on-a-sunny-day.jpeg",
  },
  {
    id: 47,
    name: "Pompeii",
    location: "Naples",
    country: "Italy",
    continent: "Europe",
    type: "Archaeological Site",
    kebabId: "pompeii",
    imageUrl: "https://images.unsplash.com/photo-1686252183235-67dfafa22f60",
  },
  {
    id: 48,
    name: "Santorini",
    location: "Cyclades",
    country: "Greece",
    continent: "Europe",
    type: "Island",
    kebabId: "santorini",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb",
  },
  {
    id: 49,
    name: "Duomo di Milano",
    location: "Milan",
    country: "Italy",
    continent: "Europe",
    type: "Cathedral",
    kebabId: "duomo-di-milano",
    imageUrl: "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8",
  },
  {
    id: 50,
    name: "Prague Castle",
    location: "Prague",
    country: "Czech Republic",
    continent: "Europe",
    type: "Castle",
    kebabId: "prague-castle",
    imageUrl: "https://images.unsplash.com/photo-1654084747154-0b21cfd57aa0",
  },
  {
    id: 51,
    name: "Charles Bridge",
    location: "Prague",
    country: "Czech Republic",
    continent: "Europe",
    type: "Bridge",
    kebabId: "charles-bridge",
    imageUrl:
      "https://images.pexels.com/photos/19579405/pexels-photo-19579405/free-photo-of-view-of-the-charles-bridge-over-the-vltava-river-in-prague-czech-republic.jpeg",
  },
  {
    id: 52,
    name: "Bran Castle",
    location: "Transylvania",
    country: "Romania",
    continent: "Europe",
    type: "Castle",
    kebabId: "bran-castle",
    imageUrl: "https://images.unsplash.com/photo-1612118231574-3dad97d26ecf",
  },
  {
    id: 53,
    name: "Edinburgh Castle",
    location: "Edinburgh",
    country: "Scotland",
    continent: "Europe",
    type: "Castle",
    kebabId: "edinburgh-castle",
    imageUrl:
      "https://images.pexels.com/photos/21235066/pexels-photo-21235066/free-photo-of-edinburgh-castle-in-scotland.jpeg",
  },
  {
    id: 54,
    name: "Guggenheim Museum",
    location: "Bilbao",
    country: "Spain",
    continent: "Europe",
    type: "Museum",
    kebabId: "guggenheim-museum",
    imageUrl: "https://images.unsplash.com/photo-1580693793281-87824f53e3fd",
  },
]

// Ensure directories exist
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true })
}

// Download and process a single monument's images
async function processMonumentImages(monument) {
  try {
    console.log(`\n🏛️  Processing: ${monument.name} (ID: ${monument.id})`)

    // Create directory for this monument
    const monumentDir = path.join(CONFIG.outputDir, monument.kebabId)
    if (!fs.existsSync(monumentDir)) {
      fs.mkdirSync(monumentDir, { recursive: true })
    }

    // Get the source image URL
    const sourceUrl = monument.imageUrl
    console.log(`🔗 Fetching image from: ${sourceUrl}`)

    // Download the image
    const response = await fetch(sourceUrl)
    if (!response.ok) {
      console.log(`⚠️ Failed to fetch image: ${response.status} ${response.statusText}`)
      return null
    }

    const imageBuffer = Buffer.from(await response.arrayBuffer())
    console.log(`✅ Downloaded image: ${(imageBuffer.length / 1024).toFixed(2)} KB`)

    // Process images in different sizes and formats
    const localImages = {}

    for (const [sizeName, config] of Object.entries(CONFIG.imageSizes)) {
      localImages[sizeName] = {}

      for (const format of CONFIG.imageFormats) {
        const filename = `${sizeName}.${format}`
        const outputPath = path.join(monumentDir, filename)
        const relativePath = `/images/monuments/${monument.kebabId}/${filename}`

        console.log(`🖼️  Creating ${sizeName} ${format} image...`)

        await sharp(imageBuffer)
          .resize(config.width, config.height, {
            fit: "cover",
            position: "center",
          })
          .toFormat(format, { quality: config.quality })
          .toFile(outputPath)

        localImages[sizeName][format] = relativePath
        console.log(`✅ Saved: ${relativePath}`)
      }
    }

    return {
      id: monument.id,
      name: monument.name,
      kebabId: monument.kebabId,
      localImages,
    }
  } catch (error) {
    console.error(`❌ Error processing ${monument.name}:`, error)
    return null
  }
}

// Main function
async function main() {
  console.log("🏁 Starting missing monument image download...")
  console.log(`📋 Processing ${NEW_MONUMENTS.length} missing monuments`)

  const results = []

  for (const monument of NEW_MONUMENTS) {
    const result = await processMonumentImages(monument)
    if (result) {
      results.push(result)
    }

    // Add a small delay between downloads to be respectful
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  // Save the results to a JSON file for reference
  const outputData = {
    timestamp: new Date().toISOString(),
    processed: results.length,
    total: NEW_MONUMENTS.length,
    monuments: results,
  }

  fs.writeFileSync("missing-monuments-download-results.json", JSON.stringify(outputData, null, 2))

  console.log("\n🎉 Processing complete!")
  console.log(`📊 Downloaded images for ${results.length} out of ${NEW_MONUMENTS.length} missing monuments`)
  console.log(`📁 Results saved to: missing-monuments-download-results.json`)

  // Print summary
  console.log("\n📋 Summary of processed monuments:")
  results.forEach((result) => {
    console.log(`  ✅ ${result.name} (${result.kebabId})`)
  })
}

// Run the script
main().catch((error) => {
  console.error("❌ Fatal error:", error)
  process.exit(1)
})
