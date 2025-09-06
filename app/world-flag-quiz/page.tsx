import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Globe, MapPin, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'World Flag Quiz - Test Your Knowledge of All Countries | Flaggle',
  description: 'Comprehensive world flag quiz featuring all 195 countries. Test your geography knowledge with flags from every continent. Perfect for students and geography enthusiasts!',
  keywords: 'world flag quiz, all country flags, world flags, geography quiz, country flags quiz, world geography, flag identification',
  openGraph: {
    title: 'World Flag Quiz - Test Your Knowledge of All Countries | Flaggle',
    description: 'Comprehensive world flag quiz featuring all 195 countries. Test your geography knowledge with flags from every continent.',
    type: 'website',
    url: 'https://www.flaggle.fun/world-flag-quiz',
  },
  alternates: {
    canonical: 'https://www.flaggle.fun/world-flag-quiz',
  },
}

export default function WorldFlagQuizPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          World Flag Quiz
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Master the flags of all 195 countries around the world. From the smallest island nations 
          to the largest continental powers, test your knowledge of every country's flag.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Countries</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Test your knowledge of flags from all 195 recognized countries worldwide. 
            From Afghanistan to Zimbabwe, challenge yourself with every nation.
          </p>
          <Link href="/">
            <Button className="w-full">
              Start World Quiz
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <MapPin className="h-8 w-8 text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">By Continent</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Focus your study on specific continents. Perfect for targeted learning 
            and improving your knowledge of particular regions.
          </p>
          <div className="space-y-2">
            <Link href="/europe-flags" className="block text-blue-600 dark:text-blue-400 hover:underline">
              European Flags →
            </Link>
            <Link href="/asia-flags" className="block text-blue-600 dark:text-blue-400 hover:underline">
              Asian Flags →
            </Link>
            <Link href="/africa-flags" className="block text-blue-600 dark:text-blue-400 hover:underline">
              African Flags →
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Study Mode</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn at your own pace with our comprehensive flag database. 
            Study flag designs, meanings, and country information.
          </p>
          <Link href="/flag-facts">
            <Button className="w-full">
              Study Flag Facts
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Award className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Unlock achievements as you master different regions and countries. 
            Track your progress and celebrate your geography expertise!
          </p>
          <Link href="/">
            <Button className="w-full">
              View Achievements
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          World Flag Quiz Statistics
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">195</div>
            <div className="text-gray-600 dark:text-gray-300">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-300">Continents</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24</div>
            <div className="text-gray-600 dark:text-gray-300">Time Zones</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">7.8B</div>
            <div className="text-gray-600 dark:text-gray-300">People</div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Master World Geography Through Flags
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Flags are more than just symbols - they represent the history, culture, and identity of nations. 
          Our world flag quiz helps you learn about countries through their most recognizable symbols. 
          Each flag tells a story, from the colors chosen to the symbols and patterns used.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Quiz Features
        </h2>
        <ul className="text-gray-700 dark:text-gray-200 space-y-2 mb-6">
          <li><strong>Comprehensive Coverage:</strong> All 195 UN member countries plus observer states</li>
          <li><strong>Multiple Difficulty Levels:</strong> From beginner to expert geography knowledge</li>
          <li><strong>Detailed Explanations:</strong> Learn the meaning behind each flag's design</li>
          <li><strong>Progress Tracking:</strong> Monitor your improvement over time</li>
          <li><strong>Mobile Friendly:</strong> Practice anywhere, anytime on any device</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Educational Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">For Students</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Improve geography knowledge</li>
              <li>• Learn country locations</li>
              <li>• Understand cultural symbols</li>
              <li>• Prepare for geography tests</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">For Teachers</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Engaging classroom activity</li>
              <li>• Visual learning tool</li>
              <li>• Progress tracking</li>
              <li>• Free educational resource</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Start Your Journey
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Ready to become a world flag expert? Start with our daily flag game to build your knowledge 
          gradually, or jump straight into the comprehensive world flag quiz to test your current skills. 
          Whether you're a geography student, teacher, or simply curious about the world, our flag quiz 
          is the perfect way to learn about countries and their cultures.
        </p>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="mr-4">
              Play Daily Flag Game
            </Button>
          </Link>
          <Link href="/flag-facts">
            <Button size="lg" variant="outline">
              Learn Flag Facts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
