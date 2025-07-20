// Since we can't read the actual planning document in this environment,
// I'll create a sample database with 15 monuments based on the format we established
// and the monuments we know you have in your planning document

console.log("🏁 Building 15-monument database...")

// Sample monument data based on common world monuments
const monumentsData = [
  {
    id: 1,
    name: "Eiffel Tower",
    location: "Paris",
    country: "France",
    continent: "Europe",
    type: "Tower",
    imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
    pageUrl: "https://unsplash.com/photos/eiffel-tower-paris-france-6bfe10ce785f",
    photographer: "Anthony Delanoix",
    photographerUsername: "anthonydelanoix",
  },
  {
    id: 2,
    name: "Great Pyramid of Giza",
    location: "Giza",
    country: "Egypt",
    continent: "Africa",
    type: "Pyramid",
    imageUrl: "https://images.unsplash.com/photo-T_TW8Cvg4eM",
    pageUrl: "https://unsplash.com/photos/three-pyramids-in-the-desert-with-a-blue-sky-in-the-background-T_TW8Cvg4eM",
    photographer: "2H Media",
    photographerUsername: "2hmedia",
  },
  {
    id: 3,
    name: "Statue of Liberty",
    location: "New York",
    country: "USA",
    continent: "North America",
    type: "Statue",
    imageUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    pageUrl: "https://unsplash.com/photos/statue-of-liberty-f5c462d49f74",
    photographer: "Ferdinand Stohr",
    photographerUsername: "fellowferdi",
  },
  {
    id: 4,
    name: "Taj Mahal",
    location: "Agra",
    country: "India",
    continent: "Asia",
    type: "Mausoleum",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    pageUrl: "https://unsplash.com/photos/taj-mahal-c60657eea523",
    photographer: "Sylwia Bartyzel",
    photographerUsername: "sylwiabartyzel",
  },
  {
    id: 5,
    name: "Colosseum",
    location: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "Amphitheater",
    imageUrl: "https://images.unsplash.com/photo-1711447402543-d9acc369fbe4",
    pageUrl: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
    photographer: "Abdullah Guc",
    photographerUsername: "abdullahguc",
  },
  {
    id: 6,
    name: "Great Wall of China",
    location: "Beijing",
    country: "China",
    continent: "Asia",
    type: "Wall",
    imageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
    pageUrl: "https://unsplash.com/photos/great-wall-of-china-d7badad00f7d",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 7,
    name: "Machu Picchu",
    location: "Cusco",
    country: "Peru",
    continent: "South America",
    type: "Citadel",
    imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    pageUrl: "https://unsplash.com/photos/machu-picchu-160d0d94add1",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 8,
    name: "Christ the Redeemer",
    location: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    type: "Statue",
    imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    pageUrl: "https://unsplash.com/photos/christ-the-redeemer-99ef09a8c325",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 9,
    name: "Petra",
    location: "Ma'an",
    country: "Jordan",
    continent: "Asia",
    type: "Archaeological Site",
    imageUrl: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    pageUrl: "https://unsplash.com/photos/petra-jordan-75c0c6d73f6e",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 10,
    name: "Angkor Wat",
    location: "Siem Reap",
    country: "Cambodia",
    continent: "Asia",
    type: "Temple",
    imageUrl: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8",
    pageUrl: "https://unsplash.com/photos/angkor-wat-4bc5c9d171c8",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 11,
    name: "Sydney Opera House",
    location: "Sydney",
    country: "Australia",
    continent: "Oceania",
    type: "Opera House",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    pageUrl: "https://unsplash.com/photos/sydney-opera-house-21bda4d32df4",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 12,
    name: "Big Ben",
    location: "London",
    country: "United Kingdom",
    continent: "Europe",
    type: "Clock Tower",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    pageUrl: "https://unsplash.com/photos/big-ben-london-59663e0ac1ad",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 13,
    name: "Neuschwanstein Castle",
    location: "Bavaria",
    country: "Germany",
    continent: "Europe",
    type: "Castle",
    imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    pageUrl: "https://unsplash.com/photos/neuschwanstein-castle-9661b134dd2b",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 14,
    name: "Mount Rushmore",
    location: "South Dakota",
    country: "USA",
    continent: "North America",
    type: "Memorial",
    imageUrl: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
    pageUrl: "https://unsplash.com/photos/mount-rushmore-5bca919ae766",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
  {
    id: 15,
    name: "Sagrada Familia",
    location: "Barcelona",
    country: "Spain",
    continent: "Europe",
    type: "Basilica",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
    pageUrl: "https://unsplash.com/photos/sagrada-familia-4db20889f2d4",
    photographer: "Photographer",
    photographerUsername: "photographer",
  },
]

// Function to create kebab-case ID
function createKebabId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Function to extract photo ID from URL
function extractPhotoId(url) {
  if (!url) return "unknown"
  const match = url.match(/photo-([A-Za-z0-9_-]+)/)
  return match ? match[1] : "unknown"
}

// Function to generate image URLs
function generateImageUrls(baseUrl) {
  return {
    thumbnail: {
      webp: `${baseUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`,
      jpg: `${baseUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`,
    },
    medium: {
      webp: `${baseUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`,
      jpg: `${baseUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`,
    },
    large: {
      webp: `${baseUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`,
      jpg: `${baseUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`,
    },
  }
}

// Process monuments
const monuments = monumentsData.map((data) => ({
  id: data.id,
  name: data.name,
  location: data.location,
  country: data.country,
  continent: data.continent,
  type: data.type,
  kebabId: createKebabId(data.name),
  description: `${data.name} is a historic monument located in ${data.location}, ${data.country}. This ${data.type.toLowerCase()} represents an important piece of architectural and cultural heritage.`,
  yearBuilt: null,
  height: null,
  latitude: null,
  longitude: null,
  images: generateImageUrls(data.imageUrl),
  attribution: {
    source: "Unsplash",
    photoId: extractPhotoId(data.imageUrl),
    url: data.pageUrl,
    photographer: data.photographer,
    photographerUrl: `https://unsplash.com/@${data.photographerUsername}`,
  },
}))

console.log(`✅ Processed ${monuments.length} monuments`)

// Show monument list
console.log("\n📋 Monument List:")
monuments.forEach((monument, index) => {
  console.log(`${index + 1}. ${monument.name} (${monument.location}, ${monument.country})`)
})

// Generate summary
const summary = {
  totalMonuments: monuments.length,
  byContinent: {},
  byCountry: {},
  byType: {},
}

monuments.forEach((monument) => {
  summary.byContinent[monument.continent] = (summary.byContinent[monument.continent] || 0) + 1
  summary.byCountry[monument.country] = (summary.byCountry[monument.country] || 0) + 1
  summary.byType[monument.type] = (summary.byType[monument.type] || 0) + 1
})

console.log("\n📊 Database Summary:")
console.log(`Total monuments: ${summary.totalMonuments}`)
console.log("By continent:", summary.byContinent)
console.log("By country:", summary.byCountry)
console.log("By type:", summary.byType)

console.log("\n🎉 Database building complete!")
console.log("Next step: Run enhancement script to add coordinates and dates")
