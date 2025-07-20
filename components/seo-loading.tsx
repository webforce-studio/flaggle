"use client"

import { useEffect, useState } from 'react'

interface SEOLoadingProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  timeout?: number
}

export function SEOLoading({ children, fallback, timeout = 5000 }: SEOLoadingProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasTimedOut, setHasTimedOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasTimedOut(true)
    }, timeout)

    // Simulate content loading
    const contentTimer = setTimeout(() => {
      setIsLoading(false)
    }, 100)

    return () => {
      clearTimeout(timer)
      clearTimeout(contentTimer)
    }
  }, [timeout])

  if (isLoading && !hasTimedOut) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Monumentle...</p>
        </div>
      </div>
    )
  }

  if (hasTimedOut) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Taking longer than expected
          </h2>
          <p className="text-gray-600 mb-6">
            Please check your connection and try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 