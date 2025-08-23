import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RegionFlagTable } from "@/components/region-flag-table"

export const metadata: Metadata = {
  title: "Africa Flag Quiz - Master All African Country Flags | flaggle.fun",
  description:
    "Challenge yourself with our comprehensive Africa flag quiz! Learn about 54 African country flags including South Africa, Nigeria, Egypt, Kenya and more. Test your African geography knowledge.",
  keywords: "africa flag quiz, african flags game, african country flags, africa geography quiz, african flag guessing game, flaggle africa, learn african flags",
  openGraph: {
    title: "Africa Flag Quiz - Interactive African Flags Game",
    description: "Test your knowledge of African flags! Can you identify all 54 African country flags?",
    url: "https://flaggle.fun/africa-flags",
    type: "website",
  },
}

export default function AfricaFlagsPage() {
  const africanCountries = [
    { name: "South Africa", flag: "🇿🇦", region: "Southern Africa" },
    { name: "Nigeria", flag: "🇳🇬", region: "West Africa" },
    { name: "Egypt", flag: "🇪🇬", region: "North Africa" },
    { name: "Kenya", flag: "🇰🇪", region: "East Africa" },
    { name: "Morocco", flag: "🇲🇦", region: "North Africa" },
    { name: "Ghana", flag: "🇬🇭", region: "West Africa" },
    { name: "Ethiopia", flag: "🇪🇹", region: "East Africa" },
    { name: "Algeria", flag: "🇩🇿", region: "North Africa" },
    { name: "Tanzania", flag: "🇹🇿", region: "East Africa" },
    { name: "Uganda", flag: "🇺🇬", region: "East Africa" },
    { name: "Zimbabwe", flag: "🇿🇼", region: "Southern Africa" },
    { name: "Senegal", flag: "🇸🇳", region: "West Africa" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Africa Flag Quiz Challenge
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore the vibrant flags of Africa! Test your knowledge of 54 African country flags, 
              from the Rainbow Nation's complex design to the simple elegance of Libya's flag.
            </p>
            <Link href="/">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Play Flaggle
              </Button>
            </Link>
          </div>

          {/* African Flags Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              African Flags and Histories
            </h2>
            <RegionFlagTable region="Africa" />
            <div className="mt-6 text-center">
              <Link href="/printable-flags">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Printable Flags</Button>
              </Link>
            </div>
          </div>

          {/* African Regions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              African Flag Regions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏜️ North Africa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Algeria, Egypt, Libya, Morocco, Sudan, Tunisia</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Often featuring Islamic symbols and Pan-Arab colors
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🌍 West Africa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Nigeria, Ghana, Senegal, Mali, Burkina Faso</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Pan-African colors prevalent: red, gold, green
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🦁 East Africa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Kenya, Ethiopia, Tanzania, Uganda, Rwanda</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Rich in symbolism with shields, spears, and natural elements
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">💎 Southern Africa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">South Africa, Zimbabwe, Botswana, Namibia</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Complex designs reflecting diverse populations
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏔️ Central Africa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Chad, Cameroon, CAR, DRC, Congo</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    French colonial influence visible in tricolor designs
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">🏝️ Island Nations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Madagascar, Mauritius, Seychelles, Cape Verde</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Unique designs reflecting island geography
                  </p>
                </CardContent>
              </Card>
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
              <Link href="/asia-flags"><Button variant="outline">Asia flags</Button></Link>
              <Link href="/america-flags"><Button variant="outline">Americas flags</Button></Link>
              <Link href="/oceania-flags"><Button variant="outline">Oceania flags</Button></Link>
              <Link href="/printable-flags"><Button>Printable flags hub</Button></Link>
            </div>
          </div>

          {/* African Flag Facts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Fascinating African Flag Facts
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇿🇦 Most Complex Flag</h3>
                  <p>South Africa's flag is one of the world's most complex, combining elements from multiple historical flags into a unified design representing the "Rainbow Nation."</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇱🇾 Simplest Flag</h3>
                  <p>Libya's current flag is one of the simplest in the world - just three horizontal stripes in red, black, and green with a white crescent and star.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🟢🟡🔴 Pan-African Colors</h3>
                  <p>Many African flags feature red, gold, and green - the Pan-African colors inspired by Ethiopia's flag, representing the blood of martyrs, mineral wealth, and fertile land.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">🇪🇹 Never Colonized</h3>
                  <p>Ethiopia's flag inspired many other African nations because Ethiopia was never fully colonized, making it a symbol of African independence.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Learn African Flags */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Why Learn African Flags?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🌍 Continental Diversity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Africa has 54 countries with incredible diversity in languages, cultures, and histories - all reflected in their unique flag designs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    📚 Historical Knowledge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>African flags tell stories of independence movements, cultural heritage, and the ongoing journey of African nations.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🎨 Symbolic Beauty
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>African flags feature beautiful symbolism - from Kenya's shield and spears to Morocco's pentagram star.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🌟 Challenge Level
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>African flags provide the perfect challenge for geography enthusiasts - distinctive yet numerous enough to test your skills.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore African Flags?</h2>
            <p className="text-xl mb-6 opacity-90">
              Discover the rich diversity of African nations through their colorful flags!
            </p>
            <Link href="/">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Africa Flag Quiz
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
            name: "African Flags and Histories",
            description: "Table of African countries with flags, 250-word histories, and links to detailed pages.",
            url: "https://flaggle.fun/africa-flags",
            itemListOrder: "http://schema.org/ItemListOrderAscending",
            educationalLevel: "Beginner to Advanced",
            itemListElement: [
              {"@type": "ListItem", position: 1, name: "South Africa", url: "https://flaggle.fun/flags/south-africa"},
              {"@type": "ListItem", position: 2, name: "Kenya", url: "https://flaggle.fun/flags/kenya"}
            ],
            audience: {
              "@type": "EducationalAudience",
              audienceType: "Students, Teachers, Geography Enthusiasts"
            },
            about: {
              "@type": "Place",
              name: "Africa",
              description: "Continent with 54 countries featuring diverse and symbolically rich flag designs"
            }
          })
        }}
      />
    </div>
  )
}

