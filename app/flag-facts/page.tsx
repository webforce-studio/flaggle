import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Globe, History, Palette } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flag Facts - Learn About World Flags and Their Meanings | Flaggle',
  description: 'Discover fascinating facts about world flags, their history, symbolism, and meanings. Educational content about country flags from around the world.',
  keywords: 'flag facts, flag meanings, flag history, world flags, country flags, flag symbolism, flag education, geography facts',
  openGraph: {
    title: 'Flag Facts - Learn About World Flags and Their Meanings | Flaggle',
    description: 'Discover fascinating facts about world flags, their history, symbolism, and meanings. Educational content about country flags.',
    type: 'website',
    url: 'https://www.flaggle.fun/flag-facts',
  },
  alternates: {
    canonical: 'https://www.flaggle.fun/flag-facts',
  },
}

export default function FlagFactsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Flag Facts
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Discover the fascinating stories behind world flags. Learn about their history, 
          symbolism, and the meanings that make each flag unique and meaningful.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="h-8 w-8 text-blue-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Flag Meanings</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Every color, symbol, and pattern on a flag has a specific meaning. Learn about 
            the symbolism behind different flag designs and what they represent.
          </p>
          <Link href="/flag-quiz">
            <Button className="w-full">
              Explore Flag Meanings
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <History className="h-8 w-8 text-green-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Flag History</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Discover the historical origins of flags and how they evolved over time. 
            Learn about ancient flag traditions and modern flag designs.
          </p>
          <Link href="/world-flag-quiz">
            <Button className="w-full">
              Learn Flag History
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-purple-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">World Flags</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore flags from every continent and learn about the unique characteristics 
            that make each country's flag special and recognizable.
          </p>
          <Link href="/geography-quiz">
            <Button className="w-full">
              Study World Flags
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <Palette className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Flag Design</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Understand the principles of flag design and why certain patterns and colors 
            are commonly used in flag designs around the world.
          </p>
          <Link href="/">
            <Button className="w-full">
              Learn Design Principles
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-50 to-red-50 dark:from-yellow-900/20 dark:to-red-900/20 rounded-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Fascinating Flag Facts
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">195</div>
            <div className="text-gray-600 dark:text-gray-300">Countries with Flags</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">3</div>
            <div className="text-gray-600 dark:text-gray-300">Most Common Colors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
            <div className="text-gray-600 dark:text-gray-300">Years of Flag History</div>
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          The World of Flags
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Flags are more than just pieces of colored fabric - they are powerful symbols that represent 
          nations, cultures, and identities. Each flag tells a unique story about the country it represents, 
          from its history and values to its geography and people. Understanding flag meanings and symbolism 
          is a fascinating way to learn about the world and its diverse cultures.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Common Flag Colors and Their Meanings
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Red</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Blood, sacrifice, and courage</li>
              <li>• Revolution and independence</li>
              <li>• Strength and valor</li>
              <li>• Common in many flags worldwide</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Blue</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Sky, water, and peace</li>
              <li>• Freedom and justice</li>
              <li>• Trust and stability</li>
              <li>• Often represents water bodies</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Green</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Nature, agriculture, and fertility</li>
              <li>• Islam (in many Muslim countries)</li>
              <li>• Hope and prosperity</li>
              <li>• Environmental consciousness</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">White</h3>
            <ul className="text-gray-700 dark:text-gray-200 space-y-1">
              <li>• Peace, purity, and innocence</li>
              <li>• Surrender (in some contexts)</li>
              <li>• Snow and winter</li>
              <li>• Neutrality and balance</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Interesting Flag Facts
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow mb-8">
          <ul className="text-gray-700 dark:text-gray-200 space-y-3">
            <li><strong>Oldest National Flag:</strong> Denmark's flag (Dannebrog) is considered the oldest continuously used national flag, dating back to 1219.</li>
            <li><strong>Most Complex Flag:</strong> The flag of Turkmenistan has the most complex design with detailed carpet patterns.</li>
            <li><strong>Square Flags:</strong> Only two countries have square flags: Switzerland and Vatican City.</li>
            <li><strong>Nepal's Unique Shape:</strong> Nepal is the only country with a non-rectangular flag - it's made of two triangular shapes.</li>
            <li><strong>Flag on the Moon:</strong> The United States flag was the first flag planted on the moon during the Apollo 11 mission.</li>
            <li><strong>Most Common Color:</strong> Red is the most commonly used color in national flags worldwide.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Flag Design Principles
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          Good flag design follows certain principles that make flags recognizable and meaningful. 
          These include simplicity, meaningful symbolism, appropriate use of colors, and distinctiveness 
          from other flags. Many flags also incorporate elements that reflect the country's geography, 
          history, or cultural heritage.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
          Learn Through Interactive Quizzes
        </h2>
        <p className="text-gray-700 dark:text-gray-200 mb-6">
          The best way to learn about flags is through hands-on experience. Our interactive flag quizzes 
          help you not only memorize flag designs but also understand their meanings and cultural significance. 
          Start with our daily flag game or dive into our comprehensive world flag quiz to begin your journey 
          into the fascinating world of vexillology (the study of flags).
        </p>

        <div className="text-center">
          <Link href="/flag-quiz">
            <Button size="lg" className="mr-4">
              Start Flag Quiz
            </Button>
          </Link>
          <Link href="/world-flag-quiz">
            <Button size="lg" variant="outline">
              World Flag Quiz
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
