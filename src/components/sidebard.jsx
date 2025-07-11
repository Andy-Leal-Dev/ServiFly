import React from 'react';
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
          <h2 className="sidebar-title"><Link to="/Dashboard">Menu</Link></h2>
          <ul className="sidebar-menu">
            <li><Link to="/Profile">Perfil</Link></li>
            <li><Link to="/History">Historial</Link></li>
            <li><Link to="/recomendados">Recomendados</Link></li>
            <li><Link to="/trabajadores">Trabajadores</Link></li>
            <li><Link to="/"> Salir</Link></li>
          </ul>
        </>
      )}
    </aside>
  );
}
