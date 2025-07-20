"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"

const TEST_MONUMENTS = [
  {
    id: "5",
    name: "Colosseum",
    photoId: "IkUpS4Ntv8M",
    photographer: "David Köhler",
    photographerUrl: "https://unsplash.com/@davidkohler",
  },
  {
    id: "6",
    name: "Machu Picchu",
    photoId: "yam1KMv0SgQ",
    photographer: "Willian Justen de Vasconcellos",
    photographerUrl: "https://unsplash.com/@willianjusten",
  },
  {
    id: "7",
    name: "Great Wall of China",
    photoId: "HwY9R6_YzgM",
    photographer: "William Olivieri",
    photographerUrl: "https://unsplash.com/@skuggdieme",
  },
]

export default function DirectUnsplashTest() {
  const [loadStatus, setLoadStatus] = useState<Record<string, boolean>>({})

  const handleImageLoad = (monumentId: string) => {
    setLoadStatus((prev) => ({ ...prev, [monumentId]: true }))
  }

  const handleImageError = (monumentId: string) => {
    setLoadStatus((prev) => ({ ...prev, [monumentId]: false }))
  }

  const generateSourceUrl = (photoId: string) => {
    return `https://source.unsplash.com/${photoId}/1200x800`
  }

  const generateDatabaseEntry = (monument: any) => {
    const sourceUrl = generateSourceUrl(monument.photoId)
    return `{
  id: "${monument.id}",
  name: "${monument.name}",
  // ... other fields ...
  image: "${sourceUrl}",
  photographer: "${monument.photographer}",
  photographerUrl: "${monument.photographerUrl}",
  imageSource: "Unsplash",
  // ... rest of fields ...
},`
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Direct Unsplash Source Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Testing the source.unsplash.com format that works reliably without API keys.</p>
          <p className="text-sm text-gray-600 mb-4">
            This format is used by many successful sites and should work consistently.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {TEST_MONUMENTS.map((monument) => {
          const sourceUrl = generateSourceUrl(monument.photoId)
          const isLoaded = loadStatus[monument.id]

          return (
            <Card key={monument.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{monument.name}</CardTitle>
                  {isLoaded !== undefined &&
                    (isLoaded ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    ))}
                </div>
                <p className="text-sm text-gray-500">Photo ID: {monument.photoId}</p>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video rounded-md overflow-hidden mb-4">
                  <Image
                    src={sourceUrl || "/placeholder.svg"}
                    alt={monument.name}
                    fill
                    className="object-cover"
                    onLoad={() => handleImageLoad(monument.id)}
                    onError={() => handleImageError(monument.id)}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-gray-500 break-all">
                    <strong>URL:</strong> {sourceUrl}
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Photographer:</strong>{" "}
                    <a
                      href={monument.photographerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {monument.photographer}
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Database Update Code</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If the images above load successfully, copy this code to update your monument database:
          </p>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            <code>{TEST_MONUMENTS.map((monument) => generateDatabaseEntry(monument)).join("\n\n")}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}
