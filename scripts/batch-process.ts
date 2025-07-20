import { processMonumentData, saveProcessedData, generateCSV } from "./monument-data-processor"
import { batchGeocodeMonuments } from "./geocoding-helper"
import { generateAllSearchGuides } from "./image-search-helper"
import { STARTER_MONUMENTS } from "../data/starter-monuments"

async function main() {
  console.log("🏛️  Starting Monumentle batch processing...")
  console.log(`📊 Processing ${STARTER_MONUMENTS.length} monuments`)

  try {
    // Step 1: Process raw data
    console.log("\n📊 Step 1: Processing raw monument data...")
    const processedData = processMonumentData(STARTER_MONUMENTS)
    saveProcessedData(processedData, "monuments-processed.json")
    generateCSV(processedData, "monuments-for-review.csv")
    console.log("✅ Step 1 complete!")

    // Step 2: Geocode monuments
    console.log("\n🌍 Step 2: Geocoding monuments...")
    console.log("⏱️  This may take a few minutes due to API rate limiting...")
    const geocodedData = await batchGeocodeMonuments(processedData)
    saveProcessedData(geocodedData, "monuments-geocoded.json")
    console.log("✅ Step 2 complete!")

    // Step 3: Generate image search guides
    console.log("\n🖼️  Step 3: Generating image search guides...")
    generateAllSearchGuides(geocodedData)
    console.log("✅ Step 3 complete!")

    // Step 4: Generate final CSV for manual image collection
    console.log("\n📋 Step 4: Generating final CSV for image collection...")
    generateCSV(geocodedData, "monuments-ready-for-images.csv")
    console.log("✅ Step 4 complete!")

    console.log("\n🎉 Batch processing complete!")
    console.log("\n📁 Files created:")
    console.log("   • data/monuments-processed.json")
    console.log("   • data/monuments-geocoded.json")
    console.log("   • data/monuments-ready-for-images.csv")
    console.log("   • image-search-guides/ (folder with 30 guide files)")

    console.log("\n🚀 Next steps:")
    console.log("1. Open data/monuments-ready-for-images.csv in Excel/Google Sheets")
    console.log("2. Use the image-search-guides/ folder to find images for each monument")
    console.log("3. Fill in the 'image', 'photographer', 'photographerUrl', and 'imageSource' columns")
    console.log("4. Save the completed file as 'monuments-with-images-final.csv'")
    console.log("5. Run the import script to generate the final database")
  } catch (error) {
    console.error("❌ Error during batch processing:", error)
  }
}

// Run the batch processor
main()
