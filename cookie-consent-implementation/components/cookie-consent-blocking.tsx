"use client"

import { useState, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Cookie, Shield, AlertCircle } from 'lucide-react'

// Google Consent Mode v2 integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function BlockingCookieConsent() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null)
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('your-site-cookie-consent')
    if (consent === 'granted' || consent === 'denied') {
      setConsentGiven(consent === 'granted')
      setShowOverlay(false)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('your-site-cookie-consent', 'granted')
    setConsentGiven(true)
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
    localStorage.setItem('your-site-cookie-consent', 'denied')
    setConsentGiven(false)
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

  // Blocking overlay that prevents interaction
  if (showOverlay) {
    return (
      <>
        {/* Blocking overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Privacy Notice</h2>
                <p className="text-sm text-gray-600">We need your consent to continue</p>
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
                  <strong>Important:</strong> You must make a choice to continue using this website. 
                  This ensures compliance with privacy regulations.
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
        
        {/* Prevent scrolling and interaction */}
        <style jsx global>{`
          body {
            overflow: hidden;
            pointer-events: none;
          }
          body > * {
            pointer-events: none;
          }
          .consent-overlay {
            pointer-events: auto;
          }
        `}</style>
      </>
    )
  }

  // Regular cookie banner for subsequent visits
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
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
          })
        }
      }}
      onDecline={() => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          })
        }
      }}
    >
      <div className="flex items-center gap-3">
        <Cookie className="h-5 w-5 text-amber-500" />
        <div>
          <p className="font-medium">We use cookies</p>
          <p className="text-sm text-muted-foreground">
            We use cookies to improve your experience and analyze site usage.
          </p>
        </div>
      </div>
    </CookieConsent>
  )
}

// Alternative: Simple blocking version
export function SimpleBlockingConsent() {
  const [showConsent, setShowConsent] = useState(true)

  useEffect(() => {
    const consent = localStorage.getItem('your-site-cookie-consent')
    if (consent) {
      setShowConsent(false)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('your-site-cookie-consent', 'granted')
    setShowConsent(false)
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('your-site-cookie-consent', 'denied')
    setShowConsent(false)
    
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
    }
  }

  if (!showConsent) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-6">
          <div className="text-center">
            <Cookie className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Cookie Consent Required</h2>
            <p className="text-gray-600 mb-6">
              This website uses cookies. You must accept or decline to continue.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              >
                Accept
              </button>
            </div>
          </div>
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