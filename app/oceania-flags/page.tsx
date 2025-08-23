import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegionFlagTable } from "@/components/region-flag-table"

export const metadata: Metadata = {
  title: "Oceania Flag Quiz - Pacific Country Flags Challenge | flaggle.fun",
  description:
    "Test your knowledge of Oceania flags! Learn flags from Australia, New Zealand, Fiji, Samoa, Papua New Guinea and more Pacific nations. Interactive Oceania flag quiz.",
  keywords:
    "oceania flags, pacific flags, australia flag quiz, new zealand flag quiz, melanesia flags, micronesia flags, polynesia flags, oceania geography quiz, oceanian flag guessing game",
  openGraph: {
    title: "Oceania Flag Quiz - Interactive Pacific Flags Game",
    description:
      "Challenge yourself with Pacific flags! Can you identify flags from Australia, New Zealand, Fiji, Samoa and all Oceania countries?",
    url: "https://flaggle.fun/oceania-flags",
    type: "website",
  },
}

export default function OceaniaFlagsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-sky-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Oceania Flag Quiz Challenge
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore the flags of Oceania! From Australia's Southern Cross to Samoa's starry canton, test your knowledge of Pacific flags across Polynesia, Micronesia, and Melanesia.
            </p>
            <Link href="/">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg">Play Flaggle</Button>
            </Link>
          </div>

          {/* Oceania Flags Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Oceania Flags and Histories
            </h2>
            <RegionFlagTable region="Oceania" />
            <div className="mt-6 text-center">
              <Link href="/printable-flags">
                <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">Printable Flags</Button>
              </Link>
            </div>
          </div>

          {/* Oceania Regions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Pacific Regions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🇦🇺 Australasia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Australia, New Zealand</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Southern Cross motifs and colonial-era influences</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🌴 Melanesia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Papua New Guinea, Fiji, Solomon Islands, Vanuatu</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Bold color palettes and traditional symbolism</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏝️ Micronesia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Federated States of Micronesia, Palau, Nauru, Marshall Islands, Kiribati</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Star constellations and oceanic themes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🌺 Polynesia</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Samoa, Tonga, Tuvalu</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Cultural motifs with British ensign heritage</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏳️ Territories</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Guam, American Samoa, French Polynesia, New Caledonia, Wallis and Futuna</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Local emblems paired with administering-state ensigns</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-cyan-600 to-sky-600 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Pacific Flags?</h2>
            <p className="text-xl mb-6 opacity-90">Learn the stories behind Oceania’s unique flags and play the daily challenge.</p>
            <Link href="/">
              <Button className="bg-white text-cyan-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">Start Oceania Flag Quiz</Button>
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
            name: "Oceania Flags and Histories",
            description:
              "Table of Oceania countries with flags, 150-word histories, and links to detailed pages.",
            url: "https://flaggle.fun/oceania-flags",
            itemListOrder: "http://schema.org/ItemListOrderAscending",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Australia", url: "https://flaggle.fun/flags/australia" },
              { "@type": "ListItem", position: 2, name: "New Zealand", url: "https://flaggle.fun/flags/new-zealand" }
            ],
            about: { "@type": "Place", name: "Oceania", description: "Pacific region including Australasia, Melanesia, Micronesia, and Polynesia" }
          })
        }}
      />
    </div>
  )
}


