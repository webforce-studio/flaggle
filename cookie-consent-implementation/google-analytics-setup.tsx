// Google Analytics Setup with Consent Mode v2
// Add this to your layout.tsx or _app.tsx

export const GoogleAnalyticsSetup = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Initialize Consent Mode v2 - start with denied consent until user accepts
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              functionality_storage: 'granted',
              personalization_storage: 'denied'
            });
            
            gtag('config', 'YOUR_GA_ID', {
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false,
              page_title: document.title,
              page_location: window.location.href
            });
            
            // Track page views
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href
            });
          `,
        }}
      />
    </>
  )
}

// Google AdSense Setup (Optional)
export const GoogleAdSenseSetup = () => {
  return (
    <script 
      async 
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=YOUR_ADSENSE_ID"
      crossOrigin="anonymous"
    />
  )
}

// Usage in your layout:
/*
import { GoogleAnalyticsSetup, GoogleAdSenseSetup } from './google-analytics-setup'

export default function RootLayout({ children }) {
  return (
    <html>
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