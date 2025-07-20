console.log("🏛️ Getting EXACT images from planning document")

const ACCESS_KEY = "RJQ1iJRhkFU9shlcDE5c-o5fIl4cmKxz3er2YJt_A_E"

// Your exact URLs from planning document
const EXACT_MONUMENTS = [
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

function extractPhotoIdCorrectly(url) {
  const pathPart = url.replace("https://unsplash.com/photos/", "")
  const lastDashIndex = pathPart.lastIndexOf("-")
  return pathPart.substring(lastDashIndex + 1)
}

async function getExactImage(monument) {
  const photoId = extractPhotoIdCorrectly(monument.url)
  console.log(`🔍 ${monument.name}: Extracting ID ${photoId} from ${monument.url}`)

  try {
    const photoUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${ACCESS_KEY}`
    const response = await fetch(photoUrl)
    const photoData = await response.json()

    // Trigger download
    const downloadUrl = `https://api.unsplash.com/photos/${photoId}/download?client_id=${ACCESS_KEY}`
    await fetch(downloadUrl)

    console.log(`✅ ${monument.name}: ${photoData.user.name} - ${photoData.urls.regular}`)

    return {
      id: monument.id,
      name: monument.name,
      image: photoData.urls.regular,
      photographer: photoData.user.name,
      photographerUrl: `https://unsplash.com/@${photoData.user.username}`,
      imageSource: "Unsplash",
    }
  } catch (error) {
    console.log(`❌ Error with ${monument.name}: ${error.message}`)
    return null
  }
}

async function processAll() {
  console.log("🎯 Processing all 3 exact images...")
  const results = []

  for (let i = 0; i < EXACT_MONUMENTS.length; i++) {
    const result = await getExactImage(EXACT_MONUMENTS[i])
    if (result) results.push(result)

    if (i < EXACT_MONUMENTS.length - 1) {
      console.log("⏱️ Waiting 3 seconds...")
      await new Promise((resolve) => setTimeout(resolve, 3000))
    }
  }

  console.log("\n🎉 All exact images processed!")
  console.log("\n📋 Results for database update:")

  results.forEach((monument) => {
    console.log(`\n${monument.name}:`)
    console.log(`  image: "${monument.image}",`)
    console.log(`  photographer: "${monument.photographer}",`)
    console.log(`  photographerUrl: "${monument.photographerUrl}",`)
    console.log(`  imageSource: "${monument.imageSource}",`)
  })

  return results
}

processAll()
