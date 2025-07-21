export function AboutPageStructuredData() {
  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Flagguesser - The Ultimate Daily Flag Guessing Game",
    description:
      "Learn about Flagguesser, the daily flag guessing game that's taking the geography world by storm. Discover our mission, team, and passion for world flags, countries, and global knowledge.",
    url: "https://flagguesser.fun/about",
    mainEntity: {
      "@type": "Organization",
      name: "Flagguesser",
      description:
        "Creators of the daily flag guessing game that combines entertainment with geography education and world knowledge.",
      foundingDate: "2024",
      mission:
        "To make world geography fun, accessible, and challenging through daily flag puzzles that educate players about countries, capitals, and global facts.",
      knowsAbout: [
        "World Flags",
        "Country Knowledge",
        "Geography Education",
        "Educational Gaming",
        "Flag Trivia",
        "World Capitals",
        "Global Awareness",
      ],
      serviceArea: {
        "@type": "Place",
        name: "Worldwide",
      },
    },
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
          name: "About",
          item: "https://flagguesser.fun/about",
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(aboutPageData),
      }}
    />
  )
}
