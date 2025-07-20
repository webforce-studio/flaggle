import fs from "fs"

async function main() {
  console.log("🏁 Deploying 15-monument database...")

  const sourceFile = "lib/monument-database-15.ts"
  const targetFile = "lib/monument-database.ts"
  const backupFile = "lib/monument-database-backup.ts"

  // Check if source exists
  if (!fs.existsSync(sourceFile)) {
    console.error(`❌ Source database not found: ${sourceFile}`)
    console.error("❌ Run build-15-monument-database.js first")
    process.exit(1)
  }

  // Backup current database
  if (fs.existsSync(targetFile)) {
    fs.copyFileSync(targetFile, backupFile)
    console.log(`✅ Backed up current database to ${backupFile}`)
  }

  // Deploy new database
  fs.copyFileSync(sourceFile, targetFile)
  console.log(`✅ Deployed new database to ${targetFile}`)

  // Read and display summary
  const dbContent = fs.readFileSync(targetFile, "utf-8")
  const monumentsMatch = dbContent.match(/export const monuments: Monument\[] = (\[[\s\S]*?\]);/)

  if (monumentsMatch) {
    const monuments = JSON.parse(monumentsMatch[1])
    console.log(`🎉 Successfully deployed database with ${monuments.length} monuments!`)

    // Show monument list
    console.log("\n📋 Monument List:")
    monuments.forEach((monument, index) => {
      console.log(`${index + 1}. ${monument.name} (${monument.location}, ${monument.country})`)
    })
  }
}

main().catch((error) => {
  console.error("❌ Fatal error:", error)
  process.exit(1)
})
