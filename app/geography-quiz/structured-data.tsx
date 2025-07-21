export function GeographyQuizStructuredData() {
  const quizPageData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Learn World Geography with Flagguesser | Daily Flag Challenges",
    description:
      "Discover world geography through our daily flag guessing game. Each day, identify a country's flag and learn about its location, capital, and global facts.",
    url: "https://flagguesser.fun/geography-quiz",
    educationalLevel: "Beginner to Advanced",
    learningResourceType: "Interactive Game",
    educationalUse: "Geography Education",
    audience: {
      "@type": "EducationalAudience",
      audienceType: "Students, Teachers, Geography Enthusiasts",
      educationalRole: "Student",
    },
    about: [
      {
        "@type": "Thing",
        name: "World Geography",
        description: "Study of Earth's countries, flags, capitals, and environments",
      },
      {
        "@type": "Thing",
        name: "Flags of the World",
        description: "Study of national flags, their symbolism, and their countries",
      },
      {
        "@type": "Thing",
        name: "Country Knowledge",
        description: "Learning about countries, capitals, and global facts",
      },
    ],
    teaches: [
      "World map knowledge",
      "Country and flag recognition",
      "Capital cities",
      "Continental awareness",
      "Geography trivia",
      "Global awareness",
      "Flag symbolism",
    ],
    educationalAlignment: {
      "@type": "AlignmentObject",
      alignmentType: "teaches",
      educationalFramework: "Geography Education",
      targetName: "Geographic Knowledge and Skills",
    },
    interactivityType: "active",
    typicalAgeRange: "8-99",
    timeRequired: "PT5M",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://flagguesser.fun",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Geography Quiz",
          item: "https://flagguesser.fun/geography-quiz",
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(quizPageData),
      }}
    />
  )
}
