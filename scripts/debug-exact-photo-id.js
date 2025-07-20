console.log("🔍 DEBUGGING EXACT PHOTO ID EXTRACTION")

const ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// Your exact URL
const EXACT_URL = "https://unsplash.com/photos/brown-concrete-building-on-top-of-hill-HwY9R6_YzgM"

console.log(`📋 URL: ${EXACT_URL}`)

// Let's try different extraction methods
function method1(url) {
  const pathPart = url.replace("https://unsplash.com/photos/", "")
  const lastDashIndex = pathPart.lastIndexOf("-")
  return pathPart.substring(lastDashIndex + 1)
}

function method2(url) {
  // Split by dashes and take the last part
  const parts = url.split("-")
  return parts[parts.length - 1]
}

function method3(url) {
  // Use regex to extract the photo ID pattern
  const match = url.match(/([A-Za-z0-9_-]{11})$/)
  return match ? match[1] : null
}

console.log(`Method 1 result: ${method1(EXACT_URL)}`)
console.log(`Method 2 result: ${method2(EXACT_URL)}`)
console.log(`Method 3 result: ${method3(EXACT_URL)}`)

// Test with the expected photo ID directly
async function testDirectPhotoId() {
  const photoId = "HwY9R6_YzgM"
  console.log(`\n🎯 Testing direct photo ID: ${photoId}`)

  try {
    const photoUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${ACCESS_KEY}`
    console.log(`📡 API URL: ${photoUrl}`)

    const response = await fetch(photoUrl)

    if (!response.ok) {
      console.log(`❌ API Error: ${response.status} ${response.statusText}`)
      const errorText = await response.text()
      console.log(`Error details: ${errorText}`)
      return
    }

    const photoData = await response.json()

    console.log(`✅ SUCCESS!`)
    console.log(`📸 Photo by: ${photoData.user.name} (@${photoData.user.username})`)
    console.log(`🔗 Image URL: ${photoData.urls.regular}`)
    console.log(`📝 Description: ${photoData.description || photoData.alt_description || "No description"}`)

    // Trigger download
    const downloadUrl = `https://api.unsplash.com/photos/${photoId}/download?client_id=${ACCESS_KEY}`
    await fetch(downloadUrl)

    console.log(`\n📄 Correct data for Great Wall of China:`)
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

testDirectPhotoId()
