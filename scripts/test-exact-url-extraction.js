console.log("🔍 TESTING EXACT URL EXTRACTION")

const ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// Your exact URL from planning document
const EXACT_URL = "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM"

console.log(`📋 Testing URL: ${EXACT_URL}`)

// Extract photo ID - the ID should be the LAST part after removing the base URL
function extractPhotoIdCorrectly(url) {
  console.log(`🔍 Original URL: ${url}`)

  // Remove the base URL
  const pathPart = url.replace("https://unsplash.com/photos/", "")
  console.log(`📋 Path part: ${pathPart}`)

  // The photo ID is the LAST segment after the final dash
  // "brown-concrete-building-on-top-of-hill-HwY9R6_YzgM"
  // Should extract: "HwY9R6_YzgM"

  const lastDashIndex = pathPart.lastIndexOf("-")
  if (lastDashIndex === -1) {
    console.log("❌ No dash found in URL")
    return null
  }

  const photoId = pathPart.substring(lastDashIndex + 1)
  console.log(`🎯 Extracted photo ID: ${photoId}`)

  return photoId
}

async function testExactImage() {
  const photoId = extractPhotoIdCorrectly(EXACT_URL)

  if (!photoId) {
    console.log("❌ Failed to extract photo ID")
    return
  }

  try {
    console.log(`🔍 Fetching photo details for ID: ${photoId}`)

    const photoUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${ACCESS_KEY}`
    const response = await fetch(photoUrl)

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`)
    }

    const photoData = await response.json()

    console.log(`✅ SUCCESS! Found photo:`)
    console.log(`📸 Title: ${photoData.description || photoData.alt_description || "No description"}`)
    console.log(`👤 Photographer: ${photoData.user.name}`)
    console.log(`🔗 Image URL: ${photoData.urls.regular}`)
    console.log(`📅 Created: ${photoData.created_at}`)

    // Trigger download (required by Unsplash API)
    const downloadUrl = `https://api.unsplash.com/photos/${photoId}/download?client_id=${ACCESS_KEY}`
    await fetch(downloadUrl)

    console.log(`\n📄 TypeScript code for Great Wall of China:`)
    console.log(`{
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
  image: "${photoData.urls.regular}",
  photographer: "${photoData.user.name}",
  photographerUrl: "https://unsplash.com/@${photoData.user.username}",
  imageSource: "Unsplash",
  difficulty: "medium",
  dayOfYear: 7,
}`)
  } catch (error) {
    console.log(`❌ Error: ${error.message}`)
  }
}

testExactImage()
