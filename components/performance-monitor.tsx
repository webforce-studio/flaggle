'use client'

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
            // Send to analytics if needed
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'LCP',
                value: Math.round(entry.startTime),
                event_category: 'Performance'
              })
            }
          }
        }
      })
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] })

      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingStart - entry.startTime)
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              name: 'FID',
              value: Math.round(entry.processingStart - entry.startTime),
              event_category: 'Performance'
            })
          }
        }
      })
      
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
            console.log('CLS:', clsValue)
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                name: 'CLS',
                value: Math.round(clsValue * 1000) / 1000,
                event_category: 'Performance'
              })
            }
          }
        }
      })
      
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Track render blocking resources
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.initiatorType === 'link' && entry.name.includes('css')) {
            console.log('CSS Load Time:', entry.duration)
          }
          if (entry.initiatorType === 'link' && entry.name.includes('fonts')) {
            console.log('Font Load Time:', entry.duration)
          }
        }
      })
      
      resourceObserver.observe({ entryTypes: ['resource'] })

      // Cleanup observers
      return () => {
        observer.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        resourceObserver.disconnect()
      }
    }
  }, [])

  return null
}

// Extend window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
