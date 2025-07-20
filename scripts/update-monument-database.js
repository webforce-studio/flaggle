import fs from "fs"
import { marked } from "marked"

// This script can be used to update the monument database with new URLs
// without reprocessing everything

const CONFIG = {
  inputFile: "MONUMENT_IMAGE_PLANNING.md",
  databaseFile: "lib/monument-database.ts",
  outputFile: "lib/updated-monument-database.ts",
}

async function main() {
  console.log("🔄 Updating monument database with new URLs...")

  // Read current database
  const dbContent = fs.readFileSync(CONFIG.databaseFile, "utf-8")

  // Extract current monuments array
  const monumentsMatch = dbContent.match(/export const monuments: Monument\[] = (\[[\s\S]*?\]);/)
  if (!monumentsMatch) {
    console.error("❌ Could not find monuments array in database file")
    return
  }

  const currentMonuments = JSON.parse(monumentsMatch[1])
  console.log(`📊 Current database has ${currentMonuments.length} monuments`)

  // Parse planning document to get new URLs
  const mdContent = fs.readFileSync(CONFIG.inputFile, "utf-8")
  const tokens = marked.lexer(mdContent)

  const urlMap = new Map()
  let inTable = false

  for (const token of tokens) {
    if (token.type === "table") {
      inTable = true

      // Skip header row
      for (let i = 1; i < token.rows.length; i++) {
        const row = token.rows[i]
        const [id, name, location, country, type, imageUrl] = row

        // Only process rows with image URLs
        if (imageUrl && imageUrl !== "") {
          urlMap.set(Number.parseInt(id, 10), {
            name,
            imageUrl,
          })
        }
      }

      inTable = false
    }
  }

  console.log(`🔍 Found ${urlMap.size} monuments with URLs in planning document`)

  // Update monuments with new URLs
  let newUrlsAdded = 0

  for (const monument of currentMonuments) {
    const newData = urlMap.get(monument.id)
    if (newData && (!monument.imageUrl || monument.imageUrl !== newData.imageUrl)) {
      monument.imageUrl = newData.imageUrl
      monument.needsProcessing = true
      newUrlsAdded++
    }
  }

  console.log(`✅ Updated ${newUrlsAdded} monuments with new URLs`)

  // Write updated database
  const updatedDbContent = dbContent.replace(
    /export const monuments: Monument\[] = \[[\s\S]*?\];/,
    `export const monuments: Monument[] = ${JSON.stringify(currentMonuments, null, 2)};`,
  )

  fs.writeFileSync(CONFIG.outputFile, updatedDbContent)
  console.log(`📝 Updated database written to ${CONFIG.outputFile}`)
  console.log("🎉 Done!")
}

main().catch((error) => {
  console.error("❌ Fatal error:", error)
  process.exit(1)
})
