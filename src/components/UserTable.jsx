import '../styles/UserTable.css';

function UserTable({ users, onRowClick }) {
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Fecha de creación</th>
            <th>¿Profesional?</th>
            <th>Último login</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => onRowClick(user)}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.telefono}</td>
              <td>{user.email}</td>
              <td>{user.fechaCreacion}</td>
              <td>{user.profesional ? 'Sí' : 'No'}</td>
              <td>{user.ultimoLogin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;