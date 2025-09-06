'use client'

import Script from 'next/script'

/**
 * Critical Scripts Component
 * 
 * Only loads essential scripts that are absolutely necessary for core functionality.
 * This reduces unused JavaScript by avoiding non-critical third-party scripts.
 */
export function CriticalScripts() {
  return (
    <>
      {/* Only essential scripts that are critical for functionality */}
      {/* No Google Analytics or AdSense here - they're non-critical */}
      
      {/* Essential performance monitoring only */}
      <Script
        id="performance-monitor"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Minimal performance monitoring
            if (typeof window !== 'undefined' && 'performance' in window) {
              window.addEventListener('load', () => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                  console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                }
              });
            }
          `,
        }}
      />
    </>
  )
}
