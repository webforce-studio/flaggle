export function AboutPageStructuredData() {
  const aboutPageData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Monumentle - The Ultimate Daily Monument Guessing Game",
    description:
      "Learn about Monumentle, the daily monument guessing game that's taking the cultural world by storm. Discover our mission, team, and passion for world landmarks and heritage sites.",
    url: "https://monumentle.fun/about",
    mainEntity: {
      "@type": "Organization",
      name: "Monumentle",
      description:
        "Creators of the daily monument guessing game that combines entertainment with cultural education and geography learning.",
      foundingDate: "2024",
      mission:
        "To make cultural knowledge fun, accessible, and challenging through daily monument puzzles that educate players about world heritage sites.",
      knowsAbout: [
        "World Heritage Sites",
        "Famous Monuments",
        "Cultural Education",
        "Geography Learning",
        "Educational Gaming",
        "Architecture History",
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
          item: "https://monumentle.fun",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://monumentle.fun/about",
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
