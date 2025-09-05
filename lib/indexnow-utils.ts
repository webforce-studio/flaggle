// Utility functions for IndexNow notifications
import { submitIndexNow } from './indexnow'

export interface IndexNowResult {
  success: boolean
  status: number
  response: string
  urls: string[]
  count: number
}

/**
 * Notify search engines about updated URLs via IndexNow
 * @param urls Array of URLs to notify about
 * @returns Promise with notification result
 */
export async function notifyIndexNow(urls: string[]): Promise<IndexNowResult> {
  try {
    if (!Array.isArray(urls) || urls.length === 0) {
      throw new Error('urls must be a non-empty array')
    }

    // Ensure URLs are from our domain
    const validUrls = urls
      .filter(url => typeof url === 'string' && url.trim())
      .map(url => {
        const trimmed = url.trim()
        // Ensure URLs start with https://www.flaggle.fun/
        if (trimmed.startsWith('https://flaggle.fun/')) {
          return trimmed.replace('https://flaggle.fun/', 'https://www.flaggle.fun/')
        }
        return trimmed
      })
      .filter(url => url.startsWith('https://www.flaggle.fun/'))

    if (validUrls.length === 0) {
      throw new Error('No valid URLs provided')
    }

    const res = await submitIndexNow(validUrls)
    const response = await res.text()

    return {
      success: res.ok,
      status: res.status,
      response,
      urls: validUrls,
      count: validUrls.length
    }
  } catch (error) {
    console.error('IndexNow notification failed:', error)
    throw error
  }
}

/**
 * Notify about homepage and key pages
 */
export async function notifyKeyPages(): Promise<IndexNowResult> {
  const keyPages = [
    'https://www.flaggle.fun/',
    'https://www.flaggle.fun/sitemap.xml',
    'https://www.flaggle.fun/robots.txt',
    'https://www.flaggle.fun/world-flags',
    'https://www.flaggle.fun/geography-quiz',
    'https://www.flaggle.fun/printable-flags'
  ]

  return notifyIndexNow(keyPages)
}

/**
 * Notify about a specific flag page
 */
export async function notifyFlagPage(countryId: string): Promise<IndexNowResult> {
  const flagUrl = `https://www.flaggle.fun/flags/${countryId}`
  return notifyIndexNow([flagUrl])
}

/**
 * Notify about multiple flag pages
 */
export async function notifyFlagPages(countryIds: string[]): Promise<IndexNowResult> {
  const flagUrls = countryIds.map(id => `https://www.flaggle.fun/flags/${id}`)
  return notifyIndexNow(flagUrls)
}

/**
 * Notify about regional flag pages
 */
export async function notifyRegionalPages(): Promise<IndexNowResult> {
  const regionalPages = [
    'https://www.flaggle.fun/europe-flags',
    'https://www.flaggle.fun/asia-flags',
    'https://www.flaggle.fun/africa-flags',
    'https://www.flaggle.fun/america-flags',
    'https://www.flaggle.fun/oceania-flags'
  ]

  return notifyIndexNow(regionalPages)
}
