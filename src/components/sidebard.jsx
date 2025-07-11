import { Link } from 'react-router-dom';
import '../styles/sidebard.css';

export default function Sidebar({ collapsed, toggleSidebar }) {
  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </div>

      {!collapsed && (
        <>
          <h2 className="sidebar-title"><Link to="/Dashboard">Principal</Link></h2>
          <ul className="sidebar-menu">
            <li><Link to="/Profile">Perfil</Link></li>
            <li><Link to="/History">Historial</Link></li>
            <li><Link to="/Favoritos">Favoritos</Link></li>
            <li><Link to="/Review">Reseñas</Link></li>
            <li><Link to="/Condiciones">Condiciones</Link></li>
            <li><Link to="/Politics">Politicas</Link></li>
            <li><Link to="/"> Salir</Link></li>
          </ul>
        </>
      )}
    </aside>
  );
}
