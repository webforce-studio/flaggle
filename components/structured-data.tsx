import type { MonumentData } from "@/lib/monument-database"

interface StructuredDataProps {
  monument?: MonumentData
  gameWon?: boolean
  guessCount?: number
}

export function StructuredData({ monument, gameWon, guessCount }: StructuredDataProps) {
  if (!monument) return null

  const gamePlayStructuredData = {
    "@context": "https://schema.org",
    "@type": "GamePlayMode",
    name: `Monumentle - ${monument.name} Challenge`,
    description: `Daily monument challenge featuring ${monument.name} from ${monument.location}, ${monument.country}`,
    url: "https://monumentle.fun",
    gameItem: {
      "@type": "Game",
      name: "Monumentle",
      description: "Daily monument guessing game",
    },
    playMode: "SinglePlayer",
    numberOfPlayers: 1,
    ...(gameWon && {
      result: {
        "@type": "GameResult",
        resultType: "Win",
        score: `${guessCount}/6`,
        description: `Successfully identified ${monument.name} in ${guessCount} attempts`,
      },
    }),
  }

  const monumentStructuredData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: monument.name,
    description: `${monument.type} located in ${monument.location}, ${monument.country}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: monument.latitude,
      longitude: monument.longitude,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: monument.location,
      addressCountry: monument.country,
    },
    additionalType: monument.type,
    dateCreated: monument.yearBuilt > 0 ? monument.yearBuilt.toString() : `${Math.abs(monument.yearBuilt)} BCE`,
    height: {
      "@type": "QuantitativeValue",
      value: monument.height,
      unitCode: "MTR",
    },
    image: {
      "@type": "ImageObject",
      url: monument.image,
      ...(monument.photographer && {
        creator: {
          "@type": "Person",
          name: monument.photographer,
          url: monument.photographerUrl,
        },
      }),
      ...(monument.imageSource && {
        provider: {
          "@type": "Organization",
          name: monument.imageSource,
          url: monument.imageSource === "Unsplash" ? "https://unsplash.com" : undefined,
        },
      }),
    },
    touristType: "Cultural Heritage Site",
    keywords: [
      monument.name,
      monument.type,
      monument.country,
      monument.continent,
      "World Heritage",
      "Famous Landmark",
      "Monument",
      "Architecture",
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
          __html: JSON.stringify(monumentStructuredData),
        }}
      />
    </>
  )
}
