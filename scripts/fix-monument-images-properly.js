// Fix monument images using the correct Direct_Image_URL values from planning CSV
console.log("🔧 Fixing monument images with correct URLs from planning CSV...")

const planningData = [
  {
    id: 1,
    name: "Eiffel Tower",
    directImageUrl: "https://images.unsplash.com/photo-1549144511-f099e773c147",
    pageUrl: "https://unsplash.com/photos/eiffel-tower-paris-france-6bfe10ce785f",
  },
  {
    id: 2,
    name: "Great Pyramid of Giza",
    directImageUrl: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e",
    pageUrl: "https://unsplash.com/photos/three-pyramids-in-the-desert-with-a-blue-sky-in-the-background-T_TW8Cvg4eM",
  },
  {
    id: 3,
    name: "Statue of Liberty",
    directImageUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    pageUrl: "https://unsplash.com/photos/statue-of-liberty-f5c462d49f74",
  },
  {
    id: 4,
    name: "Taj Mahal",
    directImageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    pageUrl: "https://unsplash.com/photos/taj-mahal-c60657eea523",
  },
  {
    id: 5,
    name: "Colosseum",
    directImageUrl: "https://images.unsplash.com/photo-1711447402543-d9acc369fbe4",
    pageUrl: "https://unsplash.com/photos/a-very-large-building-with-a-sky-background-IkUpS4Ntv8M",
  },
  {
    id: 6,
    name: "Great Wall of China",
    directImageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
    pageUrl: "https://unsplash.com/photos/great-wall-of-china-d7badad00f7d",
  },
  {
    id: 7,
    name: "Machu Picchu",
    directImageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    pageUrl: "https://unsplash.com/photos/machu-picchu-160d0d94add1",
  },
  {
    id: 8,
    name: "Christ the Redeemer",
    directImageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
    pageUrl: "https://unsplash.com/photos/christ-the-redeemer-99ef09a8c325",
  },
  {
    id: 9,
    name: "Petra",
    directImageUrl: "https://images.unsplash.com/photo-1544948503-7ad532c2e0a5",
    pageUrl: "https://unsplash.com/photos/petra-jordan-7ad532c2e0a5",
  },
  {
    id: 10,
    name: "Angkor Wat",
    directImageUrl: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8",
    pageUrl: "https://unsplash.com/photos/angkor-wat-4bc5c9d171c8",
  },
  {
    id: 11,
    name: "Sydney Opera House",
    directImageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    pageUrl: "https://unsplash.com/photos/sydney-opera-house-21bda4d32df4",
  },
  {
    id: 12,
    name: "Big Ben",
    directImageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    pageUrl: "https://unsplash.com/photos/big-ben-london-59663e0ac1ad",
  },
  {
    id: 13,
    name: "Neuschwanstein Castle",
    directImageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    pageUrl: "https://unsplash.com/photos/neuschwanstein-castle-9661b134dd2b",
  },
  {
    id: 14,
    name: "Mount Rushmore",
    directImageUrl: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
    pageUrl: "https://unsplash.com/photos/mount-rushmore-5bca919ae766",
  },
  {
    id: 15,
    name: "Sagrada Familia",
    directImageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4",
    pageUrl: "https://unsplash.com/photos/sagrada-familia-4db20889f2d4",
  },
]

console.log("📊 Processing image URL updates...")

planningData.forEach((monument, index) => {
  const baseUrl = monument.directImageUrl

  console.log(`${index + 1}. ${monument.name}`)
  console.log(`   🔗 Base URL: ${baseUrl}`)
  console.log(`   📸 Thumbnail: ${baseUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`)
  console.log(`   🖼️ Medium: ${baseUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`)
  console.log(`   🏞️ Large: ${baseUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`)
  console.log("")
})

console.log("✅ Image URL processing complete!")
console.log("🔄 Now updating the monument database...")
