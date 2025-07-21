import type { Country } from "@/lib/country-database"

interface StructuredDataProps {
  country?: Country
  gameWon?: boolean
  guessCount?: number
}

export function StructuredData({ country, gameWon, guessCount }: StructuredDataProps) {
  if (!country) return null

  const gamePlayStructuredData = {
    "@context": "https://schema.org",
    "@type": "GamePlayMode",
    name: `Flagguesser - ${country.name} Challenge`,
    description: `Daily flag challenge featuring ${country.name} (${country.code}) in ${country.region}`,
    url: "https://flagguesser.fun",
    gameItem: {
      "@type": "Game",
      name: "Flagguesser",
      description: "Daily flag guessing game",
    },
    playMode: "SinglePlayer",
    numberOfPlayers: 1,
    ...(gameWon && {
      result: {
        "@type": "GameResult",
        resultType: "Win",
        score: `${guessCount}/6`,
        description: `Successfully identified ${country.name} in ${guessCount} attempts`,
      },
    }),
  }

  const countryStructuredData = {
    "@context": "https://schema.org",
    "@type": "Country",
    name: country.name,
    alternateName: [country.code, country.id, "Flagle", "Flagle game", "flagle.app", "flag guessing game", "country quiz", "world flags game"],
    description: `Country in ${country.region}. Capital: ${country.capital}. Population: ${country.population.toLocaleString()}.`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: country.coordinates.lat,
      longitude: country.coordinates.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: country.name,
      addressRegion: country.region,
    },
    image: {
      "@type": "ImageObject",
      url: country.flagUrl,
    },
    keywords: [
      country.name,
      country.code,
      country.region,
      "Flagguesser",
      "flag guessing game",
      "flag quiz",
      "country quiz",
      "world flags",
      "flagle",
      "Flagle game",
      "flagle.app",
      "flagle alternative",
      "flagle vs flagguesser",
      "guess the flag",
      "flagle clone",
      "flagle daily",
      "flagle unlimited",
      "flagle quiz",
      "flagle wordle",
      "flagle online",
      "flagle play",
      "flagle today",
      "flagle hints",
      "flagle answer",
      "flagle solution",
      "flagle challenge",
      "flagle trivia",
      "flagle puzzle",
      "flagle competitor",
      "geography trivia",
      "world flags quiz"
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gamePlayStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(countryStructuredData),
        }}
      />
    </>
  )
}
