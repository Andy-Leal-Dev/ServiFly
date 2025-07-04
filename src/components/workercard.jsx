import React from 'react';
import '../styles/Workercard.css';

export default function WorkerCard({ name, category }) {
  return (
    <div className="worker-card">
      <div className="worker-info">
        <h4 className="worker-category">{category}</h4>
        <p className="worker-name">{name}</p>
      </div>
      <button className="contact-button">Contactar</button>
    </div>
  );
}