'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export function GoogleAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [loadStrategy, setLoadStrategy] = useState<string>('')

  useEffect(() => {
    // Check script manager configuration
    const checkScriptConfig = () => {
      const element = document.getElementById('script-manager')
      if (element) {
        try {
          const config = JSON.parse(element.getAttribute('data-config') || '{}')
          if (config.loadAnalytics) {
            setLoadStrategy('enabled')
            setShouldLoad(true)
          } else {
            setShouldLoad(false)
          }
        } catch (e) {
          // Invalid config, don't load
          setShouldLoad(false)
        }
      } else {
        // Check again after a short delay
        setTimeout(checkScriptConfig, 100)
      }
    }

    checkScriptConfig()
  }, [])

  if (!shouldLoad) return null

  // Only load GA if explicitly enabled by script manager
  if (loadStrategy !== 'enabled') {
    return null
  }

  return (
    <>
      {/* Minimal Google Analytics - only load core tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XY7R6HH2R7"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize GA after script loads with minimal config
          if (typeof window !== 'undefined') {
            window.gtag = window.gtag || function() {
              (window.gtag.q = window.gtag.q || []).push(arguments)
            }
            window.gtag('js', new Date())
            
            // Only basic config to reduce unused code
            window.gtag('config', 'G-XY7R6HH2R7', {
              send_page_view: true,
              // Disable unnecessary features to reduce bundle size
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            })
          }
        }}
      />
    </>
  )
}
