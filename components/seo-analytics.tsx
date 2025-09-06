'use client'

import { useEffect } from 'react'

export function SEOAnalytics() {
  useEffect(() => {
    // Track page views for SEO analysis
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          content_group1: 'SEO',
          content_group2: 'Main Page'
        })
      }
    }

    // Track user engagement metrics
    const trackEngagement = () => {
      let startTime = Date.now()
      let maxScrollDepth = 0
      let timeOnPage = 0

      // Track scroll depth
      const trackScroll = () => {
        const scrollDepth = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
        maxScrollDepth = Math.max(maxScrollDepth, scrollDepth)
      }

      // Track time on page
      const trackTime = () => {
        timeOnPage = Date.now() - startTime
      }

      // Add event listeners
      window.addEventListener('scroll', trackScroll, { passive: true })
      
      // Track when user leaves the page
      const handleBeforeUnload = () => {
        trackTime()
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'engagement_metrics', {
            event_category: 'SEO',
            event_label: 'User Engagement',
            custom_parameter_1: maxScrollDepth,
            custom_parameter_2: Math.round(timeOnPage / 1000), // seconds
            non_interaction: true
          })
        }
      }

      window.addEventListener('beforeunload', handleBeforeUnload)

      // Track every 30 seconds
      const interval = setInterval(() => {
        trackTime()
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'time_on_page', {
            event_category: 'SEO',
            event_label: 'Time Tracking',
            value: Math.round(timeOnPage / 1000),
            non_interaction: true
          })
        }
      }, 30000)

      return () => {
        window.removeEventListener('scroll', trackScroll)
        window.removeEventListener('beforeunload', handleBeforeUnload)
        clearInterval(interval)
      }
    }

    // Track search queries (if any)
    const trackSearchQueries = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const query = urlParams.get('q') || urlParams.get('search')
      
      if (query && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'search', {
          event_category: 'SEO',
          event_label: 'Search Query',
          search_term: query
        })
      }
    }

    // Track internal link clicks
    const trackInternalLinks = () => {
      const trackLinkClick = (event: Event) => {
        const target = event.target as HTMLElement
        const link = target.closest('a')
        
        if (link && link.href && link.href.includes('flaggle.fun')) {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'click', {
              event_category: 'SEO',
              event_label: 'Internal Link',
              link_url: link.href,
              link_text: link.textContent?.trim() || 'Unknown'
            })
          }
        }
      }

      document.addEventListener('click', trackLinkClick)
      
      return () => {
        document.removeEventListener('click', trackLinkClick)
      }
    }

    // Track page load performance
    const trackPerformance = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
            
            if (navigation && typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'timing_complete', {
                event_category: 'SEO',
                event_label: 'Page Load Performance',
                name: 'load_time',
                value: Math.round(navigation.loadEventEnd - navigation.fetchStart)
              })

              window.gtag('event', 'timing_complete', {
                event_category: 'SEO',
                event_label: 'Page Load Performance',
                name: 'dom_content_loaded',
                value: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart)
              })

              window.gtag('event', 'timing_complete', {
                event_category: 'SEO',
                event_label: 'Page Load Performance',
                name: 'first_byte',
                value: Math.round(navigation.responseStart - navigation.fetchStart)
              })
            }
          }, 0)
        })
      }
    }

    // Initialize all tracking
    trackPageView()
    const cleanupEngagement = trackEngagement()
    trackSearchQueries()
    const cleanupLinks = trackInternalLinks()
    trackPerformance()

    return () => {
      if (cleanupEngagement) cleanupEngagement()
      if (cleanupLinks) cleanupLinks()
    }
  }, [])

  return null
}