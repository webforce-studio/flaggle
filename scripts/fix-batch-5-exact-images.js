console.log("🔧 FIXING BATCH 5 - Getting EXACT images from planning document")

// API credentials
const UNSPLASH_ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// EXACT URLs from MONUMENT_IMAGE_PLANNING.md
const PLANNED_IMAGES = [
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
    plannedUrl: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
    expectedPhotoId: "IkUpS4Ntv8M",
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
    plannedUrl: "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
    expectedPhotoId: "yam1KMv0SgQ",
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
    plannedUrl: "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
    expectedPhotoId: "HwY9R6_YzgM",
  },
]

// Function to get EXACT image from Unsplash using photo ID
async function getExactUnsplashImage(monument) {
  try {
    console.log(`🎯 Getting EXACT image for: ${monument.name}`)
    console.log(`📋 Planned URL: ${monument.plannedUrl}`)
    console.log(`🔑 Photo ID: ${monument.expectedPhotoId}`)

    const response = await fetch(
      `https://api.unsplash.com/photos/${monument.expectedPhotoId}?client_id=${UNSPLASH_ACCESS_KEY}`,
    )

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    console.log(`✅ Found exact image: ${data.urls.regular}`)
    console.log(`📸 Photographer: ${data.user.name}`)

    // Trigger download event (required by Unsplash API Terms)
    await triggerUnsplashDownload(data.links.download_location)

    return {
      image: data.urls.regular,
      photographer: data.user.name,
      photographerUrl: `https://unsplash.com/@${data.user.username}`,
      imageSource: "Unsplash",
    }
  } catch (error) {
    console.error(`❌ Error getting exact image for ${monument.name}:`, error.message)
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

// Main processing function
async function fixBatch5Images() {
  console.log("🔧 Processing EXACT images from planning document")

  const results = []

  for (let i = 0; i < PLANNED_IMAGES.length; i++) {
    const monument = PLANNED_IMAGES[i]

    console.log(`\n[${i + 1}/${PLANNED_IMAGES.length}] Processing: ${monument.name}`)

    const imageData = await getExactUnsplashImage(monument)

    if (imageData) {
      console.log(`✅ Got EXACT image for ${monument.name}`)

      // Remove planning fields from final result
      const { plannedUrl, expectedPhotoId, ...monumentData } = monument

      results.push({
        ...monumentData,
        ...imageData,
      })

      console.log(`🔖 Attribution: Photo by ${imageData.photographer} on Unsplash`)
    } else {
      console.log(`❌ Failed to get exact image for ${monument.name}`)

      // Remove planning fields and add empty image data
      const { plannedUrl, expectedPhotoId, ...monumentData } = monument
      results.push({
        ...monumentData,
        image: "",
        photographer: "",
        photographerUrl: "",
        imageSource: "",
      })
    }

    // 3 second delay between requests
    if (i < PLANNED_IMAGES.length - 1) {
      console.log("⏱️ Waiting 3 seconds before next request...")
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log("\n🎉 EXACT image processing complete!")
  console.log("\n📋 Results with EXACT images:")

  results.forEach((monument) => {
    console.log(`\n${monument.name}:`)
    if (monument.image) {
      console.log(`  Image URL: ${monument.image}`)
      console.log(`  Photographer: ${monument.photographer}`)
      console.log(`  Attribution: Photo by ${monument.photographer} on Unsplash`)
    } else {
      console.log(`  No image found`)
    }
  })

  // Format for TypeScript code
  const formattedResults = results
    .map((monument) => {
      return `  {
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
    image: "${monument.image}",
    photographer: "${monument.photographer}",
    photographerUrl: "${monument.photographerUrl}",
    imageSource: "${monument.imageSource}",
    difficulty: "${monument.difficulty}",
    dayOfYear: ${monument.dayOfYear},
  }`
    })
    .join(",\n")

  console.log("\n📄 CORRECTED TypeScript code for monuments 5, 6, 7:")
  console.log(`// CORRECTED Batch 5 Results - Generated on ${new Date().toISOString()}`)
  console.log(formattedResults)

  console.log("\n🎯 CORRECTION SUMMARY:")
  console.log("✅ Got EXACT images from planning document URLs")
  console.log("📋 Next step: Replace monuments 5, 6, 7 in monument-database.ts")
  console.log("🔍 Verify: Images should match your planning document exactly")

  return results
}

// Run the correction
fixBatch5Images().catch(console.error)
