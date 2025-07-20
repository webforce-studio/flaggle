console.log("🔧 FIXING IMAGES - Using EXACT URLs from planning document")

// API credentials
const UNSPLASH_ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// EXACT URLs from MONUMENT_IMAGE_PLANNING.md
const EXACT_URLS = [
  {
    id: "5",
    name: "Colosseum",
    url: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
  },
  {
    id: "6",
    name: "Machu Picchu",
    url: "https://unsplash.com/photos/aerial-view-of-green-mountains-during-daytime-yam1KMv0SgQ",
  },
  {
    id: "7",
    name: "Great Wall of China",
    url: "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM",
  },
]

// Function to extract photo ID from URL - improved to handle descriptive URLs
function extractUnsplashPhotoId(url) {
  // The photo ID is always the last part of the URL after the last dash or slash
  const parts = url.split("/")
  const lastPart = parts[parts.length - 1]

  // If there's a dash in the last part, the ID is after the last dash
  if (lastPart.includes("-")) {
    return lastPart.split("-").pop()
  }

  return lastPart
}

// Function to get exact image from Unsplash using URL
async function getExactUnsplashImage(item) {
  try {
    console.log(`🎯 Getting EXACT image for: ${item.name}`)
    console.log(`📋 Exact URL: ${item.url}`)

    // Extract the photo ID from the URL
    const photoId = extractUnsplashPhotoId(item.url)
    console.log(`🔑 Extracted Photo ID: ${photoId}`)

    if (!photoId) {
      console.log(`❌ Could not extract photo ID from URL: ${item.url}`)
      return null
    }

    const response = await fetch(`https://api.unsplash.com/photos/${photoId}?client_id=${UNSPLASH_ACCESS_KEY}`)

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    console.log(`✅ Found exact image: ${data.urls.regular}`)
    console.log(`📸 Photographer: ${data.user.name}`)

    // Log the direct download URL for verification
    console.log(`🔗 Direct image URL: ${data.urls.regular}`)

    // Trigger download event (required by Unsplash API Terms)
    await triggerUnsplashDownload(data.links.download_location)

    return {
      id: item.id,
      photoId: photoId,
      imageUrl: data.urls.regular,
      photographer: data.user.name,
      photographerUrl: `https://unsplash.com/@${data.user.username}`,
      imageSource: "Unsplash",
    }
  } catch (error) {
    console.error(`❌ Error getting exact image for ${item.name}:`, error.message)
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
async function fixExactImages() {
  console.log("🔧 Processing EXACT URLs from planning document")

  const results = []

  for (let i = 0; i < EXACT_URLS.length; i++) {
    const item = EXACT_URLS[i]

    console.log(`\n[${i + 1}/${EXACT_URLS.length}] Processing: ${item.name}`)

    const imageData = await getExactUnsplashImage(item)

    if (imageData) {
      console.log(`✅ Got EXACT image for ${item.name}`)
      results.push(imageData)
    } else {
      console.log(`❌ Failed to get exact image for ${item.name}`)
    }

    // 3 second delay between requests
    if (i < EXACT_URLS.length - 1) {
      console.log("⏱️ Waiting 3 seconds before next request...")
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log("\n🎉 EXACT image processing complete!")
  console.log("\n📋 Results with EXACT images:")

  results.forEach((result) => {
    console.log(`\n${result.id}:`)
    console.log(`  Photo ID: ${result.photoId}`)
    console.log(`  Image URL: ${result.imageUrl}`)
    console.log(`  Photographer: ${result.photographer}`)
    console.log(`  Attribution: Photo by ${result.photographer} on Unsplash`)
  })

  console.log("\n📄 Update these in monument-database.ts:")

  results.forEach((result) => {
    console.log(`\nFor monument ID ${result.id}:`)
    console.log(`image: "${result.imageUrl}",`)
    console.log(`photographer: "${result.photographer}",`)
    console.log(`photographerUrl: "${result.photographerUrl}",`)
    console.log(`imageSource: "Unsplash",`)
  })

  return results
}

// Run the fix
fixExactImages().catch(console.error)
