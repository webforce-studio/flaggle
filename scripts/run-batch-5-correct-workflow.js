console.log("🏛️ Starting BATCH 5 monument processing")
console.log("📊 Following MONUMENTLE_PROGRESS.md workflow")
console.log("🔄 Using MONUMENT_IMAGE_PLANNING.md URLs")

// API credentials
const UNSPLASH_ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"
const PEXELS_API_KEY = "E4W44vfuSCHAunN1mpco57EQJd2SJWDUV0vUat65wdevqde67gEF4Ukb"

// BATCH 5: Monuments 5, 6, 7 with URLs from MONUMENT_IMAGE_PLANNING.md
const CURRENT_BATCH = [
  {
    id: "5",
    name: "Colosseum",
    location: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "Amphitheater",
    yearBuilt: 80,
    height: 48,
    latitude: 41.8902,
    longitude: 12.4922,
    difficulty: "easy",
    dayOfYear: 5,
    // URL from MONUMENT_IMAGE_PLANNING.md
    plannedUrl: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
  },
  {
    id: "6",
    name: "Machu Picchu",
    location: "Cusco",
    country: "Peru",
    continent: "South America",
    type: "Archaeological Site",
    yearBuilt: 1450,
    height: 0,
    latitude: -13.1631,
    longitude: -72.545,
    difficulty: "medium",
    dayOfYear: 6,
    // URL from MONUMENT_IMAGE_PLANNING.md
    plannedUrl: "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
  },
  {
    id: "7",
    name: "Great Wall of China",
    location: "Beijing",
    country: "China",
    continent: "Asia",
    type: "Fortification",
    yearBuilt: -700,
    height: 8,
    latitude: 40.4319,
    longitude: 116.5704,
    difficulty: "medium",
    dayOfYear: 7,
    // URL from MONUMENT_IMAGE_PLANNING.md
    plannedUrl: "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
  },
]

// Function to detect platform from URL
function detectPlatform(url) {
  if (url.includes("unsplash.com")) return "unsplash"
  if (url.includes("pexels.com")) return "pexels"
  return "unknown"
}

// Function to extract Unsplash photo ID from URL
function extractUnsplashPhotoId(url) {
  // Pattern: https://unsplash.com/photos/description-PHOTO_ID
  const match = url.match(/unsplash\.com\/photos\/[^/]+-([a-zA-Z0-9_-]+)$/)
  return match ? match[1] : null
}

// Function to extract Pexels photo ID from URL
function extractPexelsPhotoId(url) {
  // Pattern: https://www.pexels.com/photo/description-12345/
  const match = url.match(/pexels\.com\/photo\/[^/]+-(\d+)\/?$/)
  return match ? match[1] : null
}

// Function to get image from specific Unsplash URL
async function getUnsplashImageFromUrl(monument) {
  try {
    const photoId = extractUnsplashPhotoId(monument.plannedUrl)
    if (!photoId) {
      console.log(`❌ Could not extract photo ID from URL: ${monument.plannedUrl}`)
      return null
    }

    console.log(`🔍 Fetching Unsplash photo ID: ${photoId}`)

    const response = await fetch(`https://api.unsplash.com/photos/${photoId}?client_id=${UNSPLASH_ACCESS_KEY}`)

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    // Trigger download event (required by Unsplash API Terms)
    await triggerUnsplashDownload(data.links.download_location)

    return {
      image: data.urls.regular,
      photographer: data.user.name,
      photographerUrl: data.user.links.html,
      imageSource: "Unsplash",
    }
  } catch (error) {
    console.error(`❌ Error fetching Unsplash image for ${monument.name}:`, error.message)
    return null
  }
}

