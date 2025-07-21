// Example Layout Implementation
// This shows how to integrate the cookie consent with your existing layout

import { GoogleAnalyticsSetup, GoogleAdSenseSetup } from './google-analytics-setup'
import { SimpleCookieConsent } from './components/cookie-consent'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Setup */}
        <GoogleAnalyticsSetup />
        
        {/* Google AdSense Setup (Optional) */}
        <GoogleAdSenseSetup />
        
        {/* Your other meta tags and scripts */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Your Website</title>
      </head>
      <body>
        {/* Your main content */}
        <main>
          {children}
        </main>
        
        {/* Cookie Consent - Must be at the bottom */}
        <SimpleCookieConsent />
      </body>
    </html>
  )
}

// Alternative: If you're using Next.js App Router
/*
import { GoogleAnalyticsSetup, GoogleAdSenseSetup } from './google-analytics-setup'
import { SimpleCookieConsent } from './components/cookie-consent'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalyticsSetup />
        <GoogleAdSenseSetup />
      </head>
      <body>
        {children}
        <SimpleCookieConsent />
      </body>
    </html>
  )
}
*/

// Alternative: If you're using Next.js Pages Router
/*
import { GoogleAnalyticsSetup, GoogleAdSenseSetup } from './google-analytics-setup'
import { SimpleCookieConsent } from './components/cookie-consent'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalyticsSetup />
      <GoogleAdSenseSetup />
      <Component {...pageProps} />
      <SimpleCookieConsent />
    </>
  )
}
*/ 