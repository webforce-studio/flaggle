// Enhanced data for the 15 monuments
const MONUMENT_ENHANCEMENTS = {
  "eiffel-tower": {
    yearBuilt: 1889,
    height: 330,
    latitude: 48.8584,
    longitude: 2.2945,
    description:
      "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.",
  },
  "great-pyramid-of-giza": {
    yearBuilt: -2580,
    height: 146,
    latitude: 29.9792,
    longitude: 31.1342,
    description:
      "The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.",
  },
  "statue-of-liberty": {
    yearBuilt: 1886,
    height: 93,
    latitude: 40.6892,
    longitude: -74.0445,
    description:
      "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City. The copper statue was a gift from the people of France to the people of the United States.",
  },
  "taj-mahal": {
    yearBuilt: 1653,
    height: 73,
    latitude: 27.1751,
    longitude: 78.0421,
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
  },
  colosseum: {
    yearBuilt: 80,
    height: 48,
    latitude: 41.8902,
    longitude: 12.4922,
    description:
      "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff, and brick-faced concrete, it was the largest amphitheatre ever built.",
  },
  "great-wall-of-china": {
    yearBuilt: -220,
    height: 8,
    latitude: 40.4319,
    longitude: 116.5704,
    description:
      "The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups.",
  },
  "machu-picchu": {
    yearBuilt: 1450,
    height: 2430,
    latitude: -13.1631,
    longitude: -72.545,
    description:
      "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley.",
  },
  "christ-the-redeemer": {
    yearBuilt: 1931,
    height: 38,
    latitude: -22.9519,
    longitude: -43.2105,
    description:
      "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa.",
  },
  petra: {
    yearBuilt: -300,
    height: null,
    latitude: 30.3285,
    longitude: 35.4444,
    description:
      "Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabataean Kingdom.",
  },
  "angkor-wat": {
    yearBuilt: 1113,
    height: 65,
    latitude: 13.4125,
    longitude: 103.867,
    description:
      "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, originally constructed as a Hindu temple dedicated to the god Vishnu.",
  },
  "sydney-opera-house": {
    yearBuilt: 1973,
    height: 65,
    latitude: -33.8568,
    longitude: 151.2153,
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia. It is one of the 20th century's most famous and distinctive buildings.",
  },
  "big-ben": {
    yearBuilt: 1859,
    height: 96,
    latitude: 51.4994,
    longitude: -0.1245,
    description:
      "Big Ben is the nickname for the Great Bell of the striking clock at the north end of the Palace of Westminster in London, England, and is usually extended to refer to both the clock and the clock tower.",
  },
  "neuschwanstein-castle": {
    yearBuilt: 1886,
    height: 65,
    latitude: 47.5576,
    longitude: 10.7498,
    description:
      "Neuschwanstein Castle is a 19th-century Romanesque Revival palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany.",
  },
  "mount-rushmore": {
    yearBuilt: 1941,
    height: 18,
    latitude: 43.8791,
    longitude: -103.4591,
    description:
      "Mount Rushmore National Memorial is a national memorial centered on a colossal sculpture carved into the granite face of Mount Rushmore in the Black Hills near Keystone, South Dakota.",
  },
  "sagrada-familia": {
    yearBuilt: 1882,
    height: 172,
    latitude: 41.4036,
    longitude: 2.1744,
    description:
      "The Basílica de la Sagrada Família is a large unfinished Roman Catholic minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by Spanish architect Antoni Gaudí.",
  },
}

console.log("🏁 Enhancing monument data...")

// Sample monuments from previous step (in real implementation, this would read from the generated file)
const monuments = [
  {
    id: 1,
    name: "Eiffel Tower",
    kebabId: "eiffel-tower",
    location: "Paris",
    country: "France",
    continent: "Europe",
    type: "Tower",
    yearBuilt: null,
    height: null,
    latitude: null,
    longitude: null,
  },
  {
    id: 2,
    name: "Great Pyramid of Giza",
    kebabId: "great-pyramid-of-giza",
    location: "Giza",
    country: "Egypt",
    continent: "Africa",
    type: "Pyramid",
    yearBuilt: null,
    height: null,
    latitude: null,
    longitude: null,
  },
  {
    id: 3,
    name: "Statue of Liberty",
    kebabId: "statue-of-liberty",
    location: "New York",
    country: "USA",
    continent: "North America",
    type: "Statue",
    yearBuilt: null,
    height: null,
    latitude: null,
    longitude: null,
  },
  {
    id: 4,
    name: "Taj Mahal",
    kebabId: "taj-mahal",
    location: "Agra",
    country: "India",
    continent: "Asia",
    type: "Mausoleum",
    yearBuilt: null,
    height: null,
    latitude: null,
    longitude: null,
  },
  {
    id: 5,
    name: "Colosseum",
    kebabId: "colosseum",
    location: "Rome",
    country: "Italy",
    continent: "Europe",
    type: "Amphitheater",
    yearBuilt: null,
    height: null,
    latitude: null,
    longitude: null,
  },
]

console.log(`📊 Found ${monuments.length} monuments to enhance`)

// Enhance monuments with additional data
let enhancedCount = 0
monuments.forEach((monument) => {
  const enhancement = MONUMENT_ENHANCEMENTS[monument.kebabId]
  if (enhancement) {
    Object.assign(monument, enhancement)
    enhancedCount++
    console.log(`✅ Enhanced: ${monument.name}`)
    console.log(
      `   Year: ${monument.yearBuilt}, Height: ${monument.height}m, Coords: ${monument.latitude}, ${monument.longitude}`,
    )
  } else {
    console.log(`⚠️ No enhancement data for: ${monument.name} (${monument.kebabId})`)
  }
})

console.log(`\n✅ Enhanced ${enhancedCount} monuments with detailed data`)
console.log("🎉 Enhancement complete!")

// Show enhanced data summary
const enhancedSummary = {
  withYearBuilt: monuments.filter((m) => m.yearBuilt !== null).length,
  withHeight: monuments.filter((m) => m.height !== null).length,
  withCoordinates: monuments.filter((m) => m.latitude !== null && m.longitude !== null).length,
  oldestMonument: monuments.reduce(
    (oldest, current) =>
      current.yearBuilt && (!oldest.yearBuilt || current.yearBuilt < oldest.yearBuilt) ? current : oldest,
    {},
  ),
  tallestMonument: monuments.reduce(
    (tallest, current) => (current.height && (!tallest.height || current.height > tallest.height) ? current : tallest),
    {},
  ),
}

console.log("\n📊 Enhancement Summary:")
console.log(`Monuments with year built: ${enhancedSummary.withYearBuilt}`)
console.log(`Monuments with height: ${enhancedSummary.withHeight}`)
console.log(`Monuments with coordinates: ${enhancedSummary.withCoordinates}`)
console.log(`Oldest monument: ${enhancedSummary.oldestMonument.name} (${enhancedSummary.oldestMonument.yearBuilt})`)
console.log(`Tallest monument: ${enhancedSummary.tallestMonument.name} (${enhancedSummary.tallestMonument.height}m)`)
