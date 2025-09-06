'use client'

import { useEffect, useState } from 'react'

/**
 * Script Manager Component
 * 
 * Manages loading of third-party scripts based on user behavior and preferences.
 * Implements aggressive strategies to reduce unused JavaScript.
 */
export function ScriptManager() {
  const [scriptConfig, setScriptConfig] = useState({
    loadAnalytics: false,
    loadAdSense: false,
    loadAfterInteraction: false
  })

  useEffect(() => {
    // Check user preferences and behavior
    const checkScriptLoading = () => {
      const hasInteracted = sessionStorage.getItem('user-interacted') === 'true'
      const isReturningUser = localStorage.getItem('returning-user') === 'true'
      const scriptPreferences = localStorage.getItem('script-preferences')
      
      // Parse saved preferences
      let preferences = { analytics: false, ads: false }
      if (scriptPreferences) {
        try {
          preferences = JSON.parse(scriptPreferences)
        } catch (e) {
          // Invalid preferences, use defaults
        }
      }

      // More aggressive loading strategy
      if (isReturningUser && hasInteracted) {
        // Returning user who has interacted - load scripts
        setScriptConfig({
          loadAnalytics: preferences.analytics,
          loadAdSense: preferences.ads,
          loadAfterInteraction: true
        })
      } else if (hasInteracted) {
        // First-time user who has interacted - load minimal scripts
        setScriptConfig({
          loadAnalytics: false, // Don't load analytics for first-time users
          loadAdSense: false,   // Don't load ads for first-time users
          loadAfterInteraction: true
        })
      } else {
        // No interaction yet - don't load any third-party scripts
        setScriptConfig({
          loadAnalytics: false,
          loadAdSense: false,
          loadAfterInteraction: false
        })
      }
    }

    checkScriptLoading()

    // Listen for user interactions
    const handleInteraction = () => {
      sessionStorage.setItem('user-interacted', 'true')
      localStorage.setItem('returning-user', 'true')
      
      // Re-check script loading after interaction
      setTimeout(checkScriptLoading, 1000)
    }

    const events = ['mousedown', 'keypress', 'scroll', 'touchstart', 'click']
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true })
    })

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction)
      })
    }
  }, [])

  // Store script configuration in a global variable for other components to access
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).scriptConfig = scriptConfig
    }
  }, [scriptConfig])

  return (
    <div 
      id="script-manager" 
      data-config={JSON.stringify(scriptConfig)}
      style={{ display: 'none' }}
    >
      Script manager loaded
    </div>
  )
}
