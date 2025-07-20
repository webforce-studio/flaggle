console.log("🎯 GETTING CORRECT WILLIAM OLIVIERI IMAGE")

const ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"
const PHOTO_ID = "HwY9R6_YzgM"

async function getCorrectImage() {
  try {
    console.log(`📡 Fetching photo ID: ${PHOTO_ID}`)

    const photoUrl = `https://api.unsplash.com/photos/${PHOTO_ID}?client_id=${ACCESS_KEY}`
    const response = await fetch(photoUrl)

    if (!response.ok) {
      console.log(`❌ API Error: ${response.status} ${response.statusText}`)
      return
    }

    const photoData = await response.json()

    console.log(`✅ SUCCESS!`)
    console.log(`📸 Photo by: ${photoData.user.name} (@${photoData.user.username})`)
    console.log(`📝 Description: ${photoData.description || photoData.alt_description || "No description"}`)
    console.log(`🔗 Regular URL: ${photoData.urls.regular}`)
    console.log(`🔗 Full URL: ${photoData.urls.full}`)

    // Trigger download for analytics
    const downloadUrl = `https://api.unsplash.com/photos/${PHOTO_ID}/download?client_id=${ACCESS_KEY}`
    await fetch(downloadUrl)
    console.log(`📊 Download tracked`)

    console.log(`\n📄 CORRECT DATABASE ENTRY:`)
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

    return photoData.urls.regular
  } catch (error) {
    console.log(`❌ Error: ${error.message}`)
  }
}

getCorrectImage()
