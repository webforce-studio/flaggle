"use client"

import { useState, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Badge } from '@/components/ui/badge'
import { Cookie, Shield, BarChart3, Target, Settings } from 'lucide-react'

// Google Consent Mode v2 integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

interface ConsentSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

// Simple Cookie Banner (Option 1 - Easiest)
export function SimpleCookieConsent() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All Cookies"
      declineButtonText="Decline"
      enableDeclineButton
              cookieName="flaggle-cookie-consent"
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
        // Enable Google Analytics
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

// Advanced Cookie Consent with Granular Controls (Option 2 - Recommended)
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
    const existingConsent = localStorage.getItem('flaggle-cookie-consent-v2')
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
        personalization_storage: settings.preferences ? 'granted' : 'denied',
      })
    }
  }

  const saveConsent = (newConsent: ConsentSettings) => {
            localStorage.setItem('flaggle-cookie-consent-v2', JSON.stringify(newConsent))
    updateGoogleConsent(newConsent)
    setConsent(newConsent)
    setShowBanner(false)
    setShowPreferences(false)
    
    console.log('🍪 Cookie preferences saved:', newConsent)
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    saveConsent(allAccepted)
  }

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    saveConsent(necessaryOnly)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/20 rounded-lg">
                    <Cookie className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Cookie Settings</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We use cookies to enhance your experience, analyze site usage, and provide personalized content. 
                      Choose which cookies you'd like to allow.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={acceptAll} className="flex-1 sm:flex-none">
                      Accept All
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={acceptNecessary}
                      className="flex-1 sm:flex-none"
                    >
                      Necessary Only
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowPreferences(true)}
                      className="flex-1 sm:flex-none"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Cookie Preferences
              </CardTitle>
              <CardDescription>
                Manage your cookie settings. You can change these preferences at any time.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">Necessary Cookies</h4>
                    <Badge variant="secondary">Required</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Essential for the website to function properly. Cannot be disabled.
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    <h4 className="font-medium">Analytics Cookies</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <Switch 
                  checked={consent.analytics}
                  onCheckedChange={(checked) => 
                    setConsent(prev => ({ ...prev, analytics: checked }))
                  }
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <h4 className="font-medium">Marketing Cookies</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver personalized ads and track marketing effectiveness.
                  </p>
                </div>
                <Switch 
                  checked={consent.marketing}
                  onCheckedChange={(checked) => 
                    setConsent(prev => ({ ...prev, marketing: checked }))
                  }
                />
              </div>

              {/* Preference Cookies */}
              <div className="flex items-center justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <h4 className="font-medium">Preference Cookies</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Remember your settings and preferences for a better experience.
                  </p>
                </div>
                <Switch 
                  checked={consent.preferences}
                  onCheckedChange={(checked) => 
                    setConsent(prev => ({ ...prev, preferences: checked }))
                  }
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={() => saveConsent(consent)} className="flex-1">
                  Save Preferences
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPreferences(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
} 