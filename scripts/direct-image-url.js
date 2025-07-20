// Get direct image URL without parameters
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || "your_access_key_here"

async function getDirectImageUrl() {
  try {
    // The correct photo ID from the URL you provided
    const photoId = "HwY9R6_YzgM"

    console.log(`🔍 Fetching photo with ID: ${photoId}`)

    const response = await fetch(`https://api.unsplash.com/photos/${photoId}?client_id=${UNSPLASH_ACCESS_KEY}`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const photo = await response.json()

    console.log("✅ Photo found!")
    console.log(`📸 Photographer: ${photo.user.name} (@${photo.user.username})`)

    // Get all available URLs
    console.log("\n📷 Available URLs:")
    console.log(`Raw: ${photo.urls.raw}`)
    console.log(`Full: ${photo.urls.full}`)
    console.log(`Regular: ${photo.urls.regular}`)
    console.log(`Small: ${photo.urls.small}`)
    console.log(`Thumb: ${photo.urls.thumb}`)

    // Track download for Unsplash analytics
    if (photo.links.download_location) {
      await fetch(`${photo.links.download_location}?client_id=${UNSPLASH_ACCESS_KEY}`)
      console.log("📊 Download tracked for Unsplash analytics")
    }

    // Test if URLs are accessible
    console.log("\n🧪 Testing URL accessibility:")
    const testUrl = photo.urls.regular
    const testResponse = await fetch(testUrl)
    console.log(`Regular URL accessible: ${testResponse.ok ? "✅ Yes" : "❌ No"}`)

    return {
      raw: photo.urls.raw,
      full: photo.urls.full,
      regular: photo.urls.regular,
      small: photo.urls.small,
      thumb: photo.urls.thumb,
    }
  } catch (error) {
    console.error("❌ Error fetching photo:", error.message)
    return null
  }
}

// Run the function
getDirectImageUrl()
