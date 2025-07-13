import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import '../styles/mapView.css';

export default function AddressMap({ userLocation, addresses = [], onMapClick }) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null); 

  useEffect(() => {
    if (!userLocation) return;

    const apiKey = import.meta.env.VITE_GoogleMapsAPI;

    const loader = new Loader({
      apiKey,
      version: 'weekly',
    });

    loader.load().then(() => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: userLocation,
        zoom: 13,
        streetViewControl: false,
        mapTypeControl: false,
      });

      mapInstance.current = map;

      new window.google.maps.Marker({
        position: userLocation,
        map,
        title: 'Tu ubicación',
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
        },
      });

      const geocoder = new window.google.maps.Geocoder();

      addresses.forEach(({ title, details }) => {
        geocoder.geocode({ address: details }, (results, status) => {
          if (status === 'OK' && results[0]) {
            new window.google.maps.Marker({
              map,
              position: results[0].geometry.location,
              title,
            });
          }
        });
      });

      map.addListener("click", (e) => {
        const clickedLatLng = e.latLng;

        geocoder.geocode({ location: clickedLatLng }, (results, status) => {
          if (status === 'OK' && results[0]) {
            const address = results[0].formatted_address;
            if (onMapClick) {
              onMapClick({ lat: clickedLatLng.lat(), lng: clickedLatLng.lng() }, address);
            }

            new window.google.maps.Marker({
              position: clickedLatLng,
              map,
              title: address,
            });
          }
        });
      });
    });
  }, [userLocation, addresses, onMapClick]);

  return (
    <div
      ref={mapRef}
      className="map-container"
      style={{ marginTop: '30px', borderRadius: '12px', height: '400px' }}
    />
  );
}