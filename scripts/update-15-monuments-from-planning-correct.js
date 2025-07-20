// Read the planning CSV file with CORRECT URLs
console.log("📊 Reading planning CSV file with correct URLs...")

// Updated CSV content with the correct Sydney Opera House URLs from your screenshots
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
11,Sydney Opera House,Sydney,Australia,Opera House,Oceania,https://unsplash.com/photos/a-view-of-the-sydney-opera-house-from-the-water-ZcAO4WHha84,https://images.unsplash.com/photo-1719402715882-46a5120d491c,
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

  monuments.push(monument)
}

console.log(`✅ Found ${monuments.length} monuments to process`)

// Function to extract photo ID from Unsplash URL
function extractPhotoId(url) {
  if (!url) return null

  // For page URLs with descriptive slug and ID at the end
  // Example: https://unsplash.com/photos/a-view-of-the-sydney-opera-house-from-the-water-ZcAO4WHha84
  const pageMatchWithSlug = url.match(/unsplash\.com\/photos\/.*-([a-zA-Z0-9_-]+)$/)
  if (pageMatchWithSlug) return pageMatchWithSlug[1]

  // For page URLs with just the ID
  // Example: https://unsplash.com/photos/6bfe10ce785f
  const pageMatchSimple = url.match(/unsplash\.com\/photos\/([a-zA-Z0-9_-]+)$/)
  if (pageMatchSimple) return pageMatchSimple[1]

  return null
}

// Test the extraction specifically for Sydney Opera House
const sydneyUrl = "https://unsplash.com/photos/a-view-of-the-sydney-opera-house-from-the-water-ZcAO4WHha84"
const sydneyPhotoId = extractPhotoId(sydneyUrl)
console.log(`🏛️ Sydney Opera House URL: ${sydneyUrl}`)
console.log(`📸 Extracted Photo ID: ${sydneyPhotoId}`)

// Process Sydney Opera House specifically to verify
const sydneyMonument = monuments.find((m) => m.Name === "Sydney Opera House")
if (sydneyMonument) {
  console.log("\n🏛️ Sydney Opera House from CSV:")
  console.log(`   Page URL: ${sydneyMonument.Image_URL}`)
  console.log(`   Direct URL: ${sydneyMonument.Direct_Image_URL}`)
  console.log(`   Extracted Photo ID: ${extractPhotoId(sydneyMonument.Image_URL)}`)

  // This should match what we did manually
  const expectedPhotoId = "ZcAO4WHha84"
  const actualPhotoId = extractPhotoId(sydneyMonument.Image_URL)

  if (actualPhotoId === expectedPhotoId) {
    console.log("✅ Photo ID extraction matches manual fix!")
  } else {
    console.log(`❌ Photo ID mismatch! Expected: ${expectedPhotoId}, Got: ${actualPhotoId}`)
  }
}

// Process all monuments
console.log("\n📋 Processing all monuments:")
monuments.forEach((monument, index) => {
  const photoId = extractPhotoId(monument.Image_URL)
  console.log(`${index + 1}. ${monument.Name}: ${photoId}`)
})
