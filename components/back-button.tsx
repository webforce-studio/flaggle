"use client"

import { useRouter } from "next/navigation"

export function BackButton({ href, label, className }: { href?: string; label?: string; className?: string }) {
  const router = useRouter()
  const handleClick = () => {
    if (href) router.push(href)
    else router.back()
  }
  return (
    <button
      onClick={handleClick}
      className={className ?? "px-3 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"}
      aria-label={label ?? "Go back"}
    >
      {label ?? "← Back"}
    </button>
  )
}


