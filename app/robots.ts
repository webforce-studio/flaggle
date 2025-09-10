import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'],
    },
    sitemap: [
      'https://www.flaggle.fun/sitemap-index.xml',
      'https://www.flaggle.fun/sitemap.xml',
      'https://www.flaggle.fun/sitemap.txt',
      'https://www.flaggle.fun/sitemap_index.xml'
    ],
  }
}
