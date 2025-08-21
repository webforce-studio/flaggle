import Link from "next/link"
import Image from "next/image"
import { countries, type Country } from "@/lib/country-database"
import { getFlagHistory } from "@/lib/flag-histories"

interface RegionFlagTableProps {
  region: string
}

export function RegionFlagTable({ region }: RegionFlagTableProps) {
  const regionCountries: Country[] = countries
    .filter((c) => c.region.toLowerCase().includes(region.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name))

  const truncateWords = (text: string, maxWords: number) => {
    const words = text.trim().split(/\s+/)
    if (words.length <= maxWords) return text
    return words.slice(0, maxWords).join(" ") + "…"
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <colgroup>
          <col className="w-[7rem]" />
          <col className="w-[16rem]" />
          <col className="w-auto" />
        </colgroup>
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="py-3 pr-6 text-sm font-semibold text-gray-700 dark:text-gray-200">Flag</th>
            <th className="py-3 pr-6 text-sm font-semibold text-gray-700 dark:text-gray-200">Country</th>
            <th className="py-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Flag history (≤150 words)</th>
          </tr>
        </thead>
        <tbody>
          {regionCountries.map((c) => {
            const history = getFlagHistory(c.id)
            return (
              <tr key={c.id} className="align-top border-b border-gray-100 dark:border-gray-800">
                <td className="py-4 pr-6 w-[7rem]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.flagUrl}
                    alt={`${c.name} flag`}
                    loading="lazy"
                    className="w-28 h-auto object-contain rounded-sm ring-1 ring-gray-200 dark:ring-gray-700"
                  />
                </td>
                <td className="py-4 pr-6 w-[16rem]">
                  <Link href={`/flags/${c.id}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {c.name}
                  </Link>
                </td>
                <td className="py-4">
                  {history ? (
                    <p className="text-gray-700 dark:text-gray-300">
                      {truncateWords(history.summary250, 150)} {" "}
                      <Link href={`/flags/${c.id}`} className="whitespace-nowrap text-blue-600 dark:text-blue-400 hover:underline">Read more</Link>
                    </p>
                  ) : (
                    <p className="text-gray-500">Coming soon.</p>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


