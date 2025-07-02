// components/IndiaBranchesMap.js
'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

const branches = [
  { name: 'Kolkata HQ', state: 'West Bengal', lat: 22.5205, lng: 88.3666 },
  { name: 'Haridwar', state: 'Uttarakhand', lat: 29.9457, lng: 78.1642 },
  { name: 'Gaya', state: 'Bihar', lat: 24.7969, lng: 85.0002 },
  { name: 'Delhi Branch', state: 'Delhi', lat: 28.6139, lng: 77.2090 },
  { name: 'Mumbai', state: 'Maharashtra', lat: 19.0760, lng: 72.8777 },
  { name: 'Rameswaram', state: 'Tamil Nadu', lat: 9.2876, lng: 79.3129 },
  { name: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lng: 72.5714 },
  { name: 'Bhubaneswar', state: 'Odisha', lat: 20.2961, lng: 85.8245 },
  { name: 'Shillong', state: 'Meghalaya', lat: 25.5788, lng: 91.8933 },
  { name: 'Port Blair', state: 'Andaman & Nicobar', lat: 11.6234, lng: 92.7265 },
];

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function IndiaBranchesMap() {
  useEffect(() => {
    // Required to fix icon issue with Leaflet in Next.js
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[22.5, 80]}
        zoom={5}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {branches.map((branch, index) => (
          <Marker
            key={index}
            position={[branch.lat, branch.lng]}
            icon={customIcon}
          >
            <Popup>
              <strong>{branch.name}</strong>
              <br />
              {branch.state}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
