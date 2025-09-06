"use client"

import { Metadata } from 'next'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
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
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Flag Quiz Game
          </h1>
          <p className={`text-xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Test your knowledge of world flags with our comprehensive flag quiz game. 
            Challenge yourself with countries from every continent and become a geography expert!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <Play className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Daily Challenge</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Play our daily flag guessing game where you get one new flag puzzle every day. 
              Perfect for building your geography knowledge gradually.
            </p>
            <Link href="/">
              <Button className="w-full">
                Play Daily Flag Game
              </Button>
            </Link>
          </div>

          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-green-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>World Flags</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Explore flags from all 195 countries around the world. Learn about different 
              cultures, histories, and the stories behind each flag design.
            </p>
            <Link href="/world-flag-quiz">
              <Button className="w-full">
                Explore World Flags
              </Button>
            </Link>
          </div>

          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <Trophy className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Track Progress</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Monitor your improvement with detailed statistics. See your accuracy rates, 
              streak counts, and how you compare to other players.
            </p>
            <Link href="/">
              <Button className="w-full">
                View Statistics
              </Button>
            </Link>
          </div>

          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-purple-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Learn & Explore</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Discover fascinating facts about countries, their flags, and cultures. 
              Perfect for students, teachers, and anyone curious about the world.
            </p>
            <Link href="/flag-facts">
              <Button className="w-full">
                Learn Flag Facts
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
            Why Choose Our Flag Quiz?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Accurate & Up-to-Date</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                All flag data is verified and regularly updated to ensure accuracy.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Educational Content</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Learn about countries, capitals, and the history behind each flag.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Track Your Progress</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Monitor your improvement with detailed statistics and achievements.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className={`text-2xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Ready to Test Your Knowledge?
          </h2>
          <p className={`mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Start with our daily challenge or dive into the comprehensive world flag quiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Play Daily Flag Game
              </Button>
            </Link>
            <Link href="/world-flag-quiz">
              <Button variant="outline" className={`border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg ${
                darkMode ? "hover:bg-blue-900/20" : ""
              }`}>
                <Globe className="w-5 h-5 mr-2" />
                World Flag Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}