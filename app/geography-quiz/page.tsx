"use client"

import { Metadata } from 'next'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, Globe, Compass, Mountain, Waves, Sun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Geography Quiz - Test Your World Knowledge | Flaggle',
  description: 'Challenge yourself with our comprehensive geography quiz! Test your knowledge of countries, capitals, landmarks, and world geography. Perfect for students, teachers, and geography enthusiasts.',
  keywords: 'geography quiz, world geography quiz, country quiz, capital quiz, geography test, world knowledge quiz, geography game, educational quiz',
  openGraph: {
    title: 'Geography Quiz - Test Your World Knowledge | Flaggle',
    description: 'Challenge yourself with our comprehensive geography quiz! Test your knowledge of countries, capitals, and world geography.',
    type: 'website',
    url: 'https://www.flaggle.fun/geography-quiz',
  },
  alternates: {
    canonical: 'https://www.flaggle.fun/geography-quiz',
  },
}

export default function GeographyQuizPage() {
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
            Geography Quiz
          </h1>
          <p className={`text-xl mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Test your knowledge of world geography! From countries and capitals to landmarks and natural features, 
            challenge yourself with our comprehensive geography quiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Play Daily Flag Game
              </Button>
            </Link>
            <Link href="/flag-quiz">
              <Button variant="outline" className={`border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg ${
                darkMode ? "hover:bg-blue-900/20" : ""
              }`}>
                <Globe className="w-5 h-5 mr-2" />
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
              <MapPin className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Countries & Capitals</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Test your knowledge of world countries and their capital cities. 
              From major powers to small island nations, master them all.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">195 Countries</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">All Continents</span>
            </div>
          </div>

          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <Mountain className="h-8 w-8 text-green-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Landmarks & Features</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Identify famous landmarks, mountain ranges, rivers, and natural features 
              from around the world.
            </p>
            <div className="space-y-2">
              <div className={`flex items-center ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                <Mountain className="h-4 w-4 text-green-500 mr-2" />
                <span>Mountains & Ranges</span>
              </div>
              <div className={`flex items-center ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                <Waves className="h-4 w-4 text-blue-500 mr-2" />
                <span>Rivers & Lakes</span>
              </div>
              <div className={`flex items-center ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                <Sun className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Deserts & Landscapes</span>
              </div>
            </div>
          </div>

          <div className={`rounded-lg shadow-lg p-6 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
          }`}>
            <div className="flex items-center mb-4">
              <Compass className="h-8 w-8 text-purple-500 mr-3" />
              <h2 className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Regional Knowledge</h2>
            </div>
            <p className={`mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              Focus on specific regions like Europe, Asia, Africa, or the Americas. 
              Perfect for targeted learning and practice.
            </p>
            <Link href="/europe-flags">
              <Button variant="outline" className="w-full">
                Explore Europe
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
            Quiz Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>World Countries</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Identify countries by their shapes, locations, and characteristics.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Capital Cities</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Match countries with their capital cities and major urban centers.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Physical Geography</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Learn about mountains, rivers, deserts, and other natural features.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Famous Landmarks</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Identify iconic landmarks and monuments from around the world.
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
            Learning Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Educational Value</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Perfect for students, teachers, and anyone looking to expand their world knowledge.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Memory Training</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Improve your memory and recall abilities through interactive geography challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>Global Awareness</h3>
              <p className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}>
                Develop a better understanding of our diverse and interconnected world.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className={`text-2xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            Ready to Explore the World?
          </h2>
          <p className={`mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            Start with our daily flag game or dive into the comprehensive geography quiz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg">
                <MapPin className="w-5 h-5 mr-2" />
                Play Daily Flag Game
              </Button>
            </Link>
            <Link href="/flag-quiz">
              <Button variant="outline" className={`border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 text-lg ${
                darkMode ? "hover:bg-blue-900/20" : ""
              }`}>
                <Globe className="w-5 h-5 mr-2" />
                Explore Flag Quiz Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}