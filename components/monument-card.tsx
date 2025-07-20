// This is a new file to check how monuments are displayed in cards
import Image from "next/image"
import { MonumentAttribution } from "./monument-attribution"
import type { Monument } from "@/lib/monument-database"

interface MonumentCardProps {
  monument: Monument
}

export function MonumentCard({ monument }: MonumentCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <Image
          src={monument.images.medium.jpg || "/placeholder.svg"}
          alt={monument.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{monument.name}</h3>
        <p className="text-sm text-gray-600">
          {monument.location}, {monument.country}
        </p>
        <MonumentAttribution
          photographer={monument.attribution.photographer}
          photographerUrl={monument.attribution.photographerUrl}
          imageSource={monument.attribution.source}
        />
      </div>
    </div>
  )
}
