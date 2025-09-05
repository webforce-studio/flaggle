import { NextResponse } from 'next/server'
import { countries } from '../../../lib/country-database'

export async function GET() {
  const currentDate = new Date().toISOString().split('T')[0]
  
  // Generate URLs for all countries
  const countryUrls = countries.map(country => 
    `  <url>
    <loc>https://www.flaggle.fun/flags/${country.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
  ).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${countryUrls}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, s-maxage=300', // 5 minutes cache
      'Last-Modified': new Date().toUTCString(),
      'ETag': `"${Date.now()}"`,
    },
  })
}
