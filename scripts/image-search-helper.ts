import * as path from "path"
import * as fs from "fs"

/**
 * Generate Unsplash search URLs for manual image finding
 */
export function generateUnsplashSearchUrls(searchTerms: string[]): string[] {
  return searchTerms.map((term) => `https://unsplash.com/s/photos/${encodeURIComponent(term)}`)
}

/**
 * Generate Wikimedia Commons search URLs
 */
export function generateWikimediaSearchUrls(searchTerms: string[]): string[] {
  return searchTerms.map(
    (term) =>
      `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(term)}&title=Special:MediaSearch&go=Go&type=image`,
  )
}

/**
 * Generate Pexels search URLs
 */
export function generatePexelsSearchUrls(searchTerms: string[]): string[] {
  return searchTerms.map((term) => `https://www.pexels.com/search/${encodeURIComponent(term)}/`)
}

/**
 * Create a comprehensive search guide for a monument
 */
export function createImageSearchGuide(monument: any): string {
  const unsplashUrls = generateUnsplashSearchUrls(monument.searchTerms.slice(0, 3))
  const wikimediaUrls = generateWikimediaSearchUrls(monument.searchTerms.slice(0, 3))
  const pexelsUrls = generatePexelsSearchUrls(monument.searchTerms.slice(0, 3))

  return `# Image Search Guide for ${monument.name}

## Monument Details
- **Name**: ${monument.name}
- **Location**: ${monument.location}, ${monument.country}
- **Type**: ${monument.type}
- **Year Built**: ${monument.yearBuilt > 0 ? monument.yearBuilt : monument.yearBuilt < 0 ? `${Math.abs(monument.yearBuilt)} BCE` : "Unknown"}
- **Coordinates**: ${monument.latitude}, ${monument.longitude}

## Search Terms
${monument.searchTerms.map((term: string) => `- "${term}"`).join("\n")}

## Unsplash (Free with Attribution)
${unsplashUrls.map((url: string) => `- ${url}`).join("\n")}

## Wikimedia Commons (Public Domain)
${wikimediaUrls.map((url: string) => `- ${url}`).join("\n")}

## Pexels (Free)
${pexelsUrls.map((url: string) => `- ${url}`).join("\n")}

## Image Requirements
- **Aspect Ratio**: 16:9 (landscape preferred)
- **Minimum Resolution**: 1920x1080
- **Quality**: High resolution, clear view of monument
- **Composition**: Monument should be main subject
- **Lighting**: Good lighting, avoid overly dark images

## Attribution Template
\`\`\`
Photo by [Photographer Name](photographer-url) on [Source]
\`\`\`

## Checklist
- [ ] Image found and URL copied
- [ ] Attribution information recorded
- [ ] Image quality verified (clear, high-res, good composition)
- [ ] URL tested and working
- [ ] Added to CSV file

---
**Monument ID**: ${monument.id}
**CSV Row**: ${Number.parseInt(monument.id) + 1}
`
}

/**
 * Generate search guides for all monuments
 */
export function generateAllSearchGuides(monuments: any[]): void {
  const guidesDir = path.join(process.cwd(), "image-search-guides")

  if (!fs.existsSync(guidesDir)) {
    fs.mkdirSync(guidesDir, { recursive: true })
  }

  monuments.forEach((monument) => {
    const guide = createImageSearchGuide(monument)
    const filename = `${monument.id.padStart(3, "0")}-${monument.name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.md`
    const filepath = path.join(guidesDir, filename)

    fs.writeFileSync(filepath, guide)
  })

  console.log(`✅ Generated ${monuments.length} search guides in ${guidesDir}`)
}
