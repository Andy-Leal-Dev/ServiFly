import '../styles/UserDetailsModal.css';

function UserDetailsModal({ user, onClose }) {
  const handleBlockUser = () => {
    alert(`Usuario ${user.nombre} bloqueado`);
    onClose(); 
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Detalles del Usuario</h3>
        <ul>
          <li><strong>ID:</strong> {user.id}</li>
          <li><strong>Nombre:</strong> {user.nombre}</li>
          <li><strong>Teléfono:</strong> {user.telefono}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>Fecha de creación:</strong> {user.fechaCreacion}</li>
          <li><strong>Profesional:</strong> {user.profesional ? 'Sí' : 'No'}</li>
          <li><strong>Último login:</strong> {user.ultimoLogin}</li>
          <li><strong>Dirección:</strong> {user.direccion}</li>
          <li><strong>Ciudad:</strong> {user.ciudad}</li>
        </ul>
        <div className="modal-buttons">
          <button className="btn-close" onClick={onClose}>Cerrar</button>
          <button className="btn-block" onClick={handleBlockUser}>Bloquear usuario</button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsModal;