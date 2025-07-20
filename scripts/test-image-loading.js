console.log("🔍 Testing image URL accessibility")

// Test different URL formats
const testUrls = [
  // Current format from our script
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&q=80&w=1080&fit=max&fm=jpg&crop=entropy&cs=tinysrgb",

  // Simplified format
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96",

  // Basic format with just width
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1080",

  // Working format from earlier monuments
  "https://images.unsplash.com/photo-1564227230898-87086d5b04dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTc1MjR8MHwxfGFsbHx8fHx8fHx8fDE3NDg1OTQzNTl8&ixlib=rb-4.1.0&q=80&w=1080",
]

async function testImageUrl(url, index) {
  console.log(`\n[${index + 1}] Testing: ${url.substring(0, 80)}...`)

  try {
    const response = await fetch(url, { method: "HEAD" })
    console.log(`Status: ${response.status}`)
    console.log(`Content-Type: ${response.headers.get("content-type")}`)
    console.log(`Content-Length: ${response.headers.get("content-length")}`)
    console.log(`Cache-Control: ${response.headers.get("cache-control")}`)
    console.log(`Access-Control-Allow-Origin: ${response.headers.get("access-control-allow-origin")}`)

    if (response.ok) {
      console.log("✅ URL is accessible")
    } else {
      console.log("❌ URL returned error status")
    }
  } catch (error) {
    console.log(`❌ Error: ${error.message}`)
  }
}

async function runTests() {
  console.log("Testing different Unsplash URL formats...\n")

  for (let i = 0; i < testUrls.length; i++) {
    await testImageUrl(testUrls[i], i)
    if (i < testUrls.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  console.log("\n🏁 Test complete!")
}

runTests().catch(console.error)
