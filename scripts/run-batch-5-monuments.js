console.log("🏛️ BATCH 5 - Processing Monuments 5, 6, 7")
console.log("📋 Using MONUMENT_IMAGE_PLANNING.md URLs")
console.log("🔄 Following MONUMENTLE_PROGRESS.md workflow")

// API Keys
const UNSPLASH_ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"
const PEXELS_API_KEY = "E4W44vfuSCHAunN1mpco57EQJd2SJWDUV0vUat65wdevqde67gEF4Ukb"

// Monument data from MONUMENT_IMAGE_PLANNING.md
const BATCH_5_MONUMENTS = [
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
    url: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
    difficulty: "easy",
    dayOfYear: 5,
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
    url: "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
    difficulty: "medium",
    dayOfYear: 6,
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
    url: "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
    difficulty: "medium",
    dayOfYear: 7,
  },
]

/**
 * Detects platform from URL
 */
function detectPlatform(url) {
  if (url.includes("unsplash.com")) return "unsplash"
  if (url.includes("pexels.com")) return "pexels"
  return "unknown"
}

/**
 * Extracts Unsplash photo ID from URL
 */
function extractUnsplashId(url) {
  console.log(`🔍 Parsing Unsplash URL: ${url}`)

  // Pattern for URLs like: https://unsplash.com/photos/description-PHOTO_ID
  const match = url.match(/unsplash\.com\/photos\/[^/]+-([a-zA-Z0-9_-]+)$/)
  if (match) {
    console.log(`✅ Extracted ID: ${match[1]}`)
    return match[1]
  }

  console.log(`❌ Could not extract ID from URL`)
  return null
}

/**
 * Extracts Pexels photo ID from URL
 */
function extractPexelsId(url) {
  const match = url.match(/pexels\.com\/photo\/[^/]+-(\d+)\/?$/)
  return match ? match[1] : null
}

/**
 * Processes Unsplash image
 */
async function processUnsplashImage(photoId) {
  try {
    console.log(`🔍 Fetching Unsplash photo: ${photoId}`)

    const photoUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${UNSPLASH_ACCESS_KEY}`
    const response = await fetch(photoUrl)

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`)
    }

    const data = await response.json()

    // Trigger download (required by Unsplash API)
    const downloadUrl = `https://api.unsplash.com/photos/${photoId}/download?client_id=${UNSPLASH_ACCESS_KEY}`
    await fetch(downloadUrl)

    return {
      image: data.urls.regular,
      photographer: data.user.name,
      photographerUrl: `https://unsplash.com/@${data.user.username}`,
      imageSource: "Unsplash",
    }
  } catch (error) {
    console.error(`❌ Error processing Unsplash image:`, error.message)
    return null
  }
}

/**
 * Processes Pexels image
 */
async function processPexelsImage(photoId) {
  try {
    console.log(`🔍 Fetching Pexels photo: ${photoId}`)

    const photoUrl = `https://api.pexels.com/v1/photos/${photoId}`
    const response = await fetch(photoUrl, {
      headers: { Authorization: PEXELS_API_KEY },
    })

    if (!response.ok) {
      throw new Error(`Pexels API error: ${response.status}`)
    }

    const data = await response.json()

    return {
      image: data.src.large2x || data.src.large,
      photographer: data.photographer,
      photographerUrl: data.photographer_url,
      imageSource: "Pexels",
    }
  } catch (error) {
    console.error(`❌ Error processing Pexels image:`, error.message)
    return null
  }
}

/**
 * Processes a single monument
 */
async function processMonument(monument, index) {
  console.log(`\n[${index + 1}/3] Processing: ${monument.name}`)
  console.log(`🔗 URL: ${monument.url}`)

  const platform = detectPlatform(monument.url)
  console.log(`📱 Platform: ${platform}`)

  let imageData = null

  if (platform === "unsplash") {
    const photoId = extractUnsplashId(monument.url)
    if (photoId) {
      imageData = await processUnsplashImage(photoId)
    }
  } else if (platform === "pexels") {
    const photoId = extractPexelsId(monument.url)
    if (photoId) {
      imageData = await processPexelsImage(photoId)
    }
  }

  if (imageData) {
    console.log(`✅ Success! Photo by ${imageData.photographer} on ${imageData.imageSource}`)
    return {
      ...monument,
      ...imageData,
    }
  } else {
    console.log(`❌ Failed to get image data`)
    return monument
  }
}

/**
 * Main batch processing function
 */
async function processBatch5() {
  console.log("\n🚀 Starting Batch 5 processing...")

  const results = []

  for (let i = 0; i < BATCH_5_MONUMENTS.length; i++) {
    const result = await processMonument(BATCH_5_MONUMENTS[i], i)
    results.push(result)

    // Rate limiting between requests
    if (i < BATCH_5_MONUMENTS.length - 1) {
      console.log("⏱️ Waiting 3 seconds...")
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log("\n🎉 Batch 5 processing complete!")
  console.log("\n📊 RESULTS:")

  results.forEach((monument, index) => {
    console.log(`\n${index + 1}. ${monument.name}`)
    if (monument.image) {
      console.log(`   ✅ Platform: ${monument.imageSource}`)
      console.log(`   📸 Photographer: ${monument.photographer}`)
      console.log(`   🔗 Image URL: ${monument.image}`)
    } else {
      console.log(`   ❌ No image data`)
    }
  })

  console.log("\n📄 TypeScript code for monument-database.ts:")
  console.log("// Add these monuments to MONUMENTS_DATABASE array:")

  results.forEach((monument, index) => {
    console.log("  {")
    console.log(`    id: "${monument.id}",`)
    console.log(`    name: "${monument.name}",`)
    console.log(`    location: "${monument.location}",`)
    console.log(`    country: "${monument.country}",`)
    console.log(`    continent: "${monument.continent}",`)
    console.log(`    type: "${monument.type}",`)
    console.log(`    yearBuilt: ${monument.yearBuilt},`)
    console.log(`    height: ${monument.height},`)
    console.log(`    latitude: ${monument.latitude},`)
    console.log(`    longitude: ${monument.longitude},`)
    console.log(`    image: "${monument.image || ""}",`)
    console.log(`    photographer: "${monument.photographer || ""}",`)
    console.log(`    photographerUrl: "${monument.photographerUrl || ""}",`)
    console.log(`    imageSource: "${monument.imageSource || ""}",`)
    console.log(`    difficulty: "${monument.difficulty}",`)
    console.log(`    dayOfYear: ${monument.dayOfYear},`)
    console.log(index < results.length - 1 ? "  }," : "  }")
  })

  console.log("\n🎯 BATCH 5 SUMMARY:")
  console.log("✅ Monuments processed: 3")
  console.log("📈 Total monuments: 7 (4 existing + 3 new)")
  console.log("🎯 Phase 1 target: 50 monuments")
  console.log("📋 Next step: Update monument-database.ts")
  console.log("🔄 Then: Create Batch 6 with more URLs")

  return results
}

// Execute the batch processing
processBatch5()
