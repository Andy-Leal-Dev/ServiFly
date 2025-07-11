import { useState,useContext  } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sidebard';
import { FaBell, FaEnvelope, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import logo from '../assets/img/logo.png';
import AddressMap from '../components/AddressMap';
import { LocationContext } from '../context/LocationContext';
import '../styles/Dashboard.css';
import '../styles/Direcciones.css';

export default function Direcciones() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(prev => !prev);
  const { userLocation } = useContext(LocationContext);
  const handleMapClick = (latLng, addressText) => {
  setFormData({ title: 'Nueva Dirección', details: addressText });
  setShowAddModal(true);
  };
  const [addresses, setAddresses] = useState([
    { id: 1, title: 'Casa', details: 'Av. Santa Fe 1234, Buenos Aires, Argentina' },
    { id: 2, title: 'Oficina', details: 'Av. Corrientes 500, Buenos Aires, Argentina' },
  ]);

  const [deleteId, setDeleteId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(null);
  const [formData, setFormData] = useState({ title: '', details: '' });

  const handleAdd = () => {
    setFormData({ title: '', details: '' });
    setShowAddModal(true);
  };

  const handleEdit = (id) => {
    const addr = addresses.find(a => a.id === id);
    if (addr) {
      setFormData({ title: addr.title, details: addr.details });
      setShowEditModal(id);
    }
  };

  const confirmDelete = () => {
    setAddresses(prev => prev.filter(a => a.id !== deleteId));
    setDeleteId(null);
  };

  const saveNewAddress = () => {
    const newId = addresses.length ? Math.max(...addresses.map(a => a.id)) + 1 : 1;
    setAddresses(prev => [...prev, { id: newId, ...formData }]);
    setShowAddModal(false);
  };

  const saveEditedAddress = () => {
    setAddresses(prev => prev.map(a => a.id === showEditModal ? { ...a, ...formData } : a));
    setShowEditModal(null);
  };

    if (!userLocation) {
    return <p>Obteniendo ubicación...</p>;
  }

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

      {/* 🔵 SIDEBAR */}
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
        <section className="section-block">
          <h2>Mis Direcciones</h2>

          <button className="add-address-button" onClick={handleAdd}>
            <FaPlus style={{ marginRight: "8px" }} />
            Agregar Dirección
          </button>

          <div className="history-list">
            {addresses.map((address) => (
              <div key={address.id} className="service-card">
                <h3>{address.title}</h3>
                <p>{address.details}</p>
                <div className="address-actions">
                  <button onClick={() => handleEdit(address.id)} className="edit-btn">
                    <FaEdit /> Editar
                  </button>
                  <button onClick={() => setDeleteId(address.id)} className="delete-btn">
                    <FaTrash /> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mapa de direcciones */}
             <AddressMap userLocation={userLocation} addresses={addresses} onMapClick={handleMapClick} />
        </section>
      </main>

      {/* Modal Agregar */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Agregar Dirección</h2>
            <label>Título</label>
            <input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <label>Dirección</label>
            <textarea
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            />
            <div className="modal-buttons">
              <button className="save-button" onClick={saveNewAddress}>Guardar</button>
              <button className="cancel-button" onClick={() => setShowAddModal(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Editar */}
      {showEditModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Editar Dirección</h2>
            <label>Título</label>
            <input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <label>Dirección</label>
            <textarea
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            />
            <div className="modal-buttons">
              <button className="save-button" onClick={saveEditedAddress}>Guardar</button>
              <button className="cancel-button" onClick={() => setShowEditModal(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Eliminar */}
      {deleteId && (
        <div className="modal-overlay">
          <div className="delete-modal">
            <h3>¿Estás seguro de eliminar esta dirección?</h3>
            <div className="modal-buttons">
              <button className="confirm-delete-btn" onClick={confirmDelete}>Eliminar</button>
              <button className="cancel-delete-btn" onClick={() => setDeleteId(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}