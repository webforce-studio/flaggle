import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Map, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "World Flags & Countries in Flagguesser | International Flags Quiz",
  description:
    "Discover the world's most iconic flags and countries featured in Flagguesser. Learn about national symbols, cultural heritage, and world geography through our interactive guessing game.",
  keywords: "world flags quiz, international flags game, country flags guessing, learn about flags, Flagguesser flag list, world geography",
  openGraph: {
    title: "World Flags & Countries in Flagguesser",
    description: "Explore international flags and world geography through interactive guessing challenges.",
    type: "website",
  },
}

export default function WorldFlagsPage() {
  const flags = [
    {
      name: "United States",
      location: "North America",
      description: "Stars and stripes representing the 50 states and 13 original colonies, symbolizing freedom and democracy",
    },
    {
      name: "United Kingdom",
      location: "Europe",
      description: "Union Jack combining the crosses of England, Scotland, and Northern Ireland",
    },
    {
      name: "Japan",
      location: "Asia",
      description: "Red circle representing the sun on a white background, symbolizing the Land of the Rising Sun",
    },
    {
      name: "Brazil",
      location: "South America",
      description: "Green field with yellow diamond and blue circle with stars representing the night sky over Rio",
    },
    {
      name: "Australia",
      location: "Oceania",
      description: "Blue field with Union Jack and Commonwealth Star, plus Southern Cross constellation",
    },
    {
      name: "Canada",
      location: "North America",
      description: "Red maple leaf on white square with red bands, symbolizing the country's natural beauty",
    },
    {
      name: "Germany",
      location: "Europe",
      description: "Three horizontal stripes of black, red, and gold representing unity and democracy",
    },
    {
      name: "France",
      location: "Europe",
      description: "Tricolor of blue, white, and red representing liberty, equality, and fraternity",
    },
    {
      name: "South Africa",
      location: "Africa",
      description: "Six colors representing the country's diverse population and natural resources",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              Discover the World's Most Iconic Flags & Countries
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore the world's most iconic flags and national symbols through our interactive guessing game. 
              Each day features a different world flag, teaching you about world geography and cultural significance.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">Start Exploring Flags</Button>
            </Link>
          </div>

          {/* Featured Landmarks */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">World Flags & Countries</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
              Flagguesser features a curated selection of the most iconic, historically significant, and visually stunning 
              flags from around the globe. Each flag tells a unique story of national identity and cultural heritage.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flags.map((flag, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{flag.name}</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">{flag.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{flag.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quiz Features */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <Card className="text-center shadow-lg">
              <CardHeader>
                <Camera className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Daily Flag Reveal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Each day, Flagguesser presents a new world flag to discover.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader>
                <Map className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Learn Through Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Uncover historical facts and cultural significance as you identify each flag.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg">
              <CardHeader>
                <Users className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Share Your Daily Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Show off your flag knowledge and challenge your friends.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Educational Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Understanding World Flags & National Identity</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                World flags represent the pinnacle of national identity, cultural heritage, and historical significance.
                These flags tell the stories of nations, showcase symbolic meanings, and serve as
                symbols of national pride and cultural heritage.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By learning about these flags through Flagguesser, you gain valuable insights into:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• <strong>Historical significance</strong> and cultural context of each flag</li>
                <li>• <strong>Symbolic meanings</strong> and design elements across different nations</li>
                <li>• <strong>Geographic distribution</strong> of countries and their regional connections</li>
                <li>• <strong>National identity</strong> and the importance of preserving cultural heritage</li>
                <li>• <strong>Cultural diversity</strong> and the unique stories behind each flag</li>
                <li>• <strong>International relations</strong> and the role of flags in global diplomacy</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-6">
                Flagguesser's interactive approach makes learning about these national symbols engaging and memorable. 
                Each daily challenge not only tests your knowledge but also educates you about the rich history and 
                significance of world flags.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white shadow-lg mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore World Flags?</h2>
            <p className="text-xl mb-6 opacity-90">
              Start discovering the world's most iconic flags through our interactive game!
            </p>
            <Link href="/">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Exploring Flags
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
