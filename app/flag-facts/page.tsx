"use client"

import { Metadata } from 'next'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, Globe, Star, Heart, Crown, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Flag Facts - Learn About World Flags and Their Meanings | Flaggle',
  description: 'Discover fascinating facts about world flags! Learn about flag designs, colors, symbols, and the stories behind flags from every country. Perfect for students, teachers, and flag enthusiasts.',
  keywords: 'flag facts, world flag facts, flag meanings, flag symbols, flag colors, flag history, country flags, flag education, flag trivia',
  openGraph: {
    title: 'Flag Facts - Learn About World Flags and Their Meanings | Flaggle',
    description: 'Discover fascinating facts about world flags! Learn about flag designs, colors, symbols, and the stories behind flags from every country.',
    type: 'website',
    url: 'https://www.flaggle.fun/flag-facts',
  },
  alternates: {
    canonical: 'https://www.flaggle.fun/flag-facts',
  },
}

export default function FlagFactsPage() {
  const { theme } = useTheme()
  const [darkMode, setDarkMode] = useState(true)

  // reflect global theme into local state
  useEffect(() => {
    setDarkMode(theme === "dark")
  }, [theme])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100"
          : "bg-gradient-to-br from-blue-50 to-indigo-50 text-slate-900"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Flag Facts & Meanings
          </h1>
          <p className={`text-xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Discover the fascinating stories behind world flags! Learn about colors, symbols, 
            designs, and the rich history that makes each flag unique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                <Globe className="w-5 h-5 mr-2" />
                Play Daily Flag Game
              </Button>
            </Link>
            <Link href="/flag-quiz">
              <Button variant="outline" className={`border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg ${
                darkMode ? "hover:bg-blue-900/20" : ""
              }`}>
                <BookOpen className="w-5 h-5 mr-2" />
                Flag Quiz Hub
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <Star className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Flag Colors</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Learn what different colors represent in flags around the world. 
              From red symbolizing courage to blue representing freedom and peace.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 rounded-full text-sm">Red: Courage</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">Blue: Freedom</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">Green: Nature</span>
            </div>
          </div>

          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Symbols & Meanings</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Explore the symbols used in flags and their cultural significance. 
              From stars and crosses to animals and natural elements.
            </p>
            <div className="space-y-2">
              <div className={`flex items-center ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Stars: Unity & Hope</span>
              </div>
              <div className={`flex items-center ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                <Crown className="h-4 w-4 text-purple-500 mr-2" />
                <span>Crosses: Faith & Heritage</span>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-green-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Regional Styles</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Discover how different regions have developed their own flag traditions. 
              From Nordic crosses to African pan-colors.
            </p>
            <Link href="/europe-flags">
              <Button variant="outline" className="w-full">
                Explore Regional Flags
              </Button>
            </Link>
          </div>
        </div>

        <div className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
          darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
        }`}>
          <h2 className={`text-3xl font-bold text-center mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Fascinating Flag Facts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🇳🇵</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Unique Shapes</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Nepal has the only non-rectangular flag in the world - it's made of two triangles.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🇱🇮</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Similar Designs</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Haiti and Liechtenstein had identical flags until 1936 - neither country knew!
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🇩🇰</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Oldest Flag</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Denmark's flag is the oldest continuously used national flag, dating back to 1219.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🇺🇸</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Most Stars</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                The US flag has 50 stars, but Brazil's flag has 27 stars representing its states.
              </p>
            </div>
          </div>
        </div>

        <div className={`rounded-lg shadow-lg p-8 mt-8 transition-colors duration-300 ${
          darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
        }`}>
          <h2 className={`text-3xl font-bold text-center mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Educational Content</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Perfect for students, teachers, and anyone interested in world cultures and history.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Interactive Learning</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Learn through our interactive flag games and quizzes that make education fun.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Global Perspective</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Develop a deeper understanding of our diverse world through flag symbolism.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className={`text-2xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Ready to Learn About Flags?
          </h2>
          <p className={`mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Start with our daily flag game or explore our comprehensive flag quiz collection.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                <Globe className="w-5 h-5 mr-2" />
                Play Daily Flag Game
              </Button>
            </Link>
            <Link href="/flag-quiz">
              <Button variant="outline" className={`border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg ${
                darkMode ? "hover:bg-blue-900/20" : ""
              }`}>
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Flag Quiz Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}