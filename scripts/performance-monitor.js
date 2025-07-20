// Performance monitoring for SEO optimization
(function() {
  'use strict';

  // Core Web Vitals monitoring
  function observeCoreWebVitals() {
    if ('PerformanceObserver' in window) {
      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Report to analytics if LCP is poor
        if (lastEntry.startTime > 2500) {
          console.warn('Poor LCP detected:', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
          
          if (entry.processingStart - entry.startTime > 100) {
            console.warn('Poor FID detected:', entry.processingStart - entry.startTime);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS (Cumulative Layout Shift)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
        
        if (clsValue > 0.1) {
          console.warn('Poor CLS detected:', clsValue);
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }

  // Resource loading performance
  function monitorResourceLoading() {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.initiatorType === 'img' && entry.duration > 1000) {
            console.warn('Slow image load:', entry.name, entry.duration);
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  }

  // SEO-friendly error tracking
  function trackErrors() {
    window.addEventListener('error', (event) => {
      console.error('JavaScript Error:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled Promise Rejection:', event.reason);
    });
  }

  // User interaction tracking for SEO insights
  function trackUserInteractions() {
    let interactionCount = 0;
    const interactionEvents = ['click', 'keydown', 'scroll', 'mousemove'];
    
    interactionEvents.forEach(eventType => {
      document.addEventListener(eventType, () => {
        interactionCount++;
        if (interactionCount % 10 === 0) {
          console.log('User interactions:', interactionCount);
        }
      }, { passive: true });
    });
  }

  // Page visibility tracking
  function trackPageVisibility() {
    let hiddenTime = 0;
    let startTime = Date.now();
    
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        hiddenTime = Date.now();
      } else {
        const visibleTime = Date.now() - hiddenTime;
        console.log('Page was hidden for:', visibleTime, 'ms');
      }
    });
  }

  // Initialize all monitoring
  function initPerformanceMonitoring() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        observeCoreWebVitals();
        monitorResourceLoading();
        trackErrors();
        trackUserInteractions();
        trackPageVisibility();
      });
    } else {
      observeCoreWebVitals();
      monitorResourceLoading();
      trackErrors();
      trackUserInteractions();
      trackPageVisibility();
    }
  }

  // Start monitoring
  initPerformanceMonitoring();
})(); 