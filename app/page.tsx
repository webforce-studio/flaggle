"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Trophy, Share2, BarChart3, Flame, Zap, Crown, Star, Gem, MapPin, Facebook, Linkedin, Globe } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { StructuredData } from "@/components/structured-data"
import { XIcon } from "@/components/x-icon"
import { FAQ } from "@/components/faq"
import { GameLinks } from "@/components/game-links"
import { getCountries, getTodaysCountry, calculateDistance, type CountryData } from "@/lib/data"
import Link from "next/link"

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

export default function Flagguesser() {
  const { theme } = useTheme()
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
      localStorage.setItem("flagguesser-stats", JSON.stringify(newStats))
    }
  }

  const saveGameState = (guesses: string[], won: boolean, over: boolean) => {
    const today = new Date().toDateString()
    const gameState = {
      guesses,
      gameWon: won,
      gameOver: over,
    }
    localStorage.setItem(`flagguesser-game-${today}`, JSON.stringify(gameState))
  }

  // reflect global theme into local state
  useEffect(() => {
    setDarkMode(theme === "dark")
  }, [theme])

  // Listen to header events to toggle modals
  useEffect(() => {
    const onToggleStats = () => setShowStats((v) => !v)
    const onToggleHowTo = () => setShowHowToPlay((v) => !v)
    window.addEventListener("flaggle:toggle-stats", onToggleStats)
    window.addEventListener("flaggle:toggle-howto", onToggleHowTo)
    return () => {
      window.removeEventListener("flaggle:toggle-stats", onToggleStats)
      window.removeEventListener("flaggle:toggle-howto", onToggleHowTo)
    }
  }, [])

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
      const barsToReveal: number[] = []
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
        setSelectedIndex((prev) => (prev < filteredCountries.length - 1 ? prev + 1 : prev))
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

  const selectCountry = (country: CountryData) => {
    handleGuess(country.name)
  }

  const shareResult = () => {
    setShowSocialShare(true)
  }

  const shareToSocial = (platform: string) => {
    const today = new Date().toLocaleDateString()
    const result = gameWon ? `${guesses.length}/${MAX_GUESSES}` : "X/6"
    const text = `Flaggle ${today} ${result} 🏳️ Daily flag guessing game`
    const url = "https://www.flaggle.fun"

    let shareUrl = ""

    switch (platform) {
      case "native":
        if (navigator.share && typeof navigator.share === "function") {
          try {
            navigator
              .share({
                title: "Flaggle Result",
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
            setShowSocialShare(false)
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

  useEffect(() => {
    // Load dark mode preference
    const savedDarkMode = localStorage.getItem("flagguesser-dark-mode")
    if (savedDarkMode) {
      const isDark = JSON.parse(savedDarkMode)
      setDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }

    const savedStats = localStorage.getItem("flagguesser-stats")
    let streakBonus = 0
    if (savedStats) {
      const parsedStats = JSON.parse(savedStats)

      if (
        parsedStats.lastPlayedDate &&
        parsedStats.lastPlayedDate !== new Date().toDateString() &&
        parsedStats.lastPlayedDate !== getYesterday()
      ) {
        parsedStats.currentStreak = 0
        localStorage.setItem("flagguesser-stats", JSON.stringify(parsedStats))
      }

      setStats(parsedStats)
      streakBonus = Math.min(Math.floor(parsedStats.currentStreak / 3) * 4, 8)
      if (streakBonus > 0) {
        const randomBars: number[] = []
        const availableBars = Array.from({ length: 24 }, (_, i) => i)

        for (let i = 0; i < streakBonus; i++) {
          if (availableBars.length === 0) break

          const randomIndex = Math.floor(Math.random() * availableBars.length)
          const selectedBar = availableBars[randomIndex]
          randomBars.push(selectedBar)

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
    const savedGameState = localStorage.getItem(`flagguesser-game-${today}`)

    if (savedGameState) {
      const gameState = JSON.parse(savedGameState)
      setGuesses(gameState.guesses)
      setGameWon(gameState.gameWon)
      setGameOver(gameState.gameOver)

      const totalBarsToReveal = streakBonus + gameState.guesses.length * 4

      if (gameState.gameOver) {
        setRevealedSquares(Array.from({ length: 24 }, (_, i) => i))
      } else if (totalBarsToReveal > 0) {
        const allBars = Array.from({ length: 24 }, (_, i) => i)
        const revealedBarsList: number[] = []

        const seed = today.split("/").reduce((a, b) => a + Number.parseInt(b), 0)
        let random = seed

        for (let i = 0; i < Math.min(totalBarsToReveal, 24); i++) {
          if (allBars.length === 0) break

          random = (random * 9301 + 49297) % 233280
          const randomIndex = Math.floor((random / 233280) * allBars.length)
          const selectedBar = allBars[randomIndex]
          revealedBarsList.push(selectedBar)

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

    const maxDistance = 20000
    const proximity = Math.max(0, Math.round((1 - distance / maxDistance) * 100))

    return { distance, direction, proximity }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100"
          : "bg-gradient-to-br from-blue-50 to-indigo-50 text-slate-900"
      }`}
    >
      {/* Header is rendered globally in layout via <SiteHeader /> */}

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-6">
            <Card
              className={`transition-colors duration-300 ${
                darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
              }`}
            >
              <CardContent className="p-6">
                <div
                  className={`relative aspect-video rounded-lg overflow-hidden ${
                    darkMode ? "bg-slate-900" : "bg-blue-50"
                  }`}
                >
                  <Image
                    src={currentCountry.flagUrl}
                    alt={`Mystery flag puzzle - Guess the country`}
                    fill
                    className="object-cover"
                  />

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
                                  ? "rgba(59, 130, 246, 0.85)"
                                  : "rgba(59, 130, 246, 0.8)",
                              backdropFilter: isRevealed ? "none" : "blur(25px)",
                            }}
                          >
                            {isAnimating && (
                              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-transparent animate-ping" />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {gameOver && (
                    <div className="absolute inset-0 bg-black bg-opacity-25 flex">
                      <div className="absolute top-4 left-4 text-white">
                        <h2 className="text-2xl font-bold mb-1 font-varela">{currentCountry.name}</h2>
                        <p className="text-lg mb-2">
                          {currentCountry.capital}, {currentCountry.region}
                        </p>
                        <Badge variant="secondary" className="bg-blue-500 text-white">
                          {currentCountry.code}
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {!gameOver && (
              <Card
                className={`transition-colors duration-300 ${
                  darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
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
                          placeholder="Enter country name (e.g., France)"
                          className={`w-full border-blue-300 focus:border-blue-500 focus:ring-blue-500 ${
                            darkMode ? "bg-slate-900 text-slate-100" : "bg-white"
                          }`}
                          autoComplete="off"
                          aria-label="Enter your country guess"
                        />

                        {showDropdown && filteredCountries.length > 0 && (
                          <div
                            className={`absolute top-full left-0 right-0 z-50 mt-1 border rounded-md shadow-lg max-h-60 overflow-y-auto transition-colors duration-300 ${
                              darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
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
                        className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
                        aria-label="Submit your country guess"
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

            {gameOver && (
              <Card
                className={`transition-colors duration-300 ${
                  darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
                }`}
              >
                <CardContent className="p-6 text-center">
                  {gameWon ? (
                    <div className="space-y-4">
                      <Trophy className="w-12 h-12 text-blue-500 mx-auto" />
                      <h2 className="text-2xl font-bold text-green-600 dark:text-green-400">
                        Flag Master!
                      </h2>
                      <p>You guessed it in {guesses.length} tries!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 font-varela">Game Over</h2>
                      <p>
                        The country was: {" "}
                        <Link
                          href={`/flags/${currentCountry.id}`}
                          className="font-bold text-blue-600 dark:text-blue-400 underline decoration-dotted hover:decoration-solid"
                        >
                          {currentCountry.name}
                        </Link>
                      </p>
                    </div>
                  )}
                  <Separator className={`my-4 ${darkMode ? "bg-slate-700" : "bg-blue-200"}`} />
                  <div className="flex gap-2 justify-center">
                    <Button
                      onClick={shareResult}
                      variant="outline"
                      className={`border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 ${
                        darkMode ? "bg-slate-800 text-slate-100" : ""
                      }`}
                      aria-label="Share your Flagguesser result"
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button
                      onClick={() => setShowStats(true)}
                      variant="outline"
                      className={`border-blue-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 ${
                        darkMode ? "bg-slate-800 text-slate-100" : ""
                      }`}
                      aria-label="View detailed statistics"
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Stats
                    </Button>
                  </div>
                  <p className={`text-sm mt-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                    Come back tomorrow for a new flag challenge!
                  </p>
                </CardContent>
              </Card>
            )}

            {guessResults.length > 0 && (
              <Card
                className={`transition-colors duration-300 ${
                  darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
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
                                : "bg-white border-blue-200"
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
                                <span className="font-semibold text-blue-600">
                                  {result.direction === "closer" ? "Getting warmer!" : "Think globally!"}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-full rounded-full h-2 ${darkMode ? "bg-slate-700" : "bg-blue-200"}`}
                                >
                                  <div
                                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${result.proximity}%` }}
                                  ></div>
                                </div>
                                <span className="font-semibold text-blue-500">{result.proximity}%</span>
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

          <div className="space-y-6">
            <Card
              className={`transition-colors duration-300 ${
                darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Your Stats</h3>
                  <Badge className="bg-blue-500 hover:bg-blue-600 text-white text-xs">Daily Challenge</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-500">{stats.gamesPlayed}</div>
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
              </CardContent>
            </Card>

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

            <Card
              className={`transition-colors duration-300 ${
                darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">🏆 Achievements</h3>
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
                                : "bg-blue-50 border-blue-200 opacity-50"
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
                            <div className="text-xs text-blue-600 mt-1 font-medium">{badge.perk}</div>
                          )}
                        </div>
                      )
                    })}
                </div>
              </CardContent>
            </Card>

            {/* Game Links Section */}
            <div className="mt-8">
              {/* <GameLinks darkMode={darkMode} /> */}
            </div>
          </div>
        </div>

        {/* FAQ Section - Full Width */}
        <div className="mt-8">
          <FAQ />
        </div>

        {/* Regional Flags Section */}
        <div className="mt-8">
          <h2 className={`text-2xl font-extrabold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>
            Explore regional flags
          </h2>
          <p className={`${darkMode ? "text-slate-300" : "text-slate-700"} mb-4 max-w-3xl`}>
            Browse country flags by region. Each page includes a larger flag table with names, short histories,
            download links (SVG/PNG), and navigation to detailed meanings.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/europe-flags">
              <Button className="group rounded-full border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:shadow-md hover:from-blue-500 hover:to-indigo-500">
                <Globe className="w-4 h-4 mr-2 opacity-90 group-hover:scale-110 transition-transform" />
                Europe Flags
              </Button>
            </Link>
            <Link href="/asia-flags">
              <Button className="group rounded-full border-0 bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-sm hover:shadow-md hover:from-rose-500 hover:to-orange-500">
                <Globe className="w-4 h-4 mr-2 opacity-90 group-hover:scale-110 transition-transform" />
                Asia Flags
              </Button>
            </Link>
            <Link href="/africa-flags">
              <Button className="group rounded-full border-0 bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm hover:shadow-md hover:from-emerald-500 hover:to-teal-500">
                <Globe className="w-4 h-4 mr-2 opacity-90 group-hover:scale-110 transition-transform" />
                Africa Flags
              </Button>
            </Link>
            <Link href="/america-flags">
              <Button className="group rounded-full border-0 bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-sm hover:shadow-md hover:from-sky-500 hover:to-cyan-500">
                <Globe className="w-4 h-4 mr-2 opacity-90 group-hover:scale-110 transition-transform" />
                Americas Flags
              </Button>
            </Link>
            <Link href="/oceania-flags">
              <Button className="group rounded-full border-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-sm hover:shadow-md hover:from-purple-500 hover:to-fuchsia-500">
                <Globe className="w-4 h-4 mr-2 opacity-90 group-hover:scale-110 transition-transform" />
                Oceania Flags
              </Button>
            </Link>
          </div>
        </div>

        {/* Printable Flags Section */}
        <div className="mt-10">
          <h2 className={`text-2xl font-extrabold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>Printable flags</h2>
          <p className={`${darkMode ? "text-slate-300" : "text-slate-700"} mb-4 max-w-3xl`}>
            Download high‑quality country flags in SVG or PNG sizes (320/640/1280). Each entry links to
            Wikimedia Commons for licensing and to our history & meaning pages.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/printable-flags">
              <Button className="rounded-full border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:shadow-md hover:from-blue-500 hover:to-indigo-500">Printable Flags Hub</Button>
            </Link>
            <Link href="/flags/colors/red-white">
              <Button variant="outline" className="rounded-full">Red & white flags</Button>
            </Link>
            <Link href="/flags/symbols/stars">
              <Button variant="outline" className="rounded-full">Flags with stars</Button>
            </Link>
            <Link href="/flags/symbols/animals">
              <Button variant="outline" className="rounded-full">Flags with animals</Button>
            </Link>
            <Link href="/flags/styles/scandinavian-cross">
              <Button variant="outline" className="rounded-full">Scandinavian cross</Button>
            </Link>
          </div>

          {/* More Games to Play */}
          <div
            className={`rounded-lg border text-card-foreground shadow-sm mt-8 mb-12 transition-colors duration-300 ${
              darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
            }`}
          >
            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-amber-500 font-varela flex items-center justify-center gap-2">
                  <span className="text-4xl">🎮</span>More Games to Play
                </h2>
                <p className={`mt-2 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                  Check out these other fun daily challenges from the same creator
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <a href="https://www.monumentle.fun" target="_blank" rel="noopener noreferrer" className="block group">
                  <div
                    className={`h-full rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      darkMode
                        ? "bg-slate-900 border-amber-600/30 hover:border-amber-500"
                        : "bg-white border-amber-300 hover:border-amber-500"
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center mr-3 overflow-hidden">
                          <img src="https://www.monumentle.fun/favicon.ico" alt="Monumentle" width="24" height="24" />
                        </div>
                        <h3 className="text-2xl font-bold text-amber-500 font-varela">Monumentle</h3>
                      </div>
                      <div className={`text-center mb-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <p>Guess world monuments in this engaging daily challenge.</p>
                      </div>
                      <div className="flex justify-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-900/30 text-amber-400 group-hover:bg-amber-800/50">Play Now →</span>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://www.classic-snake.com" target="_blank" rel="noopener noreferrer" className="block group">
                  <div
                    className={`h-full rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      darkMode
                        ? "bg-slate-900 border-green-600/30 hover:border-green-500"
                        : "bg-white border-green-300 hover:border-green-500"
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mr-3">
                          <span className="text-2xl">🐍</span>
                        </div>
                        <h3 className="text-2xl font-bold text-green-500 font-varela">Classic Snake</h3>
                      </div>
                      <div className={`text-center mb-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <p>The nostalgic snake game reimagined! Collect food, grow longer, and avoid hitting walls.</p>
                      </div>
                      <div className="flex justify-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-900/30 text-green-400 group-hover:bg-green-800/50">Play Now →</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex justify-center mt-6">
                <a href="https://numlink.fun" target="_blank" rel="noopener noreferrer" className="block group w-full md:w-1/2">
                  <div
                    className={`h-full rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      darkMode
                        ? "bg-slate-900 border-blue-600/30 hover:border-blue-500"
                        : "bg-white border-blue-300 hover:border-blue-500"
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-lg">123</span>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-500 font-varela">Numlink</h3>
                      </div>
                      <div className={`text-center mb-4 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                        <p>Connect matching numbers to clear the board in this addictive puzzle.</p>
                      </div>
                      <div className="flex justify-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-900/30 text-blue-400 group-hover:bg-blue-800/50">Play Now →</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Modal */}
      {showStats && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
          <Card className={`w-full max-w-md transition-colors ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Your Statistics</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowStats(false)} aria-label="Close stats">
                  ✕
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-500">{stats.gamesPlayed}</div>
                  <div className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-600"}`}>Played</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">{stats.gamesPlayed > 0 ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) : 0}%</div>
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
              <div className="flex gap-2">
                <Button onClick={shareResult} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
                  Share Stats
                </Button>
                <Button onClick={() => setShowStats(false)} variant="outline" className={`flex-1 ${darkMode ? "bg-slate-800 text-slate-100" : ""}`}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* How to Play Modal */}
      {showHowToPlay && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
          <Card className={`w-full max-w-md transition-colors ${darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">How to Play</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowHowToPlay(false)} aria-label="Close how to play">✕</Button>
              </div>
              <div className={`text-sm space-y-3 ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                <p>Guess the mystery country in up to 6 tries. Each wrong guess reveals more of the flag and you’ll get distance hints to guide you.</p>
                <p>Use the search to enter a country. After the game, jump to the country’s detail page to learn its history and download printable flags.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* SEO Structured Data */}
      <StructuredData 
        country={currentCountry} 
        gameWon={gameWon} 
        guessCount={guesses.length} 
      />
    </div>
  )
} 