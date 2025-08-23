import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Lightweight IndexNow pinger (best-effort; errors are swallowed)
export async function pingIndexNow(urls: string[]) {
  try {
    const endpoint = "https://api.indexnow.org/indexnow"
    const body: Record<string, any> = {
      host: "www.flaggle.fun",
      urlList: urls,
    }
    if (process.env.INDEXNOW_KEY) body.key = process.env.INDEXNOW_KEY
    if (process.env.INDEXNOW_KEY_LOCATION) body.keyLocation = process.env.INDEXNOW_KEY_LOCATION

    await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    })
  } catch (err) {
    console.error("IndexNow ping failed", err)
  }
}
