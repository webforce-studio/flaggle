import type { CountryData } from "@/lib/data"

interface StructuredDataProps {
  country?: CountryData
  gameWon?: boolean
  guessCount?: number
}

export function StructuredData({ country, gameWon, guessCount }: StructuredDataProps) {
  if (!country) return null

  const gamePlayStructuredData = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: `Flagguesser - ${country.name} Challenge`,
    description: `Daily flag guessing challenge featuring ${country.name} flag`,
    url: "https://www.flaggle.fun",
    genre: ["Educational", "Quiz", "Geography"],
    educationalLevel: "Beginner",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student"
    },
    about: "World flags and geography",
    playMode: "SinglePlayer",
    numberOfPlayers: 1,
    provider: {
      "@type": "Organization",
      name: "Flagguesser",
      url: "https://www.flaggle.fun"
    },
    ...(gameWon && {
      result: {
        "@type": "GameResult",
        resultType: "Win",
        score: `${guessCount}/6`,
        description: `Successfully identified ${country.name} flag in ${guessCount} attempts`,
      },
    }),
  }

  const flagQuestionStructuredData = {
    "@context": "https://schema.org",
    "@type": "Question",
    name: `Which country does this flag belong to?`,
    description: `Daily flag guessing challenge - identify the country from the flag image`,
    image: {
      "@type": "ImageObject",
      url: `/api/flags/${country.code.toLowerCase()}.png`,
      alt: `${country.name} flag`,
    },
    acceptedAnswer: {
      "@type": "Answer",
      text: country.name,
      url: `https://www.flaggle.fun?country=${country.code}`,
    },
    suggestedAnswer: [
      {
        "@type": "Answer",
        text: "France"
      },
      {
        "@type": "Answer", 
        text: "Germany"
      },
      {
        "@type": "Answer",
        text: "Italy"
      },
      {
        "@type": "Answer",
        text: "Spain"
      }
    ],
    educationalLevel: "Beginner",
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student"
    }
  }

  const countryStructuredData = {
    "@context": "https://schema.org",
    "@type": "Country",
    name: country.name,
    description: `${country.name} - a country featured in the daily flag guessing game`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: country.latitude,
      longitude: country.longitude,
    },
    additionalType: "Sovereign State",
    keywords: [
      country.name,
      `${country.name} flag`,
      "world flags",
      "geography",
      "country quiz",
      "flag guessing game",
      "national flags",
      "world countries"
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
          __html: JSON.stringify(flagQuestionStructuredData),
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
