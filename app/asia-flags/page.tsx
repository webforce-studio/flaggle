import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegionFlagTable } from "@/components/region-flag-table"

export const metadata: Metadata = {
  title: "Asia Flag Quiz - Master Asian Country Flags Challenge | flaggle.fun",
  description:
    "Test your knowledge of Asian flags! Learn about flags from China, Japan, India, South Korea, Thailand and all Asian countries. Interactive Asia flag guessing game.",
  keywords: "asia flag quiz, asian flags game, asian country flags, asia geography quiz, asian flag guessing game, flaggle asia, learn asian flags, oriental flags",
  openGraph: {
    title: "Asia Flag Quiz - Interactive Asian Flags Game",
    description: "Challenge yourself with Asian flags! Can you identify flags from all Asian countries?",
    url: "https://flaggle.fun/asia-flags",
    type: "website",
  },
}

export default function AsiaFlagsPage() {
  const asianCountries = [
    { name: "China", flag: "🇨🇳", region: "East Asia" },
    { name: "Japan", flag: "🇯🇵", region: "East Asia" },
    { name: "India", flag: "🇮🇳", region: "South Asia" },
    { name: "South Korea", flag: "🇰🇷", region: "East Asia" },
    { name: "Thailand", flag: "🇹🇭", region: "Southeast Asia" },
    { name: "Vietnam", flag: "🇻🇳", region: "Southeast Asia" },
    { name: "Indonesia", flag: "🇮🇩", region: "Southeast Asia" },
    { name: "Malaysia", flag: "🇲🇾", region: "Southeast Asia" },
    { name: "Philippines", flag: "🇵🇭", region: "Southeast Asia" },
    { name: "Singapore", flag: "🇸🇬", region: "Southeast Asia" },
    { name: "Pakistan", flag: "🇵🇰", region: "South Asia" },
    { name: "Bangladesh", flag: "🇧🇩", region: "South Asia" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Asia Flag Quiz Challenge
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover the fascinating flags of Asia! From Japan's rising sun to Malaysia's crescent moon, 
              test your knowledge of 48+ Asian country flags across this diverse continent.
            </p>
            <Link href="/">
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg">
                Play Flaggle
              </Button>
            </Link>
          </div>

          {/* Asian Flags Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Asian Flags and Histories
            </h2>
            <RegionFlagTable region="Asia" />
            <div className="mt-6 text-center">
              <Link href="/printable-flags">
                <Button className="bg-red-500 hover:bg-red-600 text-white">Printable Flags</Button>
              </Link>
            </div>
          </div>

          {/* Asian Regions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Asian Flag Regions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏯 East Asia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">China, Japan, South Korea, North Korea, Mongolia</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Minimalist designs with deep cultural symbolism
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏔️ South Asia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">India, Pakistan, Bangladesh, Sri Lanka, Nepal</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Rich colors representing diverse religions and cultures
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🌴 Southeast Asia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Indonesia, Thailand, Vietnam, Philippines, Malaysia</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Tropical colors with colonial and independence influences
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏜️ Central Asia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Nomadic heritage reflected in traditional patterns
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🕌 Western Asia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Turkey, Iran, Iraq, Saudi Arabia, UAE</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Islamic symbols and Pan-Arab color influences
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">❄️ North Asia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Russia (Asian part), Siberian regions</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Vast territories with European-influenced designs
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Asian Flag Facts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Amazing Asian Flag Facts
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇯🇵 Land of the Rising Sun</h3>
                  <p>Japan's flag, the Hinomaru, features a red circle representing the sun on a white background. It's one of the world's oldest flag designs, dating back over 1,000 years.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇳🇵 Unique Shape</h3>
                  <p>Nepal's flag is the only non-rectangular national flag in the world, featuring two triangular pennants that represent the Himalayas and the two major religions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇰🇷 Yin and Yang</h3>
                  <p>South Korea's flag features the yin-yang symbol (Taeguk) surrounded by four trigrams from the I Ching, representing universal elements and balance.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇮🇳 Wheel of Dharma</h3>
                  <p>India's flag features the Ashoka Chakra, a 24-spoke wheel representing eternal law and righteousness in Buddhist and Hindu traditions.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Learn Asian Flags */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Why Learn Asian Flags?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🌏 Largest Continent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Asia covers 30% of Earth's land area and contains 48+ countries, making it essential for global geography knowledge.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🏛️ Ancient Civilizations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Asian flags represent some of the world's oldest civilizations and richest cultural traditions spanning thousands of years.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    💼 Economic Powerhouses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Many Asian countries are major economic powers. Knowing their flags is valuable for business and international relations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎨 Symbolic Depth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Asian flags feature profound symbolism from ancient philosophies, religions, and cultural traditions.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-red-500 to-pink-600 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Asian Flags?</h2>
            <p className="text-xl mb-6 opacity-90">
              Explore the rich symbolism and diversity of Asian nations through their beautiful flags!
            </p>
            <Link href="/">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Asia Flag Quiz
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
            name: "Asian Flags and Histories",
            description: "Table of Asian countries with flags, 250-word histories, and links to detailed pages.",
            url: "https://flaggle.fun/asia-flags",
            itemListOrder: "http://schema.org/ItemListOrderAscending",
            educationalLevel: "Beginner to Advanced",
            itemListElement: [
              {"@type": "ListItem", position: 1, name: "Japan", url: "https://flaggle.fun/flags/japan"},
              {"@type": "ListItem", position: 2, name: "India", url: "https://flaggle.fun/flags/india"}
            ],
            audience: {
              "@type": "EducationalAudience",
              audienceType: "Students, Teachers, Cultural Enthusiasts"
            },
            about: {
              "@type": "Place",
              name: "Asia",
              description: "World's largest continent with 48+ countries featuring deeply symbolic flag designs"
            }
          })
        }}
      />
    </div>
  )
}

