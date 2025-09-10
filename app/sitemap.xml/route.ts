import { countries } from "@/lib/country-database"

export const runtime = "edge"

export async function GET() {
  const baseUrl = "https://www.flaggle.fun"
  const currentDate = new Date().toISOString().split('T')[0]

  // Static pages with their priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: "daily",
      priority: "1.0"
    },
    {
      url: `${baseUrl}/world-flags`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9"
    },
    {
      url: `${baseUrl}/how-to-play`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.9"
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.8"
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.7"
    },
    {
      url: `${baseUrl}/privacy`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: "0.5"
    },
    {
      url: `${baseUrl}/terms`,
      lastmod: currentDate,
      changefreq: "yearly",
      priority: "0.5"
    },
    {
      url: `${baseUrl}/flag-quiz`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9"
    },
    {
      url: `${baseUrl}/world-flag-quiz`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.9"
    },
    {
      url: `${baseUrl}/geography-quiz`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      url: `${baseUrl}/flag-facts`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      url: `${baseUrl}/learn-geography`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      url: `${baseUrl}/printable-flags`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.7"
    },
    {
      url: `${baseUrl}/europe-flags`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      url: `${baseUrl}/africa-flags`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      url: `${baseUrl}/asia-flags`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      url: `${baseUrl}/america-flags`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    },
    {
      url: `${baseUrl}/oceania-flags`,
      lastmod: currentDate,
      changefreq: "weekly",
      priority: "0.8"
    }
  ]

  // Flag pages for each country
  const flagPages = countries.map(country => ({
    url: `${baseUrl}/flags/${country.id}`,
    lastmod: currentDate,
    changefreq: "monthly",
    priority: "0.6"
  }))

  // Flag category pages
  const flagCategoryPages = [
    {
      url: `${baseUrl}/flags/colors/red-white`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.6"
    },
    {
      url: `${baseUrl}/flags/styles/scandinavian-cross`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.6"
    },
    {
      url: `${baseUrl}/flags/symbols/animals`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.6"
    },
    {
      url: `${baseUrl}/flags/symbols/stars`,
      lastmod: currentDate,
      changefreq: "monthly",
      priority: "0.6"
    }
  ]

  // Helper function to escape XML special characters
  function escapeXml(unsafe: string): string {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
  }

  // Combine all pages
  const allPages = [...staticPages, ...flagPages, ...flagCategoryPages]

  // Generate XML sitemap with proper encoding
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(sitemap, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  })
}

export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  })
}