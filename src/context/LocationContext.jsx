import  { createContext, useState, useEffect } from 'react';
import '../styles/home.css'

export const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [userLocation, setUserLocation] = useState(null);
  const [showLocationPrompt, setShowLocationPrompt] = useState(() => {
    return localStorage.getItem('locationRequested') !== 'true';
  });
  const [locationError, setLocationError] = useState(null);
  const [locationReady, setLocationReady] = useState(false); // ✅ ESTA ES LA LÍNEA CLAVE

  const addresses = [
    { title: 'Casa', details: 'Av. Siempre Viva 742' },
    { title: 'Trabajo', details: 'Calle Falsa 123' },
  ];

  const requestLocation = () => {
    setLocationError(null);

    if (!navigator.geolocation) {
      const errorMsg = "Tu navegador no soporta geolocalización.";
      console.error(errorMsg);
      setLocationError(errorMsg);
      setLocationReady(true); // ✅ importante
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        localStorage.setItem('locationRequested', 'true');
        setShowLocationPrompt(false);
        setLocationReady(true);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setLocationError("Has bloqueado el permiso de ubicación. Debes activarlo manualmente en la configuración de tu navegador.");
          localStorage.removeItem('locationRequested');
        } else {
          setLocationError("No pudimos acceder a tu ubicación. Verifica los permisos o activa tu GPS.");
        }
        setLocationReady(true);
      }
    );
  };

  useEffect(() => {
    const alreadyRequested = localStorage.getItem('locationRequested') === 'true';
    if (alreadyRequested && !userLocation) {
      navigator.permissions?.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          requestLocation();
        } else if (result.state === 'prompt') {
          setShowLocationPrompt(true);
        }
        setLocationReady(true); // ✅
      });
    } else {
      setLocationReady(true); // ✅
    }
  }, []);

return (
  <LocationContext.Provider value={{
    userLocation,
    addresses,
    showLocationPrompt,
    requestLocation,
    locationError,
    locationReady,
  }}>
    {showLocationPrompt && !userLocation ? (
      <div className="location-modal-backdrop">
        <div className="location-modal">
          <h2>Permiso de ubicación</h2>
          <p>Para poder utilizar nuestros servicios es importante que nos permita acceder a su ubicación.</p>

          <div key={locationError ? 'error' : 'initial'}>
            {locationError ? (
              <>
                <p className="location-error-text">{locationError}</p>
                <button onClick={requestLocation} className="location-retry-button">Volver a intentar</button>
              </>
            ) : (
              <button onClick={requestLocation} className="location-button">Permitir acceso</button>
            )}
          </div>
        </div>
      </div>
    ) : (
      children
    )}
  </LocationContext.Provider>
 );
};