// Function to get image from specific Pexels URL
async function getPexelsImageFromUrl(monument) {
  try {
    const photoId = extractPexelsPhotoId(monument.plannedUrl)
    if (!photoId) {
      console.log(`❌ Could not extract photo ID from URL: ${monument.plannedUrl}`)
      return null
    }

    console.log(`🔍 Fetching Pexels photo ID: ${photoId}`)

    const response = await fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    return {
      image: data.src.large2x || data.src.large,
      photographer: data.photographer,
      photographerUrl: data.photographer_url,
      imageSource: "Pexels",
    }
  } catch (error) {
    console.error(`❌ Error fetching Pexels image for ${monument.name}:`, error.message)
    return null
  }
}

// Function to trigger download event (required by Unsplash API)
async function triggerUnsplashDownload(downloadLocation) {
  try {
    const response = await fetch(downloadLocation, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Download trigger error: ${response.status}`)
    }

    return true
  } catch (error) {
    console.error("Error triggering download:", error.message)
    return false
  }
}

// Function to process monument with planned URL
async function processMonumentWithPlannedUrl(monument) {
  try {
    console.log(`🔍 Processing: ${monument.name}`)
    console.log(`🔗 Planned URL: ${monument.plannedUrl}`)

    const platform = detectPlatform(monument.plannedUrl)
    console.log(`📱 Platform: ${platform}`)

    let imageData = null

    if (platform === "unsplash") {
      imageData = await getUnsplashImageFromUrl(monument)
    } else if (platform === "pexels") {
      imageData = await getPexelsImageFromUrl(monument)
    } else {
      console.log(`❌ Unsupported platform: ${platform}`)
      return null
    }

    if (imageData) {
      console.log(`✅ Found image for ${monument.name} by ${imageData.photographer}`)
      console.log(`🔖 Attribution: Photo by ${imageData.photographer} on ${imageData.imageSource}`)

      return {
        ...monument,
        ...imageData,
      }
    } else {
      console.log(`❌ No image found for ${monument.name}`)
      return null
    }
  } catch (error) {
    console.error(`❌ Error processing ${monument.name}:`, error.message)
    return null
  }
}

// Main processing function
async function processBatch() {
  console.log(`📊 Processing batch of ${CURRENT_BATCH.length} monuments`)

  const results = []

  for (let i = 0; i < CURRENT_BATCH.length; i++) {
    const monument = CURRENT_BATCH[i]

    console.log(`\n[${i + 1}/${CURRENT_BATCH.length}] Processing: ${monument.name}`)

    const processedMonument = await processMonumentWithPlannedUrl(monument)

    if (processedMonument) {
      results.push(processedMonument)
    } else {
      console.log(`⚠️ Failed to process ${monument.name}`)
      // Add monument without image data
      results.push({
        ...monument,
        image: "",
        photographer: "",
        photographerUrl: "",
        imageSource: "",
      })
    }

    // 3 second delay between requests
    if (i < CURRENT_BATCH.length - 1) {
      console.log("⏱️ Waiting 3 seconds before next request...")
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log("\n🎉 Batch 5 processing complete!")
  console.log("\n📋 Results:")

  results.forEach((monument) => {
    console.log(`\n${monument.name}:`)
    if (monument.image) {
      console.log(`  Image URL: ${monument.image}`)
      console.log(`  Photographer: ${monument.photographer}`)
      console.log(`  Attribution: Photo by ${monument.photographer} on ${monument.imageSource}`)
    } else {
      console.log(`  No image found`)
    }
  })

  const tsCode = `
// Batch 5 Results - Generated on ${new Date().toISOString()}
export const BATCH_5_MONUMENTS = ${JSON.stringify(results, null, 2)};
  `

  console.log("\n📄 TypeScript code for BATCH 5:")
  console.log(tsCode)

  console.log("\n🎯 BATCH 5 SUMMARY:")
  console.log("✅ Monuments processed: 3")
  console.log("📈 Total monuments: 7 (4 existing + 3 new)")
  console.log("🎯 Phase 1 target: 50 monuments")
  console.log("📋 Next step: Update monument-database.ts with results")
  console.log("🔄 Then: Create Batch 6 with more URLs from planning document")

  return results
}

// Run the processor
processBatch().catch(console.error)
