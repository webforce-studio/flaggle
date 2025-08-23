import type { Metadata } from "next"
import Link from "next/link"
import { countries } from "@/lib/country-database"
import { flagCategories } from "@/lib/flag-categories"

const cat = flagCategories.find(c => c.id === "styles/scandinavian-cross")!

export const metadata: Metadata = {
  title: "Scandinavian Cross Flags | Nordic Cross Countries",
  description: "Browse Nordic cross designs (Denmark, Sweden, Norway, Finland, Iceland). History & downloads.",
  alternates: { canonical: "/flags/styles/scandinavian-cross" },
}

export default function ScandinavianCrossFlagsPage() {
  const items = countries.filter(cat.predicate)
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Scandinavian Cross Flags</h1>
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
            name: "Scandinavian Cross Flags",
            itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: `${c.name} flag`, url: `https://www.flaggle.fun/flags/${c.id}` })),
          }),
        }}
      />
    </main>
  )
}
