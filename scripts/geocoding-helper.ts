interface GeocodeResult {
  latitude: number
  longitude: number
  formattedAddress: string
}

/**
 * Geocode a monument using OpenStreetMap Nominatim API (free)
 */
export async function geocodeMonument(name: string, location: string, country: string): Promise<GeocodeResult | null> {
  const queries = [`${name}, ${location}, ${country}`, `${name}, ${country}`, `${location}, ${country}`]

  for (const query of queries) {
    try {
      const encodedQuery = encodeURIComponent(query)
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodedQuery}&limit=1`

      console.log(`  🔍 Searching: ${query}`)

      const response = await fetch(url, {
        headers: {
          "User-Agent": "Monumentle-Game/1.0", // Replace with your contact if needed
        },
      })

      const data = await response.json()

      if (data && data.length > 0) {
        const result = data[0]
        return {
          latitude: Number.parseFloat(result.lat),
          longitude: Number.parseFloat(result.lon),
          formattedAddress: result.display_name,
        }
      }

      // Rate limiting - be nice to the free API
      await new Promise((resolve) => setTimeout(resolve, 1000))
    } catch (error) {
      console.error(`  ❌ Geocoding failed for ${query}:`, error)
    }
  }

  return null
}

/**
 * Batch geocode monuments with progress tracking
 */
export async function batchGeocodeMonuments(monuments: any[]): Promise<any[]> {
  const results = []

  for (let i = 0; i < monuments.length; i++) {
    const monument = monuments[i]
    console.log(`\n📍 Geocoding ${i + 1}/${monuments.length}: ${monument.name}`)

    const geocodeResult = await geocodeMonument(monument.name, monument.location, monument.country)

    if (geocodeResult) {
      monument.latitude = geocodeResult.latitude
      monument.longitude = geocodeResult.longitude
      console.log(`  ✅ Found: ${geocodeResult.latitude}, ${geocodeResult.longitude}`)
    } else {
      console.log(`  ❌ Failed to geocode ${monument.name}`)
    }

    results.push(monument)

    // Progress save every 10 items
    if (i % 10 === 9) {
      console.log(`\n💾 Progress saved at ${i + 1} items`)
    }
  }

  return results
}
