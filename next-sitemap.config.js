/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.flaggle.fun',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // We want a single sitemap, not an index
  exclude: [
    '/admin',
    '/admin/*',
    '/api/*',
    '/fix-images',
    '/image-test',
    '/url-test',
    '/direct-test',
    '/attribution-test',
    '/monument-overview',
    '/manifest.webmanifest',
    '/icon',
    '/favicon.ico',
    '/sitemap.xml',
    '/robots.txt',
  ],
  // Disable auto-discovery to have full control
  additionalSitemaps: [],
  // Disable auto-discovery completely
  autoLastmod: false,
  // Only include pages we explicitly define
  additionalPaths: async (config) => {
    // Import countries data
    const { countries } = await import('./lib/country-database.ts')
    
    // Generate paths for all flag pages
    const flagPaths = countries.map(country => ({
      loc: `/flags/${country.id}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }))

    return [
      // Static pages with custom priorities
      {
        loc: '/',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
      },
      {
        loc: '/printable-flags',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.85,
      },
      {
        loc: '/how-to-play',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9,
      },
      {
        loc: '/about',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8,
      },
      {
        loc: '/contact',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7,
      },
      {
        loc: '/privacy',
        lastmod: new Date().toISOString(),
        changefreq: 'yearly',
        priority: 0.5,
      },
      {
        loc: '/terms',
        lastmod: new Date().toISOString(),
        changefreq: 'yearly',
        priority: 0.5,
      },
      {
        loc: '/geography-quiz',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        loc: '/world-flags',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        loc: '/learn-geography',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
      },
      {
        loc: '/europe-flags',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/africa-flags',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/asia-flags',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/america-flags',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        loc: '/oceania-flags',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8,
      },
      // Add all flag pages
      ...flagPaths,
    ]
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/sitemap.xml',
          '/robots.txt',
        ],
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/fix-images',
          '/image-test',
          '/url-test',
          '/direct-test',
          '/attribution-test',
          '/monument-overview',
          '/.next/',
          '/node_modules/',
          '/manifest.webmanifest',
          '/icon',
          '/favicon.ico',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/sitemap.xml',
          '/robots.txt',
        ],
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/fix-images',
          '/image-test',
          '/url-test',
          '/direct-test',
          '/attribution-test',
          '/monument-overview',
          '/manifest.webmanifest',
          '/icon',
          '/favicon.ico',
        ],
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Bingbot',
        allow: [
          '/',
          '/sitemap.xml',
          '/robots.txt',
        ],
        disallow: [
          '/admin',
          '/admin/',
          '/api/',
          '/fix-images',
          '/image-test',
          '/url-test',
          '/direct-test',
          '/attribution-test',
          '/monument-overview',
          '/manifest.webmanifest',
          '/icon',
          '/favicon.ico',
        ],
        crawlDelay: 1,
      },
    ],
    additionalSitemaps: [
      'https://www.flaggle.fun/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom transform function to ensure proper formatting
    return {
      loc: path,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.7,
    }
  },
}
