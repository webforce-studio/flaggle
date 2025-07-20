export interface Monument {
  id: number
  name: string
  location: string
  country: string
  continent: string
  type: string
  kebabId?: string
  description: string
  yearBuilt: number | null
  height: number | null
  latitude: number | null
  longitude: number | null
  images: {
    thumbnail: { webp: string; jpg: string }
    medium: { webp: string; jpg: string }
    large: { webp: string; jpg: string }
  }
  attribution: {
    source: string
    photoId: string
    url: string
    photographer: string
    photographerUrl: string
  }
}
