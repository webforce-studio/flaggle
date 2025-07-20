// Batch 10 Template - Geographic Balance Focus
// Selected from Top 250 Global Attractions
// Monuments 35-40

export interface MonumentTemplate {
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
  difficulty: "easy" | "medium" | "hard"
  hints: {
    geographic: string
    architectural: string
    historical: string
    cultural: string
  }
  searchTerms: string[]
}

export const BATCH_10_TEMPLATES: MonumentTemplate[] = [
  {
    id: "35",
    name: "Victoria Falls",
    location: "Livingstone/Victoria Falls",
    country: "Zambia/Zimbabwe",
    continent: "Africa",
    type: "Waterfall",
    yearBuilt: 0, // Natural formation
    height: 108, // Height of falls
    latitude: -17.9243,
    longitude: 25.8572,
    difficulty: "medium",
    hints: {
      geographic: "Located on the border between two African countries on the Zambezi River",
      architectural: "Natural waterfall formation creating massive mist clouds",
      historical: "Named by David Livingstone after Queen Victoria in 1855",
      cultural: "Known locally as 'Mosi-oa-Tunya' meaning 'The Smoke That Thunders'",
    },
    searchTerms: [
      "Victoria Falls Zambia Zimbabwe",
      "Mosi-oa-Tunya waterfall",
      "Zambezi River falls",
      "Victoria Falls mist rainbow",
      "African waterfall landmark",
    ],
  },
  {
    id: "36",
    name: "Iguazu Falls",
    location: "Iguazu",
    country: "Argentina/Brazil",
    continent: "South America",
    type: "Waterfall System",
    yearBuilt: 0, // Natural formation
    height: 82, // Height of tallest fall
    latitude: -25.6953,
    longitude: -54.4367,
    difficulty: "medium",
    hints: {
      geographic: "Massive waterfall system on border between Argentina and Brazil",
      architectural: "275 individual waterfalls spanning 2.7 kilometers",
      historical: "Discovered by Spanish conquistador Álvar Núñez Cabeza de Vaca in 1541",
      cultural: "UNESCO World Heritage site meaning 'big water' in Guarani language",
    },
    searchTerms: [
      "Iguazu Falls Argentina Brazil",
      "Iguassu Falls waterfall",
      "South America waterfalls",
      "Iguazu National Park",
      "Devil's Throat waterfall",
    ],
  },
  {
    id: "37",
    name: "Great Barrier Reef",
    location: "Queensland",
    country: "Australia",
    continent: "Oceania",
    type: "Coral Reef System",
    yearBuilt: 0, // Natural formation
    height: 0, // Underwater
    latitude: -18.2871,
    longitude: 147.6992,
    difficulty: "easy",
    hints: {
      geographic: "World's largest coral reef system off the coast of Queensland, Australia",
      architectural: "Living structure built by billions of coral polyps over millions of years",
      historical: "First explored by Captain James Cook in 1770",
      cultural: "UNESCO World Heritage site supporting incredible marine biodiversity",
    },
    searchTerms: [
      "Great Barrier Reef Australia",
      "Queensland coral reef",
      "Australian marine park",
      "Great Barrier Reef aerial view",
      "Coral reef system Australia",
    ],
  },
  {
    id: "38",
    name: "Mount Fuji",
    location: "Honshu",
    country: "Japan",
    continent: "Asia",
    type: "Stratovolcano",
    yearBuilt: 0, // Natural formation
    height: 3776, // Height in meters
    latitude: 35.3606,
    longitude: 138.7274,
    difficulty: "easy",
    hints: {
      geographic: "Japan's highest peak and sacred mountain on Honshu island",
      architectural: "Perfect conical stratovolcano with snow-capped summit",
      historical: "Sacred site for Shinto and Buddhist pilgrims for over 1,000 years",
      cultural: "Symbol of Japan featured in countless artworks including Hokusai's prints",
    },
    searchTerms: [
      "Mount Fuji Japan",
      "Fuji-san volcano",
      "Japan sacred mountain",
      "Mount Fuji snow cap",
      "Fuji Honshu island",
    ],
  },
  {
    id: "39",
    name: "Mont Saint-Michel",
    location: "Normandy",
    country: "France",
    continent: "Europe",
    type: "Abbey",
    yearBuilt: 966, // Abbey founded
    height: 92, // Height of spire
    latitude: 48.6361,
    longitude: -1.5115,
    difficulty: "medium",
    hints: {
      geographic: "Gothic abbey on tidal island in Normandy, northern France",
      architectural: "Medieval abbey with soaring spire rising from fortified village",
      historical: "Benedictine abbey founded in 966, pilgrimage site for centuries",
      cultural: "UNESCO World Heritage site accessible by causeway at low tide",
    },
    searchTerms: [
      "Mont Saint-Michel France",
      "Normandy abbey island",
      "French Gothic abbey",
      "Mont Saint-Michel tidal",
      "Medieval abbey France",
    ],
  },
  {
    id: "40",
    name: "Yellowstone National Park",
    location: "Wyoming",
    country: "USA",
    continent: "North America",
    type: "National Park",
    yearBuilt: 1872, // Established as park
    height: 0, // Varied elevation
    latitude: 44.428,
    longitude: -110.5885,
    difficulty: "easy",
    hints: {
      geographic: "First national park in the world, located primarily in Wyoming",
      architectural: "Natural geothermal features including geysers and hot springs",
      historical: "Established in 1872 as world's first national park",
      cultural: "Home to Old Faithful geyser and diverse wildlife including bison and bears",
    },
    searchTerms: [
      "Yellowstone National Park",
      "Old Faithful geyser",
      "Wyoming national park",
      "Yellowstone geysers",
      "American national park",
    ],
  },
]

export default BATCH_10_TEMPLATES
