import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import Sidebar from '../components/sidebard';
import logo from '../assets/img/logo.png';
import '../styles/Reviews.css';

const reviews = [
  {
    name: 'Carlos Pérez',
    date: '2024-06-01',
    rating: 5,
    comment: 'Excelente servicio, muy profesional y puntual.',
    response: '¡Gracias Carlos! Fue un placer ayudarte.',
    photo: null,
  },
  {
    name: 'María López',
    date: '2024-05-28',
    rating: 4,
    comment: 'Buen trabajo, aunque llegó un poco tarde.',
    response: null,
    photo: null,
  },
  {
    name: 'Juan García',
    date: '2024-05-20',
    rating: 3,
    comment: 'El trabajo fue aceptable, pero esperaba más detalles.',
    response: null,
    photo: null,
  },
  {
    name: 'Ana Torres',
    date: '2024-05-15',
    rating: 5,
    comment: '¡Muy recomendable! Amable y eficiente.',
    response: 'Gracias Ana por tu confianza!',
    photo: null,
  }
];

export default function ReviewsPage() {
    const [collapsed, setCollapsed] = useState(false);
     const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  return (
     <div className="nav-container">
      {/* 🔵 NAV */}
      <header className="nav-header">
        <div className="nav-logo-container">
          <img src={logo} alt="ServiFly Logo" />
        </div>

        <div className="nav-icons-profile">
          <FaBell className="icon-header" aria-label="Notificaciones" />
          <Link to="/Chat">
            <FaEnvelope className="icon-header" aria-label="Mensajes" />
          </Link>
          <span className="orders-text">Órdenes</span>
        </div>
      </header>

      {/* 🔵 SIDEBAR + MAIN */}
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

      <main
        className="dashboard-main"
        style={{
          marginLeft: collapsed,
          transition: 'margin-left 0.3s ease',
          padding: 0,
        }}
      >
    <div style={{ padding: '130px 20px', backgroundColor:'#f2f2f2' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#01403A' }}>Reseñas de Clientes</h1>
      {reviews.map((r, i) => (
        <ReviewCard key={i} review={r} />
      ))}
    </div>
    </main>
    </div>
  );
}