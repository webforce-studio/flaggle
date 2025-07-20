"use client"

import { useState, useEffect } from "react"
import type { Monument } from "@/lib/monument-database"

interface FallbackMonumentImageProps {
  monument: Monument
  size?: "thumbnail" | "medium" | "large"
  className?: string
  alt?: string
  priority?: boolean
}

export function FallbackMonumentImage({
  monument,
  size = "medium",
  className = "",
  alt,
  priority = false,
}: FallbackMonumentImageProps) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imageAlt = alt || `${monument.name}, ${monument.location}`

  // Reset state when monument changes
  useEffect(() => {
    setLoaded(false)
    setError(false)
  }, [monument.id])

  // Handle image error
  const handleImageError = () => {
    console.error(`Image failed to load for ${monument.name}`)
    setError(true)
    setLoaded(true) // Stop showing loading state
  }

  // Handle successful load
  const handleImageLoad = () => {
    setLoaded(true)
    setError(false)
  }

  // Get the image URLs from the current database structure
  const imageUrls = monument.images[size]

  return (
    <div className={`relative ${className}`}>
      {/* Show loading state until image is loaded */}
      {!loaded && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-800"></div>
        </div>
      )}

      {/* Show error state if image fails to load */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <div className="text-2xl mb-2">🏛️</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}

      <picture>
        <source srcSet={imageUrls.webp} type="image/webp" />
        <img
          src={imageUrls.jpg || "/placeholder.svg"}
          alt={imageAlt}
          className={className}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading={priority ? "eager" : "lazy"}
          style={{ display: error ? "none" : "block" }}
        />
      </picture>
    </div>
  )
}
