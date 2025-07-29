import React from 'react'

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 40, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blue circle with gradient */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="20" cy="20" r="20" fill="url(#blueGradient)" />
      
      {/* White waving flag/wave design */}
      <path
        d="M12 15 Q15 12, 18 15 T24 15 Q27 12, 30 15 T36 15"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M12 18 Q15 15, 18 18 T24 18 Q27 15, 30 18 T36 18"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M12 21 Q15 18, 18 21 T24 21 Q27 18, 30 21 T36 21"
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Flag pole */}
      <line x1="12" y1="12" x2="12" y2="25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
} 