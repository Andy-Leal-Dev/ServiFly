import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sidebard';  
import MapView from '../components/mapView';
import WorkerCard from '../components/workercard';
import ServiceCard from '../components/serviceCard';
import logo from '../assets/img/logo.png';
import { FaSearch, FaBell, FaEnvelope, FaFilter } from 'react-icons/fa';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed((prev) => !prev);

  const history = [
    { id: 1, title: 'Desarrollo Web', provider: 'Jhon Doe', price: '50$', status: 'En proceso' },
    { id: 2, title: 'Fontanería', provider: 'Luis Ríos', price: '45$', status: 'Finalizado' },
  ];

  const nearbyWorkers = [
    {
      id: 1,
      name: 'Carlos Pérez',
      category: 'Electricista',
      rating: 4.5,
      price: '$30',
      photo: '/path/to/carlos.jpg'
    },
    {
      id: 2,
      name: 'María Gómez',
      category: 'Jardinera',
      rating: 4.8,
      price: '$25',
      photo: '/path/to/maria.jpg'
    },
    {
      id: 3,
      name: 'José Ramírez',
      category: 'Programador',
      rating: 5.0,
      price: '$60',
      photo: '/path/to/jose.jpg'
    }
  ];

  const userPhotoUrl = 'https://randomuser.me/api/portraits/men/13.jpg'; 

  return (
    <div className="dashboard-container">
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
          <Link to="/Chat"><FaEnvelope className="icon-header" aria-label="Mensajes" /></Link>
          <span className="orders-text">Órdenes</span>
          <div className="profile-circle">
            <img src={userPhotoUrl} alt="Foto de perfil" />
          </div>
        </div>
      </header>

      <div className="dashboard-content">
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
        <main className="dashboard-main" style={{ marginLeft: collapsed ? '70px' : '240px' }}>
          <div className="filter-bar">
            <FaFilter className="filter-icon" title="Filtrar categorías" />
            {['Electricidad', 'Software', 'Fontanería', 'Jardinería'].map((cat) => (
              <button key={cat} className="filter-button">{cat}</button>
            ))}
          </div>

          <div className="top-section">
            <div className="map-column">
              <MapView />
            </div>

            <div className="results-column">
              <h2>Cerca de ti</h2>
              <div className="card-row">
                {nearbyWorkers.map(worker => (
                  <WorkerCard
                    key={worker.id}
                    name={worker.name}
                    category={worker.category}
                    rating={worker.rating}
                    price={worker.price}
                    photo={worker.photo}
                  />
                ))}
              </div>
            </div>
          </div>

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
        </main>
      </div>
    </div>
  );
}
