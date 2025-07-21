'use client'

import { useState, useEffect } from 'react'

export function ConsentManager() {
  const [showConsent, setShowConsent] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('analytics-consent')
    if (consent === 'granted') {
      setConsentGiven(true)
    } else if (consent === null) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('analytics-consent', 'granted')
    setConsentGiven(true)
    setShowConsent(false)
    
    // Update Google Analytics consent
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted', // Enable AdSense ads
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        functionality_storage: 'granted'
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('analytics-consent', 'denied')
    setConsentGiven(false)
    setShowConsent(false)
    
    // Update Google Analytics consent (disable ads)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied', // Disable AdSense ads
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        functionality_storage: 'denied'
      })
    }
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm">
            We use cookies and analytics to improve your experience and show relevant ads. 
            This helps us understand how you use our site and make it better.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 rounded transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-amber-600 hover:bg-amber-700 rounded transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

// Add gtag to window type
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
} 