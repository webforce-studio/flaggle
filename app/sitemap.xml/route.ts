export const runtime = "edge"

function buildXml(): string {
  const baseUrl = "https://www.flaggle.fun"
  const today = new Date().toISOString().split("T")[0]
  return `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n` +
`<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n` +
`  <sitemap>\n    <loc>${baseUrl}/sitemaps/static.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n` +
`  <sitemap>\n    <loc>${baseUrl}/sitemaps/flags.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n` +
`</sitemapindex>`
}

export async function GET() {
  const xml = buildXml()
  return new Response(xml, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
      "content-length": String(new TextEncoder().encode(xml).length),
    },
  })
}

export async function HEAD() {
  const xml = buildXml()
  return new Response(null, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
      "content-length": String(new TextEncoder().encode(xml).length),
    },
  })
}


