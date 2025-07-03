"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

// List of sample BSS branches worldwide with lat/lng and info
const branches = [
  // India (some major)
  { name: "Kolkata HQ", country: "India", lat: 22.5726, lng: 88.3639 },
  { name: "Haridwar Branch", country: "India", lat: 29.9457, lng: 78.1642 },
  { name: "Mumbai Branch", country: "India", lat: 19.076, lng: 72.8777 },
  { name: "Delhi Branch", country: "India", lat: 28.6139, lng: 77.209 },
  { name: "Chennai Branch", country: "India", lat: 13.0827, lng: 80.2707 },

  // Bangladesh
  { name: "Dhaka Branch", country: "Bangladesh", lat: 23.8103, lng: 90.4125 },

  // Nepal
  { name: "Kathmandu Branch", country: "Nepal", lat: 27.7172, lng: 85.324 },

  // USA
  { name: "New York Branch", country: "USA", lat: 40.7128, lng: -74.006 },
  { name: "Chicago Branch", country: "USA", lat: 41.8781, lng: -87.6298 },

  // Canada
  { name: "Toronto Branch", country: "Canada", lat: 43.6532, lng: -79.3832 },

  // UK
  {
    name: "London Branch",
    country: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
  },

  // Fiji
  { name: "Suva Branch", country: "Fiji", lat: -18.1248, lng: 178.4501 },

  // Guyana
  { name: "Georgetown Branch", country: "Guyana", lat: 6.8013, lng: -58.1553 },

  // Trinidad & Tobago
  {
    name: "Port of Spain Branch",
    country: "Trinidad and Tobago",
    lat: 10.6918,
    lng: -61.2225,
  },
];

// Fix for default leaflet marker icons in Next.js environment
function useLeafletIconFix() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    });
  }, []);
}

export default function WorldBranchesMap() {
  useLeafletIconFix();

  return (


    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        minZoom={2}
        maxZoom={7}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {branches.map(({ name, country, lat, lng }, idx) => (
          <Marker key={idx} position={[lat, lng]}>
            <Popup>
              <div>
                <strong>{name}</strong> <br />
                {country}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>

  );
}
