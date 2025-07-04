import  { useEffect, useRef } from 'react';
import '../styles/mapView.css';

export default function MapView() {
  const mapRef = useRef(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GoogleMapsAPI;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.6037, lng: -58.3816 },
        zoom: 10,
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="map-container" ref={mapRef} />
  );
}