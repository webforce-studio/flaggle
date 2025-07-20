import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Brain, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Learn Geography Through Daily Monument Discovery",
  description:
    "Master world geography by playing Monumentle daily. Identify monuments, learn their locations, and build geographic knowledge one landmark at a time.",
  keywords:
    "learn geography, geography education, geography games, world geography learning, educational geography, geography for students, Monumentle",
}

export default function LearnGeographyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              Learn Geography Through Daily Monument Discovery
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Master world geography by playing Monumentle daily. Identify monuments, learn their locations, and build
              geographic knowledge one landmark at a time.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">Play Monumentle</Button>
            </Link>
          </div>

          {/* Learning Benefits */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              How Monumentle Builds Geography Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <Brain className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location Awareness</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Discover where famous monuments are located around the world.
                </p>
              </div>
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cultural Context</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Learn about the history and cultural significance of each monument.
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-amber-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Progressive Learning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Consistent play naturally builds geographic knowledge over time.
                </p>
              </div>
            </div>
          </div>

          {/* Study Tips */}
          <div className="bg-amber-50 dark:bg-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Tips for Monumentle Players</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Maximize Your Learning</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Pay attention to the monument's location on the map</li>
                  <li>• Research the monument after guessing</li>
                  <li>• Explore the surrounding region</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Enhance Your Game</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Use hints strategically</li>
                  <li>• Share your guesses with friends</li>
                  <li>• Track your progress over time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
