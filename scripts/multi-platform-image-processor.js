console.log("🖼️ Multi-Platform Image Processor")
console.log("📊 Supports both Unsplash and Pexels")

// API Keys (you'll need to provide these)
const UNSPLASH_ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"
const PEXELS_API_KEY = "E4W44vfuSCHAunN1mpco57EQJd2SJWDUV0vUat65wdevqde67gEF4Ukb"

/**
 * Detects the platform from the URL
 * @param {string} url - The image URL
 * @returns {string} - 'unsplash', 'pexels', or 'unknown'
 */
function detectPlatform(url) {
  if (!url) return "unknown"

  if (url.includes("unsplash.com")) {
    return "unsplash"
  } else if (url.includes("pexels.com")) {
    return "pexels"
  }
  return "unknown"
}

/**
 * Extracts photo ID from Unsplash URL
 * @param {string} url - Unsplash URL
 * @returns {string|null} - Photo ID or null
 */
function extractUnsplashId(url) {
  console.log(`🔍 Parsing Unsplash URL: ${url}`)

  // Try multiple patterns for Unsplash URLs
  const patterns = [
    // Pattern 1: https://unsplash.com/photos/description-PHOTOID
    /unsplash\.com\/photos\/[^/]+-([a-zA-Z0-9_-]+)$/,
    // Pattern 2: https://unsplash.com/photos/PHOTOID (including those starting with -)
    /unsplash\.com\/photos\/([a-zA-Z0-9_-]+)$/,
    // Pattern 3: Extract from the end after last dash
    /unsplash\.com\/photos\/.*-([a-zA-Z0-9_-]+)$/,
  ]

  for (let i = 0; i < patterns.length; i++) {
    const match = url.match(patterns[i])
    if (match) {
      console.log(`✅ Pattern ${i + 1} matched: ${match[1]}`)
      return match[1]
    }
  }

  console.log(`❌ No pattern matched for URL: ${url}`)
  return null
}

/**
 * Extracts photo ID from Pexels URL
 * @param {string} url - Pexels URL
 * @returns {string|null} - Photo ID or null
 */
function extractPexelsId(url) {
  // Match patterns like: https://www.pexels.com/photo/photo-name-12345/
  const match = url.match(/pexels\.com\/photo\/[^/]+-(\d+)\/?$/)
  return match ? match[1] : null
}

/**
 * Processes an Unsplash image
 * @param {string} photoId - Unsplash photo ID
 * @returns {Object} - Image data with attribution
 */
async function processUnsplashImage(photoId) {
  try {
    console.log(`🔍 Fetching Unsplash photo: ${photoId}`)

    // Get photo details
    const photoUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${UNSPLASH_ACCESS_KEY}`
    const photoResponse = await fetch(photoUrl)

    if (!photoResponse.ok) {
      throw new Error(`Unsplash API returned ${photoResponse.status}: ${await photoResponse.text()}`)
    }

    const photoData = await photoResponse.json()

    // Trigger download (required by Unsplash API)
    const downloadUrl = `https://api.unsplash.com/photos/${photoId}/download?client_id=${UNSPLASH_ACCESS_KEY}`
    await fetch(downloadUrl)

    return {
      image: photoData.urls.regular,
      photographer: photoData.user.name,
      photographerUrl: `https://unsplash.com/@${photoData.user.username}`,
      imageSource: "Unsplash",
      attribution: `Photo by ${photoData.user.name} on Unsplash`,
    }
  } catch (error) {
    console.error(`❌ Error processing Unsplash image ${photoId}:`, error.message)
    return null
  }
}

/**
 * Processes a Pexels image
 * @param {string} photoId - Pexels photo ID
 * @returns {Object} - Image data with attribution
 */
async function processPexelsImage(photoId) {
  try {
    console.log(`🔍 Fetching Pexels photo: ${photoId}`)

    // Get photo details
    const photoUrl = `https://api.pexels.com/v1/photos/${photoId}`
    const photoResponse = await fetch(photoUrl, {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    })

    if (!photoResponse.ok) {
      throw new Error(`Pexels API returned ${photoResponse.status}: ${await photoResponse.text()}`)
    }

    const photoData = await photoResponse.json()

    return {
      image: photoData.src.large2x || photoData.src.large,
      photographer: photoData.photographer,
      photographerUrl: photoData.photographer_url,
      imageSource: "Pexels",
      attribution: `Photo by ${photoData.photographer} on Pexels`,
    }
  } catch (error) {
    console.error(`❌ Error processing Pexels image ${photoId}:`, error.message)
    return null
  }
}

/**
 * Processes any supported image URL
 * @param {string} url - Image URL from Unsplash or Pexels
 * @param {Object} monument - Monument data
 * @returns {Object} - Updated monument data with image info
 */
async function processImageUrl(url, monument) {
  const platform = detectPlatform(url)

  console.log(`\n[Processing] ${monument.name}`)
  console.log(`🔗 URL: ${url}`)
  console.log(`📱 Platform: ${platform}`)

  let imageData = null

  switch (platform) {
    case "unsplash":
      const unsplashId = extractUnsplashId(url)
      if (unsplashId) {
        imageData = await processUnsplashImage(unsplashId)
      } else {
        console.log(`❌ Could not extract Unsplash photo ID from URL`)
      }
      break

    case "pexels":
      const pexelsId = extractPexelsId(url)
      if (pexelsId) {
        imageData = await processPexelsImage(pexelsId)
      } else {
        console.log(`❌ Could not extract Pexels photo ID from URL`)
      }
      break

    default:
      console.log(`❌ Unsupported platform: ${platform}`)
      break
  }

  if (imageData) {
    console.log(`✅ Successfully processed ${monument.name}`)
    console.log(`📸 ${imageData.attribution}`)

    return {
      ...monument,
      ...imageData,
    }
  } else {
    console.log(`❌ Failed to process ${monument.name}`)
    return monument
  }
}

// Example usage:
async function testProcessor() {
  const testMonuments = [
    {
      id: "test1",
      name: "Test Unsplash Monument",
      url: "https://unsplash.com/photos/eiffel-tower-paris-france--7XJZ4tHBZQ",
    },
    {
      id: "test2",
      name: "Test Pexels Monument",
      url: "https://www.pexels.com/photo/the-famous-saint-basil-s-cathedral-in-russia-8285167/",
    },
  ]

  for (const monument of testMonuments) {
    const result = await processImageUrl(monument.url, monument)
    console.log("\n📋 Result:", result)

    // Wait between requests
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }
}

// Export functions for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    detectPlatform,
    extractUnsplashId,
    extractPexelsId,
    processUnsplashImage,
    processPexelsImage,
    processImageUrl,
  }
}

console.log("\n🎯 Multi-Platform Image Processor Ready!")
console.log("✅ Supports Unsplash and Pexels")
console.log("📝 Make sure to set your PEXELS_API_KEY")
console.log("🔧 Use processImageUrl(url, monument) to process any supported URL")

// Test the processor with both platforms
testProcessor()
