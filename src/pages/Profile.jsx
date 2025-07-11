import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaEnvelope,FaEye, FaEyeSlash } from 'react-icons/fa';
import Sidebar from '../components/sidebard';
import logo from '../assets/img/logo.png';
import userPhoto from '../assets/members/Andrierber.jpg'; // Usa una imagen por defecto
import '../styles/Profile.css';

export default function Profile() {
  const [collapsed, setCollapsed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
   nombres: 'Juan Alfonzo',
   apellidos: 'Pérez Ramirez',
   email: 'juanperez@email.com',
   telefono: '+54 11 1234 5678',
   direccion: 'Av. Siempre Viva 123, Buenos Aires',
   nacimiento: '1997-10-12',
   });
   
  const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
  console.log('Datos actualizados:', formData);
  setIsModalOpen(false);
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
        <div className="profile-container">
          <h1 className="profile-title">Mi Perfil</h1>

          <div className="profile-card-container">
            <div className="profile-card">
              <div className="profile-info">
                <label>Nombres:</label>
                <p>Juan Alfonzo </p>
                
                <label>Apellidos:</label>
                <p>Pérez Ramirez</p>

                <label>Email:</label>
                <p>juanperez@email.com</p>

                <label>Teléfono:</label>
                <p>+54 11 1234 5678</p>

                <label>Dirección:</label>
                <p>Av. Siempre Viva 123, Buenos Aires</p>

                <label>Fecha de Nacimiento:</label>
                <p>12/10/1997</p>
                <label>Contraseña:</label>
                <div className="password-field">
                   <input
                    type={showPassword ? 'text' : 'password'}
                    value="MiContraseña123"
                    readOnly
                   />
                   <span
                    className="toggle-password"
                    onClick={() => setShowPassword(prev => !prev)}
                   >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

               <button className="edit-button" onClick={() => setIsModalOpen(true)}>
                Editar Perfil
                </button>
              </div>
            </div>

            <div className="profile-image">
              <img src={userPhoto} alt="Foto de perfil" />
            </div>
          </div>

          <div className="playstore-info">
            <p>
              Si deseas ofertar un servicio, tienes que descargar la app de <strong>ServiFly</strong> en la Play Store.
            </p>
          <a
          
           
           className="playstore-button"
           >
            Ir a Play Store
            </a>
          </div>
        </div>
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>Editar Perfil</h2>

              <label>Nombres:</label>
              <input name="nombres" value={formData.nombres} onChange={handleChange} />
              
              <label>Apellidos:</label>
              <input name="apellidos" value={formData.apellidos} onChange={handleChange} />
              
              <label>Email:</label>
              <input name="email" value={formData.email} onChange={handleChange} />
              
              <label>Teléfono:</label>
              <input name="telefono" value={formData.telefono} onChange={handleChange} />
              
              <label>Dirección:</label>
              <input name="direccion" value={formData.direccion} onChange={handleChange} />
              
              <label>Fecha de Nacimiento:</label>
              <input type="date" name="nacimiento" value={formData.nacimiento} onChange={handleChange} />
              
              <div className="modal-buttons">
                <button className="save-button" onClick={handleSave}>Guardar</button>
                <button className="cancel-button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
                </div>
              </div>
            </div>
          )}
      </main>
    </div>
  );
}
