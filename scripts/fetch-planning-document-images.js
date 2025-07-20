// Extract monuments with Unsplash URLs from planning document
const UNSPLASH_ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// Planning document monuments with Unsplash URLs (BATCH 2: Next 3 monuments)
const MONUMENTS_WITH_URLS = [
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

// Extract photo ID from Unsplash URL
function extractPhotoId(url) {
  const match = url.match(/photos\/[^/]*-([a-zA-Z0-9_-]+)$/)
  return match ? match[1] : null
}

// Fetch specific photo by ID from Unsplash
async function fetchUnsplashPhotoById(photoId) {
  try {
    console.log(`🔍 Fetching photo ID: ${photoId}`)

    const response = await fetch(`https://api.unsplash.com/photos/${photoId}`, {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const photo = await response.json()

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
    }
  } catch (error) {
    console.error(`❌ Error fetching photo ${photoId}:`, error.message)
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
async function fetchPlanningDocumentImages() {
  console.log("🏛️ Fetching BATCH 2 images from planning document URLs")
  console.log(`📊 Processing ${MONUMENTS_WITH_URLS.length} monuments with Unsplash URLs`)

  const results = []

  for (let i = 0; i < MONUMENTS_WITH_URLS.length; i++) {
    const monument = MONUMENTS_WITH_URLS[i]

    console.log(`\n[${i + 1}/${MONUMENTS_WITH_URLS.length}] Processing: ${monument.name}`)
    console.log(`🔗 Planning URL: ${monument.planningUrl}`)

    // Extract photo ID from the planning document URL
    const photoId = extractPhotoId(monument.planningUrl)

    if (!photoId) {
      console.log(`❌ Could not extract photo ID from URL: ${monument.planningUrl}`)
      continue
    }

    console.log(`📷 Photo ID: ${photoId}`)

    const imageData = await fetchUnsplashPhotoById(photoId)

    if (imageData) {
      console.log(`✅ Successfully fetched image for ${monument.name}`)
      console.log(`📸 Photographer: ${imageData.photographer}`)
      console.log(`🖼️ Image URL: ${imageData.image}`)

      results.push({
        ...monument,
        ...imageData,
      })

      // Show attribution
      console.log(`🔖 Attribution: Photo by ${imageData.photographer} on Unsplash`)
    } else {
      console.log(`⚠️ Failed to fetch image for ${monument.name}`)
      results.push({
        ...monument,
        image: "",
        photographer: "",
        photographerUrl: "",
        imageSource: "",
      })
    }

    // Delay between requests (2 seconds)
    if (i < MONUMENTS_WITH_URLS.length - 1) {
      console.log("⏱️ Waiting 2 seconds before next request...")
      await new Promise((resolve) => setTimeout(resolve, 2000))
    }
  }

  console.log("\n🎉 BATCH 2 planning document image fetching complete!")
  console.log("\n📋 Final Results:")

  results.forEach((monument) => {
    console.log(`\n${monument.name} (${monument.location}, ${monument.country}):`)
    if (monument.image) {
      console.log(`  ✅ Image found: ${monument.image}`)
      console.log(`  📸 By: ${monument.photographer}`)
      console.log(`  📏 Dimensions: ${monument.width}x${monument.height}`)
      console.log(`  🔗 Planning URL: ${monument.planningUrl}`)
    } else {
      console.log(`  ❌ No image retrieved`)
    }
  })

  // Generate TypeScript code for the results
  const tsCode = `
// BATCH 2 Planning Document Images - Generated on ${new Date().toISOString()}
export const BATCH_2_MONUMENTS = ${JSON.stringify(results, null, 2)};
  `

  console.log("\n📄 TypeScript code for BATCH 2 monuments:")
  console.log(tsCode)

  return results
}

// Run the fetcher
fetchPlanningDocumentImages().catch(console.error)
