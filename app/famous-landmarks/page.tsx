import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Map, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Famous Landmarks & World Monuments in Monumentle | Iconic Landmarks Quiz",
  description:
    "Discover the world's most iconic monuments and famous landmarks featured in Monumentle. Learn about architectural marvels, cultural heritage sites, and world wonders through our interactive guessing game.",
  keywords: "famous landmarks quiz, world monuments game, iconic monuments guessing, learn about monuments, Monumentle landmark list, world heritage sites",
  openGraph: {
    title: "Famous Landmarks & World Monuments in Monumentle",
    description: "Explore iconic monuments and world heritage sites through interactive guessing challenges.",
    type: "website",
  },
}

export default function FamousLandmarksPage() {
  const landmarks = [
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      description: "Iconic iron lattice tower and symbol of France, completed in 1889 for the World's Fair",
    },
    {
      name: "Great Wall of China",
      location: "China",
      description: "Ancient fortification stretching over 13,000 miles, built over centuries to protect against invasions",
    },
    {
      name: "Machu Picchu",
      location: "Peru",
      description: "Ancient Incan citadel high in the Andes Mountains, built in the 15th century",
    },
    {
      name: "Taj Mahal",
      location: "Agra, India",
      description: "Magnificent white marble mausoleum built by Emperor Shah Jahan in memory of his wife",
    },
    {
      name: "Colosseum",
      location: "Rome, Italy",
      description: "Ancient Roman amphitheater and architectural marvel, completed in 80 AD",
    },
    {
      name: "Christ the Redeemer",
      location: "Rio de Janeiro, Brazil",
      description: "Art Deco statue overlooking the city, completed in 1931 and standing 98 feet tall",
    },
    {
      name: "Statue of Liberty",
      location: "New York, USA",
      description: "Copper statue gifted by France, symbolizing freedom and democracy since 1886",
    },
    {
      name: "Sydney Opera House",
      location: "Sydney, Australia",
      description: "Distinctive sail-shaped performing arts center, completed in 1973",
    },
    {
      name: "Pyramids of Giza",
      location: "Egypt",
      description: "Ancient Egyptian pyramids built as tombs for pharaohs, dating back over 4,500 years",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              Discover the World's Most Iconic Monuments & Famous Landmarks
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore the world's most iconic monuments and architectural marvels through our interactive guessing game. 
              Each day features a different famous landmark, teaching you about world heritage sites and cultural significance.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">Start Exploring Monuments</Button>
            </Link>
          </div>

          {/* Featured Landmarks */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">World Heritage Monuments</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
              Monumentle features a curated selection of the most iconic, historically significant, and visually stunning 
              landmarks from around the globe. Each monument tells a unique story of human achievement and cultural heritage.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landmarks.map((landmark, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{landmark.name}</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">{landmark.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{landmark.description}</p>
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
                <CardTitle className="text-lg">Daily Landmark Reveal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Each day, Monumentle presents a new famous landmark to discover.
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
                  Uncover historical facts and cultural significance as you identify each monument.
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
                  Show off your monument knowledge and challenge your friends.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Educational Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Understanding World Heritage & Cultural Significance</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Famous landmarks represent the pinnacle of human achievement in architecture, engineering, and cultural
                expression. These monuments tell the stories of civilizations, showcase artistic mastery, and serve as
                symbols of national identity and cultural heritage.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By learning about these landmarks through Monumentle, you gain valuable insights into:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• <strong>Historical significance</strong> and cultural context of each monument</li>
                <li>• <strong>Architectural styles</strong> and engineering innovations across different eras</li>
                <li>• <strong>Geographic distribution</strong> of world heritage sites and their locations</li>
                <li>• <strong>Conservation efforts</strong> and the importance of preserving cultural heritage</li>
                <li>• <strong>Cultural diversity</strong> and the unique stories behind each landmark</li>
                <li>• <strong>Tourism impact</strong> and the role of monuments in global culture</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-6">
                Monumentle's interactive approach makes learning about these cultural treasures engaging and memorable. 
                Each daily challenge not only tests your knowledge but also educates you about the rich history and 
                significance of world-famous monuments.
              </p>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg p-8 text-white shadow-lg mt-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore World Monuments?</h2>
            <p className="text-xl mb-6 opacity-90">
              Start discovering the world's most iconic landmarks through our interactive game!
            </p>
            <Link href="/">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Start Exploring Monuments
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
