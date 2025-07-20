// CORRECTED SCRIPT: Fetch EXACT images from planning document URLs
const UNSPLASH_ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// Planning document monuments with EXACT Unsplash URLs
const MONUMENTS_WITH_EXACT_URLS = [
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
    planningUrl: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
  },
  {
    id: "6",
    name: "Machu Picchu",
    location: "Cusco Region",
    country: "Peru",
    continent: "South America",
    type: "Archaeological Site",
    yearBuilt: 1450,
    height: 2430,
    latitude: -13.1631,
    longitude: -72.545,
    planningUrl: "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
  },
  {
    id: "7",
    name: "Great Wall of China",
    location: "Northern China",
    country: "China",
    continent: "Asia",
    type: "Wall",
    yearBuilt: 220,
    height: 8,
    latitude: 40.4319,
    longitude: 116.5704,
    planningUrl: "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
  },
  {
    id: "8",
    name: "Petra",
    location: "Ma'an Governorate",
    country: "Jordan",
    continent: "Asia",
    type: "Archaeological Site",
    yearBuilt: -300,
    height: 0,
    latitude: 30.3285,
    longitude: 35.4444,
    planningUrl: "https://unsplash.com/photos/low-angle-photography-of-brown-concrete-building-eoZTnFtusDs",
  },
  {
    id: "9",
    name: "Christ the Redeemer",
    location: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    type: "Statue",
    yearBuilt: 1931,
    height: 38,
    latitude: -22.9519,
    longitude: -43.2105,
    planningUrl: "https://unsplash.com/photos/christ-the-redeemer-brazil-at-daytime-OkiDIla7K8Q",
  },
  {
    id: "10",
    name: "Sydney Opera House",
    location: "Sydney",
    country: "Australia",
    continent: "Oceania",
    type: "Opera House",
    yearBuilt: 1973,
    height: 65,
    latitude: -33.8568,
    longitude: 151.2153,
    planningUrl: "https://unsplash.com/photos/sydney-opera-house-australia-at-daytime-kRGjlSe7Df0",
  },
]

// Extract EXACT photo ID from Unsplash URL
function extractExactPhotoId(url) {
  console.log(`🔍 Extracting photo ID from: ${url}`)

  // Pattern: https://unsplash.com/photos/description-PHOTOID
  const match = url.match(/photos\/[^/]*-([a-zA-Z0-9_-]+)$/)

  if (match) {
    const photoId = match[1]
    console.log(`✅ Extracted photo ID: ${photoId}`)
    return photoId
  } else {
    console.log(`❌ Could not extract photo ID from URL`)
    return null
  }
}

// Fetch EXACT photo by ID (not search!)
async function fetchExactUnsplashPhoto(photoId) {
  try {
    console.log(`📸 Fetching EXACT photo with ID: ${photoId}`)

    // DIRECT FETCH - not search!
    const response = await fetch(`https://api.unsplash.com/photos/${photoId}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const photo = await response.json()

    console.log(`✅ Successfully fetched exact photo!`)
    console.log(`📸 Photographer: ${photo.user.name}`)
    console.log(`📏 Dimensions: ${photo.width}x${photo.height}`)
    console.log(`🖼️ Description: ${photo.description || photo.alt_description || "No description"}`)

    // Trigger download event (required by Unsplash API Terms)
    await triggerUnsplashDownload(photo.links.download_location)

    return {
      image: photo.urls.regular,
      imageThumb: photo.urls.thumb,
      imageFull: photo.urls.full,
      photographer: photo.user.name,
      photographerUrl: photo.user.links.html,
      imageSource: "Unsplash",
      photoId: photoId,
      description: photo.description || photo.alt_description || "",
      width: photo.width,
      height: photo.height,
      likes: photo.likes,
      downloads: photo.downloads,
    }
  } catch (error) {
    console.error(`❌ Error fetching exact photo ${photoId}:`, error.message)
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

// Main processing function - EXACT FETCH ONLY
async function fetchExactPlanningImages() {
  console.log("🎯 FETCHING EXACT IMAGES FROM PLANNING DOCUMENT")
  console.log("=".repeat(60))
  console.log(`📊 Processing ${MONUMENTS_WITH_EXACT_URLS.length} monuments with exact Unsplash URLs`)
  console.log("🔧 Method: DIRECT PHOTO FETCH (not search)")
  console.log("")

  const results = []

  for (let i = 0; i < MONUMENTS_WITH_EXACT_URLS.length; i++) {
    const monument = MONUMENTS_WITH_EXACT_URLS[i]

    console.log(`\n[${i + 1}/${MONUMENTS_WITH_EXACT_URLS.length}] 🏛️ Processing: ${monument.name}`)
    console.log(`🌍 Location: ${monument.location}, ${monument.country}`)
    console.log(`🔗 Planning URL: ${monument.planningUrl}`)

    // Extract the EXACT photo ID from planning URL
    const exactPhotoId = extractExactPhotoId(monument.planningUrl)

    if (!exactPhotoId) {
      console.log(`❌ Could not extract photo ID from planning URL`)
      results.push({
        ...monument,
        error: "Could not extract photo ID from planning URL",
      })
      continue
    }

    // Fetch the EXACT photo (not search!)
    const imageData = await fetchExactUnsplashPhoto(exactPhotoId)

    if (imageData) {
      console.log(`🎉 SUCCESS: Fetched exact image for ${monument.name}`)
      console.log(`📸 By: ${imageData.photographer}`)
      console.log(`👍 Likes: ${imageData.likes}`)
      console.log(`⬇️ Downloads: ${imageData.downloads}`)

      results.push({
        ...monument,
        ...imageData,
      })

      console.log(`🔖 Attribution: Photo by ${imageData.photographer} on Unsplash`)
    } else {
      console.log(`⚠️ FAILED: Could not fetch exact image for ${monument.name}`)
      results.push({
        ...monument,
        image: "",
        photographer: "",
        photographerUrl: "",
        imageSource: "",
        error: "Failed to fetch exact image",
      })
    }

    // Delay between requests (2 seconds)
    if (i < MONUMENTS_WITH_EXACT_URLS.length - 1) {
      console.log("⏱️ Waiting 2 seconds before next request...")
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }
  }

  console.log("\n" + "=".repeat(60))
  console.log("🎉 EXACT IMAGE FETCHING COMPLETE!")
  console.log("=".repeat(60))

  console.log("\n📋 FINAL RESULTS SUMMARY:")
  results.forEach((monument, index) => {
    console.log(`\n${index + 1}. ${monument.name} (${monument.location}, ${monument.country}):`)
    if (monument.image) {
      console.log(`   ✅ SUCCESS: Exact image fetched`)
      console.log(`   📸 Photographer: ${monument.photographer}`)
      console.log(`   📏 Dimensions: ${monument.width}x${monument.height}`)
      console.log(`   🆔 Photo ID: ${monument.photoId}`)
      console.log(`   🔗 Planning URL: ${monument.planningUrl}`)
    } else {
      console.log(`   ❌ FAILED: ${monument.error || "Unknown error"}`)
    }
  })

  // Generate TypeScript code for the EXACT results
  const tsCode = `
// EXACT Planning Document Images - Generated on ${new Date().toISOString()}
// These are the EXACT images specified in your planning document URLs
export const EXACT_PLANNING_MONUMENTS = ${JSON.stringify(results, null, 2)};
  `

  console.log("\n📄 TypeScript code for EXACT monuments:")
  console.log(tsCode)

  return results
}

// Run the EXACT fetcher
console.log("🚀 Starting EXACT image fetch from planning document...")
fetchExactPlanningImages().catch(console.error)
