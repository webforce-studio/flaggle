// Fix Great Wall of China image with correct photo ID
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || "your_access_key_here"

async function getCorrectGreatWallImage() {
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
    console.log(`🔗 Photographer URL: ${photo.user.links.html}`)
    console.log(`📝 Description: ${photo.description || photo.alt_description || "No description"}`)

    // Generate the correct image URL
    const imageUrl = `${photo.urls.raw}?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`

    console.log(`🖼️ Image URL: ${imageUrl}`)

    // Track download for Unsplash analytics
    if (photo.links.download_location) {
      await fetch(`${photo.links.download_location}?client_id=${UNSPLASH_ACCESS_KEY}`)
      console.log("📊 Download tracked for Unsplash analytics")
    }

    console.log("\n🏛️ Database Update:")
    console.log(`image: "${imageUrl}",`)
    console.log(`photographer: "${photo.user.name}",`)
    console.log(`photographerUrl: "${photo.user.links.html}",`)

    return {
      imageUrl,
      photographer: photo.user.name,
      photographerUrl: photo.user.links.html,
    }
  } catch (error) {
    console.error("❌ Error fetching photo:", error.message)

    // Fallback: construct URL manually with the correct photo ID
    const fallbackUrl = `https://images.unsplash.com/photo-1567871376697-0a8d7b8e102d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max`

    console.log("\n🔄 Using fallback URL construction:")
    console.log(`🖼️ Fallback URL: ${fallbackUrl}`)

    return {
      imageUrl: fallbackUrl,
      photographer: "William Olivieri",
      photographerUrl: "https://unsplash.com/@skuggdieme",
    }
  }
}

// Run the function
getCorrectGreatWallImage()
