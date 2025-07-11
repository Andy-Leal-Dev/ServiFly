import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import '../styles/mapView.css';

export default function MapView({ userLocation }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!userLocation) return;

    const apiKey = import.meta.env.VITE_GoogleMapsAPI;

    const loader = new Loader({
      apiKey,
      version: 'weekly',
    });

    loader.load().then(() => {
      const { lat, lng } = userLocation;

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 15,
        streetViewControl: false,
        mapTypeControl: false,
      });

      new window.google.maps.Marker({
        position: { lat, lng },
        map,
      });
    }).catch(e => {
      console.error("Error loading Google Maps:", e);
    });
  }, [userLocation]);

  return <div className="map-container" ref={mapRef} style={{ height: '300px' }} />;
}
