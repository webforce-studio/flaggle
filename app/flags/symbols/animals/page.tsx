import type { Metadata } from "next"
import Link from "next/link"
import { countries } from "@/lib/country-database"
import { flagCategories } from "@/lib/flag-categories"

const cat = flagCategories.find(c => c.id === "symbols/animals")!

export const metadata: Metadata = {
  title: "Flags with Animals | Countries Depicting Animals on Flags",
  description: "Browse national flags with animals (eagles, lions, birds). Click for history & downloads.",
  alternates: { canonical: "/flags/symbols/animals" },
}

export default function AnimalFlagsPage() {
  const items = countries.filter(cat.predicate)
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Flags with Animals</h1>
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
            name: "Flags with Animals",
            itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: `${c.name} flag`, url: `https://www.flaggle.fun/flags/${c.id}` })),
          }),
        }}
      />
    </main>
  )
}
