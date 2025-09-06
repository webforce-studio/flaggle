"use client"

import Script from 'next/script'
import { useEffect, useState } from 'react'

// TypeScript declarations for Google AdSense
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

/**
 * Google AdSense Auto Ads Component
 * 
 * This component enables Google AdSense Auto Ads, which automatically:
 * - Analyzes your website layout and content
 * - Places ads in optimal positions
 * - Optimizes ad performance using AI
 * - Works across all pages with a single code snippet
 * 
 * Auto Ads Types Available:
 * - Text & Display Ads (standard banners)
 * - In-article Ads (within content)
 * - Anchor Ads (sticky mobile ads)
 * - Vignette Ads (full-screen between pages)
 * - In-feed Ads (in lists/feeds)
 * - Matched Content (recommendations)
 */

export function GoogleAdSenseAuto() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [loadStrategy, setLoadStrategy] = useState<string>('')

  useEffect(() => {
    // Check script manager configuration
    const checkScriptConfig = () => {
      const element = document.getElementById('script-manager')
      if (element) {
        try {
          const config = JSON.parse(element.getAttribute('data-config') || '{}')
          if (config.loadAdSense) {
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

  // Only load AdSense if explicitly enabled by script manager
  if (loadStrategy !== 'enabled') {
    return null
  }

  return (
    <>
      {/* Minimal AdSense script - only load the core script */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6013883003344159"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize AdSense after script loads - prevent duplicate initialization
          if (typeof window !== 'undefined' && !(window as any).__adsbygoogle_initialized) {
            (window as any).__adsbygoogle_initialized = true;
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        }}
      />
      {/* Minimal Auto Ads initialization - only if needed */}
      {loadStrategy === 'interaction' && (
        <Script
          id="google-adsense-auto"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              // Minimal AdSense initialization - prevent duplicates
              function initAutoAds() {
                if (typeof window !== 'undefined' && window.adsbygoogle) {
                  try {
                    if (!(window as any).__adsbygoogle_initialized) {
                      (window as any).__adsbygoogle_initialized = true;
                      (window.adsbygoogle = window.adsbygoogle || []).push({});
                    }
                  } catch (error) {
                    console.warn('AdSense initialization error:', error);
                  }
                }
              }
              
              // Initialize when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initAutoAds);
              } else {
                initAutoAds();
              }
            `,
          }}
        />
      )}
    </>
  )
}

/**
 * Usage Instructions:
 * 
 * 1. Add this component to your layout.tsx
 * 2. Configure Auto Ads in your AdSense dashboard:
 *    - Go to AdSense → Ads → Auto ads
 *    - Enable desired ad types
 *    - Copy the generated code
 * 3. The ads will automatically appear across your site
 * 
 * Benefits:
 * - No manual ad placement needed
 * - AI-optimized positioning
 * - Responsive across all devices
 * - Continuous performance optimization
 * - Works alongside existing manual ads
 */ 