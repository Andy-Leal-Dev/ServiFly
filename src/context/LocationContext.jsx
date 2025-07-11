import React, { createContext, useState, useEffect } from 'react';

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [userLocation, setUserLocation] = useState(null);
  const [addresses, setAddresses] = useState([
    { title: 'Casa', details: 'Av. Siempre Viva 742' },
    { title: 'Trabajo', details: 'Calle Falsa 123' },
    // pon aquí tus direcciones
  ]);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Error getting location:", err.code, err.message);
      }
    );
  }, []);

  return (
    <LocationContext.Provider value={{ userLocation, addresses }}>
      {children}
    </LocationContext.Provider>
  );
}