import fs from "fs"
import { monuments } from "../lib/monument-database.js"

// Configuration
const CONFIG = {
  downloadedImagesJson: "downloaded-images.json",
  outputDatabase: "lib/monument-database-with-local.ts",
}

// Main function
async function main() {
  console.log("🏁 Starting database update...")

  // Read the downloaded images data
  if (!fs.existsSync(CONFIG.downloadedImagesJson)) {
    console.error(`❌ Downloaded images file not found: ${CONFIG.downloadedImagesJson}`)
    console.error("❌ Run download-monument-images.js first")
    process.exit(1)
  }

  const downloadedData = JSON.parse(fs.readFileSync(CONFIG.downloadedImagesJson, "utf-8"))
  console.log(`✅ Loaded data for ${downloadedData.length} monuments`)

  // Create a lookup map for quick access
  const localImagesMap = new Map()
  downloadedData.forEach((item) => {
    localImagesMap.set(item.id, item.localImages)
  })

  // Update the monuments with local paths
  const updatedMonuments = monuments.map((monument) => {
    const localImages = localImagesMap.get(monument.id)

    if (!localImages) {
      console.log(`⚠️ No local images found for: ${monument.name} (ID: ${monument.id})`)
      return monument
    }

    // Create the new image structure with both local and remote URLs
    const images = {
      thumbnail: {
        local: {
          webp: localImages.thumbnail.webp,
          jpg: localImages.thumbnail.jpg,
        },
        remote: {
          webp: monument.images.thumbnail.webp,
          jpg: monument.images.thumbnail.jpg,
        },
      },
      medium: {
        local: {
          webp: localImages.medium.webp,
          jpg: localImages.medium.jpg,
        },
        remote: {
          webp: monument.images.medium.webp,
          jpg: monument.images.medium.jpg,
        },
      },
      large: {
        local: {
          webp: localImages.large.webp,
          jpg: localImages.large.jpg,
        },
        remote: {
          webp: monument.images.large.webp,
          jpg: monument.images.large.jpg,
        },
      },
    }

    return {
      ...monument,
      images,
    }
  })

  // Generate the TypeScript file
  const tsContent = `// Auto-generated monument database with local and remote URLs
// Last updated: ${new Date().toISOString()}

import type { Monument } from './monument-types';

export const monuments: Monument[] = ${JSON.stringify(updatedMonuments, null, 2)};

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

export default monuments;
`

  fs.writeFileSync(CONFIG.outputDatabase, tsContent)
  console.log(`✅ Updated database written to ${CONFIG.outputDatabase}`)
  console.log("🎉 Database update complete!")
}

// Run the script
main().catch((error) => {
  console.error("❌ Fatal error:", error)
  process.exit(1)
})
