// Process the real CSV data from the user's planning document
console.log("📊 Processing real CSV data from planning document...")

// Real CSV data provided by the user
const realCsvData = `1	Eiffel Tower	Paris	France	Tower	Europe	https://unsplash.com/photos/eiffel-tower-paris-sfV_Tw658Y4	https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf
5	Colosseum	Rome	Italy	Amphitheater	Europe	https://unsplash.com/photos/colosseum-arena-photography-VFRTXGw1VjU	https://images.unsplash.com/photo-1552832230-c0197dd311b5
11	Stonehenge	Wiltshire	England	Prehistoric Monument	Europe	https://unsplash.com/photos/a-large-stone-structure-in-the-middle-of-a-field-yP8HHiF2okM	https://images.unsplash.com/photo-1680475699247-7400e947fabd
12	Big Ben	London	England	Clock Tower	Europe	https://unsplash.com/photos/the-big-ben-clock-tower-towering-over-the-city-of-london-d80dS3gesa8	https://images.unsplash.com/photo-1681407979872-0a4cbde28391
14	Neuschwanstein Castle	Bavaria	Germany	Castle	Europe	https://unsplash.com/photos/white-and-gray-castle-on-top-of-hill-hMDRIo93xb0	https://images.unsplash.com/photo-1609237756221-88c4a93846b2`

// Parse the tab-separated data
const lines = realCsvData.trim().split("\n")
const monuments = []

lines.forEach((line) => {
  const [id, name, location, country, type, continent, pageUrl, directUrl] = line.split("\t")
  monuments.push({
    id: Number.parseInt(id),
    name,
    location,
    country,
    type,
    continent,
    pageUrl,
    directUrl,
  })
})

console.log(`✅ Parsed ${monuments.length} monuments`)

// Function to extract photo ID from the real URL format
function extractPhotoId(pageUrl) {
  if (!pageUrl) return null

  // Handle URLs like: https://unsplash.com/photos/eiffel-tower-paris-sfV_Tw658Y4
  const match = pageUrl.match(/photos\/.*-([a-zA-Z0-9_-]+)$/)
  if (match) return match[1]

  return null
}

// Generate TypeScript monument objects
console.log("\n🏛️ Generating monument objects:")

const monumentObjects = monuments.map((monument) => {
  const photoId = extractPhotoId(monument.pageUrl)

  return `  {
    id: ${monument.id},
    name: "${monument.name}",
    location: "${monument.location}",
    country: "${monument.country}",
    continent: "${monument.continent}",
    type: "${monument.type}",
    kebabId: "${monument.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}",
    description: "${monument.name} is a ${monument.type.toLowerCase()} located in ${monument.location}, ${monument.country}.",
    yearBuilt: null,
    height: null,
    latitude: null,
    longitude: null,
    images: {
      thumbnail: {
        webp: "${monument.directUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
        jpg: "${monument.directUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80",
      },
      medium: {
        webp: "${monument.directUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
        jpg: "${monument.directUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85",
      },
      large: {
        webp: "${monument.directUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
        jpg: "${monument.directUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90",
      },
    },
    attribution: {
      source: "Unsplash",
      photoId: "${photoId}",
      url: "${monument.pageUrl}",
      photographer: "Photographer Name",
      photographerUrl: "https://unsplash.com/@photographer",
    },
  }`
})

console.log("Generated monument objects for:")
monuments.forEach((monument, index) => {
  const photoId = extractPhotoId(monument.pageUrl)
  console.log(`${monument.id}. ${monument.name} - Photo ID: ${photoId}`)
})

console.log("\n✅ Ready to update monument database with real data!")
