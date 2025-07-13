import { useState } from 'react';
import UserTable from '../components/UserTable';
import UserDetailsModal from '../components/UserDetailsModal';
import '../styles/AdminUsers.css'; 

const mockUsers = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    telefono: '1234567890',
    email: 'juan@example.com',
    fechaCreacion: '2024-01-10',
    profesional: true,
    ultimoLogin: '2025-07-10',
    direccion: 'Calle 123',
    ciudad: 'Bogotá',
  },
  {
    id: 2,
    nombre: 'Ana Torres',
    telefono: '9876543210',
    email: 'ana@example.com',
    fechaCreacion: '2024-03-15',
    profesional: false,
    ultimoLogin: '2025-07-09',
    direccion: 'Avenida 456',
    ciudad: 'Medellín',
  },
];

function AdminUsers() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h2>Panel de Usuarios</h2>
        <button className="btn-logout">Cerrar Sesión</button>
      </header>

      <div className="filter-bar">
        <span>Mostrar:</span>
        <button className="filter-btn active">Todos</button>
        <button className="filter-btn">Profesionales</button>
        <button className="filter-btn">No profesionales</button>
      </div>

      <UserTable users={mockUsers} onRowClick={setSelectedUser} />

      {selectedUser && (
        <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default AdminUsers;