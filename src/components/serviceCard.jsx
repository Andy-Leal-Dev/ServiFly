import { useNavigate } from 'react-router-dom';
import '../styles/ServiceCard.css';

export default function ServiceCard({name, title, provider, price, status,category }) {
   const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/proPerfil', {
      state: {
        name,
        category
      }
    });
  };

  return (
    
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <p className="service-provider">{provider}</p>
      <p className="service-price">{price}</p>
      {status && <span className="status-badge">{status}</span>}
      <button className="contact-button" onClick={handleContactClick}>
        Contactar
      </button>
    </div>
  );
}