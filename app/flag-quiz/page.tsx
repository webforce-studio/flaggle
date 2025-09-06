import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play, Globe, Trophy, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flag Quiz Game - Test Your Geography Knowledge | Flaggle',
  description: 'Play our free flag quiz game and test your knowledge of world flags. Challenge yourself with countries from every continent. Perfect for students, teachers, and geography enthusiasts!',
  keywords: 'flag quiz, world flag quiz, country flag quiz, geography quiz, flag game, world flags, country flags, geography test',
  openGraph: {
    title: 'Flag Quiz Game - Test Your Geography Knowledge | Flaggle',
    description: 'Play our free flag quiz game and test your knowledge of world flags. Challenge yourself with countries from every continent.',
    type: 'website',
    url: 'https://www.flaggle.fun/flag-quiz',
  },
  alternates: {
    canonical: 'https://www.flaggle.fun/flag-quiz',
  },
}

export default function FlagQuizPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Flag Quiz Game
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Test your knowledge of world flags with our comprehensive flag quiz game. 
          Challenge yourself with countries from every continent and become a geography expert!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Play className="h-8 w-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Daily Challenge</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Play our daily flag guessing game where you get one new flag puzzle every day. 
            Perfect for building your geography knowledge gradually.
          </p>
          <Link href="/">
            <Button className="w-full">
              Play Daily Flag Game
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">World Flags</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore flags from all 195 countries around the world. Learn about different 
            cultures, histories, and the stories behind each flag design.
          </p>
          <Link href="/world-flag-quiz">
            <Button className="w-full">
              Explore World Flags
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Track Progress</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Monitor your improvement with detailed statistics. See your accuracy rates, 
            streak counts, and how you compare to other players.
          </p>
          <Link href="/">
            <Button className="w-full">
              View Statistics
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Learn & Discover</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Discover fascinating facts about countries, their histories, and the meanings 
            behind their flag designs. Education meets entertainment!
          </p>
          <Link href="/flag-facts">
            <Button className="w-full">
              Learn Flag Facts
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Why Choose Our Flag Quiz?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">195+</div>
            <div className="text-gray-600 dark:text-gray-300">Countries Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Free</div>
            <div className="text-gray-600 dark:text-gray-300">No Registration Required</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Daily</div>
            <div className="text-gray-600 dark:text-gray-300">New Challenges</div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          How to Play the Flag Quiz Game
        </h2>
        <ol className="text-gray-700 dark:text-gray-200 space-y-2">
          <li><strong>Start the Game:</strong> Click "Play Daily Flag Game" to begin your flag quiz challenge.</li>
          <li><strong>Guess the Country:</strong> Look at the flag image and try to identify which country it belongs to.</li>
          <li><strong>Use Hints:</strong> If you're stuck, use the available hints to narrow down your options.</li>
          <li><strong>Learn Facts:</strong> After each guess, discover interesting facts about the country and its flag.</li>
          <li><strong>Track Progress:</strong> Monitor your accuracy and see how you improve over time.</li>
        </ol>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Perfect for Students, Teachers, and Geography Enthusiasts
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          Our flag quiz game is designed to be both educational and entertaining. Whether you're a student 
          studying geography, a teacher looking for engaging classroom activities, or simply someone who loves 
          learning about different cultures, our flag quiz provides the perfect platform to test and expand 
          your knowledge of world flags.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Explore Flags by Region
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/europe-flags" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">European Flags</h3>
            <p className="text-gray-600 dark:text-gray-300">Test your knowledge of European country flags</p>
          </Link>
          <Link href="/asia-flags" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Asian Flags</h3>
            <p className="text-gray-600 dark:text-gray-300">Explore flags from Asian countries</p>
          </Link>
          <Link href="/africa-flags" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">African Flags</h3>
            <p className="text-gray-600 dark:text-gray-300">Learn about African country flags</p>
          </Link>
          <Link href="/america-flags" className="block p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Americas Flags</h3>
            <p className="text-gray-600 dark:text-gray-300">Discover flags from North and South America</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
