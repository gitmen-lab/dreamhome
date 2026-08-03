"use client";

import { useMemo } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cities } from "@/data/cities";
import { cityLabel } from "@/lib/helpers";

const BRAND_BLUE = "#0a5adb";

const cityIcon = L.divIcon({
  className: "",
  html: `<span style="display:block;width:14px;height:14px;border-radius:9999px;background:${BRAND_BLUE};border:2px solid white;box-shadow:0 0 0 1px rgba(0,0,0,0.2)"></span>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

/** Monotone-chain convex hull, used to draw an approximate service-area outline. */
function convexHull(points: [number, number][]): [number, number][] {
  const pts = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o: [number, number], a: [number, number], b: [number, number]) =>
    (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);

  const lower: [number, number][] = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) {
      lower.pop();
    }
    lower.push(p);
  }

  const upper: [number, number][] = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) {
      upper.pop();
    }
    upper.push(p);
  }

  upper.pop();
  lower.pop();
  return [...lower, ...upper];
}

export default function ServiceAreaMapInner() {
  const points = useMemo<[number, number][]>(
    () => cities.map((c) => [c.coordinates.lat, c.coordinates.lng]),
    []
  );
  const hull = useMemo(() => convexHull(points), [points]);
  const bounds = useMemo(() => L.latLngBounds(points), [points]);

  return (
    <div className="h-[480px] w-full overflow-hidden rounded-lg border shadow-sm">
      <MapContainer
        bounds={bounds}
        boundsOptions={{ padding: [32, 32] }}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon
          positions={hull}
          pathOptions={{
            color: BRAND_BLUE,
            weight: 2,
            dashArray: "6 6",
            fillColor: BRAND_BLUE,
            fillOpacity: 0.06,
          }}
        />
        {cities.map((city) => (
          <Marker
            key={city.slug}
            position={[city.coordinates.lat, city.coordinates.lng]}
            icon={cityIcon}
          >
            <Popup maxWidth={220} minWidth={180} autoPanPadding={[16, 16]}>
              <div className="text-sm">
                <p className="font-semibold text-charcoal">{cityLabel(city)}</p>
                <p className="text-xs text-muted-foreground">{city.county}</p>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="mt-1 inline-block text-xs font-semibold text-primary underline"
                >
                  View services in {city.city} &rarr;
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
