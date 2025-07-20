// Script to create the monument folder structure
const fs = require("fs")
const path = require("path")

// Define the base directory for monuments
const baseDir = path.join(__dirname, "..", "public", "monuments")

// Create the base directory if it doesn't exist
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, { recursive: true })
  console.log(`Created base directory: ${baseDir}`)
}

// Create 5 group folders
for (let i = 1; i <= 5; i++) {
  const groupDir = path.join(baseDir, `group-${i}`)

  if (!fs.existsSync(groupDir)) {
    fs.mkdirSync(groupDir, { recursive: true })
    console.log(`Created group directory: group-${i}`)
  }

  // Create a placeholder README in each folder
  const readmePath = path.join(groupDir, "README.md")
  const startId = (i - 1) * 50 + 1
  const endId = i * 50

  const readmeContent = `# Monument Group ${i}

This folder contains monuments with IDs ${startId}-${endId}.

## Organization

Images in this folder follow the naming convention:
\`monument-[ID].jpg\`

## Attribution

All images must include proper attribution in the monument database.
`

  fs.writeFileSync(readmePath, readmeContent)
  console.log(`Created README for group-${i}`)
}

console.log("\nFolder structure created successfully!")
console.log("\nStructure:")
console.log("public/")
console.log("└── monuments/")
console.log("    ├── group-1/ (IDs 1-50)")
console.log("    ├── group-2/ (IDs 51-100)")
console.log("    ├── group-3/ (IDs 101-150)")
console.log("    ├── group-4/ (IDs 151-200)")
console.log("    └── group-5/ (IDs 201-250+)")
