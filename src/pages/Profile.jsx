import  { useState } from 'react';
import Sidebar from '../components/sidebard';
import '../styles/Profile.css';

export default function Profile() {
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
    <div className="profile-container">
      <h1 className="profile-title">Mi Perfil</h1>

      <div className="profile-card">
        <div className="profile-info">
          <label>Nombre:</label>
          <p>Juan Pérez</p>

          <label>Email:</label>
          <p>juanperez@email.com</p>

          <label>Teléfono:</label>
          <p>+54 11 1234 5678</p>

          <label>Dirección:</label>
          <p>Av. Siempre Viva 123, Buenos Aires</p>
        </div>

        <button className="edit-button">Editar Perfil</button>
      </div>
    </div>
    </main>
   </div>
  );
}