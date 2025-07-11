import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import '../styles/HiringForm.css';

export default function HiringForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    location: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí podrías enviar los datos a una API
  };

  return (
    <div className="hiring-form-container">
      {/* Encabezado */}
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Regresar
        </button>
        <h2>Solicitar Servicio</h2>
      </div>

      {/* Perfil Profesional */}
      <div className="professional-summary">
        <img
          src="/path/to/user/photo.jpg"
          alt="Juan Pérez"
          className="profile-photo"
        />
        <div>
          <h3>Juan Pérez</h3>
          <p className="category">Plomero, Electricista</p>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color={i < 4.8 ? '#FFD700' : '#ccc'} />
            ))}
            <span className="rating-value">4.8</span>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <form className="service-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha del servicio</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Hora del servicio</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ubicación del servicio</label>
          <input
            type="text"
            name="location"
            placeholder="Dirección exacta donde se realizará el trabajo"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Notas adicionales</label>
          <textarea
            name="notes"
            placeholder="Describe detalles específicos del trabajo requerido"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Confirmar Solicitud
        </button>
      </form>
    </div>
  );
}