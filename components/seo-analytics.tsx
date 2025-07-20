"use client"

import { useEffect } from 'react'

interface SEOAnalyticsProps {
  pageTitle?: string
  pageType?: string
}

export function SEOAnalytics({ pageTitle, pageType = 'page' }: SEOAnalyticsProps) {
  useEffect(() => {
    // Track page views for SEO insights
    const trackPageView = () => {
      const pageData = {
        title: pageTitle || document.title,
        url: window.location.href,
        type: pageType,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      }

      console.log('SEO Page View:', pageData)

      // Send to analytics if available
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageData.title,
          page_location: pageData.url,
          custom_map: {
            page_type: pageData.type,
          },
        })
      }
    }

    // Track user engagement
    const trackEngagement = () => {
      let scrollDepth = 0
      let timeOnPage = 0
      const startTime = Date.now()

      const updateMetrics = () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
        scrollDepth = Math.max(scrollDepth, scrollPercent)
        timeOnPage = Date.now() - startTime
      }

      window.addEventListener('scroll', updateMetrics, { passive: true })
      window.addEventListener('beforeunload', () => {
        console.log('SEO Engagement:', {
          scrollDepth,
          timeOnPage,
          pageTitle: document.title,
        })
      })

      // Track every 30 seconds
      const interval = setInterval(updateMetrics, 30000)

      return () => {
        clearInterval(interval)
        window.removeEventListener('scroll', updateMetrics)
      }
    }

    // Track performance metrics
    const trackPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
          if (navigation) {
            const metrics = {
              dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
              tcpConnection: navigation.connectEnd - navigation.connectStart,
              serverResponse: navigation.responseEnd - navigation.requestStart,
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
            }

            console.log('SEO Performance:', metrics)

            // Report poor performance
            if (metrics.totalLoadTime > 3000) {
              console.warn('Slow page load detected:', metrics.totalLoadTime)
            }
          }
        })
      }
    }

    // Track user interactions
    const trackInteractions = () => {
      const interactions = {
        clicks: 0,
        scrolls: 0,
        keypresses: 0,
      }

      document.addEventListener('click', () => {
        interactions.clicks++
        if (interactions.clicks % 5 === 0) {
          console.log('SEO Interactions:', interactions)
        }
      }, { passive: true })

      document.addEventListener('scroll', () => {
        interactions.scrolls++
      }, { passive: true })

      document.addEventListener('keydown', () => {
        interactions.keypresses++
      }, { passive: true })
    }

    // Initialize tracking
    trackPageView()
    const cleanupEngagement = trackEngagement()
    trackPerformance()
    trackInteractions()

    return cleanupEngagement
  }, [pageTitle, pageType])

  return null
} 