import { countries, type Country } from "./country-database"

// Convert Country type to the CountryData interface expected by the game
export interface CountryData {
  id: string
  name: string
  code: string
  region: string
  capital: string
  population: number
  latitude: number
  longitude: number
  flagUrl: string
}

export async function getCountries(): Promise<CountryData[]> {
  // Convert Country objects to CountryData format
  return countries.map(
    (country: Country): CountryData => ({
      id: country.id,
      name: country.name,
      code: country.code,
      region: country.region,
      capital: country.capital,
      population: country.population,
      latitude: country.coordinates.lat,
      longitude: country.coordinates.lng,
      flagUrl: country.flagUrl,
    }),
  )
}

export function getTodaysCountry(): CountryData {
  // For now, return a random country based on the current date
  // This ensures the same country appears for all users on the same day
  const today = new Date()
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24),
  )
  const countryIndex = dayOfYear % countries.length

  const country = countries[countryIndex]
  return {
    id: country.id,
    name: country.name,
    code: country.code,
    region: country.region,
    capital: country.capital,
    population: country.population,
    latitude: country.coordinates.lat,
    longitude: country.coordinates.lng,
    flagUrl: country.flagUrl,
  }
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Radius of the Earth in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c // Distance in kilometers
  return Math.round(distance)
}
