import { countries } from "@/lib/country-database"
import { pingIndexNow } from "@/lib/utils"

export const runtime = "edge"

export async function GET() {
  const baseUrl = "https://www.flaggle.fun"
  const today = new Date().toISOString().split("T")[0]

  const xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n` +
    `<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n` +
    countries
      .map(
        (c) => `  <url>\n    <loc>${baseUrl}/flags/${c.id}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
      )
      .join("\n") +
    `\n</urlset>`

  // Fire-and-forget IndexNow ping for flag URLs
  pingIndexNow(countries.map((c) => `${baseUrl}/flags/${c.id}`)).catch(() => {})

  return new Response(xml, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  })
}

export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  })
}


