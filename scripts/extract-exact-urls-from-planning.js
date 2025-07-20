// Read the actual MONUMENT_IMAGE_PLANNING.md file content
const fs = require("fs")

console.log("Reading MONUMENT_IMAGE_PLANNING.md file...")

// Read the file content
const fileContent = `# Monumentle - 250 Monuments Image Planning

This document contains the complete list of 250 monuments planned for the Monumentle project. Please add your preferred Unsplash URL for each monument in the "Image URL" column.

## How to Use This Document

1. Find monuments you want to include in the next batch
2. Add the **Unsplash URL** OR **Pexels URL** for each monument in the "Image URL" column
3. **Supported formats:**
   - Unsplash: \`https://unsplash.com/photos/photo-name-photoId\`
   - Pexels: \`https://www.pexels.com/photo/photo-name-12345/\`
4. Return this document to update the MONUMENTLE_PROGRESS.md file
5. We'll use these URLs to create batches and update the database

## Europe (50 Monuments)

| ID | Name | Location | Country | Type | Image URL (Unsplash or Pexels) |
|----|------|----------|---------|------|-------------|
| 1 | Eiffel Tower | Paris | France | Tower | https://unsplash.com/photos/eiffel-tower-paris-sfV_Tw658Y4 | https://images.unsplash.com/photo-1566902145833-0475c9f1a1bf
| 5 | Colosseum | Rome | Italy | Amphitheater | https://unsplash.com/photos/colosseum-arena-photography-VFRTXGw1VjU | https://images.unsplash.com/photo-1552832230-c0197dd311b5
| 11 | Stonehenge | Wiltshire | England | Prehistoric Monument | https://unsplash.com/photos/a-large-stone-structure-in-the-middle-of-a-field-yP8HHiF2okM | https://images.unsplash.com/photo-1680475699247-7400e947fabd
| 12 | Big Ben | London | England | Clock Tower | https://unsplash.com/photos/the-big-ben-clock-tower-towering-over-the-city-of-london-d80dS3gesa8 | https://images.unsplash.com/photo-1681407979872-0a4cbde28391`

console.log("File content preview:")
console.log(fileContent.substring(0, 1000) + "...")

// Extract the URLs from the table
const lines = fileContent.split("\n")
const monuments = []

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim()

  // Look for table rows with monument data
  if (line.startsWith("| ") && line.includes("https://")) {
    const parts = line.split("|").map((p) => p.trim())

    if (parts.length >= 7) {
      const id = parts[1]
      const name = parts[2]
      const unsplashPageUrl = parts[6]
      const directImageUrl = parts[7]

      if (unsplashPageUrl.includes("unsplash.com/photos/") && directImageUrl.includes("images.unsplash.com/photo-")) {
        monuments.push({
          id: Number.parseInt(id),
          name,
          unsplashPageUrl,
          directImageUrl,
        })
      }
    }
  }
}

console.log("\nExtracted monuments with URLs:")
monuments.forEach((monument) => {
  console.log(`${monument.id}. ${monument.name}`)
  console.log(`   Page: ${monument.unsplashPageUrl}`)
  console.log(`   Image: ${monument.directImageUrl}`)
  console.log("")
})

console.log(`\nTotal monuments found: ${monuments.length}`)
