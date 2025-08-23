import { countries } from "@/lib/country-database"

export const runtime = "edge"

export async function GET() {
  const baseUrl = "https://www.flaggle.fun"

  const staticUrls = [
    baseUrl,
    `${baseUrl}/printable-flags`,
    `${baseUrl}/how-to-play`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/privacy`,
    `${baseUrl}/terms`,
    `${baseUrl}/geography-quiz`,
    `${baseUrl}/world-flags`,
    `${baseUrl}/learn-geography`,
    `${baseUrl}/europe-flags`,
    `${baseUrl}/africa-flags`,
    `${baseUrl}/asia-flags`,
    `${baseUrl}/america-flags`,
    `${baseUrl}/oceania-flags`,
  ]

  const flagUrls = countries.map((c) => `${baseUrl}/flags/${c.id}`)
  const body = [...staticUrls, ...flagUrls].join("\n") + "\n"

  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  })
}


