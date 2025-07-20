console.log("🔧 FIXING URL EXTRACTION - Using proper logic for descriptive URLs")

const ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// URLs from your planning document with proper extraction
const MONUMENTS_TO_FIX = [
  {
    id: "5",
    name: "Colosseum",
    unsplashUrl: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
    // Extract: IkUpS4Ntv8M (everything after the last dash)
  },
  {
    id: "6",
    name: "Machu Picchu",
    unsplashUrl: "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
    // Extract: yam1KMv0SgQ (everything after the last dash)
  },
  {
    id: "7",
    name: "Great Wall of China",
    unsplashUrl: "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
    // Extract: HwY9R6_YzgM (everything after the last dash)
  },
]

// PROPER extraction function - handles descriptive URLs correctly
function extractPhotoIdFromDescriptiveUrl(url) {
  console.log(`🔍 Extracting from: ${url}`)

  // Remove the base URL part
  const pathPart = url.replace("https://unsplash.com/photos/", "")
  console.log(`📋 Path part: ${pathPart}`)

  // The photo ID is ALWAYS the last part after the final dash
  // Example: "a-very-large-building-with-a-sky-background-IkUpS4Ntv8M"
  // Result: "IkUpS4Ntv8M"
  const parts = pathPart.split("-")
  const photoId = parts[parts.length - 1]

  console.log(`🎯 Extracted photo ID: ${photoId}`)
  return photoId
}

async function processMonumentUpdate(monument, index) {
  console.log(`\n[${index + 1}/3] Processing: ${monument.name}`)

  // Extract photo ID using PROPER logic
  const photoId = extractPhotoIdFromDescriptiveUrl(monument.unsplashUrl)

  if (!photoId) {
    console.log(`❌ Could not extract photo ID from ${monument.unsplashUrl}`)
    return null
  }

  try {
    console.log(`🔍 Fetching details for photo ID: ${photoId}`)

    // Get photo details from Unsplash API (same as working script)
    const photoUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${ACCESS_KEY}`
    const photoResponse = await fetch(photoUrl)

    if (!photoResponse.ok) {
      throw new Error(`API error: ${photoResponse.status} ${photoResponse.statusText}`)
    }

    const photoData = await photoResponse.json()

    if (photoData && photoData.urls) {
      // Trigger download event (required by Unsplash API)
      const downloadUrl = `https://api.unsplash.com/photos/${photoId}/download?client_id=${ACCESS_KEY}`
      await fetch(downloadUrl)

      const result = {
        id: monument.id,
        name: monument.name,
        image: photoData.urls.regular,
        photographer: photoData.user.name,
        photographerUrl: `https://unsplash.com/@${photoData.user.username}`,
        imageSource: "Unsplash",
      }

      console.log(`✅ Got EXACT image for ${monument.name} by ${photoData.user.name}`)
      console.log(`🔖 Attribution: Photo by ${photoData.user.name} on Unsplash`)
      console.log(`🖼️ Image URL: ${photoData.urls.regular}`)

      return result
    } else {
      console.log(`❌ Failed to get image details for ${monument.name}`)
      return null
    }
  } catch (error) {
    console.log(`❌ Error processing ${monument.name}: ${error.message}`)
    return null
  }
}

async function processUpdates() {
  console.log("🏛️ Starting EXACT monument image updates using PROPER extraction")

  const results = []

  for (let i = 0; i < MONUMENTS_TO_FIX.length; i++) {
    const result = await processMonumentUpdate(MONUMENTS_TO_FIX[i], i)
    if (result) results.push(result)

    if (i < MONUMENTS_TO_FIX.length - 1) {
      console.log("⏱️ Waiting 3 seconds before next request...")
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log("\n🎉 EXACT monument updates complete!")
  console.log("\n📋 Results with EXACT images:")

  results.forEach((monument) => {
    console.log(`\n${monument.name}:`)
    console.log(`  Image URL: ${monument.image}`)
    console.log(`  Photographer: ${monument.photographer}`)
    console.log(`  Attribution: Photo by ${monument.photographer} on Unsplash`)
  })

  console.log("\n📄 TypeScript code for database updates:")

  results.forEach((monument) => {
    console.log(`
// Update for ${monument.name} (ID: ${monument.id}):
image: "${monument.image}",
photographer: "${monument.photographer}",
photographerUrl: "${monument.photographerUrl}",
imageSource: "${monument.imageSource}",
`)
  })

  return results
}

processUpdates().catch(console.error)
