"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, BarChart3, Sun, Moon } from "lucide-react"

export function Header({
  darkMode,
  toggleDarkMode,
  showStats,
  setShowStats,
  showHowToPlay,
  setShowHowToPlay,
}: {
  darkMode: boolean
  toggleDarkMode: () => void
  showStats: boolean
  setShowStats: (show: boolean) => void
  showHowToPlay: boolean
  setShowHowToPlay: (show: boolean) => void
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="bg-white dark:bg-gray-800 py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <Image src="/flagguesser.png" alt="Flagguesser" fill className="object-contain" />
            </div>
            <Link href="/" className="text-3xl font-bold text-blue-500 monument-title">
              Flagguesser
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowHowToPlay(!showHowToPlay)}
            className="p-2 rounded-xl bg-blue-500 text-gray-50 hover:bg-blue-400 transition-colors"
          >
            <Calendar size={20} />
          </button>
          <button
            onClick={() => setShowStats(!showStats)}
            className="p-2 rounded-xl bg-blue-500 text-gray-50 hover:bg-blue-400 transition-colors"
          >
            <BarChart3 size={20} />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl bg-blue-500 text-gray-50 hover:bg-blue-400 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
