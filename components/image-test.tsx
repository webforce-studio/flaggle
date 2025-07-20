"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageTest() {
  const [imageError, setImageError] = useState<string | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Test URLs
  const testUrls = [
    // Working Eiffel Tower image
    "https://images.unsplash.com/photo-1564227230898-87086d5b04dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NTc1MjR8MHwxfGFsbHx8fHx8fHx8fDE3NDg1OTQzNTl8&ixlib=rb-4.1.0&q=80&w=1080",

    // New Petra image
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&q=80&w=1080&fit=max&fm=jpg&crop=entropy&cs=tinysrgb",

    // Simplified Petra URL
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1080",

    // Placeholder for comparison
    "/placeholder.svg?height=400&width=600",
  ]

  const [currentUrlIndex, setCurrentUrlIndex] = useState(0)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Image Loading Test</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Test URL ({currentUrlIndex + 1} of {testUrls.length}):
        </label>
        <div className="flex gap-2 mb-2">
          {testUrls.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentUrlIndex(index)
                setImageError(null)
                setImageLoaded(false)
              }}
              className={`px-3 py-1 rounded text-sm ${
                currentUrlIndex === index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              URL {index + 1}
            </button>
          ))}
        </div>
        <div className="text-xs text-gray-600 break-all">{testUrls[currentUrlIndex]}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Next.js Image Component */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Next.js Image Component</h2>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={testUrls[currentUrlIndex] || "/placeholder.svg"}
              alt="Test image"
              fill
              className="object-cover"
              onLoad={() => {
                setImageLoaded(true)
                setImageError(null)
              }}
              onError={(e) => {
                setImageError("Next.js Image failed to load")
                console.error("Image load error:", e)
              }}
            />
          </div>
          <div className="mt-2 text-sm">
            {imageLoaded && <span className="text-green-600">✅ Loaded successfully</span>}
            {imageError && <span className="text-red-600">❌ {imageError}</span>}
          </div>
        </div>

        {/* Regular img tag */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Regular img tag</h2>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={testUrls[currentUrlIndex] || "/placeholder.svg"}
              alt="Test image"
              className="w-full h-full object-cover"
              onLoad={() => console.log("Regular img loaded successfully")}
              onError={(e) => console.error("Regular img failed:", e)}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Debug Info:</h3>
        <div className="text-sm space-y-1">
          <div>Current URL Index: {currentUrlIndex}</div>
          <div>Image Loaded: {imageLoaded ? "Yes" : "No"}</div>
          <div>Error: {imageError || "None"}</div>
        </div>
      </div>
    </div>
  )
}
