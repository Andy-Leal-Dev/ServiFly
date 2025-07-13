import  { useState } from 'react';
import { useLocation,Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaStar, FaFilter, FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import Sidebar from '../components/sidebard';
import logo from '../assets/img/logo.png'; // Ajusta la ruta si es diferente
import '../styles/ProfessionalProfile.css';

const reviews = [
  {
    id: 1,
    name: 'María López',
    rating: 5,
    comment: 'Excelente trabajo, muy profesional y puntual. Solucionó mi problema rápidamente.',
    timeAgo: 'Hace 2 semanas',
    avatar: '/path/to/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Carlos Mendoza',
    rating: 4,
    comment: 'Buen servicio, aunque llegó un poco tarde. El trabajo final fue de calidad.',
    timeAgo: 'Hace 1 mes',
    avatar: '/path/to/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Laura Sánchez',
    rating: 5,
    comment: 'Lo mejor que he contratado. Muy detallista y limpio en su trabajo. Lo recomiendo 100%.',
    timeAgo: 'Hace 3 meses',
    avatar: '/path/to/avatar3.jpg'
  }
];

export default function ProfessionalProfile() {
  const location = useLocation();
  const data = location.state || {};

  const {
    name = 'Juan Pérez',
    category = 'Plomero, Electricista',
    rating = 4.8,
    photo = null,
    distance = '2.5 km',
    payment = 'Efectivo, Transferencia',
    availability = 'Disponible'
  } = data;

  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);

  const userPhotoUrl = '/path/to/user/photo.jpg'; // Actualiza esta ruta si es necesario

  return (
    <div className="dashboard-container">
      {/* Header superior */}
      <header className="dashboard-header">
        <div className="logo-container">
          <img src={logo} alt="ServiFly Logo" />
        </div>

        <div className="search-bar-container">
          <div className="search-bar">
            <FaSearch className="icon-search" aria-label="Buscar" />
            <input type="text" placeholder="Busquemos un servicio..." />
          </div>
        </div>

        <div className="header-icons-profile">
          <FaBell className="icon-header" aria-label="Notificaciones" />
          <FaEnvelope className="icon-header" aria-label="Mensajes" />
          <span className="orders-text">Órdenes</span>
          <div className="profile-circle">
            <img src={userPhotoUrl} alt="Foto de perfil" />
          </div>
        </div>
      </header>

      {/* Sidebar + contenido */}
      <div className="dashboard-content">
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

        <main className="dashboard-main" style={{ marginLeft: collapsed }}>
          <div className="filter-bar">
            <FaFilter className="filter-icon" title="Filtrar categorías" />
            {['Electricidad', 'Software', 'Fontanería', 'Jardinería'].map((cat) => (
              <button key={cat} className="filter-button">{cat}</button>
            ))}
          </div>

          <div className="professional-profile-container">
            <div className="profile-card">
              <div className="profile-header">
                <div className="profile-image">
                  {photo ? <img src={photo} alt={name} /> : <div className="placeholder-image" />}
                </div>
                <div className="profile-info">
                  <h2>{name}</h2>
                  <p className="specialties">{category}</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color={i < Math.round(rating) ? '#FFD700' : '#ccc'} />
                    ))}
                    <span className="rating-value">{rating}</span>
                  </div>
                  <div className="info-tags">
                    <span><FaMapMarkerAlt /> {distance}</span>
                    <span><FaMoneyBillWave /> {payment}</span>
                    <span><FaClock /> {availability}</span>
                  </div>
                  <Link to="/Chat" style={{ textDecoration: 'none' }}>
                  <button className="contact-button">Contactar Profesional</button>
                  </Link>
                  <Link to="/HiringForm" style={{ textDecoration: 'none' }}>
                  <button className="contact-button hire-button">Contratar Profesional</button>
                  </Link>
                </div>
              </div>

              <div className="profile-details">
                <h3>Servicios Ofrecidos</h3>
                <p>Especialista en reparaciones del hogar.</p>
                <p><strong>Oficios:</strong> {category}</p>

                <div className="service-tags">
                  <span>Reparaciones</span>
                  <span>Instalaciones</span>
                  <span>Mantenimiento</span>
                  <span>Asesoría</span>
                </div>

                <p><strong>Experiencia:</strong> 10 años de experiencia en servicios generales.</p>
                <p><strong>Educación:</strong> Técnico Superior en Mantenimiento</p>
                <p><strong>Certificaciones:</strong> Certificado en plomería y electricidad</p>
                <p><strong>Tarifa por hora:</strong> $15.0</p>
                <p><strong>Disponibilidad:</strong> Lunes a Viernes, 8am – 6pm</p>
              </div>

              <div className="reviews-section">
                <h3>Reseñas ({reviews.length})</h3>
                {reviews.map(review => (
                  <div key={review.id} className="review">
                    <img src={review.avatar} alt={review.name} className="avatar" />
                    <div className="review-content">
                      <strong>{review.name}</strong>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color={i < review.rating ? '#FFD700' : '#ccc'} />
                        ))}
                      </div>
                      <p>{review.comment}</p>
                      <span className="time-ago">{review.timeAgo}</span>
                    </div>
                  </div>
                ))}
                <div className="view-all-reviews">
                  <a href="#" className="view-all">Ver todas las reseñas</a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
