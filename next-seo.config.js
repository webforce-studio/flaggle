export default {
  title: 'Flaggle - World Flags Quiz Game',
  description: 'Test your geography knowledge with our fun world flags quiz game. Learn about countries, capitals, and flags from around the world.',
  canonical: 'https://www.flaggle.fun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.flaggle.fun',
    siteName: 'Flaggle',
    title: 'Flaggle - World Flags Quiz Game',
    description: 'Test your geography knowledge with our fun world flags quiz game. Learn about countries, capitals, and flags from around the world.',
    images: [
      {
        url: 'https://www.flaggle.fun/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flaggle - World Flags Quiz Game',
      },
    ],
  },
  twitter: {
    handle: '@flaggle',
    site: '@flaggle',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#3b82f6',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
}
