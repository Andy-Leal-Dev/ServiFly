import React, { useState } from 'react';
import Sidebar from '../components/sidebard';
import MapView from '../components/mapView';
import WorkerCard from '../components/WorkerCard';
import SoftwareCard from '../components/softwareCard';
import ServiceCard from '../components/serviceCard';
import '../styles/Dashboard.css'


export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed((prev) => !prev);

  const history = [
    { id: 1, title: 'Desarrollo Web', provider: 'Jhon Doe', price: '50$', status: 'En proceso' },
    { id: 2, title: 'Fontanería', provider: 'Luis Ríos', price: '45$', status: 'Finalizado' },
  ];

  return (
    <div>
      <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <main
        className="dashboard-main"
        style={{ marginLeft: collapsed ? '70px' : '240px' }}
      >
        <div className="search-bar">
          <input type="text" placeholder="Busquemos un servicio..." />
        </div>

        <div className="filter-bar">
          {['Electricidad', 'Software', 'Fontanería', 'Jardinería'].map((cat) => (
            <button key={cat} className="filter-button">{cat}</button>
          ))}
        </div>

        <MapView />

        <section className="section-block">
          <h2>Historial de Servicios</h2>
          <div className="history-list">
            {history.map((item) => (
              <ServiceCard
                key={item.id}
                title={item.title}
                provider={item.provider}
                price={item.price}
                status={item.status}
              />
            ))}
          </div>
        </section>

        <section className="section-block">
          <h2>Trabajadores Destacados</h2>
          <div className="card-row">
            <WorkerCard name="Jhon Doe" category="Desarrollo Web" />
            <WorkerCard name="Ana Díaz" category="Electricidad" />
          </div>
        </section>

        <section className="section-block">
          <h2>Soluciones de Software</h2>
          <div className="card-row">
            <SoftwareCard name="CRM Express" developer="SoftDev" price="80$" />
            <SoftwareCard name="App Reservas" developer="CodePro" price="60$" />
          </div>
        </section>
      </main>
    </div>
  );
}