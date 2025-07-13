import { FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/LocationLoading.css'; 

export default function LocationLoading({ message = "Solicitando acceso a tu ubicación...", onRetry }) {
  return (
    <div className="location-loading-container">
      <FaMapMarkerAlt className="location-icon" />
      <p>{message}</p>
      <div className="spinner" />
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Volver a intentar
        </button>
      )}
    </div>
  );
}