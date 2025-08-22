import { ImageResponse } from "next/server"

export const size = {
  width: 512,
  height: 512,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </radialGradient>
        </defs>
        <circle cx="256" cy="256" r="246" fill="url(#g)" />
        {/* White flag glyph */}
        <path
          d="M160 160v192c48-32 96 32 144 0v-192c-48 32-96-32-144 0z"
          fill="#fff"
        />
      </svg>
    ),
    size,
  )
}


