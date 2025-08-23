import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegionFlagTable } from "@/components/region-flag-table"

export const metadata: Metadata = {
  title: "America Flag Quiz - North & South American Flags Challenge | flaggle.fun",
  description:
    "Master American flags! Test your knowledge of flags from USA, Canada, Brazil, Mexico, Argentina and all countries in North, Central, and South America.",
  keywords: "america flag quiz, american flags game, north america flags, south america flags, americas geography quiz, american flag guessing game, flaggle america",
  openGraph: {
    title: "America Flag Quiz - Interactive American Flags Game",
    description: "Challenge yourself with flags from across the Americas! Can you identify all North, Central, and South American flags?",
    url: "https://flaggle.fun/america-flags",
    type: "website",
  },
}

export default function AmericaFlagsPage() {
  const americanCountries = [
    { name: "United States", flag: "🇺🇸", region: "North America" },
    { name: "Canada", flag: "🇨🇦", region: "North America" },
    { name: "Brazil", flag: "🇧🇷", region: "South America" },
    { name: "Mexico", flag: "🇲🇽", region: "North America" },
    { name: "Argentina", flag: "🇦🇷", region: "South America" },
    { name: "Chile", flag: "🇨🇱", region: "South America" },
    { name: "Colombia", flag: "🇨🇴", region: "South America" },
    { name: "Peru", flag: "🇵🇪", region: "South America" },
    { name: "Cuba", flag: "🇨🇺", region: "Caribbean" },
    { name: "Jamaica", flag: "🇯🇲", region: "Caribbean" },
    { name: "Costa Rica", flag: "🇨🇷", region: "Central America" },
    { name: "Panama", flag: "🇵🇦", region: "Central America" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Americas Flag Quiz Challenge
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore flags from across the Americas! From the Arctic tundra of Canada to the tip of Chile, 
              test your knowledge of 35+ flags from North, Central, and South America plus the Caribbean.
            </p>
            <Link href="/">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg">
                Play Flaggle
              </Button>
            </Link>
          </div>

          {/* Americas Flags Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Flags of the Americas and Histories
            </h2>
            <RegionFlagTable region="Americas" />
            <div className="mt-6 text-center">
              <Link href="/printable-flags">
                <Button className="bg-green-500 hover:bg-green-600 text-white">Printable Flags</Button>
              </Link>
            </div>
          </div>

          {/* Regional flag pages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
              Explore other regional flag pages
            </h2>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-5">
              Browse continent pages with larger flags, quick facts, and links to each country’s history and printable downloads.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/europe-flags"><Button variant="outline">Europe flags</Button></Link>
              <Link href="/africa-flags"><Button variant="outline">Africa flags</Button></Link>
              <Link href="/asia-flags"><Button variant="outline">Asia flags</Button></Link>
              <Link href="/oceania-flags"><Button variant="outline">Oceania flags</Button></Link>
              <Link href="/printable-flags"><Button>Printable flags hub</Button></Link>
            </div>
          </div>

          {/* American Regions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Flag Regions of the Americas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🍁 North America</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">USA, Canada, Mexico, Greenland</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Large nations with distinctive flag designs reflecting colonial heritage
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🌎 Central America</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Guatemala, Belize, El Salvador, Honduras, Nicaragua, Costa Rica, Panama</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Blue and white patterns common, representing Pacific and Atlantic oceans
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏔️ South America</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Brazil, Argentina, Chile, Colombia, Peru, Venezuela, Ecuador</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Liberation colors (yellow, blue, red) from independence movements
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏝️ Caribbean</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Cuba, Jamaica, Dominican Republic, Haiti, Trinidad, Barbados</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Tropical colors and colonial influences from various European powers
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* American Flag Facts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Fascinating Americas Flag Facts
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇺🇸 Stars and Stripes</h3>
                  <p>The USA flag has 50 stars representing states and 13 stripes for the original colonies. It's been modified 27 times as new states joined the Union.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇨🇦 Maple Leaf</h3>
                  <p>Canada's red maple leaf flag was adopted in 1965, replacing the British colonial flag. The maple leaf has been a Canadian symbol for over 200 years.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇧🇷 Order and Progress</h3>
                  <p>Brazil's flag features "Ordem e Progresso" (Order and Progress) and depicts the night sky over Rio de Janeiro on November 15, 1889 - the proclamation of the Republic.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🟡🔵🔴 Liberation Colors</h3>
                  <p>Many South American flags share yellow, blue, and red colors from Gran Colombia, representing the gold of the Americas, blue of the Atlantic separating from Spain, and red for courage.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Learn Americas Flags */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Why Learn Flags of the Americas?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🗺️ Western Hemisphere
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Understanding the Americas' flags helps you navigate the geography and politics of the entire Western Hemisphere.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📜 Independence Stories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>American flags tell powerful stories of liberation from colonial rule and the birth of modern democratic nations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🤝 Regional Cooperation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>The Americas are increasingly connected through trade agreements like NAFTA, making flag knowledge valuable for business.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎭 Cultural Diversity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>From Inuit cultures to Amazonian tribes, American flags represent incredible linguistic and cultural diversity.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore the Americas?</h2>
            <p className="text-xl mb-6 opacity-90">
              Journey from Canada's maple leaf to Chile's lone star through the flags of the Americas!
            </p>
            <Link href="/">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Americas Flag Quiz
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
            name: "Flags of the Americas and Histories",
            description: "Table of American countries with flags, 250-word histories, and links to detailed pages.",
            url: "https://flaggle.fun/america-flags",
            itemListOrder: "http://schema.org/ItemListOrderAscending",
            educationalLevel: "Beginner to Advanced", 
            itemListElement: [
              {"@type": "ListItem", position: 1, name: "United States", url: "https://flaggle.fun/flags/united-states"},
              {"@type": "ListItem", position: 2, name: "Brazil", url: "https://flaggle.fun/flags/brazil"}
            ],
            audience: {
              "@type": "EducationalAudience",
              audienceType: "Students, Teachers, History Enthusiasts"
            },
            about: {
              "@type": "Place",
              name: "Americas",
              description: "Western Hemisphere continents featuring 35+ countries with flags reflecting independence movements and cultural diversity"
            }
          })
        }}
      />
    </div>
  )
}

