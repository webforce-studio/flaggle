import { NextResponse } from 'next/server'
import { countries } from '../../lib/country-database'

export async function GET() {
  const currentDate = new Date().toISOString().split('T')[0]
  
  // Static pages
  const staticPages = [
    { url: 'https://www.flaggle.fun/', priority: '1.0', changefreq: 'daily' },
    { url: 'https://www.flaggle.fun/printable-flags', priority: '0.85', changefreq: 'weekly' },
    { url: 'https://www.flaggle.fun/how-to-play', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://www.flaggle.fun/about', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://www.flaggle.fun/contact', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://www.flaggle.fun/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: 'https://www.flaggle.fun/terms', priority: '0.5', changefreq: 'yearly' },
    { url: 'https://www.flaggle.fun/geography-quiz', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://www.flaggle.fun/world-flags', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://www.flaggle.fun/learn-geography', priority: '0.9', changefreq: 'weekly' },
    { url: 'https://www.flaggle.fun/europe-flags', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://www.flaggle.fun/africa-flags', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://www.flaggle.fun/asia-flags', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://www.flaggle.fun/america-flags', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://www.flaggle.fun/oceania-flags', priority: '0.8', changefreq: 'weekly' },
  ]

  // Generate URLs for all pages
  const allUrls = [
    ...staticPages.map(page => 
      `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    ),
    ...countries.map(country => 
      `  <url>
    <loc>https://www.flaggle.fun/flags/${country.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
  ].join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}