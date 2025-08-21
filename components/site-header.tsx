"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const [darkMode, setDarkMode] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [showHowToPlay, setShowHowToPlay] = useState(false)

  // sync local flag with next-themes
  useEffect(() => {
    setDarkMode(theme === "dark")
  }, [theme])

  const handleToggleStats = () => {
    setShowStats((v) => !v)
    window.dispatchEvent(new Event("flaggle:toggle-stats"))
  }

  const handleToggleHowTo = () => {
    setShowHowToPlay((v) => !v)
    window.dispatchEvent(new Event("flaggle:toggle-howto"))
  }

  const handleToggleDark = () => {
    const next = darkMode ? "light" : "dark"
    setTheme(next)
    window.dispatchEvent(new Event("flaggle:toggle-dark"))
  }

  return (
    <Header
      darkMode={darkMode}
      toggleDarkMode={handleToggleDark}
      showStats={showStats}
      setShowStats={() => handleToggleStats()}
      showHowToPlay={showHowToPlay}
      setShowHowToPlay={() => handleToggleHowTo()}
    />
  )
}


