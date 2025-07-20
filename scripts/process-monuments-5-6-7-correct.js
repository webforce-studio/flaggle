console.log("🏛️ Starting SPECIFIC MONUMENT image updates")
console.log("📊 Processing monuments 5, 6, and 7")

const ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// Monuments with their exact URLs from planning document
const MONUMENTS_TO_UPDATE = [
  {
    id: "5",
    name: "Colosseum",
    unsplashUrl: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
  },
  {
    id: "6",
    name: "Machu Picchu",
    unsplashUrl: "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
  },
  {
    id: "7",
    name: "Great Wall of China",
    unsplashUrl: "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
  },
]

// Extract photo ID from URL - handles descriptive URLs correctly
function extractPhotoId(url) {
  // Remove the base URL part
  const pathPart = url.replace("https://unsplash.com/photos/", "")

  // The photo ID is the last part after the final dash
  const parts = pathPart.split("-")
  const photoId = parts[parts.length - 1]

  console.log(`🔍 Extracted photo ID: ${photoId} from URL`)
  return photoId
}

async function processMonumentUpdate(monument, index) {
  console.log(`\n[${index + 1}/3] Updating: ${monument.name}`)

  // Extract photo ID from URL
  const photoId = extractPhotoId(monument.unsplashUrl)

  if (!photoId) {
    console.log(`❌ Could not extract photo ID for ${monument.name}`)
    return null
  }

  console.log(`🔍 Fetching details for photo ID: ${photoId}`)

  try {
    // Get photo details from Unsplash API
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

      console.log(`✅ Updated image for ${monument.name} by ${photoData.user.name}`)
      console.log(`🔖 Attribution: Photo by ${photoData.user.name} on Unsplash`)

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
  const results = []

  for (let i = 0; i < MONUMENTS_TO_UPDATE.length; i++) {
    const result = await processMonumentUpdate(MONUMENTS_TO_UPDATE[i], i)
    if (result) results.push(result)

    if (i < MONUMENTS_TO_UPDATE.length - 1) {
      console.log("⏱️ Waiting 3 seconds before next request...")
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log("\n🎉 Monument updates complete!")
  console.log("\n📋 Results:")

  results.forEach((monument) => {
    console.log(`\n${monument.name}:`)
    console.log(`  Image URL: ${monument.image}`)
    console.log(`  Photographer: ${monument.photographer}`)
    console.log(`  Attribution: Photo by ${monument.photographer} on Unsplash`)
  })

  console.log("\n📄 TypeScript code for updates:")

  results.forEach((monument) => {
    console.log(`
// Update for ${monument.name}:
// Find the monument with id: "${monument.id}" and update these properties:
image: "${monument.image}",
photographer: "${monument.photographer}",
photographerUrl: "${monument.photographerUrl}",
imageSource: "${monument.imageSource}",
`)
  })
}

processUpdates().catch(console.error)
