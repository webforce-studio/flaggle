'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export function GoogleAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Check if third-party scripts should load
    const checkThirdParty = () => {
      const element = document.getElementById('third-party-scripts-loaded')
      if (element) {
        setShouldLoad(true)
      } else {
        // Check again after a short delay
        setTimeout(checkThirdParty, 100)
      }
    }

    checkThirdParty()
  }, [])

  if (!shouldLoad) return null

  return (
    <>
      {/* Google Analytics with deferred loading */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XY7R6HH2R7"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize GA after script loads
          if (typeof window !== 'undefined') {
            window.gtag = window.gtag || function() {
              (window.gtag.q = window.gtag.q || []).push(arguments)
            }
            window.gtag('js', new Date())
            window.gtag('config', 'G-XY7R6HH2R7', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true
            })
          }
        }}
      />
    </>
  )
}
