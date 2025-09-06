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
      {/* AdSense script with lazy loading */}
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6011234567890123"
        strategy="lazyOnload"
        onLoad={() => {
          // Initialize AdSense after script loads
          if (typeof window !== 'undefined') {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        }}
      />
      {/* Auto Ads initialization */}
      <Script
        id="google-adsense-auto"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // Wait for the main AdSense script to load
            function initAutoAds() {
              if (typeof window !== 'undefined' && window.adsbygoogle) {
                try {
                  // Prevent duplicate auto-ads initialization across route changes
                  if (!(window as any).__adsbygoogle_inited) {
                    (window as any).__adsbygoogle_inited = true;
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                  }
                } catch (error) {
                  console.warn('AdSense Auto Ads initialization error:', error);
                }
              } else {
                // Retry after a short delay if not ready
                setTimeout(initAutoAds, 100);
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