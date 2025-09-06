import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Map, Globe, BookOpen, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Geography Quiz - Test Your World Knowledge | Flaggle',
  description: 'Comprehensive geography quiz covering countries, capitals, flags, and world facts. Perfect for students, teachers, and geography enthusiasts. Free and fun learning!',
  keywords: 'geography quiz, world geography, country quiz, capital cities, geography test, world knowledge, educational quiz',
  openGraph: {
    title: 'Geography Quiz - Test Your World Knowledge | Flaggle',
    description: 'Comprehensive geography quiz covering countries, capitals, flags, and world facts. Perfect for students, teachers, and geography enthusiasts.',
    type: 'website',
    url: 'https://www.flaggle.fun/geography-quiz',
  },
  alternates: {
    canonical: 'https://www.flaggle.fun/geography-quiz',
  },
}

export default function GeographyQuizPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Geography Quiz
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Test your knowledge of world geography with our comprehensive quiz covering countries, 
          capitals, flags, and fascinating world facts. Perfect for students and geography lovers!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Map className="h-8 w-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Flag Geography</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn geography through flags! Identify countries by their flags and discover 
            their locations, capitals, and cultural significance.
          </p>
          <Link href="/flag-quiz">
            <Button className="w-full">
              Start Flag Quiz
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">World Knowledge</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Test your knowledge of world facts, capitals, populations, and geographical 
            features from every continent.
          </p>
          <Link href="/world-flag-quiz">
            <Button className="w-full">
              Explore World
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Learn & Study</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Access our comprehensive database of country information, flag meanings, 
            and geographical facts to enhance your learning.
          </p>
          <Link href="/flag-facts">
            <Button className="w-full">
              Study Materials
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Track Progress</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Monitor your geography knowledge improvement with detailed statistics, 
            achievements, and progress tracking.
          </p>
          <Link href="/">
            <Button className="w-full">
              View Statistics
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Geography Quiz Topics
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">195</div>
            <div className="text-gray-600 dark:text-gray-300">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">195</div>
            <div className="text-gray-600 dark:text-gray-300">Capitals</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-300">Continents</div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Why Geography Matters
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Geography is more than just memorizing capitals and countries. It's about understanding 
          our world, its cultures, environments, and how everything connects. Our geography quiz 
          helps you develop this crucial knowledge through interactive learning and engaging challenges.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Quiz Categories
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Flag Identification</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Identify countries by their flags</li>
              <li>• Learn flag meanings and symbolism</li>
              <li>• Understand cultural significance</li>
              <li>• Master visual geography</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Country Knowledge</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Capital cities and major cities</li>
              <li>• Population and demographics</li>
              <li>• Languages and cultures</li>
              <li>• Historical facts</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Physical Geography</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Mountains, rivers, and lakes</li>
              <li>• Climate and weather patterns</li>
              <li>• Natural resources</li>
              <li>• Environmental features</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Regional Focus</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• European geography</li>
              <li>• Asian countries and cultures</li>
              <li>• African nations and history</li>
              <li>• Americas and Oceania</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Perfect for Students and Educators
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">For Students</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2">
              <li>• Improve test scores in geography classes</li>
              <li>• Learn through interactive, visual methods</li>
              <li>• Build confidence in world knowledge</li>
              <li>• Prepare for standardized tests</li>
              <li>• Develop cultural awareness</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">For Teachers</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-2">
              <li>• Engaging classroom activities</li>
              <li>• Visual learning tools</li>
              <li>• Progress tracking for students</li>
              <li>• Free educational resources</li>
              <li>• Customizable difficulty levels</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Start Learning Today
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Whether you're preparing for a geography test, teaching a class, or simply want to 
          expand your world knowledge, our geography quiz provides the perfect platform. 
          Start with our daily flag game for a gentle introduction, or dive into our comprehensive 
          world geography quiz for a complete challenge.
        </p>

        <div className="text-center">
          <Link href="/flag-quiz">
            <Button size="lg" className="mr-4">
              Start Flag Quiz
            </Button>
          </Link>
          <Link href="/world-flag-quiz">
            <Button size="lg" variant="outline">
              World Geography Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}