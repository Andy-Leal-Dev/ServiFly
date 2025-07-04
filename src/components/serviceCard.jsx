import React from 'react';
import '../styles/ServiceCard.css';

export default function ServiceCard({ title, provider, price, status }) {
  return (
    <div className="service-card">
      <h3 className="service-title">{title}</h3>
      <p className="service-provider">{provider}</p>
      <p className="service-price">{price}</p>
      {status && <span className="status-badge">{status}</span>}
      <button className="contact-button">Contactar</button>
    </div>
  );
}