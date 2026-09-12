"use client";

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = L.divIcon({
  className: 'custom-marker',
  html: '<div style="width: 14px; height: 14px; background-color: #4FB8D6; border: 2px solid #FFF; border-radius: 50%; box-shadow: 0 0 4px rgba(0,0,0,0.5);"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7]
});

const waypoints = [
  { name: 'Pune, Maharashtra', coords: [18.5204, 73.8567] as [number, number] },
  { name: 'Nashik, Maharashtra', coords: [20.0110, 73.7909] as [number, number] },
  { name: 'Indore, Madhya Pradesh', coords: [22.7196, 75.8577] as [number, number] },
  { name: 'Bhopal, Madhya Pradesh', coords: [23.2599, 77.4126] as [number, number] },
  { name: 'Jhansi, Uttar Pradesh', coords: [25.4484, 78.5685] as [number, number] },
  { name: 'Kanpur, Uttar Pradesh', coords: [26.4499, 80.3319] as [number, number] },
  { name: 'Lucknow, Uttar Pradesh', coords: [26.8467, 80.9462] as [number, number] },
  { name: 'Gorakhpur, Uttar Pradesh', coords: [26.7606, 83.3732] as [number, number] },
  { name: 'Siliguri, West Bengal', coords: [26.7271, 88.3953] as [number, number] },
  { name: 'Guwahati, Assam', coords: [26.1445, 91.7362] as [number, number] }
];

export default function RouteMapFree() {
  const [route, setRoute] = useState<[number, number][]>(waypoints.map(w => w.coords));

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const waypointsStr = waypoints.map(wp => `${wp.coords[1]},${wp.coords[0]}`).join(';');
        const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${waypointsStr}?overview=full&geometries=geojson`);
        const data = await response.json();
        
        if (data.routes && data.routes.length > 0) {
          const coordinates = data.routes[0].geometry.coordinates;
          const latLngs: [number, number][] = coordinates.map((coord: number[]) => [coord[1], coord[0]]);
          setRoute(latLngs);
        }
      } catch (error) {
        console.error("Failed to fetch route from OSRM, falling back to straight line.", error);
      }
    };
    
    fetchRoute();
  }, []);

  return (
    <div style={{ width: '100%', height: '460px', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(79, 184, 214, 0.2)' }}>
      <MapContainer 
        center={[23.5, 82]} 
        zoom={5} 
        scrollWheelZoom={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={route} pathOptions={{ color: '#4FB8D6', weight: 4 }} />
        {waypoints.map((wp, i) => (
          <Marker key={i} position={wp.coords} icon={customIcon}>
            <Popup>{wp.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
