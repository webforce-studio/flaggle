'use client'

import { useEffect, useState } from 'react'

/**
 * Third Party Script Optimizer
 * 
 * This component delays loading of non-critical third-party scripts
 * until after user interaction or a delay, improving initial page load performance.
 * Uses more aggressive loading strategies to reduce unused JavaScript.
 */
export function ThirdPartyOptimizer() {
  const [shouldLoadThirdParty, setShouldLoadThirdParty] = useState(false)
  const [loadStrategy, setLoadStrategy] = useState<'immediate' | 'interaction' | 'delay'>('immediate')

  useEffect(() => {
    // More aggressive loading strategy
    const loadThirdParty = (strategy: 'immediate' | 'interaction' | 'delay') => {
      setLoadStrategy(strategy)
      setShouldLoadThirdParty(true)
    }

    // Check if user has interacted before
    const hasInteracted = sessionStorage.getItem('user-interacted') === 'true'
    
    if (hasInteracted) {
      // User has interacted before, load immediately
      loadThirdParty('immediate')
    } else {
      // Load after user interaction with more specific events
      const events = ['mousedown', 'keypress', 'scroll', 'touchstart', 'click', 'focus']
      const loadOnInteraction = () => {
        sessionStorage.setItem('user-interacted', 'true')
        loadThirdParty('interaction')
      }

      events.forEach(event => {
        document.addEventListener(event, loadOnInteraction, { once: true, passive: true })
      })

      // Much longer delay as fallback (10 seconds instead of 3)
      const timeoutId = setTimeout(() => {
        loadThirdParty('delay')
      }, 10000)

      return () => {
        clearTimeout(timeoutId)
        events.forEach(event => {
          document.removeEventListener(event, loadOnInteraction)
        })
      }
    }
  }, [])

  return shouldLoadThirdParty ? (
    <div 
      id="third-party-scripts-loaded" 
      data-strategy={loadStrategy}
      style={{ display: 'none' }}
    >
      Third-party scripts loaded via {loadStrategy}
    </div>
  ) : null
}
