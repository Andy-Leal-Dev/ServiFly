import React from 'react';
import '../styles/SoftwareCard.css';

export default function SoftwareCard({ name, developer, price }) {
  return (
    <div className="software-card">
      <h3 className="software-title">{name}</h3>
      <p className="software-developer">{developer}</p>
      <p className="software-price">{price}</p>
      <button className="contact-button">Contactar</button>
    </div>
  );
}