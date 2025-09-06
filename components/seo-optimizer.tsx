'use client'

import { useEffect } from 'react'

export function SEOOptimizer() {
  useEffect(() => {
    // Add structured data for the main game
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Flaggle - Daily Flag Guessing Game",
      "description": "Test your geography knowledge with Flaggle, the daily flag guessing game. Guess the mystery country in 6 tries with distance hints and educational content.",
      "url": "https://www.flaggle.fun",
      "applicationCategory": "Game",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "creator": {
        "@type": "Organization",
        "name": "Flaggle",
        "url": "https://www.flaggle.fun"
      },
      "keywords": "flag quiz, geography quiz, world flags, country flags, flag guessing game, daily challenge, educational game",
      "inLanguage": "en",
      "isAccessibleForFree": true,
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "screenshot": "https://www.flaggle.fun/og-image.png",
      "softwareVersion": "1.0",
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntity": {
        "@type": "Game",
        "name": "Flaggle",
        "description": "Daily flag guessing game with educational content",
        "genre": "Educational Game",
        "gamePlatform": "Web Browser",
        "numberOfPlayers": "1",
        "playMode": "Single Player"
      }
    }

    // Add FAQ structured data
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I play Flaggle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Guess the mystery country in up to 6 tries. Each wrong guess reveals more of the flag and you'll get distance hints to guide you. Use the search to enter a country name."
          }
        },
        {
          "@type": "Question",
          "name": "What happens after I guess correctly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After guessing correctly, you can view detailed information about the country, learn about its flag's history and meaning, and download printable flags in various formats."
          }
        },
        {
          "@type": "Question",
          "name": "Can I play Flaggle every day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Flaggle features a new mystery flag every day. Come back daily to test your geography knowledge and learn about different countries around the world."
          }
        },
        {
          "@type": "Question",
          "name": "Is Flaggle free to play?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Flaggle is completely free to play. No registration required, no hidden costs, just pure educational fun!"
          }
        }
      ]
    }

    // Add breadcrumb structured data
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.flaggle.fun"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Daily Flag Game",
          "item": "https://www.flaggle.fun"
        }
      ]
    }

    // Add organization structured data
    const organizationStructuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Flaggle",
      "url": "https://www.flaggle.fun",
      "logo": "https://www.flaggle.fun/logos/logo-512.png",
      "description": "Daily flag guessing game that combines fun gameplay with educational content about world geography and country flags.",
      "sameAs": [
        "https://www.flaggle.fun"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://www.flaggle.fun"
      }
    }

    // Add all structured data to the page
    const script1 = document.createElement('script')
    script1.type = 'application/ld+json'
    script1.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.type = 'application/ld+json'
    script2.textContent = JSON.stringify(faqStructuredData)
    document.head.appendChild(script2)

    const script3 = document.createElement('script')
    script3.type = 'application/ld+json'
    script3.textContent = JSON.stringify(breadcrumbStructuredData)
    document.head.appendChild(script3)

    const script4 = document.createElement('script')
    script4.type = 'application/ld+json'
    script4.textContent = JSON.stringify(organizationStructuredData)
    document.head.appendChild(script4)

    // Add meta tags for better SEO
    const metaTags = [
      { name: 'keywords', content: 'flag quiz, geography quiz, world flags, country flags, flag guessing game, daily challenge, educational game, flag facts, world geography' },
      { name: 'author', content: 'Flaggle' },
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Flaggle' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'article:author', content: 'Flaggle' },
      { property: 'article:publisher', content: 'https://www.flaggle.fun' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@flaggle' },
      { name: 'twitter:creator', content: '@flaggle' }
    ]

    metaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`)
      if (!existingTag) {
        const meta = document.createElement('meta')
        if (tag.name) meta.setAttribute('name', tag.name)
        if (tag.property) meta.setAttribute('property', tag.property)
        meta.setAttribute('content', tag.content)
        document.head.appendChild(meta)
      }
    })

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = 'https://www.flaggle.fun'
      document.head.appendChild(link)
    }

    // Add hreflang for internationalization (if needed in future)
    const hreflangLink = document.querySelector('link[hreflang="en"]')
    if (!hreflangLink) {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = 'en'
      link.href = 'https://www.flaggle.fun'
      document.head.appendChild(link)
    }

    return () => {
      // Cleanup function
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach(script => {
        if (script.textContent?.includes('"@type": "WebApplication"') ||
            script.textContent?.includes('"@type": "FAQPage"') ||
            script.textContent?.includes('"@type": "BreadcrumbList"') ||
            script.textContent?.includes('"@type": "Organization"')) {
          script.remove()
        }
      })
    }
  }, [])

  return null
}