// Lightweight IndexNow helper (server-side only). No UI impact.

export const INDEXNOW_KEY = "8f3d2c21-4a0b-4b77-9b73-2f9c0c3bf9d1"
export const INDEXNOW_KEY_LOCATION = `https://flaggle.fun/${INDEXNOW_KEY}.txt`
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"
export const SITE_HOST = "flaggle.fun"

export async function submitIndexNow(urls: string[]): Promise<Response> {
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error("submitIndexNow: urls must be a non-empty array")
  }

  const body = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: urls,
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    // cache: no-store to avoid any caching layers
  })

  return res
}


