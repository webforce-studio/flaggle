// Batch 7 Template - Generated on 2025-05-29
// Next monuments to process: 19-21

export interface MonumentBatchTemplate {
  id: string
  name: string
  location: string
  country: string
  continent: string
  type: string
  yearBuilt: number
  height: number
  latitude: number
  longitude: number
  searchTerms: string[]
  description: string
}

export const BATCH_7_TEMPLATE: MonumentBatchTemplate[] = [
  {
    id: "19",
    name: "Stonehenge",
    location: "Salisbury",
    country: "England",
    continent: "Europe",
    type: "Stone Circle",
    yearBuilt: -2500, // Approximately 2500 BCE
    height: 4, // Height of tallest stones
    latitude: 51.1789,
    longitude: -1.8262,
    searchTerms: [
      "Stonehenge",
      "Stonehenge Salisbury",
      "Stonehenge England",
      "Stonehenge landmark",
      "Stonehenge monument",
      "Stonehenge stone circle",
      "ancient Stonehenge",
      "prehistoric Stonehenge",
    ],
    description:
      "Prehistoric monument consisting of a ring of standing stones, built around 2500 BCE. Located in Wiltshire, England, it's one of the world's most famous archaeological sites and a UNESCO World Heritage Site.",
  },
  {
    id: "20",
    name: "Christ the Redeemer",
    location: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    type: "Statue",
    yearBuilt: 1931,
    height: 38, // Including pedestal: 38m total (statue: 30m, pedestal: 8m)
    latitude: -22.9519,
    longitude: -43.2105,
    searchTerms: [
      "Christ the Redeemer",
      "Christ the Redeemer Rio",
      "Christ the Redeemer Brazil",
      "Cristo Redentor",
      "Rio de Janeiro statue",
      "Corcovado mountain statue",
      "Christ statue Brazil",
      "Rio landmark",
    ],
    description:
      "Art Deco statue of Jesus Christ overlooking Rio de Janeiro from atop Corcovado mountain. Completed in 1931, it stands 30 meters tall with arms spanning 28 meters, and is considered one of the New Seven Wonders of the World.",
  },
  {
    id: "21",
    name: "Sydney Opera House",
    location: "Sydney",
    country: "Australia",
    continent: "Oceania",
    type: "Opera House",
    yearBuilt: 1973,
    height: 65, // Height of tallest shell
    latitude: -33.8568,
    longitude: 151.2153,
    searchTerms: [
      "Sydney Opera House",
      "Sydney Opera House Australia",
      "Opera House Sydney",
      "Sydney landmark",
      "Sydney Opera House shells",
      "Australian opera house",
      "Sydney harbor opera",
      "iconic Sydney building",
    ],
    description:
      "Multi-venue performing arts center with distinctive shell-shaped design. Opened in 1973 and designed by Danish architect Jørn Utzon, it's located on Sydney Harbour and is a UNESCO World Heritage Site and symbol of Australia.",
  },
]

// Export for use in batch processing
export default BATCH_7_TEMPLATE
