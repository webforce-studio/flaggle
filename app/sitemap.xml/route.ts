import { NextResponse } from 'next/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

export async function GET() {
  try {
    // Create sitemap stream
    const smStream = new SitemapStream({
      hostname: 'https://www.flaggle.fun',
      cacheTime: 600000, // 10 minutes
    })

    // Add URLs to sitemap
    const urls = [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/world-flags',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/how-to-play',
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/about',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/contact',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
    ]

    // Add URLs to stream
    urls.forEach(url => {
      smStream.write(url)
    })

    // End the stream
    smStream.end()

    // Convert stream to buffer
    const sitemap = await streamToPromise(Readable.from(smStream)).then(data => data.toString())

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'Last-Modified': new Date().toUTCString(),
        'ETag': `"${Date.now()}"`,
      },
    })
  } catch (error) {
    console.error('Sitemap generation error:', error)
    return new NextResponse('Sitemap generation failed', { status: 500 })
  }
}