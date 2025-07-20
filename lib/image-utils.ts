/**
 * Extracts the Unsplash photo ID from an Unsplash URL
 * @param url Unsplash image URL
 * @returns Photo ID or null if not an Unsplash URL
 */
export function getUnsplashPhotoId(url: string): string | null {
  // Match patterns like: https://images.unsplash.com/photo-1511739001486-6bfe10ce785f
  const match = url.match(/unsplash\.com\/(?:.*\/)?photo-([a-zA-Z0-9-]+)/)
  return match ? match[1] : null
}

/**
 * Fetches photographer information from Unsplash API
 * Note: This requires an Unsplash API key to work
 * @param photoId Unsplash photo ID
 * @param apiKey Unsplash API key
 * @returns Promise with photographer info
 */
export async function getUnsplashPhotoInfo(photoId: string, apiKey: string) {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/${photoId}?client_id=${apiKey}`)
    const data = await response.json()
    return {
      photographer: data.user.name,
      photographerUrl: data.user.links.html,
      imageSource: "Unsplash",
    }
  } catch (error) {
    console.error("Error fetching Unsplash photo info:", error)
    return null
  }
}

interface MonumentData {
  photographer?: string
  imageSource?: string
}

/**
 * Creates attribution text for an image
 * @param monument Monument data with attribution info
 * @returns Formatted attribution string
 */
export function formatAttribution(monument: MonumentData): string {
  if (!monument.photographer) return ""

  let attribution = `Photo: ${monument.photographer}`
  if (monument.imageSource) {
    attribution += ` / ${monument.imageSource}`
  }

  return attribution
}
