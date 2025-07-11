// src/pages/chat.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import { FaSearch, FaBell, FaEnvelope } from 'react-icons/fa';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { FaCamera } from 'react-icons/fa';
import '../styles/Dashboard.css';
import '../styles/Chat.css';

const ChatPage = () => {
  const [message, setMessage] = useState('');

  const userPhotoUrl = 'https://i.pravatar.cc/150?img=3'; // Puedes reemplazarlo por una foto real

  const handleSend = () => {
    console.log('Mensaje enviado:', message);
    setMessage('');
  };

  return (
    <div className="chat-page">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo-container">
           <Link to="/Dashboard">
          <img
            src={logo}
            alt="ServiFly Logo"
           
          />
          </Link>
        </div>

        <div className="search-bar-container">
          <div className="search-bar">
            <FaSearch className="icon-search" />
            <input type="text" placeholder="Busquemos un servicio..." />
          </div>
        </div>

        <div className="header-icons-profile">
          <FaBell className="icon-header" />
          <FaEnvelope className="icon-header" />
          <span className="orders-text">Órdenes</span>
          <div className="profile-circle">
            <img src={userPhotoUrl} alt="Foto de perfil" />
          </div>
        </div>
      </header>

      {/* Chat layout */}
      <div className="chat-container">
        {/* Lista de chats */}
        <aside className="chat-sidebar">
          <div className="chat-sidebar-header">
            <h2 className="recent-title">Mensajes Recientes</h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Buscar mensajes..."
                className="chat-search-input"
              />
            </div>
          </div>

            {/* Lista de chats */}
          <ul className="chat-list">
            {[1, 2, 3].map((i) => (
              <li key={i} className="chat-list-item">
                <img src={userPhotoUrl} alt="Usuario" className="chat-avatar" />
                <div>
                  <p className="chat-name">Jhon Doe - Fontanero</p>
                  <p className="chat-preview">Tú: Quiero un servicio 🔧🔧</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Conversación */}
        <main className="chat-main">
          <div className="chat-header">
            <img src={userPhotoUrl} alt="Usuario" className="chat-avatar-large" />
            <div>
              <h2>Jhon Doe - Fontanero</h2>
              <p>2342 Trabajos completados · A 20Km de distancia</p>
            </div>
            <div className="settings-icon">
                <FiSettings />
            </div>
          </div>

          <div className="chat-messages">
            <div className="message received">
              <p>Hola, estoy interesado en tu servicio.</p>
            </div>
            <div className="message sent">
              <p>¡Claro! ¿Qué necesitas exactamente?</p>
              <img src={userPhotoUrl} alt="Tú" className="chat-avatar-mini" />
            </div>
          </div>

          {/* Input de mensaje */}
          <div className="chat-input">
            <BsEmojiSmile className="emoji-icon" />
            <FaCamera className="emoji-icon" />
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatPage;
