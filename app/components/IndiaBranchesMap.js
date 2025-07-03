// components/IndiaBranchesMap.js
'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

const branches = [
  { name: 'Agartala', state: 'Tripura', lat: 23.8315, lng: 91.2868 },
  { name: 'Ahmedabad', state: 'Gujarat', lat: 23.0225, lng: 72.5714 },
  { name: 'Ajodhya', state: 'Uttar Pradesh', lat: 26.7994, lng: 82.2041 },
  { name: 'Allahabad (Prayagraj)', state: 'Uttar Pradesh', lat: 25.4358, lng: 81.8463 },
  { name: 'Amarkantak', state: 'Madhya Pradesh', lat: 22.6759, lng: 81.7512 },
  { name: 'Andaman (Port Blair)', state: 'Andaman & Nicobar', lat: 11.6234, lng: 92.7265 },
  { name: 'Aurangabad', state: 'Maharashtra', lat: 19.8762, lng: 75.3433 },
  { name: 'Badrinath', state: 'Uttarakhand', lat: 30.7433, lng: 79.4930 },
  { name: 'Balurghat', state: 'West Bengal', lat: 25.2570, lng: 88.7773 },
  { name: 'Bangalore', state: 'Karnataka', lat: 12.9716, lng: 77.5946 },
  { name: 'Bankura', state: 'West Bengal', lat: 23.2325, lng: 87.0736 },
  { name: 'Baroda (Vadodara)', state: 'Gujarat', lat: 22.3072, lng: 73.1812 },
  { name: 'Barrackpore', state: 'West Bengal', lat: 22.7660, lng: 88.3704 },
  { name: 'Beldanga', state: 'West Bengal', lat: 23.9337, lng: 88.2500 },
  { name: 'Berhampore', state: 'West Bengal', lat: 24.0984, lng: 88.2670 },
  { name: 'Bhopal', state: 'Madhya Pradesh', lat: 23.2599, lng: 77.4126 },
  { name: 'Bolpur', state: 'West Bengal', lat: 23.6688, lng: 87.6853 },
  { name: 'Bongaon', state: 'West Bengal', lat: 23.0700, lng: 88.8200 },
  { name: 'Burdwan', state: 'West Bengal', lat: 23.2324, lng: 87.8615 },
  { name: 'Chennai', state: 'Tamil Nadu', lat: 13.0827, lng: 80.2707 },
  { name: 'Dediapara', state: 'Gujarat', lat: 20.7000, lng: 72.9333 },
  { name: 'Deoghar', state: 'Jharkhand', lat: 24.4826, lng: 86.6941 },
  { name: 'Ranchi', state: 'Jharkhand', lat: 23.3441, lng: 85.3096 },
  { name: 'Diamond Harbour', state: 'West Bengal', lat: 22.1916, lng: 88.1893 },
  { name: 'Dimapur', state: 'Nagaland', lat: 25.9045, lng: 93.7257 },
  { name: 'Dokra', state: 'Jharkhand', lat: 24.3500, lng: 85.3833 },
  { name: 'Durgapur', state: 'West Bengal', lat: 23.5204, lng: 87.3119 },
  { name: 'Dwarka', state: 'Gujarat', lat: 22.2394, lng: 68.9678 },
  { name: 'Farakka', state: 'West Bengal', lat: 24.8020, lng: 87.9150 },
  { name: 'Gangasagar', state: 'West Bengal', lat: 21.6536, lng: 88.0534 },
  { name: 'Garia', state: 'West Bengal', lat: 22.4651, lng: 88.4029 },
  { name: 'Gaya', state: 'Bihar', lat: 24.7969, lng: 85.0002 },
  { name: 'Ghatshila', state: 'Jharkhand', lat: 22.5852, lng: 86.4777 },
  { name: 'Gorakhpur', state: 'Uttar Pradesh', lat: 26.7606, lng: 83.3732 },
  { name: 'Guwahati', state: 'Assam', lat: 26.1445, lng: 91.7362 },
  { name: 'Haridwar', state: 'Uttarakhand', lat: 29.9457, lng: 78.1642 },
  { name: 'Hyderabad', state: 'Telangana', lat: 17.3850, lng: 78.4867 },
  { name: 'Jabalpur', state: 'Madhya Pradesh', lat: 23.1815, lng: 79.9864 },
  { name: 'Jalpaiguri', state: 'West Bengal', lat: 26.5161, lng: 88.7195 },
  { name: 'Jammu', state: 'Jammu and Kashmir', lat: 32.7266, lng: 74.8570 },
  { name: 'Jhargram', state: 'West Bengal', lat: 22.4522, lng: 86.9947 },
  { name: 'Joka', state: 'West Bengal', lat: 22.4518, lng: 88.2965 },
  { name: 'Kakdwip', state: 'West Bengal', lat: 21.8779, lng: 88.1838 },
  { name: 'Kalol', state: 'Gujarat', lat: 23.2500, lng: 72.5000 },
  { name: 'Kanyakumari', state: 'Tamil Nadu', lat: 8.0883, lng: 77.5385 },
  { name: 'Khatra', state: 'West Bengal', lat: 22.9796, lng: 86.8518 },
  { name: 'Kurukshetra', state: 'Haryana', lat: 29.9695, lng: 76.8783 },
  { name: 'Lumding', state: 'Assam', lat: 25.7495, lng: 93.1704 },
  { name: 'Mumbai', state: 'Maharashtra', lat: 19.0760, lng: 72.8777 },
  { name: 'New Delhi', state: 'Delhi', lat: 28.6139, lng: 77.2090 },
  { name: 'Puri', state: 'Odisha', lat: 19.8135, lng: 85.8312 },
  { name: 'Raipur', state: 'Chhattisgarh', lat: 21.2514, lng: 81.6296 },
  { name: 'Rameswaram', state: 'Tamil Nadu', lat: 9.2876, lng: 79.3129 },
  { name: 'Shillong', state: 'Meghalaya', lat: 25.5788, lng: 91.8933 },
  { name: 'Silchar', state: 'Assam', lat: 24.8270, lng: 92.7979 },
  { name: 'Siliguri', state: 'West Bengal', lat: 26.7271, lng: 88.3953 },
  { name: 'Somnath', state: 'Gujarat', lat: 20.8880, lng: 70.4012 },
  { name: 'Surat', state: 'Gujarat', lat: 21.1702, lng: 72.8311 },
  { name: 'Thiruvananthapuram', state: 'Kerala', lat: 8.5241, lng: 76.9366 },
  { name: 'Varanasi', state: 'Uttar Pradesh', lat: 25.3176, lng: 82.9739 },
  { name: 'Vrindavan', state: 'Uttar Pradesh', lat: 27.5806, lng: 77.7000 },
];

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function IndiaBranchesMap() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={[22.5, 80]}
        zoom={5}
        scrollWheelZoom={false}
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
