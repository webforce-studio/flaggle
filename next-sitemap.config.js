/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.flaggle.fun',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Single sitemap is more reliable for Google
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
    '/sitemap-*.xml',
  ],
  // Disable auto-discovery to have full control
  additionalSitemaps: [],
  // Disable auto-discovery completely
  autoLastmod: false,
  // Single sitemap approach
  sitemapSize: 50000,
  // Add trailing slash for consistency
  trailingSlash: false,
  // Start with minimal sitemap for testing
  additionalPaths: async (config) => {
    return [
      // Only essential pages first
      {
        loc: '/',
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 1.0,
      },
      {
        loc: '/world-flags',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
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
