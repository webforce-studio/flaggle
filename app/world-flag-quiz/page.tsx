import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Globe, MapPin, Trophy, Star, Zap, Crown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'World Flag Quiz - Test Your Global Geography Knowledge | Flaggle',
  description: 'Challenge yourself with our comprehensive world flag quiz! Test your knowledge of flags from all 195 countries. Perfect for geography enthusiasts, students, and anyone who loves learning about the world.',
  keywords: 'world flag quiz, global flag quiz, country flag quiz, geography quiz, world flags, country flags, flag knowledge test, geography test',
  openGraph: {
    title: 'World Flag Quiz - Test Your Global Geography Knowledge | Flaggle',
    description: 'Challenge yourself with our comprehensive world flag quiz! Test your knowledge of flags from all 195 countries.',
    type: 'website',
    url: 'https://www.flaggle.fun/world-flag-quiz',
  },
  alternates: {
    canonical: 'https://www.flaggle.fun/world-flag-quiz',
  },
}

export default function WorldFlagQuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            World Flag Quiz
          </h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Test your knowledge of flags from all 195 countries around the world! 
            From the familiar to the obscure, challenge yourself with our comprehensive global flag quiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                <Globe className="w-5 h-5 mr-2" />
                Play Daily Flag Game
              </Button>
            </Link>
            <Link href="/flag-quiz">
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Flag Quiz Hub
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="rounded-lg shadow-lg p-6 transition-colors duration-300 bg-white dark:bg-slate-800 border-blue-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Continents</h2>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Test your knowledge of flags from Europe, Asia, Africa, Americas, and Oceania. 
              Cover all 195 countries in our comprehensive quiz.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Europe</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">Asia</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm">Africa</span>
            </div>
          </div>

          <div className="rounded-lg shadow-lg p-6 transition-colors duration-300 bg-white dark:bg-slate-800 border-blue-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Multiple Levels</h2>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Choose from beginner, intermediate, and expert levels. Start easy and work your way up 
              to master the most challenging flag combinations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Beginner: 20 flags</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Zap className="h-4 w-4 text-orange-500 mr-2" />
                <span>Intermediate: 50 flags</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Crown className="h-4 w-4 text-purple-500 mr-2" />
                <span>Expert: All 195 flags</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg p-6 transition-colors duration-300 bg-white dark:bg-slate-800 border-blue-200 dark:border-slate-700">
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Learn Geography</h2>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Each flag comes with country information including capital cities, 
              continents, and interesting facts about the nation.
            </p>
            <Link href="/flag-facts">
              <Button variant="outline" className="w-full">
                Learn Flag Facts
              </Button>
            </Link>
          </div>
        </div>

        <div className="rounded-lg shadow-lg p-8 transition-colors duration-300 bg-white dark:bg-slate-800 border-blue-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Quiz Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Multiple Choice</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose from 4 options for each flag question.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Timed Challenges</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Test your speed with timed quiz modes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Track Progress</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor your accuracy and improvement over time.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Achievements</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unlock badges and achievements as you progress.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Master World Flags?
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Start with our daily challenge or jump straight into the comprehensive world flag quiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                <Globe className="w-5 h-5 mr-2" />
                Play Daily Flag Game
              </Button>
            </Link>
            <Link href="/flag-quiz">
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Explore Flag Quiz Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}