import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import '../styles/mapView.css';

export default function MapView() {
  const mapRef = useRef(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GoogleMapsAPI;

    const loader = new Loader({
      apiKey,
      version: 'weekly',
    });

    loader.load().then(() => {
      if (!navigator.geolocation) {
        console.error("Geolocation is not supported.");
        return;
      }

      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat, lng },
          zoom: 15,
          streetViewControl: false, 
          mapTypeControl: false,
        });

        new window.google.maps.Marker({
          position: { lat, lng },
          map: map,
        });
      }, (err) => {
        console.error("Error getting location:", err);
      });
    }).catch((e) => {
      console.error("Error loading Google Maps:", e);
    });
  }, []);

  return <div className="map-container" ref={mapRef} />;
}