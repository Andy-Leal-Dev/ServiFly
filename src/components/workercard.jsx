import { useNavigate } from 'react-router-dom';
import '../styles/workercard.css';

export default function WorkerCard({ name, category }) {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/perfil', {
      state: {
        name,
        category
      }
    });
  };

  return (
    <div className="worker-card">
      <div className="worker-info">
        <h4 className="worker-category">{category}</h4>
        <p className="worker-name">{name}</p>
      </div>
      <button className="contact-button" onClick={handleContactClick}>
        Contactar
      </button>
    </div>
  );
}
