"use client"

import { useState, useEffect } from "react"
import { MonumentAttribution } from "@/components/monument-attribution"
import { AttributionDebugger } from "@/components/attribution-debugger"
import { getMonumentById } from "@/lib/monument-database"

export default function AttributionTestPage() {
  const [monument, setMonument] = useState<any>(null)

  useEffect(() => {
    // St. Basil's Cathedral has ID 25
    const stBasils = getMonumentById(25)
    setMonument(stBasils)
  }, [])

  if (!monument) {
    return <div className="p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Attribution Test</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold">{monument.name}</h2>
        <p className="mb-4">
          {monument.location}, {monument.country}
        </p>

        <AttributionDebugger monument={monument} />

        <div className="mt-4 p-4 border rounded">
          <h3 className="font-bold">Standard Attribution:</h3>
          <MonumentAttribution
            photographer={monument.attribution.photographer}
            photographerUrl={monument.attribution.photographerUrl}
            imageSource={monument.attribution.source}
          />
        </div>

        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h3 className="font-bold">Debug Attribution:</h3>
          <MonumentAttribution
            photographer={monument.attribution.photographer}
            photographerUrl={monument.attribution.photographerUrl}
            imageSource={monument.attribution.source}
            debug={true}
          />
        </div>

        <div className="mt-4 p-4 border rounded">
          <h3 className="font-bold">Hardcoded Pexels Test:</h3>
          <MonumentAttribution
            photographer="Anna Shvets"
            photographerUrl="https://www.pexels.com/@shvets-production"
            imageSource="Pexels"
          />
        </div>
      </div>
    </div>
  )
}
