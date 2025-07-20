"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Trophy, Share2, BarChart3, Flame, Zap, Crown, Star, Gem, MapPin, Facebook, Linkedin } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { StructuredData } from "@/components/structured-data"
import { XIcon } from "@/components/x-icon"
import { getCountries, getTodaysCountry, calculateDistance, type CountryData } from "@/lib/data"
// Game statistics interface
interface GameStats {
  gamesPlayed: number
  gamesWon: number
  currentStreak: number
  maxStreak: number
  guessDistribution: { [key: number]: number }
  lastPlayedDate?: string
}


const STREAK_MILESTONES = [
  {
    milestone: 3,
    title: "Explorer!",
    description: "3 countries in a row",
    icon: Flame,
    color: "text-blue-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    borderColor: "border-blue-600/30",
    perk: "Flag starts 10% clearer",
  },
  {
    milestone: 5,
    title: "World Traveler!",
    description: "5 countries in a row",
    icon: Trophy,
    color: "text-blue-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    borderColor: "border-blue-600/30",
    perk: "Flag starts 15% clearer",
  },
  {
    milestone: 7,
    title: "Flag Master!",
    description: "7 countries in a row",
    icon: Zap,
    color: "text-blue-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    borderColor: "border-blue-600/30",
    perk: "Flag starts 20% clearer",
  },
  {
    milestone: 10,
    title: "Cultural Expert!",
    description: "10 countries in a row",
    icon: Crown,
    color: "text-blue-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    borderColor: "border-blue-600/30",
    perk: "Flag starts 25% clearer",
  },
  {
    milestone: 15,
    title: "Heritage Guardian!",
    description: "15 countries in a row",
    icon: Star,
    color: "text-blue-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    borderColor: "border-blue-600/30",
    perk: "Flag starts 30% clearer",
  },
  {
    milestone: 20,
    title: "Flag Whisperer!",
    description: "20 countries in a row",
    icon: Gem,
    color: "text-blue-600",
    bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
    borderColor: "border-blue-600/30",
    perk: "Flag starts 35% clearer",
  },
]

const getEarnedBadges = (maxStreak: number) => {
  return STREAK_MILESTONES.map((milestone) => ({
    ...milestone,
    earned: maxStreak >= milestone.milestone,
  }))
}

const MAX_GUESSES = 6

// Helper function to check if two dates are consecutive days
const areConsecutiveDays = (date1: string, date2: string): boolean => {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  const diffTime = Math.abs(d2.getTime() - d1.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays === 1
}

// Helper function to get yesterday's date string
const getYesterday = (): string => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return yesterday.toDateString()
}

