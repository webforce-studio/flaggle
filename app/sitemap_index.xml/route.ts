export const runtime = "edge"

export async function GET() {
  const baseUrl = "https://www.flaggle.fun"
  const today = new Date().toISOString().split("T")[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemaps/static.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemaps/flags.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`

  return new Response(xml, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      // Avoid caching to ensure GSC always sees fresh XML
      "cache-control": "no-cache, no-store, must-revalidate",
    },
  })
}

export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "no-cache, no-store, must-revalidate",
    },
  })
}


