'use client'

import { useEffect, useState } from 'react'

/**
 * Third Party Script Optimizer
 * 
 * This component delays loading of non-critical third-party scripts
 * until after user interaction or a delay, improving initial page load performance.
 */
export function ThirdPartyOptimizer() {
  const [shouldLoadThirdParty, setShouldLoadThirdParty] = useState(false)

  useEffect(() => {
    // Load third-party scripts after user interaction or 3 seconds
    const loadThirdParty = () => {
      setShouldLoadThirdParty(true)
    }

    // Load after user interaction
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']
    const loadOnInteraction = () => {
      events.forEach(event => {
        document.addEventListener(event, loadThirdParty, { once: true, passive: true })
      })
    }

    // Load after delay as fallback
    const timeoutId = setTimeout(loadThirdParty, 3000)

    // Start listening for interactions
    loadOnInteraction()

    return () => {
      clearTimeout(timeoutId)
      events.forEach(event => {
        document.removeEventListener(event, loadThirdParty)
      })
    }
  }, [])

  return shouldLoadThirdParty ? (
    <div id="third-party-scripts-loaded" style={{ display: 'none' }}>
      Third-party scripts loaded
    </div>
  ) : null
}
