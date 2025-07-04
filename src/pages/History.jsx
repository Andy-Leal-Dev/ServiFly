import  { useState } from 'react';
import '../styles/History.css';
import ServiceCard from '../components/serviceCard';
import Sidebar from '../components/sidebard';

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
     <div className="dashboard-container">
              <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        
              <main
                className="dashboard-main"
                style={{
                  marginLeft: collapsed ? '70px' : '240px',
                  transition: 'margin-left 0.3s ease',
                  padding: '20px',
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