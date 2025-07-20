"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Copy } from "lucide-react"

const PROBLEM_MONUMENTS = [
  {
    id: "5",
    name: "Colosseum",
    photoId: "IkUpS4Ntv8M",
    photographer: "David Köhler",
    photographerUrl: "https://unsplash.com/@davidkohler",
    searchQuery: "colosseum rome italy ancient amphitheater",
  },
  {
    id: "6",
    name: "Machu Picchu",
    photoId: "yam1KMv0SgQ",
    photographer: "Willian Justen de Vasconcellos",
    photographerUrl: "https://unsplash.com/@willianjusten",
    searchQuery: "machu picchu peru mountains ancient ruins",
  },
  {
    id: "7",
    name: "Great Wall of China",
    photoId: "HwY9R6_YzgM",
    photographer: "William Olivieri",
    photographerUrl: "https://unsplash.com/@skuggdieme",
    searchQuery: "great wall china mountains ancient fortification",
  },
]

export default function MonumentImageFixer() {
  const [loadStatus, setLoadStatus] = useState<Record<string, string>>({})
  const [workingUrls, setWorkingUrls] = useState<Record<string, string>>({})

  const handleImageLoad = (monumentId: string, urlType: string, url: string) => {
    setLoadStatus((prev) => ({ ...prev, [monumentId]: `${urlType} - SUCCESS` }))
    setWorkingUrls((prev) => ({ ...prev, [monumentId]: url }))
  }

  const handleImageError = (monumentId: string, urlType: string) => {
    setLoadStatus((prev) => ({ ...prev, [monumentId]: `${urlType} - FAILED` }))
  }

  const generateUrls = (monument: any) => {
    return {
      source: `https://source.unsplash.com/${monument.photoId}/1200x800`,
      images1: `https://images.unsplash.com/photo-${monument.photoId}?ixlib=rb-4.0.3&q=80&w=1200&h=800&fit=crop`,
      images2: `https://images.unsplash.com/photo-${monument.photoId}?ixlib=rb-4.0.3&q=80&w=1080&fit=max&fm=jpg&crop=entropy&cs=tinysrgb`,
      placeholder: `/placeholder.svg?height=800&width=1200&query=${encodeURIComponent(monument.searchQuery)}`,
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const generateDatabaseEntry = (monument: any) => {
    const workingUrl = workingUrls[monument.id] || generateUrls(monument).placeholder
    return `{
  id: "${monument.id}",
  name: "${monument.name}",
  location: "${monument.id === "5" ? "Rome" : monument.id === "6" ? "Cusco" : "Beijing"}",
  country: "${monument.id === "5" ? "Italy" : monument.id === "6" ? "Peru" : "China"}",
  continent: "${monument.id === "5" ? "Europe" : monument.id === "6" ? "South America" : "Asia"}",
  type: "${monument.id === "5" ? "Amphitheater" : monument.id === "6" ? "Archaeological Site" : "Fortification"}",
  yearBuilt: ${monument.id === "5" ? "80" : monument.id === "6" ? "1450" : "-700"},
  height: ${monument.id === "5" ? "48" : monument.id === "6" ? "0" : "8"},
  latitude: ${monument.id === "5" ? "41.8902" : monument.id === "6" ? "-13.1631" : "40.4319"},
  longitude: ${monument.id === "5" ? "12.4922" : monument.id === "6" ? "-72.545" : "116.5704"},
  image: "${workingUrl}",
  photographer: "${monument.photographer}",
  photographerUrl: "${monument.photographerUrl}",
  imageSource: "Unsplash",
  difficulty: "${monument.id === "5" ? "easy" : "medium"}",
  dayOfYear: ${monument.id},
},`
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Monument Image URL Fixer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Testing different URL formats for the problematic monuments. We'll also provide high-quality placeholder
            images as a reliable fallback.
          </p>
        </CardContent>
      </Card>

      {PROBLEM_MONUMENTS.map((monument) => {
        const urls = generateUrls(monument)
        const status = loadStatus[monument.id]

        return (
          <Card key={monument.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{monument.name}</CardTitle>
                <div className="flex items-center gap-2">
                  {status?.includes("SUCCESS") ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : status?.includes("FAILED") ? (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  ) : null}
                  <span className="text-sm text-gray-500">{status || "Testing..."}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* Source URL Test */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Source URL</h4>
                  <div className="relative aspect-video rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={urls.source || "/placeholder.svg"}
                      alt={`${monument.name} - Source`}
                      fill
                      className="object-cover"
                      onLoad={() => handleImageLoad(monument.id, "Source", urls.source)}
                      onError={() => handleImageError(monument.id, "Source")}
                    />
                  </div>
                  <p className="text-xs text-gray-500 break-all">{urls.source}</p>
                </div>

                {/* Images URL 1 */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Images URL 1</h4>
                  <div className="relative aspect-video rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={urls.images1 || "/placeholder.svg"}
                      alt={`${monument.name} - Images 1`}
                      fill
                      className="object-cover"
                      onLoad={() => handleImageLoad(monument.id, "Images1", urls.images1)}
                      onError={() => handleImageError(monument.id, "Images1")}
                    />
                  </div>
                  <p className="text-xs text-gray-500 break-all">{urls.images1}</p>
                </div>

                {/* Images URL 2 */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Images URL 2</h4>
                  <div className="relative aspect-video rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={urls.images2 || "/placeholder.svg"}
                      alt={`${monument.name} - Images 2`}
                      fill
                      className="object-cover"
                      onLoad={() => handleImageLoad(monument.id, "Images2", urls.images2)}
                      onError={() => handleImageError(monument.id, "Images2")}
                    />
                  </div>
                  <p className="text-xs text-gray-500 break-all">{urls.images2}</p>
                </div>

                {/* Placeholder (Always works) */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Placeholder (Fallback)</h4>
                  <div className="relative aspect-video rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={urls.placeholder || "/placeholder.svg"}
                      alt={`${monument.name} - Placeholder`}
                      fill
                      className="object-cover"
                      onLoad={() => handleImageLoad(monument.id, "Placeholder", urls.placeholder)}
                      onError={() => handleImageError(monument.id, "Placeholder")}
                    />
                  </div>
                  <p className="text-xs text-gray-500 break-all">{urls.placeholder}</p>
                </div>
              </div>

              {/* Database Entry */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Database Entry (Ready to Copy)</h4>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(generateDatabaseEntry(monument))}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                </div>
                <pre className="bg-gray-100 p-3 rounded-md text-xs overflow-x-auto">
                  <code>{generateDatabaseEntry(monument)}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        )
      })}

      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Check which URL format works for each monument above</li>
            <li>Copy the database entries for the working URLs</li>
            <li>Update the monument database with the working entries</li>
            <li>If no URLs work, use the placeholder images as a reliable fallback</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
