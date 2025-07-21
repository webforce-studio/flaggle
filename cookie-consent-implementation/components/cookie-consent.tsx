"use client"

import { useState, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Cookie } from 'lucide-react'

// Google Consent Mode v2 integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function SimpleCookieConsent() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All Cookies"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="your-site-cookie-consent"
      style={{
        background: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        border: "1px solid hsl(var(--border))",
        boxShadow: "0 -4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
      buttonStyle={{
        background: "hsl(var(--primary))",
        color: "hsl(var(--primary-foreground))",
        fontSize: "14px",
        borderRadius: "6px",
        padding: "8px 16px",
        border: "none",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "hsl(var(--muted-foreground))",
        fontSize: "14px",
        borderRadius: "6px",
        padding: "8px 16px",
        border: "1px solid hsl(var(--border))",
      }}
      onAccept={() => {
        // Enable Google Analytics and AdSense
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
          })
        }
        console.log('✅ All cookies accepted')
      }}
      onDecline={() => {
        // Only necessary cookies
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          })
        }
        console.log('❌ Optional cookies declined')
      }}
    >
      <div className="flex items-center gap-3">
        <Cookie className="h-5 w-5 text-amber-500" />
        <div>
          <p className="font-medium">We use cookies</p>
          <p className="text-sm text-muted-foreground">
            We use cookies to improve your experience and analyze site usage. You can manage your preferences below.
          </p>
        </div>
      </div>
    </CookieConsent>
  )
}

// Advanced Cookie Consent with Granular Controls (Optional)
interface ConsentSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export function AdvancedCookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [consent, setConsent] = useState<ConsentSettings>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    // Check if user has already given consent
    const existingConsent = localStorage.getItem('your-site-cookie-consent-v2')
    if (!existingConsent) {
      setShowBanner(true)
    } else {
      const savedConsent = JSON.parse(existingConsent)
      setConsent(savedConsent)
      updateGoogleConsent(savedConsent)
    }
  }, [])

  const updateGoogleConsent = (settings: ConsentSettings) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: settings.analytics ? 'granted' : 'denied',
        ad_storage: settings.marketing ? 'granted' : 'denied',
        ad_user_data: settings.marketing ? 'granted' : 'denied',
        ad_personalization: settings.marketing ? 'granted' : 'denied',
        functionality_storage: settings.preferences ? 'granted' : 'denied',
        personalization_storage: settings.preferences ? 'granted' : 'denied'
      })
    }
  }

  const saveConsent = (newConsent: ConsentSettings) => {
    setConsent(newConsent)
    localStorage.setItem('your-site-cookie-consent-v2', JSON.stringify(newConsent))
    updateGoogleConsent(newConsent)
    setShowBanner(false)
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    }
    saveConsent(allAccepted)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    }
    saveConsent(necessaryOnly)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cookie className="h-5 w-5 text-amber-500" />
            <div>
              <p className="font-medium">Cookie Preferences</p>
              <p className="text-sm text-gray-600">
                Choose which cookies you want to allow
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded transition-colors"
            >
              Necessary Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 