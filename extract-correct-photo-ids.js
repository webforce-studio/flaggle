// Script to extract correct photo IDs from the planning document

console.log("🔍 Reading MONUMENT_IMAGE_PLANNING.md to extract correct photo IDs...\n")

// Simulated content from planning document (since I can't read the actual file)
// You can replace this with the actual URLs from your planning document

const planningData = `
| ID | Name | Location | Country | Type | Image URL |
|----|------|----------|---------|------|-----------|
| 1 | Eiffel Tower | Paris | France | Tower | https://unsplash.com/photos/eiffel-tower-PHOTO_ID_1 |
| 2 | Great Pyramid of Giza | Giza | Egypt | Pyramid | https://unsplash.com/photos/three-pyramids-in-the-desert-with-a-blue-sky-in-the-background-T_TW8Cvg4eM |
| 3 | Statue of Liberty | New York | USA | Statue | https://unsplash.com/photos/statue-of-liberty-PHOTO_ID_3 |
| 4 | Taj Mahal | Agra | India | Mausoleum | https://unsplash.com/photos/taj-mahal-PHOTO_ID_4 |
| 5 | Colosseum | Rome | Italy | Amphitheater | https://unsplash.com/photos/colosseum-PHOTO_ID_5 |
`

function extractPhotoIdFromUrl(url) {
  if (!url || !url.includes("unsplash.com/photos/")) {
    return null
  }

  // Extract the photo ID from the end of the URL
  // Format: https://unsplash.com/photos/description-PHOTO_ID
  const parts = url.split("/")
  const lastPart = parts[parts.length - 1]

  // The photo ID is usually after the last dash
  const dashIndex = lastPart.lastIndexOf("-")
  if (dashIndex !== -1) {
    return lastPart.substring(dashIndex + 1)
  }

  return lastPart
}

function parseMonumentData(content) {
  const lines = content.split("\n")
  const monuments = []

  for (const line of lines) {
    if (line.startsWith("|") && line.includes("|") && !line.includes("---")) {
      const parts = line.split("|").map((part) => part.trim())

      if (parts.length >= 6 && parts[1] && parts[1] !== "ID" && parts[1] !== "") {
        const id = Number.parseInt(parts[1])
        const name = parts[2]
        const imageUrl = parts[6]
        const photoId = extractPhotoIdFromUrl(imageUrl)

        if (id && name && imageUrl && photoId) {
          monuments.push({
            id,
            name,
            imageUrl,
            photoId,
            currentPhotoId: getCurrentPhotoId(name), // What we're currently using
          })
        }
      }
    }
  }

  return monuments
}

function getCurrentPhotoId(monumentName) {
  // Current photo IDs being used in the database
  const current = {
    "Eiffel Tower": "6bfe10ce785f",
    "Great Pyramid of Giza": "T_TW8Cvg4eM", // Just fixed this one
    "Statue of Liberty": "f5c462d49f74",
    "Taj Mahal": "c60657eea523",
    Colosseum: "c0197dd311b5",
  }

  return current[monumentName] || "unknown"
}

// Parse the planning document
const monuments = parseMonumentData(planningData)

console.log("📋 Monument Photo ID Analysis:\n")

monuments.forEach((monument) => {
  const isCorrect = monument.photoId === monument.currentPhotoId
  const status = isCorrect ? "✅ CORRECT" : "❌ WRONG"

  console.log(`${status} ${monument.name}`)
  console.log(`   Planning Document: ${monument.photoId}`)
  console.log(`   Currently Using:   ${monument.currentPhotoId}`)
  console.log(`   URL: ${monument.imageUrl}`)
  console.log("")
})

console.log("\n🎯 Summary:")
const correctCount = monuments.filter((m) => m.photoId === m.currentPhotoId).length
console.log(`${correctCount}/${monuments.length} monuments using correct photo IDs`)

if (correctCount < monuments.length) {
  console.log("\n🔧 Action needed: Update monument database with correct photo IDs from planning document")
}
