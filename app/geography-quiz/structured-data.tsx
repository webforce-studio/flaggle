export function GeographyQuizStructuredData() {
  const quizPageData = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "Learn World Geography with Monumentle | Daily Monument Challenges",
    description:
      "Discover world geography through our daily monument guessing game. Each day, identify a famous landmark and learn about its location, culture, and history.",
    url: "https://monumentle.fun/geography-quiz",
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
        description: "Study of Earth's landscapes, places, and environments",
      },
      {
        "@type": "Thing",
        name: "Cultural Geography",
        description: "Study of cultural products and norms and their variations across spaces",
      },
      {
        "@type": "Thing",
        name: "Famous Landmarks",
        description: "Recognizable natural or artificial features used for navigation",
      },
    ],
    teaches: [
      "World map knowledge",
      "Cultural geography",
      "Landmark locations",
      "Distance estimation",
      "Continental awareness",
      "Architectural styles",
      "Historical periods",
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
          item: "https://monumentle.fun",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Geography Quiz",
          item: "https://monumentle.fun/geography-quiz",
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
