import type { Monument } from "@/lib/monument-types"

interface ResponsiveMonumentImageProps {
  monument: Monument
  size?: "thumbnail" | "medium" | "large"
  className?: string
  alt?: string
}

export function ResponsiveMonumentImage({
  monument,
  size = "medium",
  className = "",
  alt,
}: ResponsiveMonumentImageProps) {
  const imageAlt = alt || `${monument.name}, ${monument.location}`

  return (
    <picture>
      <source srcSet={monument.images[size].webp} type="image/webp" />
      <img src={monument.images[size].jpg || "/placeholder.svg"} alt={imageAlt} className={className} />
    </picture>
  )
}
