"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

// Photo IDs we're testing
const TEST_MONUMENTS = [
  {
    name: "Colosseum",
    photoId: "IkUpS4Ntv8M",
    photographer: "David Köhler",
    photographerUsername: "davidkohler",
  },
  {
    name: "Machu Picchu",
    photoId: "yam1KMv0SgQ",
    photographer: "Willian Justen de Vasconcellos",
    photographerUsername: "willianjusten",
  },
  {
    name: "Great Wall of China",
    photoId: "HwY9R6_YzgM",
    photographer: "William Olivieri",
    photographerUsername: "skuggdieme",
  },
]

export default function UnsplashDirectTester() {
  const [results, setResults] = useState<
    Array<{
      name: string
      photoId: string
      directUrl: string | null
      error: string | null
      loading: boolean
    }>
  >([])

  useEffect(() => {
    // Initialize results
    setResults(
      TEST_MONUMENTS.map((monument) => ({
        name: monument.name,
        photoId: monument.photoId,
        directUrl: null,
        error: null,
        loading: false,
      })),
    )
  }, [])

  const fetchDirectUrl = async (index: number) => {
    const monument = TEST_MONUMENTS[index]

    // Update loading state
    setResults((prev) => prev.map((item, i) => (i === index ? { ...item, loading: true, error: null } : item)))

    try {
      // Use the Unsplash API to get the direct URL
      const response = await fetch(`/api/unsplash-direct?photoId=${monument.photoId}`)

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()

      // Update results with direct URL
      setResults((prev) =>
        prev.map((item, i) =>
          i === index
            ? {
                ...item,
                directUrl: data.url,
                loading: false,
              }
            : item,
        ),
      )
    } catch (error) {
      console.error("Error fetching direct URL:", error)

      // Update results with error
      setResults((prev) =>
        prev.map((item, i) =>
          i === index
            ? {
                ...item,
                error: error instanceof Error ? error.message : "Unknown error",
                loading: false,
              }
            : item,
        ),
      )
    }
  }

  const testAllDirectUrls = () => {
    TEST_MONUMENTS.forEach((_, index) => {
      fetchDirectUrl(index)
    })
  }

  // Generate a direct URL without API
  const generateDirectUrl = (photoId: string) => {
    return `https://source.unsplash.com/${photoId}/1200x800`
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Unsplash Direct URL Tester</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This tool tests direct Unsplash URLs that don't require API access.</p>
          <div className="flex gap-4">
            <Button onClick={testAllDirectUrls} className="bg-amber-500 hover:bg-amber-600">
              Test Direct URLs
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{result.name}</CardTitle>
              <p className="text-sm text-gray-500">Photo ID: {result.photoId}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Direct URL from API */}
                <div className="border rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Direct URL</span>
                    {result.loading && <Loader2 className="h-4 w-4 animate-spin" />}
                  </div>

                  {result.directUrl && (
                    <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                      <Image
                        src={result.directUrl || "/placeholder.svg"}
                        alt={`${result.name} direct URL`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {result.error && <p className="text-sm text-red-500 mb-2">{result.error}</p>}

                  <p className="text-xs text-gray-500 break-all">{result.directUrl || "URL not fetched yet"}</p>
                </div>

                {/* Source.unsplash.com URL */}
                <div className="border rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Source URL (Always works)</span>
                  </div>

                  <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                    <Image
                      src={generateDirectUrl(result.photoId) || "/placeholder.svg"}
                      alt={`${result.name} source URL`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-xs text-gray-500 break-all">{generateDirectUrl(result.photoId)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Database Update Template */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Database Update Template</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
            <pre className="text-xs overflow-x-auto">
              {TEST_MONUMENTS.map((monument, index) => {
                const result = results[index]
                const workingUrl = result?.directUrl || generateDirectUrl(monument.photoId)

                return `{
  id: "${index + 5}",
  name: "${monument.name}",
  // ... other fields ...
  image: "${workingUrl}",
  photographer: "${monument.photographer}",
  photographerUrl: "https://unsplash.com/@${monument.photographerUsername}",
  imageSource: "Unsplash",
  // ... rest of fields ...
},
`
              }).join("\n")}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
