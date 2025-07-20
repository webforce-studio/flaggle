"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle } from "lucide-react"

// Photo IDs we're testing
const PHOTO_IDS = {
  colosseum: "IkUpS4Ntv8M",
  machuPicchu: "yam1KMv0SgQ",
  greatWall: "HwY9R6_YzgM",
}

// Different URL formats to try
const URL_FORMATS = [
  {
    name: "Format 1 (Original)",
    template:
      "https://images.unsplash.com/photo-{id}?ixlib=rb-4.0.3&q=80&w=1080&fit=max&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    name: "Format 2 (With dash)",
    template:
      "https://images.unsplash.com/photo-{id}-?ixlib=rb-4.0.3&q=80&w=1080&fit=max&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    name: "Format 3 (Full ID)",
    template:
      "https://images.unsplash.com/photo-{id}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-4.0.3&q=80&w=1080&fit=max&fm=jpg&crop=entropy&cs=tinysrgb",
  },
  {
    name: "Format 4 (Raw URL)",
    template: "https://images.unsplash.com/photo-{id}?ixlib=rb-4.0.3",
  },
  {
    name: "Format 5 (Source URL)",
    template: "https://source.unsplash.com/{id}/1200x800",
  },
  {
    name: "Format 6 (Placeholder)",
    template: "/placeholder.svg?height=400&width=600",
  },
]

export default function UrlFormatTester() {
  const [results, setResults] = useState<Record<string, Record<string, boolean>>>({})
  const [loading, setLoading] = useState(false)

  // Test a specific URL format for a specific monument
  const testUrl = async (monumentKey: string, monumentName: string, formatIndex: number): Promise<boolean> => {
    try {
      const photoId = PHOTO_IDS[monumentKey as keyof typeof PHOTO_IDS]
      const format = URL_FORMATS[formatIndex]

      if (!photoId || !format) {
        console.error(`Missing data for ${monumentKey} or format ${formatIndex}`)
        return false
      }

      // Generate URL from template
      const url = format.template
        .replace("{id}", photoId)
        .replace("{name}", monumentName.toLowerCase().replace(/\s+/g, "+"))

      return new Promise<boolean>((resolve) => {
        const img = new Image()

        const timeout = setTimeout(() => {
          resolve(false)
        }, 10000) // 10 second timeout

        img.onload = () => {
          clearTimeout(timeout)
          setResults((prev) => ({
            ...prev,
            [monumentKey]: {
              ...(prev[monumentKey] || {}),
              [formatIndex]: true,
            },
          }))
          resolve(true)
        }

        img.onerror = () => {
          clearTimeout(timeout)
          setResults((prev) => ({
            ...prev,
            [monumentKey]: {
              ...(prev[monumentKey] || {}),
              [formatIndex]: false,
            },
          }))
          resolve(false)
        }

        img.src = url
      })
    } catch (error) {
      console.error(`Error testing URL for ${monumentKey}:`, error)
      return false
    }
  }

  // Test all URL formats for all monuments
  const testAllFormats = async () => {
    setLoading(true)

    const monuments = [
      { key: "colosseum", name: "Colosseum" },
      { key: "machuPicchu", name: "Machu Picchu" },
      { key: "greatWall", name: "Great Wall of China" },
    ]

    for (const monument of monuments) {
      for (let i = 0; i < URL_FORMATS.length; i++) {
        await testUrl(monument.key, monument.name, i)
      }
    }

    setLoading(false)
  }

  // Get URL for display
  const getUrl = (monumentKey: string, formatIndex: number) => {
    const photoId = PHOTO_IDS[monumentKey as keyof typeof PHOTO_IDS]
    const format = URL_FORMATS[formatIndex]

    return format.template.replace("{id}", photoId).replace("{name}", monumentKey.toLowerCase().replace(/\s+/g, "+"))
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Unsplash URL Format Tester</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This tool tests different URL formats for Unsplash images to find which ones work.</p>
          <Button onClick={testAllFormats} disabled={loading} className="bg-amber-500 hover:bg-amber-600">
            {loading ? "Testing..." : "Test All URL Formats"}
          </Button>
        </CardContent>
      </Card>

      {Object.keys(results).length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(PHOTO_IDS).map(([monumentKey, photoId]) => (
            <Card key={monumentKey}>
              <CardHeader>
                <CardTitle className="capitalize">{monumentKey.replace(/([A-Z])/g, " $1").trim()}</CardTitle>
                <p className="text-sm text-gray-500">Photo ID: {photoId}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {URL_FORMATS.map((format, index) => {
                    const isWorking = results[monumentKey]?.[index]

                    return (
                      <div key={index} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{format.name}</span>
                          {results[monumentKey]?.[index] !== undefined &&
                            (isWorking ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-red-500" />
                            ))}
                        </div>

                        {isWorking && (
                          <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                            <Image
                              src={getUrl(monumentKey, index) || "/placeholder.svg"}
                              alt={`${monumentKey} with format ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}

                        <p className="text-xs text-gray-500 break-all">{getUrl(monumentKey, index)}</p>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
