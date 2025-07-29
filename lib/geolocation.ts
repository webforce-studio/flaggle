// EU, EEA, UK, and Switzerland country codes for GDPR compliance
const GDPR_COUNTRIES = new Set([
  // European Union (EU)
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 
  'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  
  // European Economic Area (EEA) - EU + Iceland, Liechtenstein, Norway
  'IS', 'LI', 'NO',
  
  // United Kingdom (UK)
  'GB',
  
  // Switzerland
  'CH'
])

export interface GeolocationResult {
  country: string | null
  isGDPRRequired: boolean
  error?: string
}

export async function checkGDPRRequirement(): Promise<GeolocationResult> {
  try {
    // First try to get country from localStorage (cached result)
    const cached = localStorage.getItem('flagguesser-gdpr-country')
    if (cached) {
      const { country, timestamp } = JSON.parse(cached)
      // Cache for 24 hours
      if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
        return {
          country,
          isGDPRRequired: GDPR_COUNTRIES.has(country)
        }
      }
    }

    // Try to get country from IP geolocation
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Geolocation API error: ${response.status}`)
    }

    const data = await response.json()
    const country = data.country_code

    if (!country) {
      throw new Error('No country code received')
    }

    // Cache the result
    localStorage.setItem('flagguesser-gdpr-country', JSON.stringify({
      country,
      timestamp: Date.now()
    }))

    return {
      country,
      isGDPRRequired: GDPR_COUNTRIES.has(country)
    }

  } catch (error) {
    console.warn('Geolocation failed, defaulting to GDPR compliance:', error)
    
    // If geolocation fails, default to showing cookie consent (safer approach)
    return {
      country: null,
      isGDPRRequired: true,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

// Alternative geolocation service (backup)
export async function checkGDPRRequirementBackup(): Promise<GeolocationResult> {
  try {
    const response = await fetch('https://api.ipapi.com/api/check?access_key=free', {
      method: 'GET',
    })

    if (!response.ok) {
      throw new Error(`Backup geolocation API error: ${response.status}`)
    }

    const data = await response.json()
    const country = data.country_code

    if (!country) {
      throw new Error('No country code received from backup API')
    }

    return {
      country,
      isGDPRRequired: GDPR_COUNTRIES.has(country)
    }

  } catch (error) {
    console.warn('Backup geolocation failed:', error)
    return {
      country: null,
      isGDPRRequired: true,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
} 