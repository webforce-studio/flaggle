// Test if the Sydney Opera House image is loading correctly
const fetch = require("node-fetch")

async function testImage(url) {
  console.log(`Testing image URL: ${url}`)
  try {
    const response = await fetch(url, { method: "HEAD" })
    if (response.ok) {
      console.log(`✅ SUCCESS: Image is accessible (Status: ${response.status})`)
      return true
    } else {
      console.log(`❌ FAILED: Image returned status ${response.status}`)
      return false
    }
  } catch (error) {
    console.log(`❌ ERROR: ${error.message}`)
    return false
  }
}

async function main() {
  console.log("🔍 Testing Sydney Opera House image URLs...\n")

  const baseUrl = "https://images.unsplash.com/photo-1719402715882-46a5120d491c"

  // Test thumbnail
  await testImage(`${baseUrl}?w=300&h=200&fit=crop&crop=center&auto=format&q=80`)

  // Test medium
  await testImage(`${baseUrl}?w=800&h=600&fit=crop&crop=center&auto=format&q=85`)

  // Test large
  await testImage(`${baseUrl}?w=1200&h=900&fit=crop&crop=center&auto=format&q=90`)
}

main().catch(console.error)
