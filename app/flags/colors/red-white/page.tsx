import type { Metadata } from "next"
import Link from "next/link"
import { countries } from "@/lib/country-database"
import { flagCategories } from "@/lib/flag-categories"

const cat = flagCategories.find(c => c.id === "colors/red-white")!

export const metadata: Metadata = {
  title: "Red and White Flags | Countries with Red & White National Flags",
  description: "Explore countries whose national flags feature red and white. Download SVG/PNG and read history & meaning.",
  alternates: { canonical: "/flags/colors/red-white" },
}

export default function RedWhiteFlagsPage() {
  const items = countries.filter(cat.predicate)
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">Red and White Flags</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">{cat.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          <Link href="/printable-flags" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">← Back to all printable flags</Link>
          <Link href="/flags/colors/red-white" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Red & white</Link>
          <Link href="/flags/symbols/stars" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Stars</Link>
          <Link href="/flags/symbols/animals" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Animals</Link>
          <Link href="/flags/styles/scandinavian-cross" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Scandinavian cross</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((c) => {
            const code = c.code.toLowerCase()
            const png320 = `https://flagcdn.com/w320/${code}.png`
            const png640 = `https://flagcdn.com/w640/${code}.png`
            const png1280 = `https://flagcdn.com/w1280/${code}.png`
            const svg = `https://flagcdn.com/${code}.svg`
            const commonsCategory = `https://commons.wikimedia.org/wiki/Category:${encodeURIComponent(`SVG flags of ${c.name}`)}`
            return (
              <div key={c.id} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 p-4">
                <div className="flex items-center gap-3 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.flagUrl} alt={`${c.name} flag`} width={96} height={64} loading="lazy" className="h-6 w-auto rounded-sm ring-1 ring-gray-200 dark:ring-gray-700" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">{c.name}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700" href={svg} target="_blank" rel="noopener" aria-label={`Download ${c.name} flag SVG`}>SVG</a>
                  <a className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700" href={png320} target="_blank" rel="noopener" aria-label={`Download ${c.name} flag PNG 320px`}>PNG 320</a>
                  <a className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700" href={png640} target="_blank" rel="noopener" aria-label={`Download ${c.name} flag PNG 640px`}>PNG 640</a>
                  <a className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700" href={png1280} target="_blank" rel="noopener" aria-label={`Download ${c.name} flag PNG 1280px`}>PNG 1280</a>
                  <a className="px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700" href={commonsCategory} target="_blank" rel="noopener" aria-label={`Wikimedia Commons SVGs for ${c.name}`}>Commons SVGs</a>
                  <Link className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600" href={`/flags/${c.id}`} aria-label={`${c.name} flag history`}>
                    History & meaning
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Red and White Flags",
            itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: `${c.name} flag`, url: `https://www.flaggle.fun/flags/${c.id}` })),
          }),
        }}
        />
      </main>
    </div>
  )
}
