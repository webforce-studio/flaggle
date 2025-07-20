import { MonumentCard } from "./monument-card"

interface MonumentGridProps {
  monuments: any[] // Replace 'any' with the actual type of your monument data
}

export function MonumentGrid({ monuments }: MonumentGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {monuments.map((monument) => (
        <MonumentCard key={monument.id} monument={monument} />
      ))}
    </div>
  )
}
