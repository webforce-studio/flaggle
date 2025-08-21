"use client"

import { memo } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

type Props = {
  lat: number
  lng: number
  zoomFactor?: number // 1.0 world view; 1.5 ~50% zoom-in
}

// Natural Earth 110m topojson from react-simple-maps CDN
const WORLD_TOPOJSON = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

function WorldMapWithMarkerBase({ lat, lng, zoomFactor = 3.5 }: Props) {
  const baseScale = 150
  const scale = baseScale * zoomFactor
  return (
    <div className="w-full rounded-md ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden bg-white dark:bg-gray-900">
      <div className="aspect-[2/1] w-full">
        <ComposableMap projectionConfig={{ scale, center: [lng, lat] }} width={980} height={490} style={{ width: "100%", height: "100%" }}>
        <Geographies geography={WORLD_TOPOJSON}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#E5E7EB", stroke: "#9CA3AF", strokeWidth: 0.4 },
                  hover: { fill: "#D1D5DB", stroke: "#9CA3AF", strokeWidth: 0.4 },
                  pressed: { fill: "#D1D5DB", stroke: "#9CA3AF", strokeWidth: 0.4 },
                }}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[lng, lat]}>
          <circle r={4} fill="#ef4444" stroke="#ffffff" strokeWidth={1.5} />
        </Marker>
        </ComposableMap>
      </div>
    </div>
  )
}

export const WorldMapWithMarker = memo(WorldMapWithMarkerBase)


