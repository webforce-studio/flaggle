import fs from "fs"
import path from "path"
import fetch from "node-fetch"
import sharp from "sharp"
import { monuments } from "../lib/monument-database.js"

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

    // Get the source image URL (medium size for processing)
    const sourceUrl = monument.images.medium.jpg
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
      localImages,
    }
  } catch (error) {
    console.error(`❌ Error processing ${monument.name}:`, error)
    return null
  }
}

// Main function
async function main() {
  console.log("🏁 Starting monument image download...")

  const results = []

  for (const monument of monuments) {
    const result = await processMonumentImages(monument)
    if (result) {
      results.push(result)
    }
  }

  // Save the results to a JSON file for reference
  fs.writeFileSync("downloaded-images.json", JSON.stringify(results, null, 2))

  console.log("\n🎉 Processing complete!")
  console.log(`📊 Downloaded images for ${results.length} out of ${monuments.length} monuments`)
}

// Run the script
main().catch((error) => {
  console.error("❌ Fatal error:", error)
  process.exit(1)
})
