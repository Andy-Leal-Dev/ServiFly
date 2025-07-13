import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import Sidebar from '../components/sidebard';
import logo from '../assets/img/logo.png';
import '../styles/Favoritos.css';

const users = [
  {
    id: 1,
    name: "Juan Pérez",
    roles: "Plomero, Electricista",
    rating: 4.8,
    distance: "2.5 km",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    online: true,
  },
  {
    id: 2,
    name: "Ana Gómez",
    roles: "Electricista",
    rating: 4.5,
    distance: "1.0 km",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    online: true,
  },
  {
    id: 3,
    name: "Lucía Torres",
    roles: "Jardinero",
    rating: 4.9,
    distance: "1.2 km",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    online: false,
  },
];

export default function FavoritosPage() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(prev => !prev);

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
          marginLeft: collapsed ? "80px" : "250px",
          transition: 'margin-left 0.3s ease',
          padding: 0,
          backgroundColor: '#f2f2f2'
        }}
      >
        <div style={{ padding: '130px 20px', backgroundColor: '#f2f2f2' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#01403A' }}>Mis Favoritos</h1>
          {users.map(user => (
            <div key={user.id} className="favorite-card">
              <div className="left">
                <div className="avatar-container">
                  {user.photo ? (
                    <img className="avatar" src={user.photo} alt={user.name} />
                  ) : (
                    <div className="avatar-placeholder"></div>
                  )}
                  <span
                    className={`status-dot ${user.online ? "online" : "offline"}`}
                  />
                </div>
                <div className="info">
                  <h2>{user.name}</h2>
                  <p>{user.roles}</p>
                  <div className="details">
                    <span className="star">⭐ {user.rating}</span>
                    <span className="location">📍 {user.distance}</span>
                  </div>
                </div>
              </div>
              <div className="right">
                <span className="heart">❤️</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}