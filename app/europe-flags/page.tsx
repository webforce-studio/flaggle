import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegionFlagTable } from "@/components/region-flag-table"

export const metadata: Metadata = {
  title: "Europe Flag Quiz - Can You Guess All European Flags? | flaggle.fun",
  description:
    "Test your knowledge of European flags with our interactive Europe flag quiz. Learn about all European country flags including UK, Germany, France, Italy, Spain and more. Free daily European flag challenges.",
  keywords: "europe flag quiz, european flags game, EU flags quiz, europe country flags, european flag guessing game, flaggle europe, european geography quiz",
  openGraph: {
    title: "Europe Flag Quiz - Interactive European Flags Game",
    description: "Challenge yourself with European flags! Can you identify all European country flags?",
    url: "https://flaggle.fun/europe-flags",
    type: "website",
  },
}

export default function EuropeFlagsPage() {
  const europeanCountries = [
    { name: "United Kingdom", flag: "🇬🇧", capital: "London" },
    { name: "Germany", flag: "🇩🇪", capital: "Berlin" },
    { name: "France", flag: "🇫🇷", capital: "Paris" },
    { name: "Italy", flag: "🇮🇹", capital: "Rome" },
    { name: "Spain", flag: "🇪🇸", capital: "Madrid" },
    { name: "Netherlands", flag: "🇳🇱", capital: "Amsterdam" },
    { name: "Poland", flag: "🇵🇱", capital: "Warsaw" },
    { name: "Sweden", flag: "🇸🇪", capital: "Stockholm" },
    { name: "Norway", flag: "🇳🇴", capital: "Oslo" },
    { name: "Switzerland", flag: "🇨🇭", capital: "Bern" },
    { name: "Austria", flag: "🇦🇹", capital: "Vienna" },
    { name: "Belgium", flag: "🇧🇪", capital: "Brussels" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Europe Flag Quiz Challenge
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Test your knowledge of European flags! Can you identify all 44+ European country flags? 
              From Nordic crosses to tricolors, master the diverse flag designs of Europe.
            </p>
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                Play Flaggle
              </Button>
            </Link>
          </div>

          {/* European Flags Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              European Flags and Histories
            </h2>
            <RegionFlagTable region="Europe" />
            <div className="mt-6 text-center">
              <Link href="/printable-flags">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">Printable Flags</Button>
              </Link>
            </div>
          </div>

          {/* Why Learn European Flags */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Why Learn European Flags?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🏛️ Rich History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>European flags tell the story of centuries of history, from medieval kingdoms to modern republics. Learn about the symbolism behind each design.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🤝 Cultural Unity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Understanding European flags helps appreciate the diversity within unity that defines modern Europe and the European Union.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    ✈️ Travel Knowledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Perfect for travelers! Know which countries you're visiting and impress locals with your flag knowledge.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎯 Quiz Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>European flags offer the perfect difficulty level - distinctive enough to learn, challenging enough to test your geography skills.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* European Flag Facts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Interesting European Flag Facts
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇩🇰 Oldest National Flag</h3>
                  <p>Denmark's flag, the Dannebrog, is the oldest continuously used national flag in the world, dating back to the 13th century.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇨🇭 Square Flag</h3>
                  <p>Switzerland and Vatican City are the only two countries in the world with square flags, making them unique among European flags.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇳🇴 Nordic Cross Pattern</h3>
                  <p>The Nordic cross appears on flags of Denmark, Norway, Sweden, Finland, and Iceland, representing Christian heritage in Scandinavia.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Master European Flags?</h2>
            <p className="text-xl mb-6 opacity-90">
              Start with our daily flag challenge and become a European geography expert!
            </p>
            <Link href="/">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Play Europe Flag Quiz Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "European Flags and Histories",
            description: "Table of European countries with flags, 250-word histories, and links to detailed pages.",
            url: "https://flaggle.fun/europe-flags",
            educationalLevel: "Beginner to Advanced",
            itemListOrder: "http://schema.org/ItemListOrderAscending",
            itemListElement: [
              {"@type": "ListItem", position: 1, name: "United Kingdom", url: "https://flaggle.fun/flags/united-kingdom"},
              {"@type": "ListItem", position: 2, name: "France", url: "https://flaggle.fun/flags/france"},
              {"@type": "ListItem", position: 3, name: "Germany", url: "https://flaggle.fun/flags/germany"}
            ],
            audience: {
              "@type": "EducationalAudience",
              audienceType: "Students, Teachers, Travel Enthusiasts"
            },
            about: {
              "@type": "Place",
              name: "Europe",
              description: "Continent comprising 44+ countries with diverse flag designs"
            }
          })
        }}
      />
    </div>
  )
}

