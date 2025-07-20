"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Camera, Trophy, Globe, Search, AlertCircle } from "lucide-react"
import Image from "next/image"
import { MONUMENTS_DATABASE } from "@/lib/monument-database"
import { Input } from "@/components/ui/input"

// Get next appearance date for a monument
const getNextAppearanceDate = (dayOfYear: number) => {
  const today = new Date()
  const currentYear = today.getFullYear()
  const startOfYear = new Date(currentYear, 0, 1)
  const currentDayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / 86400000) + 1

  // Calculate next occurrence in the 45-day cycle
  let nextDay = dayOfYear
  while (nextDay <= currentDayOfYear) {
    nextDay += 45
  }

  // If we've gone past this year, wrap to next year
  if (nextDay > 365) {
    nextDay = dayOfYear
    return new Date(currentYear + 1, 0, nextDay)
  }

  return new Date(currentYear, 0, nextDay)
}

export default function MonumentOverview() {
  // Force refresh to prevent caching issues
  const [monuments, setMonuments] = useState(MONUMENTS_DATABASE)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    // Force refresh of monuments data
    setMonuments([...MONUMENTS_DATABASE])
  }, [])

  const [selectedContinent, setSelectedContinent] = useState<string>("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const continents = ["All", "Europe", "Asia", "North America", "South America", "Africa", "Oceania"]
  const difficulties = ["All", "easy", "medium", "hard"]

  // Filter monuments based on selected filters and search query
  const filteredMonuments = monuments.filter((monument) => {
    const continentMatch = selectedContinent === "All" || monument.continent === selectedContinent
    const difficultyMatch = selectedDifficulty === "All" || monument.difficulty === selectedDifficulty
    const searchMatch =
      searchQuery === "" ||
      monument.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      monument.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      monument.country.toLowerCase().includes(searchQuery.toLowerCase())

    return continentMatch && difficultyMatch && searchMatch
  })

  // Calculate statistics
  const totalMonuments = monuments.length
  const continentCounts = monuments.reduce(
    (acc, monument) => {
      acc[monument.continent] = (acc[monument.continent] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const difficultyCounts = monuments.reduce(
    (acc, monument) => {
      acc[monument.difficulty] = (acc[monument.difficulty] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // Get today's monument
  const today = new Date()
  const startOfYear = new Date(today.getFullYear(), 0, 1)
  const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / 86400000) + 1
  const cycleDay = ((dayOfYear - 1) % 45) + 1
  const todaysMonument = monuments.find((m) => m.dayOfYear === cycleDay) || monuments[0]

  // Handle image error
  const handleImageError = (monumentId: string) => {
    setImageErrors((prev) => ({ ...prev, [monumentId]: true }))
    console.error(`Failed to load image for monument ID: ${monumentId}`)
  }

  // Get fallback image URL based on monument name
  const getFallbackImageUrl = (monument: any) => {
    return `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(monument.name + " " + monument.country)}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-4">
            🏛️ Monumentle Complete Collection
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
            {totalMonuments} world-famous monuments in a 45-day rotation cycle
          </p>

          {/* Today's Monument */}
          {todaysMonument && (
            <Card className="mb-8 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 border-amber-300 dark:border-amber-700">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
                    {imageErrors[todaysMonument.id] ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800">
                        <div className="text-center p-4">
                          <AlertCircle className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                          <p className="text-sm text-slate-600 dark:text-slate-300">Image could not be loaded</p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={todaysMonument.image || getFallbackImageUrl(todaysMonument)}
                        alt={todaysMonument.name}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(todaysMonument.id)}
                        priority
                      />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <Badge className="mb-2 bg-amber-500">Today's Monument</Badge>
                    <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-2">
                      {todaysMonument.name}
                    </h2>
                    <div className="flex items-center gap-2 mb-2 text-slate-600 dark:text-slate-300">
                      <MapPin className="w-4 h-4" />
                      {todaysMonument.location}, {todaysMonument.country}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">{todaysMonument.continent}</Badge>
                      <Badge variant="outline">{todaysMonument.type}</Badge>
                      <Badge variant="outline" className="capitalize">
                        {todaysMonument.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Built in{" "}
                      {todaysMonument.yearBuilt > 0
                        ? todaysMonument.yearBuilt
                        : `${Math.abs(todaysMonument.yearBuilt)} BCE`}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Progress Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{totalMonuments}</div>
                <div className="text-sm text-green-700 dark:text-green-300">Total Monuments</div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">45</div>
                <div className="text-sm text-blue-700 dark:text-blue-300">Day Cycle</div>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {Object.keys(continentCounts).length}
                </div>
                <div className="text-sm text-purple-700 dark:text-purple-300">Continents</div>
              </CardContent>
            </Card>
            <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                  {Math.round((totalMonuments / 50) * 100)}%
                </div>
                <div className="text-sm text-amber-700 dark:text-amber-300">Complete</div>
              </CardContent>
            </Card>
          </div>

          {/* Continent Distribution */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
            {Object.entries(continentCounts).map(([continent, count]) => (
              <Badge key={continent} variant="outline" className="p-2 text-xs">
                {continent}: {count}
              </Badge>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <Input
              placeholder="Search monuments, locations, or countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 self-center">Continent:</span>
              {continents.map((continent) => (
                <Button
                  key={continent}
                  variant={selectedContinent === continent ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedContinent(continent)}
                  className={selectedContinent === continent ? "bg-amber-500 hover:bg-amber-600" : ""}
                >
                  {continent}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 self-center">Difficulty:</span>
              {difficulties.map((difficulty) => (
                <Button
                  key={difficulty}
                  variant={selectedDifficulty === difficulty ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={selectedDifficulty === difficulty ? "bg-amber-500 hover:bg-amber-600" : ""}
                >
                  {difficulty === "All" ? "All" : `${difficulty.charAt(0).toUpperCase()}${difficulty.slice(1)}`}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-slate-600 dark:text-slate-300">
            Showing {filteredMonuments.length} of {totalMonuments} monuments
          </p>
        </div>

        {/* Monument Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMonuments
            .sort((a, b) => a.dayOfYear - b.dayOfYear)
            .map((monument) => {
              const nextDate = getNextAppearanceDate(monument.dayOfYear)

              return (
                <Card key={monument.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    {imageErrors[monument.id] ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800">
                        <div className="text-center p-4">
                          <AlertCircle className="w-8 h-8 mx-auto mb-2 text-amber-500" />
                          <p className="text-sm text-slate-600 dark:text-slate-300">Image could not be loaded</p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={monument.image || getFallbackImageUrl(monument)}
                        alt={`${monument.name} - ${monument.location}, ${monument.country}`}
                        fill
                        className="object-cover"
                        onError={() => handleImageError(monument.id)}
                      />
                    )}
                    <div className="absolute top-2 left-2 flex gap-2">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        Day {monument.dayOfYear}
                      </Badge>
                      <Badge
                        className={`text-white ${
                          monument.difficulty === "easy"
                            ? "bg-green-500"
                            : monument.difficulty === "medium"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      >
                        {monument.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-amber-500 text-white">{monument.continent}</Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-amber-600 dark:text-amber-400">
                      {monument.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <MapPin className="w-4 h-4" />
                      {monument.location}, {monument.country}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    {/* Monument Info */}
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-slate-600 dark:text-slate-300">Type:</span>
                        <div className="font-medium">{monument.type}</div>
                      </div>
                      <div>
                        <span className="text-slate-600 dark:text-slate-300">Built:</span>
                        <div className="font-medium">
                          {monument.yearBuilt > 0 ? monument.yearBuilt : `${Math.abs(monument.yearBuilt)} BCE`}
                        </div>
                      </div>
                    </div>

                    {monument.height > 0 && (
                      <div className="text-sm">
                        <span className="text-slate-600 dark:text-slate-300">Height: </span>
                        <span className="font-medium">{monument.height}m</span>
                      </div>
                    )}

                    {/* Game Schedule */}
                    <div className="border-t pt-3">
                      <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">Next Game Date:</span>
                      </div>
                      <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                        {nextDate.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Appears every 45 days</div>
                    </div>

                    {monument.photographer && monument.photographerUrl && (
                      <div className="border-t pt-3">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 mb-2">
                          <Camera className="w-4 h-4" />
                          <span>Photo Attribution:</span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          Photo by{" "}
                          <a
                            href={monument.photographerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 dark:text-amber-400 hover:underline"
                          >
                            {monument.photographer}
                          </a>{" "}
                          on{" "}
                          <a
                            href="https://unsplash.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 dark:text-amber-400 hover:underline"
                          >
                            {monument.imageSource || "Unsplash"}
                          </a>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 space-y-6">
          {/* Difficulty Distribution */}
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-amber-600 dark:text-amber-400 mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Difficulty Distribution
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(difficultyCounts).map(([difficulty, count]) => (
                  <div key={difficulty} className="text-center">
                    <div
                      className={`text-2xl font-bold ${
                        difficulty === "easy"
                          ? "text-green-600"
                          : difficulty === "medium"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {count}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 capitalize">{difficulty}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                How the 45-Day Rotation Works
              </h3>
              <div className="space-y-3 text-slate-600 dark:text-slate-300">
                <p>🗓️ Each monument appears on a specific day in a 45-day cycle that repeats throughout the year.</p>
                <p>🔄 After day 45, the cycle starts over at day 1, ensuring you encounter all monuments regularly.</p>
                <p>🌍 The collection spans all continents with a balanced mix of difficulty levels.</p>
                <p>📸 All images are high-quality photos from Unsplash with proper photographer attribution.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
