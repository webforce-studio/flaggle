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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Red and White Flags</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300 max-w-2xl">{cat.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {items.map((c) => (
          <Link key={c.id} href={`/flags/${c.id}`} className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600">
            {c.name} flag
          </Link>
        ))}
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
  )
}
