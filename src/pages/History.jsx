import  { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/serviceCard';
import Sidebar from '../components/sidebard';
import { FaBell, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/img/logo.png';
import '../styles/History.css';

const serviceHistory = [
  {
    id: 1,
    title: 'Desarrollo Web',
    provider: 'Jhon Doe',
    price: '50$',
    status: 'Finalizado',
  },
  {
    id: 2,
    title: 'Electricidad',
    provider: 'Laura Sánchez',
    price: '60$',
    status: 'En proceso',
  },
  {
    id: 3,
    title: 'Fontanería',
    provider: 'Pedro Gómez',
    price: '45$',
    status: 'Finalizado',
  },
];

export default function History() {
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
          padding: 0
        }}
      >
    <div className="history-container">
      <h1 className="history-title">Historial de Servicios</h1>

      <div className="history-list">
        {serviceHistory.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            provider={service.provider}
            price={service.price}
            status={service.status}
          />
        ))}
      </div>
    </div>
    </main>
   </div>
  );
}