export default function Flaggle() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentCountry, setCurrentCountry] = useState<CountryData | null>(null)
  const [countries, setCountries] = useState<CountryData[]>([])
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [gameWon, setGameWon] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [stats, setStats] = useState<GameStats>({
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: {},
    lastPlayedDate: "",
  })
  const [showStats, setShowStats] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredCountries, setFilteredCountries] = useState<CountryData[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [guessResults, setGuessResults] = useState<
    Array<{
      guess: string
      distance: number
      direction: "closer" | "farther" | "exact"
      proximity: number
    }>
  >([])
  const [showStreakCelebration, setShowStreakCelebration] = useState(false)
  const [newStreakAchievement, setNewStreakAchievement] = useState<{
    milestone: number
    title: string
    description: string
    icon: any
    color: string
    bgColor: string
    borderColor: string
    perk?: string
  } | null>(null)
  const [showHowToPlay, setShowHowToPlay] = useState(false)
  const [revealedSquares, setRevealedSquares] = useState<number[]>([])
  const [animatingSquares, setAnimatingSquares] = useState<number[]>([])
  const [showSocialShare, setShowSocialShare] = useState(false)
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)

  const updateStats = (won: boolean) => {
    const today = new Date().toDateString()
    const newStats = { ...stats }

    // Only update if we haven't played today yet
    if (newStats.lastPlayedDate !== today) {
      newStats.gamesPlayed += 1

      if (won) {
        newStats.gamesWon += 1

        // Check if this continues a streak (played yesterday) or starts a new one
        const yesterday = getYesterday()
        if (newStats.lastPlayedDate === yesterday) {
          // Continue streak - played yesterday
          newStats.currentStreak += 1
        } else if (newStats.lastPlayedDate === "") {
          // First game ever
          newStats.currentStreak = 1
        } else {
          // Gap in playing - reset streak to 1
          newStats.currentStreak = 1
        }

        newStats.maxStreak = Math.max(newStats.maxStreak, newStats.currentStreak)

        // Check for streak milestones
        const achievement = STREAK_MILESTONES.find((m) => m.milestone === newStats.currentStreak)
        if (achievement) {
          setNewStreakAchievement(achievement)
          setShowStreakCelebration(true)
        }
      } else {
        // Lost the game - reset current streak to 0
        newStats.currentStreak = 0
      }

      newStats.lastPlayedDate = today
      setStats(newStats)
      localStorage.setItem("monumentle-stats", JSON.stringify(newStats))
    }
  }

  const saveGameState = (guesses: string[], won: boolean, over: boolean) => {
    const today = new Date().toDateString()
    const gameState = {
      guesses,
      gameWon: won,
      gameOver: over,
    }
    localStorage.setItem(`monumentle-game-${today}`, JSON.stringify(gameState))
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("monumentle-dark-mode", JSON.stringify(newDarkMode))

    // Update document class for dark mode
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  // Filter countries based on input
  const filterCountries = (input: string) => {
    if (!input.trim()) {
      setFilteredCountries([])
      setShowDropdown(false)
      return
    }

    const filtered = countries.filter((country) => {
      const fullName = country.name.toLowerCase()
      return fullName.includes(input.toLowerCase())
    })

    setFilteredCountries(filtered)
    setShowDropdown(filtered.length > 0)
    setSelectedIndex(-1)
  }

  const handleGuess = (guessText?: string) => {
    const guess = guessText || currentGuess.trim()
    if (!guess || gameOver) return

    // Find the guessed country
    const guessedCountry = countries.find((country) => country.name.toLowerCase() === guess.toLowerCase())

    const newGuesses = [...guesses, guess]
    setGuesses(newGuesses)

    // Calculate distance hint if country was found
    if (guessedCountry && currentCountry) {
      const hint = calculateDistanceHint(guessedCountry, currentCountry)
      const newResult = {
        guess,
        distance: hint.distance,
        direction: hint.direction as "closer" | "farther" | "exact",
        proximity: hint.proximity,
      }
      setGuessResults((prev) => [...prev, newResult])
    }

    setCurrentGuess("")
    setShowDropdown(false)
    setFilteredCountries([])

    // Reveal 4 random non-adjacent bars from unrevealed bars
    const unrevealedBars = Array.from({ length: 24 }, (_, i) => i).filter((i) => !revealedSquares.includes(i))

    if (unrevealedBars.length > 0) {
      const barsToReveal = []
      const availableBars = [...unrevealedBars]

      // Select 4 non-adjacent bars
      for (let i = 0; i < Math.min(4, availableBars.length); i++) {
        if (availableBars.length === 0) break

        const randomIndex = Math.floor(Math.random() * availableBars.length)
        const selectedBar = availableBars[randomIndex]
        barsToReveal.push(selectedBar)

        // Remove the selected bar and its adjacent bars from available options
        availableBars.splice(randomIndex, 1)

        // Remove adjacent bars (left and right neighbors)
        const leftNeighbor = selectedBar - 1
        const rightNeighbor = selectedBar + 1

        if (leftNeighbor >= 0) {
          const leftIndex = availableBars.indexOf(leftNeighbor)
          if (leftIndex !== -1) availableBars.splice(leftIndex, 1)
        }

        if (rightNeighbor < 24) {
          const rightIndex = availableBars.indexOf(rightNeighbor)
          if (rightIndex !== -1) availableBars.splice(rightIndex, 1)
        }
      }

      // Add animation
      setAnimatingSquares(barsToReveal)
      setTimeout(() => setAnimatingSquares([]), 800)

      // Update revealed bars immediately
      setRevealedSquares((prevRevealed) => [...prevRevealed, ...barsToReveal])
    }

    const isCorrect = guess.toLowerCase() === currentCountry?.name.toLowerCase()

    if (isCorrect) {
      setGameWon(true)
      setGameOver(true)
      // Reveal all bars when won
      setTimeout(() => setRevealedSquares(Array.from({ length: 24 }, (_, i) => i)), 300)
      updateStats(true)
      saveGameState(newGuesses, true, true)
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true)
      // Reveal all bars when game over
      setTimeout(() => setRevealedSquares(Array.from({ length: 24 }, (_, i) => i)), 300)
      updateStats(false)
      saveGameState(newGuesses, false, true)
    } else {
      saveGameState(newGuesses, false, false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCurrentGuess(value)
    filterCountries(value)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown) {
      if (e.key === "Enter") {
        handleGuess()
      }
      return
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < filteredMonuments.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0) {
          const selectedCountry = filteredCountries[selectedIndex]
          handleGuess(selectedCountry.name)
        } else {
          handleGuess()
        }
        break
      case "Escape":
        setShowDropdown(false)
        setFilteredCountries([])
        setSelectedIndex(-1)
        break
    }
  }

  const selectMonument = (monument: MonumentData) => {
    handleGuess(monument.name)
  }

  const shareResult = () => {
    // Always show social media options instead of trying Web Share API first
    setShowSocialShare(true)
  }

  const shareToSocial = (platform: string) => {
    const today = new Date().toLocaleDateString()
    const result = gameWon ? `${guesses.length}/${MAX_GUESSES}` : "X/6"
    const text = `Monumentle ${today} ${result} 🏛️ Daily monument guessing game`
    const url = "https://monumentle.fun"

    let shareUrl = ""

    switch (platform) {
      case "native":
        // Try native sharing first
        if (navigator.share && typeof navigator.share === "function") {
          try {
            navigator
              .share({
                title: "Monumentle Result",
                text: `${text}
Play at: ${url}`,
              })
              .catch((error) => {
                console.log("Error sharing:", error)
                copyToClipboard(`${text}
Play at: ${url}`)
              })
          } catch (error) {
            console.log("Error sharing:", error)
            copyToClipboard(`${text}
Play at: ${url}`)
          }
        } else {
          copyToClipboard(`${text}
Play at: ${url}`)
        }
        setShowSocialShare(false)
        return
      case "x":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`
        break
      case "copy":
        copyToClipboard(`${text}
Play at: ${url}`)
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
      setShowSocialShare(false)
    }
  }

  const copyToClipboard = (text: string) => {
    try {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedToClipboard(true)
          setTimeout(() => {
            setCopiedToClipboard(false)
            setShowSocialShare(false) // Close modal after showing copied state
          }, 2000)
        })
        .catch((err) => {
          console.error("Failed to copy: ", err)
          alert("Could not copy to clipboard. Please copy manually.")
        })
    } catch (error) {
      console.error("Clipboard API not available:", error)
      alert("Could not copy to clipboard. Please copy manually.")
    }
  }

  // Update the useEffect where imageBlur is set initially:
  useEffect(() => {
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem("monumentle-dark-mode")
    if (savedDarkMode) {
      const isDark = JSON.parse(savedDarkMode)
      setDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      // Default to dark mode
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }

    const savedStats = localStorage.getItem("monumentle-stats")
    let streakBonus = 0
    if (savedStats) {
      const parsedStats = JSON.parse(savedStats)

      // Check if streak should be reset due to missed days
      const today = new Date().toDateString()
      const yesterday = getYesterday()

      if (
        parsedStats.lastPlayedDate &&
        parsedStats.lastPlayedDate !== today &&
        parsedStats.lastPlayedDate !== yesterday
      ) {
        // Player missed more than one day, reset current streak
        parsedStats.currentStreak = 0
        localStorage.setItem("monumentle-stats", JSON.stringify(parsedStats))
      }

      setStats(parsedStats)

      // Set initial revealed bars with streak bonus (random selection, max 8 bars)
      streakBonus = Math.min(Math.floor(parsedStats.currentStreak / 3) * 4, 8) // Max 8 bonus bars
      if (streakBonus > 0) {
        const randomBars = []
        const availableBars = Array.from({ length: 24 }, (_, i) => i)

        for (let i = 0; i < streakBonus; i++) {
          if (availableBars.length === 0) break

          const randomIndex = Math.floor(Math.random() * availableBars.length)
          const selectedBar = availableBars[randomIndex]
          randomBars.push(selectedBar)

          // Remove the selected bar and its adjacent bars from available options
          availableBars.splice(randomIndex, 1)

          const leftNeighbor = selectedBar - 1
          const rightNeighbor = selectedBar + 1

          if (leftNeighbor >= 0) {
            const leftIndex = availableBars.indexOf(leftNeighbor)
            if (leftIndex !== -1) availableBars.splice(leftIndex, 1)
          }

          if (rightNeighbor < 24) {
            const rightIndex = availableBars.indexOf(rightNeighbor)
            if (rightIndex !== -1) availableBars.splice(rightIndex, 1)
          }
        }

        setRevealedSquares(randomBars)
      }
    }

    const today = new Date().toDateString()
    const savedGameState = localStorage.getItem(`monumentle-game-${today}`)

    if (savedGameState) {
      const gameState = JSON.parse(savedGameState)
      setGuesses(gameState.guesses)
      setGameWon(gameState.gameWon)
      setGameOver(gameState.gameOver)

      // For saved games, we need to reconstruct which bars should be revealed
      const totalBarsToReveal = streakBonus + gameState.guesses.length * 4

      if (gameState.gameOver) {
        setRevealedSquares(Array.from({ length: 24 }, (_, i) => i))
      } else if (totalBarsToReveal > 0) {
        // Generate the same random sequence for consistency
        const allBars = Array.from({ length: 24 }, (_, i) => i)
        const revealedBarsList = []

        // Use a simple seeded random based on today's date for consistency
        const seed = today.split("/").reduce((a, b) => a + Number.parseInt(b), 0)
        let random = seed

        for (let i = 0; i < Math.min(totalBarsToReveal, 24); i++) {
          if (allBars.length === 0) break

          random = (random * 9301 + 49297) % 233280
          const randomIndex = Math.floor((random / 233280) * allBars.length)
          const selectedBar = allBars[randomIndex]
          revealedBarsList.push(selectedBar)

          // Remove the selected bar and its adjacent bars
          allBars.splice(randomIndex, 1)

          const leftNeighbor = selectedBar - 1
          const rightNeighbor = selectedBar + 1

          if (leftNeighbor >= 0) {
            const leftIndex = allBars.indexOf(leftNeighbor)
            if (leftIndex !== -1) allBars.splice(leftIndex, 1)
          }

          if (rightNeighbor < 24) {
            const rightIndex = allBars.indexOf(rightNeighbor)
            if (rightIndex !== -1) allBars.splice(rightIndex, 1)
          }
        }

        setRevealedSquares(revealedBarsList)
      }
    }

    const fetchCountries = async () => {
      const countriesData = await getCountries()
      setCountries(countriesData)
      setCurrentCountry(getTodaysCountry())
    }

    fetchCountries()
  }, [])

  if (!currentCountry) return <div>Loading...</div>

  const calculateDistanceHint = (guessedCountry: CountryData, targetCountry: CountryData) => {
    const distance = calculateDistance(
      guessedCountry.latitude,
      guessedCountry.longitude,
      targetCountry.latitude,
      targetCountry.longitude,
    )

    const direction = distance === 0 ? "exact" : distance < 1000 ? "closer" : "farther"

    // Calculate proximity (0-100%) based on distance (assume max 20,000km for global range)
    const maxDistance = 20000 // Maximum possible distance on Earth
    const proximity = Math.max(0, Math.round((1 - distance / maxDistance) * 100))

    return { distance, direction, proximity }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100"
          : "bg-gradient-to-br from-amber-50 to-orange-50 text-slate-900"
      }`}
    >
      {/* SEO Content - Hidden but crawlable */}
      <div className="sr-only">
        <h1>Monumentle - Daily Monument Guessing Game</h1>
        <p>
          Play the ultimate daily monument puzzle game! Test your cultural knowledge by identifying famous world
          monuments from blurred images. Features iconic landmarks from around the globe including the Eiffel Tower,
          Pyramids of Giza, Statue of Liberty, and more. Free to play with new challenges every day.
        </p>
        <h2>How to Play Monumentle</h2>
        <p>
          Monumentle is a daily guessing game where you have 6 attempts to identify a mystery world monument. Each
          incorrect guess reveals more of the image and provides distance hints to help you solve the puzzle.
        </p>
        <h3>Game Features</h3>
        <ul>
          <li>Daily monument challenges with new landmarks every day</li>
          <li>45+ famous monuments and landmarks from around the world</li>
          <li>Progressive image reveal system</li>
          <li>Distance hints and proximity indicators</li>
          <li>Achievement system with streak bonuses</li>
          <li>Statistics tracking and cultural knowledge building</li>
        </ul>
        <h3>Featured Monuments</h3>
        <p>
          Our database includes the world's most famous man-made landmarks: Eiffel Tower (France), Great Pyramid of Giza
          (Egypt), Statue of Liberty (USA), Big Ben (UK), Colosseum (Italy), Taj Mahal (India), Christ the Redeemer
          (Brazil), Machu Picchu (Peru), Sydney Opera House (Australia), Great Wall of China, and many more historic
          architectural achievements. We focus exclusively on human-built monuments and structures, celebrating global
          cultural heritage without political bias.
        </p>
        <h3>Monument Wordle Alternative</h3>
        <p>
          If you love Wordle, you'll love Monumentle! It's like Wordle but for world monuments and landmarks. Test your
          geography and cultural knowledge with this engaging daily puzzle game.
        </p>
        <h3>Educational Benefits</h3>
        <p>
          Learn about world heritage sites, architectural styles, historical periods, and geographical locations while
          having fun. Perfect for students, travelers, and anyone interested in world culture and history.
        </p>
      </div>

      {/* Header Component */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        showStats={showStats}
        setShowStats={setShowStats}
        showHowToPlay={showHowToPlay}
        setShowHowToPlay={setShowHowToPlay}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Main Game Area */}
          <div className="space-y-6">
            {/* Monument Image with overlay reveal system */}
            <Card
              className={`transition-colors duration-300 ${
                darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
              }`}
            >
              <CardContent className="p-6">
                <div
                  className={`relative aspect-video rounded-lg overflow-hidden ${
                    darkMode ? "bg-slate-900" : "bg-amber-50"
                  }`}
                >
                  {/* Clear monument image - always visible and unblurred */}
                  <Image
                    src={currentMonument.image || "/placeholder.svg"}
                    alt={`Mystery monument puzzle - Guess the ${currentMonument.type} from ${currentMonument.country}`}
                    fill
                    className="object-cover"
                  />

                  {/* Blur overlay with vertical bars - only show during game */}
                  {!gameOver && (
                    <div className="absolute inset-0 flex">
                      {Array.from({ length: 24 }, (_, index) => {
                        const isRevealed = revealedSquares.includes(index)
                        const isAnimating = animatingSquares.includes(index)

                        return (
                          <div
                            key={index}
                            className={`flex-1 border-r border-white/10 last:border-r-0 transition-all duration-500 ${
                              isAnimating ? "animate-pulse" : ""
                            }`}
                            style={{
                              backgroundColor: isRevealed
                                ? "transparent"
                                : darkMode
                                  ? "rgba(245, 158, 11, 0.85)" // amber-500 equivalent for dark mode
                                  : "rgba(251, 191, 36, 0.8)", // amber-400 equivalent for light mode
                              backdropFilter: isRevealed ? "none" : "blur(25px)",
                            }}
                          >
                            {/* Animation flash effect */}
                            {isAnimating && (
                              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/50 to-transparent animate-ping" />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Game over overlay */}
                  {gameOver && (
                    <div className="absolute inset-0 bg-black bg-opacity-25 flex">
                      <div className="absolute top-4 left-4 text-white">
                        <h2 className="text-2xl font-bold mb-1 monument-font">{currentMonument.name}</h2>
                        <p className="text-lg mb-2">
                          {currentMonument.location}, {currentMonument.country}
                        </p>
                        <Badge variant="secondary" className="bg-amber-500 text-slate-900">
                          {currentMonument.type}
                        </Badge>
                      </div>


                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Guess Input - Move this right after the image */}
            {!gameOver && (
              <Card
                className={`transition-colors duration-300 ${
                  darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="relative">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Input
                          value={currentGuess}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                          placeholder="Enter monument name (e.g., Eiffel Tower)"
                          className={`w-full border-amber-300 focus:border-amber-500 focus:ring-amber-500 ${
                            darkMode ? "bg-slate-900 text-slate-100" : "bg-white"
                          }`}
                          autoComplete="off"
                          aria-label="Enter your monument guess"
                        />

                        {/* Dropdown */}
                        {showDropdown && filteredMonuments.length > 0 && (
                          <div
                            className={`absolute top-full left-0 right-0 z-50 mt-1 border rounded-md shadow-lg max-h-60 overflow-y-auto transition-colors duration-300 ${
                              darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
                            }`}
                            role="listbox"
                          >
                                                    {filteredCountries.map((country, index) => (
                          <div
                            key={country.id}
                            className={`px-4 py-3 cursor-pointer border-b last:border-b-0 transition-colors ${
                              index === selectedIndex
                                ? "bg-blue-500 text-white"
                                : darkMode
                                  ? "border-slate-700 hover:bg-slate-700"
                                  : "border-blue-100 hover:bg-blue-50"
                            }`}
                            onClick={() => selectCountry(country)}
                            role="option"
                            aria-selected={index === selectedIndex}
                          >
                            <div className="font-medium">{country.name}</div>
                            <div
                              className={`text-sm ${
                                index === selectedIndex
                                  ? "text-white/80"
                                  : darkMode
                                    ? "text-slate-400"
                                    : "text-slate-600"
                              }`}
                            >
                              {country.capital}, {country.region} • Population: {country.population.toLocaleString()}
                            </div>
                          </div>
                        ))}
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={() => handleGuess()}
                        disabled={!currentGuess.trim()}
                        className="bg-amber-500 hover:bg-amber-600 text-white border-amber-500"
                        aria-label="Submit your monument guess"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Guess
                      </Button>
                    </div>
                    <p className={`text-sm mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {guesses.length}/{MAX_GUESSES} guesses used
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Monument Information Box - Only show when game is over */}
            {gameOver && (
              <Card
                className={`transition-colors duration-300 ${
                  darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                        <span className="text-2xl">🏛️</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-amber-500 monument-font text-lg">
                        About {currentMonument.name}
                      </h3>
                      <div className={`space-y-1 text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        {(() => {
                          // Monument explanations
                          const explanations: { [key: string]: string[] } = {
                            "Eiffel Tower": [
                              "Built in 1889 for the Paris Exposition, this iron lattice tower stands 330 meters tall.",
                              "Designed by Gustave Eiffel, it was initially criticized but became Paris's most iconic symbol.",
                              "Located on the Champ de Mars in Paris, France, it attracts over 6 million visitors annually.",
                              "Originally intended as a temporary structure, it was saved due to its use as a radio antenna.",
                            ],
                            "Great Pyramid of Giza": [
                              "Built around 2580-2510 BCE, this is the oldest and largest of the three pyramids in Giza.",
                              "Originally standing at 146.5 meters, it was the world's tallest building for over 3,800 years.",
                              "Located on the Giza plateau near Cairo, Egypt, it's the only surviving Wonder of the Ancient World.",
                              "Built as a tomb for Pharaoh Khufu, it contains over 2.3 million stone blocks.",
                            ],
                            "Statue of Liberty": [
                              "A gift from France to the United States in 1886, symbolizing freedom and democracy.",
                              "Standing 93 meters tall including its pedestal, it was designed by Frédéric Auguste Bartholdi.",
                              "Located on Liberty Island in New York Harbor, it welcomed millions of immigrants to America.",
                              "The copper statue has turned green due to oxidation and holds a torch and tablet with the date of American Independence.",
                            ],
                            "Taj Mahal": [
                              "Built between 1632-1653, this white marble mausoleum was commissioned by Shah Jahan.",
                              "Created as a tomb for his wife Mumtaz Mahal, it represents the finest Mughal architecture.",
                              "Located in Agra, India, it's considered a symbol of eternal love and attracts millions of visitors.",
                              "The complex includes gardens, a mosque, and guest house, all perfectly symmetrical around the main tomb.",
                            ],
                            Colosseum: [
                              "Built between 70-80 CE, this amphitheater could hold up to 80,000 spectators.",
                              "Used for gladiatorial contests and public spectacles like animal hunts and naval battles.",
                              "Located in the center of Rome, Italy, it's considered one of the greatest architectural achievements.",
                              "Despite earthquakes and stone-robbers, it remains an iconic symbol of Imperial Rome.",
                            ],
                            "Machu Picchu": [
                              "Built around 1450 CE by the Inca Empire, this citadel sits 2,430 meters above sea level.",
                              "Abandoned during the Spanish conquest, it remained hidden until Hiram Bingham's 1911 expedition.",
                              "Located in the Andes Mountains of Peru, it showcases sophisticated Inca engineering and astronomy.",
                              "The site includes temples, terraces, and residential areas, all built without mortar or wheels.",
                            ],
                            "Big Ben": [
                              "Completed in 1859, this iconic clock tower is officially called Elizabeth Tower.",
                              "Standing 96 meters tall, it houses the famous Big Ben bell that chimes every hour.",
                              "Located at the Palace of Westminster in London, England, it's a symbol of British democracy.",
                              "The clock mechanism is renowned for its accuracy and the tower survived bombing during WWII.",
                            ],
                            "Great Wall of China": [
                              "Built over many dynasties from 7th century BCE, the wall stretches over 21,000 kilometers.",
                              "Designed to protect Chinese states from invasions, it employed millions of workers over centuries.",
                              "Located across northern China, it's the longest man-made structure in the world.",
                              "Contrary to popular belief, it's not visible from space with the naked eye.",
                            ],
                            "Christ the Redeemer": [
                              "Completed in 1931, this Art Deco statue stands 30 meters tall atop Corcovado Mountain.",
                              "Designed by French sculptor Paul Landowski, it overlooks the city of Rio de Janeiro.",
                              "Located in Brazil, it's considered a symbol of Christianity and Brazilian culture.",
                              "The statue's arms span 28 meters wide and it was named one of the New Seven Wonders of the World.",
                            ],
                            "Sydney Opera House": [
                              "Opened in 1973, this performing arts venue features distinctive shell-shaped architecture.",
                              "Designed by Danish architect Jørn Utzon, it took 14 years to complete.",
                              "Located on Sydney Harbour in Australia, it hosts over 1,500 performances annually.",
                              "The building's unique design was inspired by orange segments and sailing ships.",
                            ],
                            "Buckingham Palace": [
                              "Built in 1703 and extensively remodeled in the 19th century, this palace serves as the official London residence of the British monarch.",
                              "Originally known as Buckingham House, it was acquired by King George III in 1761 as a private residence for Queen Charlotte.",
                              "Located in the City of Westminster, it has 775 rooms including 19 State rooms, 52 Royal and guest bedrooms, and 78 bathrooms.",
                              "The palace's famous balcony has been the setting for many historic royal appearances and celebrations throughout British history.",
                            ],
                          }

                          const monumentExplanation = explanations[currentMonument.name] || [
                            `The ${currentMonument.name} is a remarkable ${currentMonument.type.toLowerCase()} with significant cultural importance.`,
                            `Located in ${currentMonument.location}, ${currentMonument.country}, it represents the architectural heritage of the region.`,
                            `Built in ${currentMonument.yearBuilt > 0 ? currentMonument.yearBuilt : `${Math.abs(currentMonument.yearBuilt)} BCE`}, it has stood as a testament to human creativity and engineering.`,
                            `This iconic landmark continues to inspire visitors from around the world with its historical significance.`,
                          ]

                          return monumentExplanation.map((line, index) => (
                            <p key={index} className="leading-relaxed">
                              {line}
                            </p>
                          ))
                        })()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Game Over */}
            {gameOver && (
              <Card
                className={`transition-colors duration-300 ${
                  darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
                }`}
              >
                <CardContent className="p-6 text-center">
                  {gameWon ? (
                    <div className="space-y-4">
                      <Trophy className="w-12 h-12 text-amber-500 mx-auto" />
                      <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 monument-font">
                        Monument Master!
                      </h2>
                      <p>You guessed it in {guesses.length} tries!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 monument-font">Game Over</h2>
                      <p>
                        The monument was: <strong>{currentMonument.name}</strong>
                      </p>
                    </div>
                  )}
                  <Separator className={`my-4 ${darkMode ? "bg-slate-700" : "bg-amber-200"}`} />
                  <div className="flex gap-2 justify-center">
                    <Button
                      onClick={shareResult}
                      variant="outline"
                      className={`border-amber-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 ${
                        darkMode ? "bg-slate-800 text-slate-100" : ""
                      }`}
                      aria-label="Share your Monumentle result"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button
                      onClick={() => setShowStats(true)}
                      variant="outline"
                      className={`border-amber-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 ${
                        darkMode ? "bg-slate-800 text-slate-100" : ""
                      }`}
                      aria-label="View detailed statistics"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Stats
                    </Button>
                  </div>
                  <p className={`text-sm mt-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Come back tomorrow for a new monument challenge!
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Guess Results with Distance Hints */}
            {guessResults.length > 0 && (
              <Card
                className={`transition-colors duration-300 ${
                  darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
                }`}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Your Guesses</h3>
                  <div className="space-y-3">
                    {guessResults.map((result, index) => {
                      const isCorrect = result.distance === 0
                      return (
                        <div
                          key={index}
                          className={`p-4 rounded-lg border transition-colors ${
                            isCorrect
                              ? "bg-green-100 border-green-300 dark:bg-green-900/20 dark:border-green-700"
                              : darkMode
                                ? "bg-slate-900 border-slate-700"
                                : "bg-white border-amber-200"
                          }`}
                        >
                          <div className="font-medium text-lg mb-2">{result.guess}</div>

                          {isCorrect ? (
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                              <span className="text-2xl">🎯</span>
                              <span className="font-semibold">Perfect location match!</span>
                            </div>
                          ) : (
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-lg">{result.distance}km away</span>
                                <span>{result.direction === "closer" ? "🎯" : "🌍"}</span>
                                <span className="font-semibold text-amber-600">
                                  {result.direction === "closer" ? "Getting warmer!" : "Think globally!"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-full rounded-full h-2 ${darkMode ? "bg-slate-700" : "bg-amber-200"}`}
                                >
                                  <div
                                    className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${result.proximity}%` }}
                                  ></div>
                                </div>
                                <span className="font-semibold text-amber-500">{result.proximity}%</span>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats with Streak Progress */}
            <Card
              className={`transition-colors duration-300 ${
                darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold monument-font">Your Stats</h3>
                  <Badge className="bg-amber-500 hover:bg-amber-600 text-white text-xs">Daily Challenge</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-amber-500">{stats.gamesPlayed}</div>
                    <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Played</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">
                      {stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0}%
                    </div>
                    <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Win Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-500">{stats.currentStreak}</div>
                    <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Current Streak</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-500">{stats.maxStreak}</div>
                    <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Max Streak</div>
                  </div>
                </div>

                {/* Streak Progress */}
                {stats.currentStreak > 0 && (
                  <div className={`border-t pt-4 ${darkMode ? "border-slate-700" : "border-amber-200"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Streak Progress</span>
                      <span className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        {stats.currentStreak >= 3
                          ? `${Math.min(Math.floor(stats.currentStreak / 3) * 4, 8)} bonus bars revealed!`
                          : "Keep going!"}
                      </span>
                    </div>
                    {(() => {
                      const nextMilestone = STREAK_MILESTONES.find((m) => m.milestone > stats.currentStreak)
                      if (nextMilestone) {
                        const progress = (stats.currentStreak / nextMilestone.milestone) * 100
                        const IconComponent = nextMilestone.icon
                        return (
                          <div>
                            <div
                              className={`flex justify-between text-xs mb-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                            >
                              <span>{stats.currentStreak}</span>
                              <span className="flex items-center gap-1">
                                {nextMilestone.milestone} <IconComponent className={`w-3 h-3 ${nextMilestone.color}`} />
                              </span>
                            </div>
                            <div className={`w-full rounded-full h-2 ${darkMode ? "bg-slate-700" : "bg-amber-200"}`}>
                              <div
                                className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progress}%` }}
                              ></div>
                            </div>
                            <div
                              className={`text-xs text-center mt-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                            >
                              Next: {nextMilestone.title}
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <div className="text-center">
                            <Gem className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                            <div className="text-sm font-medium text-amber-500">Maximum Streak Achieved!</div>
                          </div>
                        )
                      }
                    })()}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Game Hub Button - Between Stats and Achievements */}
            <div className="flex justify-center py-4">
              <a
                href="https://www.daily-challenge.fun"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  darkMode
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl"
                    : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg"
                }`}
              >
                <span className="text-2xl">🎮</span>
                <div className="text-center">
                  <div className="text-lg font-bold">Discover More Daily Challenges</div>
                </div>
                <span className="text-lg opacity-80">→</span>
              </a>
            </div>

            {/* Earned Badges */}
            <Card
              className={`transition-colors duration-300 ${
                darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 monument-font">🏆 Achievements</h3>
                <div className="grid grid-cols-3 gap-2">
                  {getEarnedBadges(stats.maxStreak)
                    .slice(0, 6)
                    .map((badge, index) => {
                      const IconComponent = badge.icon
                      return (
                        <div
                          key={index}
                          className={`text-center p-3 rounded-lg border transition-all ${
                            badge.earned
                              ? `bg-gradient-to-br ${badge.bgColor} ${badge.borderColor}`
                              : darkMode
                                ? "bg-slate-900 border-slate-700 opacity-50"
                                : "bg-amber-50 border-amber-200 opacity-50"
                          }`}
                        >
                          <IconComponent
                            className={`w-8 h-8 mx-auto mb-2 ${
                              badge.earned ? badge.color : darkMode ? "text-slate-600" : "text-slate-400"
                            } ${badge.earned ? "" : "grayscale"}`}
                          />
                          <div
                            className={`text-xs font-bold mb-1 ${
                              badge.earned ? badge.color : darkMode ? "text-slate-600" : "text-slate-400"
                            }`}
                          >
                            {badge.title}
                          </div>
                          <div
                            className={`text-xs ${
                              badge.earned
                                ? darkMode
                                  ? "text-slate-400"
                                  : "text-slate-600"
                                : darkMode
                                  ? "text-slate-600"
                                  : "text-slate-400"
                            }`}
                          >
                            {badge.milestone} streak
                          </div>
                          {badge.earned && badge.perk && (
                            <div className="text-xs text-amber-600 mt-1 font-medium">{badge.perk}</div>
                          )}
                        </div>
                      )
                    })}
                </div>
                {stats.maxStreak > 0 && (
                  <div className={`text-center mt-3 text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    {getEarnedBadges(stats.maxStreak).filter((b) => b.earned).length} of {STREAK_MILESTONES.length}{" "}
                    badges earned
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card
          className={`mt-12 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
          }`}
        >
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-amber-500 monument-font flex items-center justify-center gap-2">
                <span className="text-4xl">❓</span>
                Frequently Asked Questions
              </h2>
              <p className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Everything you need to know about our interactive world geography quiz and landmark identification game
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Question 1 - Enhanced for SEO */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🌍</span>
                  <div>
                    <h3 className="font-semibold text-amber-500 monument-heading">
                      How does the interactive geography quiz work?
                    </h3>
                    <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Monumentle is a modern geography learning game where you identify famous world landmarks from
                      progressively revealed images. You have 6 attempts to guess the correct monument name, with each wrong
                      guess revealing more of the image and providing distance hints to help you master global geography and spatial awareness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 2 - Geography Learning */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📚</span>
                  <div>
                    <h3 className="font-semibold text-green-500 monument-heading">
                      What geography skills will I develop?
                    </h3>
                    <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Our interactive geography game teaches world map knowledge, cultural geography, landmark locations, distance
                      estimation, and continental awareness. You'll master famous landmarks from all 7 continents while
                      learning about architectural styles, historical periods, and global cultural heritage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 3 - Educational Benefits */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🎓</span>
                  <div>
                    <h3 className="font-semibold text-blue-500 monument-heading">
                      Is this suitable for modern geography education?
                    </h3>
                    <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Monumentle is perfect for students, teachers, and anyone interested in world geography. It
                      combines gamified learning with cultural education, making it ideal for geography classes,
                      homeschooling, or personal knowledge building about world heritage sites in 2025.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 4 - Landmark Coverage */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🏛️</span>
                  <div>
                    <h3 className="font-semibold text-purple-500 monument-heading">
                      Which famous landmarks are included?
                    </h3>
                    <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Our database features 150+ world-famous man-made monuments including the Eiffel Tower, Great
                      Pyramid of Giza, Statue of Liberty, Taj Mahal, Colosseum, Great Wall of China, Machu Picchu,
                      Sydney Opera House, and other historic architectural achievements. We focus on culturally
                      significant structures built by humans, excluding natural phenomena and avoiding politically
                      sensitive sites to maintain the educational focus on global heritage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 5 - Distance Learning */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📏</span>
                  <div>
                    <h3 className="font-semibold text-orange-500 monument-heading">
                      How do distance hints help with geography learning?
                    </h3>
                    <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Distance hints show how far your guess is from the target monument in kilometers, helping you
                      understand global geography and spatial relationships. This teaches you about continental
                      distances, country proximity, and helps develop better world map mental models through interactive learning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 6 - Cultural Learning */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🎨</span>
                  <div>
                    <h3 className="font-semibold text-red-500 monument-heading">
                      What cultural knowledge will I gain?
                    </h3>
                    <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Beyond geography, you'll learn about architectural styles, historical periods, cultural
                      significance, and the stories behind each monument. Each landmark comes with rich educational
                      content about its construction, cultural context, and importance to world heritage and global history.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 7 - Daily Learning */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⏰</span>
                  <div>
                    <h3 className="font-semibold text-yellow-500 monument-heading">
                      How often are new geography challenges available?
                    </h3>
                    <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      A new monument geography puzzle is available every day at midnight in your local timezone. This
                      daily format helps build consistent geography learning habits while keeping the challenge fresh
                      and engaging for continuous cultural education and global awareness.
                    </p>
                  </div>
                </div>
              </div>

              {/* Question 8 - Difficulty Levels */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⭐</span>
                  <div>
                    <h3 className="font-semibold text-pink-500 monument-heading">
                      Are there different difficulty levels for geography learning?
                    </h3>
                    <p className={`text-sm mt-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      While each daily puzzle has a set difficulty, monuments range from well-known landmarks like the
                      Eiffel Tower to more challenging sites like Petra or Angkor Wat. Building a winning streak unlocks
                      bonus features that make future puzzles slightly easier, supporting progressive learning and skill development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Pro Tips Section */}
            <div className={`border-t pt-8 ${darkMode ? "border-slate-700" : "border-amber-200"}`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-amber-500 monument-font flex items-center justify-center gap-2">
                  <span className="text-2xl">🎯</span>
                  Modern Geography Learning Strategies & Tips
                </h3>
                <p className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  Master world geography and landmark identification with these 2025 expert strategies
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {/* Enhanced Tip 1 */}
                <div className={`p-6 rounded-lg ${darkMode ? "bg-slate-900" : "bg-amber-50"}`}>
                  <div className="text-center">
                    <span className="text-2xl mb-3 block">🗺️</span>
                    <h4 className="font-semibold text-amber-500 mb-2">Study World Geography</h4>
                    <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Learn continental layouts, major countries, and regional characteristics. Understanding global
                      geography helps you make educated guesses about monument locations and cultural contexts in our interactive learning environment.
                    </p>
                  </div>
                </div>

                {/* Enhanced Tip 2 */}
                <div className={`p-6 rounded-lg ${darkMode ? "bg-slate-900" : "bg-amber-50"}`}>
                  <div className="text-center">
                    <span className="text-2xl mb-3 block">🏗️</span>
                    <h4 className="font-semibold text-amber-500 mb-2">Recognize Architectural Styles</h4>
                    <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Different civilizations have distinct architectural features. Gothic spires suggest Europe,
                      pyramid shapes indicate Egypt or Central America, and pagoda styles point to East Asia. This visual learning approach enhances cultural understanding.
                    </p>
                  </div>
                </div>

                {/* Enhanced Tip 3 */}
                <div className={`p-6 rounded-lg ${darkMode ? "bg-slate-900" : "bg-amber-50"}`}>
                  <div className="text-center">
                    <span className="text-2xl mb-3 block">📐</span>
                    <h4 className="font-semibold text-amber-500 mb-2">Use Distance Clues Strategically</h4>
                    <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Distance hints reveal geographic proximity. Thousands of kilometers suggest different continents,
                      while hundreds indicate neighboring countries. Use this to narrow down regions systematically and develop spatial awareness skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* More Games Section */}
        <Card
          className={`mt-8 mb-12 transition-colors duration-300 ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
          }`}
        >
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-amber-500 monument-font flex items-center justify-center gap-2">
                <span className="text-4xl">🎮</span>
                More Games to Play
              </h2>
              <p className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                Check out these other fun daily challenges from the same creator
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Supercardle */}
              <a href="https://www.supercardle.fun" target="_blank" rel="noopener noreferrer" className="block group">
                <div
                  className={`h-full rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-900 border-red-600/30 hover:border-red-500"
                      : "bg-gradient-to-br from-slate-50 to-slate-100 border-red-400/30 hover:border-red-500"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mr-3">
                        <span className="text-2xl">🏎️</span>
                      </div>
                      <h3 className="text-2xl font-bold text-red-500">Supercardle</h3>
                    </div>
                    <div className={`text-center mb-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      <p>Daily supercar guessing game! Test your knowledge of exotic and luxury cars.</p>
                    </div>
                    <div className="flex justify-center">
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                          darkMode
                            ? "bg-red-900/30 text-red-400 group-hover:bg-red-800/50"
                            : "bg-red-100 text-red-700 group-hover:bg-red-200"
                        }`}
                      >
                        Play Now →
                      </span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Classic Snake */}
              <a href="https://www.classic-snake.com" target="_blank" rel="noopener noreferrer" className="block group">
                <div
                  className={`h-full rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    darkMode
                      ? "bg-slate-900 border-green-600/30 hover:border-green-500"
                      : "bg-gradient-to-br from-slate-50 to-slate-100 border-green-400/30 hover:border-green-500"
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-3">
                        <span className="text-2xl">🐍</span>
                      </div>
                      <h3 className="text-2xl font-bold text-green-500">Classic Snake</h3>
                    </div>
                    <div className={`text-center mb-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      <p>The nostalgic snake game reimagined! Collect food, grow longer, and avoid hitting walls.</p>
                    </div>
                    <div className="flex justify-center">
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                          darkMode
                            ? "bg-green-900/30 text-green-400 group-hover:bg-green-800/50"
                            : "bg-green-100 text-green-700 group-hover:bg-green-200"
                        }`}
                      >
                        Play Now →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Modal */}
      {showStats && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <Card
            className={`w-full max-w-md transition-colors duration-300 ${
              darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-amber-500 monument-font">📊 Your Statistics</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowStats(false)}
                  className="text-slate-600 hover:bg-amber-500 hover:text-white"
                >
                  ✕
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`text-center p-4 rounded-lg ${darkMode ? "bg-slate-900" : "bg-amber-50"}`}>
                  <div className="text-3xl font-bold text-amber-500">{stats.gamesPlayed}</div>
                  <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Games Played</div>
                </div>
                <div className={`text-center p-4 rounded-lg ${darkMode ? "bg-slate-900" : "bg-amber-50"}`}>
                  <div className="text-3xl font-bold text-green-500">
                    {stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0}%
                  </div>
                  <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Win Rate</div>
                </div>
                <div className={`text-center p-4 rounded-lg ${darkMode ? "bg-slate-900" : "bg-amber-50"}`}>
                  <div className="text-3xl font-bold text-blue-500">{stats.currentStreak}</div>
                  <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Current Streak</div>
                </div>
                <div className={`text-center p-4 rounded-lg ${darkMode ? "bg-slate-900" : "bg-amber-50"}`}>
                  <div className="text-3xl font-bold text-purple-500">{stats.maxStreak}</div>
                  <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Max Streak</div>
                </div>
              </div>

              {/* Achievement Preview */}
              <div className={`border-t pt-4 ${darkMode ? "border-slate-700" : "border-amber-200"}`}>
                <h3 className="font-semibold mb-3">🏆 Recent Achievements</h3>
                <div className="grid grid-cols-3 gap-2">
                  {getEarnedBadges(stats.maxStreak)
                    .filter((badge) => badge.earned)
                    .slice(-3)
                    .map((badge, index) => {
                      const IconComponent = badge.icon
                      return (
                        <div
                          key={index}
                          className={`text-center p-2 rounded-lg border bg-gradient-to-br ${badge.bgColor} ${badge.borderColor}`}
                        >
                          <IconComponent className={`w-6 h-6 mx-auto mb-1 ${badge.color}`} />
                          <div className={`text-xs font-bold ${badge.color}`}>{badge.title}</div>
                        </div>
                      )
                    })}
                </div>
                {getEarnedBadges(stats.maxStreak).filter((b) => b.earned).length === 0 && (
                  <p className={`text-center text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Start playing to earn achievements!
                  </p>
                )}
              </div>

              <div className="flex gap-2 mt-6">
                <Button onClick={shareResult} className="flex-1 bg-amber-500 hover:bg-amber-600 text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Stats
                </Button>
                <Button
                  onClick={() => setShowStats(false)}
                  variant="outline"
                  className={`flex-1 border-amber-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 ${
                    darkMode ? "bg-slate-800 text-slate-100" : ""
                  }`}
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* How to Play Modal */}
      {showHowToPlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <Card
            className={`w-full max-w-md transition-colors duration-300 ${
              darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-amber-500 monument-font">🏛️ How to Play Monumentle</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHowToPlay(false)}
                  className="text-slate-600 hover:bg-amber-500 hover:text-white"
                >
                  ✕
                </Button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 text-amber-500">🎯 Objective</h3>
                    <p className={`text-sm ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      Guess the mystery world monument in 6 tries or less! Each day features a new famous man-made
                      landmark from around the globe. Our selection focuses on historic monuments and architectural
                      achievements, not natural phenomena or politically oriented sites.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-amber-500">🔍 How It Works</h3>
                    <div className="space-y-1 text-sm">
                      <div className={`flex items-start gap-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <span className="text-amber-500 font-bold">1.</span>
                        <span>The monument image starts hidden behind golden overlay squares</span>
                      </div>
                      <div className={`flex items-start gap-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <span className="text-amber-500 font-bold">2.</span>
                        <span>Each incorrect guess reveals one more square of the image</span>
                      </div>
                      <div className={`flex items-start gap-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <span className="text-amber-500 font-bold">3.</span>
                        <span>Use distance hints and proximity indicators to narrow down your guesses</span>
                      </div>
                      <div className={`flex items-start gap-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <span className="text-amber-500 font-bold">4.</span>
                        <span>Type the exact monument name (e.g., "Eiffel Tower")</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2 text-amber-500">🌍 Distance Hints</h3>
                    <div className="space-y-1 text-sm">
                      <div className={`flex items-center gap-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <span className="text-xl">🎯</span>
                        <span>Shows distance in kilometers from your guess to the target monument</span>
                      </div>
                      <div className={`flex items-center gap-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <span className="text-xl">🌍</span>
                        <span>Use geography knowledge to narrow down the location</span>
                      </div>
                      <div className={`flex items-center gap-2 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <span className="text-amber-500 font-bold">%</span>
                        <span>Proximity indicator shows how close you are globally (higher % = closer)</span>
                      </div>
                    </div>
                  </div>

                  <div className={`p-3 rounded-lg text-sm ${darkMode ? "bg-slate-900" : "bg-amber-50"}`}>
                    <h4 className="font-semibold mb-1 text-amber-500">💡 Pro Tips</h4>
                    <ul className={`space-y-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      <li>• Look for distinctive architectural features and cultural elements</li>
                      <li>• Use the dropdown suggestions to see available monuments and correct spellings</li>
                      <li>• Consider the continent and region when making guesses</li>
                      <li>• Distance hints help you understand geographic proximity!</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <Button
                  onClick={() => setShowHowToPlay(false)}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                >
                  Got it! Let's Explore 🏛️
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Social Share Modal */}
      {showSocialShare && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
          <Card
            className={`w-full max-w-sm transition-colors duration-300 ${
              darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-amber-200"
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-amber-500 monument-font">📤 Share Your Result</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSocialShare(false)}
                  className="text-slate-600 hover:bg-amber-500 hover:text-white"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-3">
                {navigator.share && (
                  <Button
                    onClick={() => shareToSocial("native")}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Share (Native)
                  </Button>
                )}

                <Button
                  onClick={() => shareToSocial("x")}
                  className="w-full bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2"
                >
                  <XIcon className="w-4 h-4" />
                  Share on X
                </Button>

                <Button
                  onClick={() => shareToSocial("facebook")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Share on Facebook
                </Button>

                <Button
                  onClick={() => shareToSocial("linkedin")}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  Share on LinkedIn
                </Button>

                <Button
                  onClick={() => shareToSocial("copy")}
                  variant="outline"
                  disabled={copiedToClipboard}
                  className={`w-full transition-all duration-200 ${
                    copiedToClipboard
                      ? "bg-green-500 text-white border-green-500"
                      : darkMode
                        ? "bg-slate-800 text-slate-100 border-amber-300 hover:bg-amber-500 hover:text-white hover:border-amber-500"
                        : "border-amber-300 hover:bg-amber-500 hover:text-white hover:border-amber-500"
                  }`}
                >
                  {copiedToClipboard ? "✓ Copied to Clipboard!" : "📋 Copy to Clipboard"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add this right before the closing </div> of the main container */}
      <StructuredData monument={currentMonument} gameWon={gameWon} guessCount={guesses.length} />
    </div>
  )
}
