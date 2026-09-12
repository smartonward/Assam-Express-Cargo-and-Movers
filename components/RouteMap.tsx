"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, DirectionsRenderer, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '460px',
  borderRadius: '20px'
};

const guwahati = { lat: 26.1445, lng: 91.7362 };
const pune = { lat: 18.5204, lng: 73.8567 };

const center = {
  lat: (guwahati.lat + pune.lat) / 2,
  lng: (guwahati.lng + pune.lng) / 2
};

const mapStyles = [
  { "elementType": "geometry", "stylers": [{ "color": "#0A0F2B" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#8695AC" }] },
  { "elementType": "labels.text.stroke", "stylers": [{ "color": "#0A0F2B" }] },
  { "featureType": "administrative.locality", "elementType": "labels.text.fill", "stylers": [{ "color": "#8695AC" }] },
  { "featureType": "poi", "stylers": [{ "visibility": "off" }] },
  { "featureType": "transit", "stylers": [{ "visibility": "off" }] },
  { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#132449" }] },
  { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#132449" }] },
  { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#8695AC" }] },
  { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#132449" }] },
  { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#132449" }] },
  { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#8695AC" }] },
  { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#071022" }] },
  { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#4FB8D6" }] },
  { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#071022" }] }
];

export default function RouteMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  });

  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchDirections = useCallback(() => {
    if (!window.google) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: guwahati,
        destination: pune,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK && result) {
          setDirections(result);
        } else {
          setError("Error: Could not load route directions.");
        }
      }
    );
  }, []);

  useEffect(() => {
    if (isLoaded) {
      fetchDirections();
    }
  }, [isLoaded, fetchDirections]);

  if (!isLoaded) {
    return (
      <div style={{ ...containerStyle, backgroundColor: '#0A0F2B', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(79, 184, 214, 0.2)' }}>
        <p style={{ color: '#4FB8D6', fontSize: '14px', fontWeight: 'bold' }}>Loading map...</p>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '460px' }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
          backgroundColor: '#0A0F2B'
        }}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              suppressMarkers: true,
              polylineOptions: {
                strokeColor: '#4FB8D6',
                strokeWeight: 4,
                strokeOpacity: 0.8
              }
            }}
          />
        )}
        
        <Marker position={guwahati} label={{ text: "Guwahati", color: "#FFFFFF", fontWeight: "bold", fontSize: "14px" }} />
        <Marker position={pune} label={{ text: "Pune", color: "#FFFFFF", fontWeight: "bold", fontSize: "14px" }} />
      </GoogleMap>

      {error && (
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: '#c81e2c', backgroundColor: 'rgba(10, 15, 43, 0.9)', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', border: '1px solid #c81e2c' }}>
          {error}
        </div>
      )}
    </div>
  );
}
