// Read the planning CSV file
console.log("📊 Reading planning CSV file...")

const csvContent = `ID,Name,Location,Country,Type,Region,Image_URL,Direct_Image_URL,Notes
1,Eiffel Tower,Paris,France,Tower,Europe,https://unsplash.com/photos/eiffel-tower-paris-france-6bfe10ce785f,https://images.unsplash.com/photo-1549144511-f099e773c147,
2,Great Pyramid of Giza,Giza,Egypt,Pyramid,Africa,https://unsplash.com/photos/three-pyramids-in-the-desert-with-a-blue-sky-in-the-background-T_TW8Cvg4eM,https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e,
3,Statue of Liberty,New York,USA,Statue,North America,https://unsplash.com/photos/statue-of-liberty-f5c462d49f74,https://images.unsplash.com/photo-1485738422979-f5c462d49f74,
4,Taj Mahal,Agra,India,Mausoleum,Asia,https://unsplash.com/photos/taj-mahal-c60657eea523,https://images.unsplash.com/photo-1564507592333-c60657eea523,
5,Colosseum,Rome,Italy,Amphitheater,Europe,https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M,https://images.unsplash.com/photo-1711447402543-d9acc369fbe4,
6,Great Wall of China,Beijing,China,Wall,Asia,https://unsplash.com/photos/great-wall-of-china-d7badad00f7d,https://images.unsplash.com/photo-1508804185872-d7badad00f7d,
7,Machu Picchu,Cusco,Peru,Citadel,South America,https://unsplash.com/photos/machu-picchu-160d0d94add1,https://images.unsplash.com/photo-1587595431973-160d0d94add1,
8,Christ the Redeemer,Rio de Janeiro,Brazil,Statue,South America,https://unsplash.com/photos/christ-the-redeemer-99ef09a8c325,https://images.unsplash.com/photo-1483729558449-99ef09a8c325,
9,Petra,Ma'an,Jordan,Archaeological Site,Asia,https://unsplash.com/photos/petra-jordan-7ad532c2e0a5,https://images.unsplash.com/photo-1544948503-7ad532c2e0a5,
10,Angkor Wat,Siem Reap,Cambodia,Temple,Asia,https://unsplash.com/photos/angkor-wat-4bc5c9d171c8,https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8,
11,Sydney Opera House,Sydney,Australia,Opera House,Oceania,https://unsplash.com/photos/sydney-opera-house-21bda4d32df4,https://images.unsplash.com/photo-1506905925346-21bda4d32df4,
12,Big Ben,London,United Kingdom,Clock Tower,Europe,https://unsplash.com/photos/big-ben-london-59663e0ac1ad,https://images.unsplash.com/photo-1513635269975-59663e0ac1ad,
13,Neuschwanstein Castle,Bavaria,Germany,Castle,Europe,https://unsplash.com/photos/neuschwanstein-castle-9661b134dd2b,https://images.unsplash.com/photo-1467269204594-9661b134dd2b,
14,Mount Rushmore,South Dakota,USA,Memorial,North America,https://unsplash.com/photos/mount-rushmore-5bca919ae766,https://images.unsplash.com/photo-1605540436563-5bca919ae766,
15,Sagrada Familia,Barcelona,Spain,Basilica,Europe,https://unsplash.com/photos/sagrada-familia-4db20889f2d4,https://images.unsplash.com/photo-1539037116277-4db20889f2d4,`

// Parse CSV
const lines = csvContent.trim().split("\n")
const headers = lines[0].split(",")
const monuments = []

console.log("📋 Processing CSV data...")

for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(",")
  const monument = {}

  headers.forEach((header, index) => {
    monument[header] = values[index] || ""
  })

  // Skip monuments marked as "skip"
  if (monument.Notes && monument.Notes.toLowerCase().includes("skip")) {
    console.log(`⏭️ Skipping: ${monument.Name} (${monument.Notes})`)
    continue
  }

  monuments.push(monument)
}

console.log(`✅ Found ${monuments.length} suitable monuments`)

// Function to extract photo ID from Unsplash URL
function extractPhotoId(url) {
  if (!url) return null

  // For page URLs like: https://unsplash.com/photos/a-view-of-the-sydney-opera-house-from-the-water-ZcAO4WHha84
  // Extract the ID after the last dash: ZcAO4WHha84
  const pageMatch = url.match(/unsplash\.com\/photos\/.*-([a-zA-Z0-9_-]+)$/)
  if (pageMatch) return pageMatch[1]

  // Fallback: extract from direct image URL if needed
  const directMatch = url.match(/photo-([a-zA-Z0-9_-]+)/)
  if (directMatch) return directMatch[1]

  return null
}

// Function to extract photographer from URL
function extractPhotographer(pageUrl) {
  if (!pageUrl) return { photographer: "Unknown", photographerUrl: "#" }

  // This would normally require API call, using placeholder for now
  return {
    photographer: "Photographer",
    photographerUrl: "https://unsplash.com/@photographer",
  }
}

// Process first 15 monuments
const processedMonuments = monuments.slice(0, 15).map((monument, index) => {
  const id = index + 1
  const pagePhotoId = extractPhotoId(monument.Image_URL) // Extract from page URL for attribution
  const { photographer, photographerUrl } = extractPhotographer(monument.Image_URL)

  console.log(`🏛️ Processing: ${monument.Name}`)
  console.log(`   📸 Page Photo ID: ${pagePhotoId}`)
  console.log(`   🔗 Direct URL: ${monument.Direct_Image_URL}`)

  // Map regions to continents
  const regionToContinent = {
    Europe: "Europe",
    Asia: "Asia",
    Africa: "Africa",
    "North America": "North America",
    "South America": "South America",
    Oceania: "Oceania",
    "Middle East": "Asia",
  }

  const continent = regionToContinent[monument.Region] || "Unknown"

  return {
    id,
    name: monument.Name,
    location: monument.Location,
    country: monument.Country,
    continent,
    type: monument.Type,
    kebabId: monument.Name.toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, ""),
    description: `${monument.Name} is a ${monument.Type.toLowerCase()} located in ${monument.Location}, ${monument.Country}.`,
    yearBuilt: null, // Would need additional data
    height: null, // Would need additional data
    latitude: null, // Would need additional data
    longitude: null, // Would need additional data
    images: {
      thumbnail: {
        webp: `${monument.Direct_Image_URL}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`,
        jpg: `${monument.Direct_Image_URL}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`,
      },
      medium: {
        webp: `${monument.Direct_Image_URL}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`,
        jpg: `${monument.Direct_Image_URL}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`,
      },
      large: {
        webp: `${monument.Direct_Image_URL}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`,
        jpg: `${monument.Direct_Image_URL}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`,
      },
    },
    attribution: {
      source: "Unsplash",
      photoId: pagePhotoId || "unknown", // Use the page URL photo ID for attribution
      url: monument.Image_URL || "#",
      photographer,
      photographerUrl,
    },
  }
})

console.log("\n🎯 Successfully processed 15 monuments:")
processedMonuments.forEach((monument, index) => {
  console.log(`${index + 1}. ${monument.name} (${monument.country})`)
})

console.log("\n✅ Monument processing complete!")
console.log("📊 Summary:")
console.log(`   Total processed: ${processedMonuments.length}`)
console.log(`   Continents covered: ${[...new Set(processedMonuments.map((m) => m.continent))].length}`)
console.log(`   Countries covered: ${[...new Set(processedMonuments.map((m) => m.country))].length}`)
