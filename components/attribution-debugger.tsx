// This is a new file to debug attribution issues
export function AttributionDebugger({
  monument,
}: {
  monument: {
    name: string
    attribution: {
      source: string
      photographer: string
      photographerUrl: string
    }
  }
}) {
  return (
    <div className="bg-yellow-100 p-4 rounded-md my-4 text-sm">
      <h3 className="font-bold">Attribution Debug</h3>
      <p>Monument: {monument.name}</p>
      <p>Source in database: {monument.attribution.source}</p>
      <p>Photographer: {monument.attribution.photographer}</p>
      <p>Photographer URL: {monument.attribution.photographerUrl}</p>
    </div>
  )
}
