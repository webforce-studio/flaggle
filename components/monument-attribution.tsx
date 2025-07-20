import { cn } from "@/lib/utils"

interface MonumentAttributionProps {
  photographer: string
  photographerUrl: string
  imageSource: string
  className?: string
  debug?: boolean
}

export function MonumentAttribution({
  photographer,
  photographerUrl,
  imageSource,
  className,
  debug = false,
}: MonumentAttributionProps) {
  // Get the correct source URL based on the image source
  let sourceUrl = "#"

  if (imageSource === "Unsplash") {
    sourceUrl = "https://unsplash.com"
  } else if (imageSource === "Pexels") {
    sourceUrl = "https://www.pexels.com"
  }

  // Add debug information
  if (debug) {
    console.log("MonumentAttribution props:", { photographer, photographerUrl, imageSource, sourceUrl })
  }

  return (
    <>
      {debug && (
        <div className="bg-red-100 p-2 text-xs mb-2">
          <p>Debug - Image Source: {imageSource}</p>
          <p>Debug - Source URL: {sourceUrl}</p>
        </div>
      )}
      <div className={cn("text-xs text-gray-500 mt-1", className)}>
        Photo by{" "}
        <a
          href={photographerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700 transition-colors"
        >
          {photographer}
        </a>{" "}
        on{" "}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700 transition-colors"
        >
          {imageSource}
        </a>
      </div>
    </>
  )
}
