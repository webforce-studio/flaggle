export type FlagCategory = {
  id: string
  name: string
  description: string
  type: "color" | "symbol" | "style"
  // ISO codes or country ids to seed; we can compute dynamically later
  predicate: (country: { id: string; name: string }) => boolean
}

// Minimal starter: we’ll curate via country names for now; later expand with real attributes
export const flagCategories: FlagCategory[] = [
  {
    id: "colors/red-white",
    name: "Red and White Flags",
    description: "Countries whose national flags primarily feature red and white.",
    type: "color",
    predicate: (c) => [
      "poland",
      "indonesia",
      "monaco",
      "japan",
      "singapore",
      "turkey",
      "canada",
      "denmark",
      "malta",
      "bahrain",
      "qatar",
      "peru",
      "austria",
      "switzerland",
      "georgia",
      "tunisia",
    ].includes(c.id),
  },
  {
    id: "symbols/stars",
    name: "Flags with Stars",
    description: "National flags that include one or more stars in their design.",
    type: "symbol",
    predicate: (c) => [
      "united-states",
      "china",
      "australia",
      "new-zealand",
      "brazil",
      "chile",
      "panama",
      "micronesia",
      "solomon-islands",
      "somalia",
      "vietnam",
      "myanmar",
      "morocco",
      "burundi",
      "cameroon",
      "cape-verde",
      "sao-tome-and-principe",
      "marshall-islands",
      "venezuela",
      "eu",
    ].includes(c.id),
  },
  {
    id: "symbols/animals",
    name: "Flags with Animals",
    description: "Flags that depict animals such as eagles, lions, or birds.",
    type: "symbol",
    predicate: (c) => [
      "mexico",
      "albania",
      "mongolia",
      "kazakhstan",
      "uganda",
      "ecuador",
      "fiji",
      "bhutan",
      "moldova",
      "spain",
      "serbia",
      "montenegro",
      "zambia",
      "mozambique",
      "dominican-republic",
      "bolivia",
    ].includes(c.id),
  },
  {
    id: "styles/scandinavian-cross",
    name: "Scandinavian Cross Flags",
    description: "Nordic cross designs such as Denmark, Sweden, Norway, Finland, and Iceland.",
    type: "style",
    predicate: (c) => ["denmark", "sweden", "norway", "finland", "iceland"].includes(c.id),
  },
]
