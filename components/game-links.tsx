"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Gamepad2, Globe, Building2, Palette, Music, BookOpen, Camera } from "lucide-react"

interface GameLink {
  name: string
  description: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
  status: "live" | "coming-soon"
}

const GAME_LINKS: GameLink[] = [
  {
    name: "Monumentle",
    description: "Daily monument guessing game. Identify famous world landmarks from progressively revealed images.",
    url: "https://monumentle.fun",
    icon: Building2,
    color: "text-amber-600",
    bgColor: "from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
    status: "live"
  },
  {
    name: "Supercardle",
    description: "Daily Formula 1 car guessing game. Identify F1 cars from progressively revealed images.",
    url: "https://supercardle.fun",
    icon: Gamepad2,
    color: "text-red-600",
    bgColor: "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
    status: "live"
  },
  {
    name: "Classic Snake",
    description: "The classic snake game with modern graphics and smooth gameplay.",
    url: "https://classic-snake.com",
    icon: Globe,
    color: "text-green-600",
    bgColor: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    status: "live"
  },
  {
    name: "Colorle",
    description: "Daily color guessing game. Identify colors from progressively revealed swatches.",
    url: "#",
    icon: Palette,
    color: "text-purple-600",
    bgColor: "from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20",
    status: "coming-soon"
  },
  {
    name: "Musicle",
    description: "Daily music guessing game. Identify songs from progressively revealed audio clips.",
    url: "#",
    icon: Music,
    color: "text-pink-600",
    bgColor: "from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
    status: "coming-soon"
  },
  {
    name: "Bookle",
    description: "Daily book guessing game. Identify famous books from progressively revealed covers.",
    url: "#",
    icon: BookOpen,
    color: "text-indigo-600",
    bgColor: "from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20",
    status: "coming-soon"
  },
  {
    name: "Photole",
    description: "Daily photo guessing game. Identify famous photographs from progressively revealed images.",
    url: "#",
    icon: Camera,
    color: "text-cyan-600",
    bgColor: "from-cyan-50 to-teal-50 dark:from-cyan-950/20 dark:to-teal-950/20",
    status: "coming-soon"
  }
]

interface GameLinksProps {
  darkMode?: boolean
}

export function GameLinks({ darkMode = false }: GameLinksProps) {
  return (
    <Card className={`w-full max-w-6xl mx-auto transition-colors duration-300 ${
      darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-blue-200"
    }`}>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
          <Gamepad2 className="w-6 h-6 text-blue-600" />
          More Daily Challenge Games
        </CardTitle>
        <p className="text-slate-600 dark:text-slate-400">
          Discover other exciting daily puzzle games from the daily-challenge.fun hub
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAME_LINKS.map((game, index) => {
            const IconComponent = game.icon
            return (
              <Card
                key={index}
                className={`transition-all duration-300 hover:scale-105 cursor-pointer ${
                  game.status === "coming-soon" ? "opacity-60" : ""
                } ${
                  darkMode ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${game.bgColor}`}>
                      <IconComponent className={`w-6 h-6 ${game.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{game.name}</h3>
                      {game.status === "coming-soon" && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          darkMode 
                            ? "bg-slate-800 text-slate-400" 
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {game.description}
                  </p>
                  {game.status === "live" ? (
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    >
                      <a href={game.url} target="_blank" rel="noopener noreferrer">
                        Play Now
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-blue-500"
          >
            <a href="https://www.daily-challenge.fun" target="_blank" rel="noopener noreferrer">
              Visit Daily Challenge Hub 🎮
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 