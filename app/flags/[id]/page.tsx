import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getCountryById } from "@/lib/country-database"
import { getFlagHistory } from "@/lib/flag-histories"
// Header is inserted globally via layout
import { BackButton } from "@/components/back-button"
import { countries } from "@/lib/country-database"
import { WorldMapWithMarker } from "@/components/world-map-with-marker"
import { Button } from "@/components/ui/button"

type PageProps = { params: { id: string } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const id = (await params).id
  const country = getCountryById(id)
  const history = getFlagHistory(id)
  if (!country) return {}
  const title = `${country.name} Flag History | Meaning, Colors, and Timeline`
  const description = history?.summary250?.slice(0, 155) || `Learn the history and meaning of the ${country.name} flag.`
  return {
    title,
    description,
    alternates: { canonical: `/flags/${country.id}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://flaggle.fun/flags/${country.id}`,
      images: [
        { url: "/og-image.png", width: 1200, height: 630, alt: `${country.name} flag - Flaggle` },
      ],
    },
  }
}

export default async function FlagPage({ params }: PageProps) {
  const id = (await params).id
  const country = getCountryById(id)
  if (!country) return notFound()
  const history = getFlagHistory(id)

  const paragraphs = [history?.summary250, history?.longText].filter(Boolean) as string[]
  const allIds = countries.map((c) => c.id)
  const currentIndex = allIds.indexOf(id)
  const prevId = currentIndex > 0 ? allIds[currentIndex - 1] : undefined
  const nextId = currentIndex >= 0 && currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : undefined

  // region-to-overview path mapping
  const regionPath = (region: string) => {
    const r = region.toLowerCase()
    if (r === "americas") return "/america-flags"
    if (r === "europe") return "/europe-flags"
    if (r === "asia") return "/asia-flags"
    if (r === "africa") return "/africa-flags"
    return "/world-flags"
  }

  // Heuristic zoom: microstates/islands get tighter zoom; very large countries get wider view
  const computeZoom = (countryId: string) => {
    const micro = new Set([
      "andorra","liechtenstein","luxembourg","monaco","san-marino","vatican-city",
      "malta","iceland","singapore","cyprus"
    ])
    const large = new Set([
      "russia","canada","china","united-states","australia","brazil","india"
    ])
    if (micro.has(countryId)) return 5
    if (large.has(countryId)) return 2.5
    return 3.5
  }
  const zoomFactor = computeZoom(country.id)

  // Linkify other country names inside text for internal linking
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const countryNameToId = new Map<string, string>(countries.map((c) => [c.name.toLowerCase(), c.id]))
  const linkify = (text: string) => {
    const names = countries
      .filter((c) => c.id !== country.id)
      .map((c) => c.name)
      .sort((a, b) => b.length - a.length)
    if (names.length === 0) return text
    const pattern = new RegExp(`\\b(${names.map(escapeRegExp).join("|")})\\b`, "gi")
    const parts = text.split(pattern)
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        const key = part.toLowerCase()
        const targetId = countryNameToId.get(key)
        if (targetId) {
          return (
            <Link key={`lk-${i}`} href={`/flags/${targetId}`} className="text-blue-600 underline hover:no-underline">
              {part}
            </Link>
          )
        }
      }
      return <span key={`t-${i}`}>{part}</span>
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-6 flex items-center justify-between">
        <BackButton href={regionPath(country.region)} label={`← Back to ${country.region} Flags`} />
        <div className="flex gap-2">
          {prevId && (
            <a href={`/flags/${prevId}`} className="px-3 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" aria-label="Previous flag">← Prev</a>
          )}
          {nextId && (
            <a href={`/flags/${nextId}`} className="px-3 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" aria-label="Next flag">Next →</a>
          )}
        </div>
      </div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        {country.name} Flag History
      </h1>
      <div className="mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={country.flagUrl} alt={`${country.name} flag`} className="h-14 w-auto rounded-sm ring-1 ring-gray-200 dark:ring-gray-700" />
      </div>

      {history ? (
        <article className="prose dark:prose-invert">
          {paragraphs.flatMap((block, blockIndex) =>
            block
              .split(/\n\n+/)
              .map((p, i) => (
                <p key={`${blockIndex}-${i}`} className="mb-4 last:mb-0 leading-relaxed">{linkify(p.trim())}</p>
              ))
          )}
        </article>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">Detailed history is coming soon.</p>
      )}

      <div className="mt-8">
        <WorldMapWithMarker lat={country.coordinates.lat} lng={country.coordinates.lng} zoomFactor={zoomFactor} />
      </div>

      {/* Download CTA */}
      <div className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 p-4 md:p-5 bg-white/70 dark:bg-gray-900/50">
        <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
          Download {country.name} flag (PNG, SVG)
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Get a printable {country.name} flag in high‑resolution PNG or crisp SVG for worksheets, classrooms, or projects.
        </p>
        <div className="flex flex-wrap gap-2">
          {(() => {
            const code = country.code.toLowerCase()
            const png320 = `https://flagcdn.com/w320/${code}.png`
            const png640 = `https://flagcdn.com/w640/${code}.png`
            const png1280 = `https://flagcdn.com/w1280/${code}.png`
            const svg = `https://flagcdn.com/${code}.svg`
            const commonsCategory = `https://commons.wikimedia.org/wiki/Category:${encodeURIComponent(`SVG flags of ${country.name.replace(/ /g, " ")}`)}`
            return (
              <>
                <a className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700" href={png320} target="_blank" rel="noopener" aria-label={`Download ${country.name} flag PNG 320px`}>PNG 320px</a>
                <a className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700" href={png640} target="_blank" rel="noopener" aria-label={`Download ${country.name} flag PNG 640px`}>PNG 640px</a>
                <a className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700" href={png1280} target="_blank" rel="noopener" aria-label={`Download ${country.name} flag PNG 1280px`}>PNG 1280px</a>
                <a className="px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700" href={svg} target="_blank" rel="noopener" aria-label={`Download ${country.name} flag SVG`}>SVG (vector)</a>
                <a className="px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700" href={commonsCategory} target="_blank" rel="noopener" aria-label={`Wikimedia Commons SVGs for ${country.name}`}>Wikimedia Commons SVGs</a>
                <Link href="/printable-flags" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" aria-label="Printable flags hub">Printable flags hub</Link>
              </>
            )
          })()}
        </div>
        <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">Source images served via FlagCDN. National flags are generally public domain; verify emblem/coat‑of‑arms usage in your jurisdiction.</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/europe-flags"><Button variant="outline" size="sm">Europe Flags</Button></Link>
        <Link href="/asia-flags"><Button variant="outline" size="sm">Asia Flags</Button></Link>
        <Link href="/africa-flags"><Button variant="outline" size="sm">Africa Flags</Button></Link>
        <Link href="/america-flags"><Button variant="outline" size="sm">Americas Flags</Button></Link>
      </div>

      <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Ready to Master World Flags?</h2>
        <p className="mb-5 opacity-90">Start the daily Flaggle challenge and become a world geography expert.</p>
        <Link href="/">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold">Play Flaggle Now</Button>
        </Link>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${country.name} Flag History`,
            about: {
              "@type": "Thing",
              name: `${country.name} flag`,
            },
            mainEntityOfPage: `https://flaggle.fun/flags/${country.id}`,
            wordCount: (history?.summary250?.split(" ").length || 0) + (history?.longText?.split(" ").length || 0),
          }),
        }}
      />
      </main>
    </div>
  )
}


