import type { Metadata } from "next"
import Link from "next/link"
import { countries } from "@/lib/country-database"

export const metadata: Metadata = {
  title: "Printable Flags (SVG, PNG) | Download Country Flags",
  description:
    "Download printable country flags in SVG and PNG (320/640/1280). Includes links to Wikimedia Commons categories and each flag's history and meaning.",
  alternates: { canonical: "/printable-flags" },
}

export default function PrintableFlagsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
          Printable Flags (SVG, PNG)
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-3xl">
          Download high‑quality, printable country flags in crisp SVG (vector) or PNG sizes (320/640/1280). Perfect for
          classrooms, worksheets, school projects, quizzes, and displays. Each flag links to our in‑depth history page and
          to Wikimedia Commons for file‑level licensing.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">
          For the best print quality, choose SVG when possible, or PNG 1280 for larger prints. Use your browser’s
          print‑to‑PDF to create a PDF version sized to A4 or US Letter.
        </p>

        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-3">Popular printable flags</h2>
          <div className="flex flex-wrap gap-2">
            <Link href="/flags/united-states" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Printable US flag (SVG, PNG)</Link>
            <Link href="/flags/united-kingdom" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Printable UK flag (SVG, PNG)</Link>
            <Link href="/flags/france" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Printable France flag</Link>
            <Link href="/flags/germany" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Printable Germany flag</Link>
            <Link href="/flags/italy" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Printable Italy flag</Link>
            <Link href="/flags/spain" className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">Printable Spain flag</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {countries.map((c) => {
            const code = c.code.toLowerCase()
            const png320 = `https://flagcdn.com/w320/${code}.png`
            const png640 = `https://flagcdn.com/w640/${code}.png`
            const png1280 = `https://flagcdn.com/w1280/${code}.png`
            const svg = `https://flagcdn.com/${code}.svg`
            const commonsCategory = `https://commons.wikimedia.org/wiki/Category:${encodeURIComponent(`SVG flags of ${c.name}`)}`
            return (
              <div key={c.id} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/50 p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <div className="flex items-center gap-3 mb-3">
                  <img src={c.flagUrl} alt={`${c.name} flag`} className="h-6 w-auto rounded-sm ring-1 ring-gray-200 dark:ring-gray-700" />
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

        <p className="mt-6 text-xs text-gray-600 dark:text-gray-400 max-w-3xl">
          Images served via FlagCDN. National flags are generally in the public domain; certain emblems/variants may have
          additional rights. Wikimedia Commons categories list file‑level licenses.
        </p>

        <div className="mt-10 max-w-3xl">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white mb-3">Printable flags FAQ</h2>
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <div>
              <h3 className="font-bold">Are national flags free to print and use?</h3>
              <p>Most national flags are public domain, but coats of arms or specific variants may have restrictions. Always check file‑level licensing and local laws.</p>
            </div>
            <div>
              <h3 className="font-bold">SVG or PNG—what should I download?</h3>
              <p>SVG is vector and scales without losing quality—ideal for any print size. PNG 1280 is a good fallback for standard A4/Letter prints.</p>
            </div>
            <div>
              <h3 className="font-bold">How do I make a PDF?</h3>
              <p>Open the SVG or PNG in your browser and use print‑to‑PDF, selecting A4 or US Letter and appropriate margins.</p>
            </div>
            <div>
              <h3 className="font-bold">Do you have black‑and‑white flag outlines for coloring?</h3>
              <p>Many outlines are available on Wikimedia Commons; search the relevant category for “outline” or “black and white” variants.</p>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Printable country flags (SVG, PNG)",
              itemListElement: countries.map((c, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                url: `https://flaggle.fun/flags/${c.id}`,
                name: `${c.name} flag`,
              })),
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Are national flags free to print and use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most national flags are public domain, but coats of arms or specific variants may have restrictions. Always check file‑level licensing and local laws.",
                  },
                },
                {
                  "@type": "Question",
                  name: "SVG or PNG—what should I download?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "SVG is vector and scales without losing quality—ideal for any print size. PNG 1280 is a good fallback for standard A4/Letter prints.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I make a PDF?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Open the SVG or PNG in your browser and use print‑to‑PDF, selecting A4 or US Letter and appropriate margins.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you have black‑and‑white flag outlines for coloring?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Many outlines are available on Wikimedia Commons; search the relevant category for ‘outline’ or ‘black and white’ variants.",
                  },
                },
              ],
            }),
          }}
        />
      </main>
    </div>
  )
}


