export const runtime = "edge"

export async function GET() {
  const baseUrl = "https://www.flaggle.fun"
  const today = new Date().toISOString().split("T")[0]

  const urls = [
    { loc: baseUrl, changefreq: "daily", priority: 1.0 },
    { loc: `${baseUrl}/printable-flags`, changefreq: "weekly", priority: 0.85 },
    { loc: `${baseUrl}/how-to-play`, changefreq: "monthly", priority: 0.9 },
    { loc: `${baseUrl}/about`, changefreq: "monthly", priority: 0.8 },
    { loc: `${baseUrl}/contact`, changefreq: "monthly", priority: 0.7 },
    { loc: `${baseUrl}/privacy`, changefreq: "yearly", priority: 0.5 },
    { loc: `${baseUrl}/terms`, changefreq: "yearly", priority: 0.5 },
    { loc: `${baseUrl}/geography-quiz`, changefreq: "weekly", priority: 0.9 },
    { loc: `${baseUrl}/world-flags`, changefreq: "weekly", priority: 0.9 },
    { loc: `${baseUrl}/learn-geography`, changefreq: "weekly", priority: 0.9 },
    { loc: `${baseUrl}/europe-flags`, changefreq: "weekly", priority: 0.8 },
    { loc: `${baseUrl}/africa-flags`, changefreq: "weekly", priority: 0.8 },
    { loc: `${baseUrl}/asia-flags`, changefreq: "weekly", priority: 0.8 },
    { loc: `${baseUrl}/america-flags`, changefreq: "weekly", priority: 0.8 },
    { loc: `${baseUrl}/oceania-flags`, changefreq: "weekly", priority: 0.8 },
    { loc: `${baseUrl}/flags/colors/red-white`, changefreq: "weekly", priority: 0.75 },
    { loc: `${baseUrl}/flags/symbols/stars`, changefreq: "weekly", priority: 0.75 },
    { loc: `${baseUrl}/flags/symbols/animals`, changefreq: "weekly", priority: 0.75 },
    { loc: `${baseUrl}/flags/styles/scandinavian-cross`, changefreq: "weekly", priority: 0.75 },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join("\n") +
    `\n</urlset>`

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


