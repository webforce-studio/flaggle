"use client"

import { useState, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Cookie, Shield, AlertCircle, Globe } from 'lucide-react'
import { checkGDPRRequirement, type GeolocationResult } from '@/lib/geolocation'

// Google Consent Mode v2 integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function BlockingCookieConsent() {
  const [showOverlay, setShowOverlay] = useState(false) // Start hidden until we check location
  const [isLoading, setIsLoading] = useState(true)
  const [geolocationResult, setGeolocationResult] = useState<GeolocationResult | null>(null)

  useEffect(() => {
    const checkLocationAndConsent = async () => {
      try {
        // Check if consent was already given
        const consent = localStorage.getItem('flagguesser-cookie-consent')
        if (consent === 'granted' || consent === 'denied') {
          setShowOverlay(false)
          setIsLoading(false)
          return
        }

        // Check if user is in GDPR-required region
        const result = await checkGDPRRequirement()
        setGeolocationResult(result)

        // Only show cookie consent if GDPR is required
        if (result.isGDPRRequired) {
          setShowOverlay(true)
        } else {
          // Auto-accept all cookies for non-GDPR regions
          localStorage.setItem('flagguesser-cookie-consent', 'granted')
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
              analytics_storage: 'granted',
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            })
          }
          console.log('✅ Auto-accepted cookies for non-GDPR region:', result.country)
        }

      } catch (error) {
        console.error('Error checking location:', error)
        // Default to showing consent if there's an error (safer approach)
        setShowOverlay(true)
      } finally {
        setIsLoading(false)
      }
    }

    checkLocationAndConsent()
  }, [])

  const handleAccept = () => {
    localStorage.setItem('flagguesser-cookie-consent', 'granted')
    setShowOverlay(false)
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
  }

  const handleDecline = () => {
    localStorage.setItem('flagguesser-cookie-consent', 'denied')
    setShowOverlay(false)
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
  }

  // Show loading state or return null if not needed
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl p-6 flex items-center gap-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="text-gray-700">Checking your location...</span>
        </div>
      </div>
    )
  }

  // Only show the overlay if GDPR is required and no choice has been made
  if (!showOverlay) return null

  return (
    <>
      {/* Backdrop that blocks interaction with the page */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]" style={{ pointerEvents: 'auto' }} />
      {/* Blocking overlay */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ pointerEvents: 'auto' }}>
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-8 w-8 text-blue-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Privacy Notice</h2>
              <p className="text-sm text-gray-600">
                We need your consent to continue
                {geolocationResult?.country && (
                  <span className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <Globe className="h-3 w-3" />
                    Detected location: {geolocationResult.country}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700 mb-2">
                  This website uses cookies and similar technologies to:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Analyze site traffic and usage</li>
                  <li>• Show personalized advertisements</li>
                  <li>• Improve your browsing experience</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>GDPR Compliance:</strong> You must make a choice to continue using this website. 
                This ensures compliance with EU/EEA/UK/Switzerland privacy regulations (GDPR, ePrivacy Directive, DMA).
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleDecline}
              className="flex-1 px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
            >
              Decline All
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Accept All
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            By continuing, you agree to our use of cookies and similar technologies.
          </p>
        </div>
      </div>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </>
  )
} 