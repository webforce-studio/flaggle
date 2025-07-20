// This is a new file to check how monuments are displayed
import Image from "next/image"
import { MonumentAttribution } from "./monument-attribution"
import type { Monument } from "@/lib/monument-database"

interface MonumentDisplayProps {
  monument: Monument
  showAttribution?: boolean
}

export function MonumentDisplay({ monument, showAttribution = true }: MonumentDisplayProps) {
  return (
    <div className="relative">
      <div className="relative h-64 w-full">
        <Image
          src={monument.images.large.jpg || "/placeholder.svg"}
          alt={monument.name}
          fill
          className="object-cover"
        />
      </div>
      {showAttribution && (
        <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 p-2">
          <MonumentAttribution
            photographer={monument.attribution.photographer}
            photographerUrl={monument.attribution.photographerUrl}
            imageSource={monument.attribution.source}
            className="text-white"
          />
        </div>
      )}
    </div>
  )
}
