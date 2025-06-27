import { useState, useEffect } from 'react';
import '../styles/whoAre.css';
import memberImages from '../utils/memberImages';

const miembros = [
  { nombre: "Andrierber Leal", rol: "Project Manager", img: memberImages.andrierberLeal },
  { nombre: "Oscar Santander", rol: "Frontend", img: memberImages.oscarSantander },
  { nombre: "Endyths Carrasquel", rol: "Frontend", img: memberImages.endythsCarrasquel },
  { nombre: "Miguel Ponce", rol: "Backend", img: memberImages.miguelPonce },
  { nombre: "Julian Amer", rol: "Backend", img: memberImages.julianAmer },
  { nombre: "Dixon Ramos", rol: "Backend", img: memberImages.dixonRamos },
  { nombre: "Luis Sepulveda", rol: "QA", img: memberImages.luisSepulveda },
  { nombre: "Alexander Berrueta", rol: "QA", img: memberImages.alexanderBerrueta },
  { nombre: "Jose Carrasquel", rol: "Legal", img: memberImages.joseCarrasquel },
  { nombre: "Genesis Fernández", rol: "Marketing", img: memberImages.genesisFernandez },
  { nombre: "Cristopher Gomez", rol: "Marketing", img: memberImages.cristopherGomez },
  { nombre: "Diana Herrera", rol: "Legal", img: memberImages.dianaHerrera },
  { nombre: "Andres Flores", rol: "Marketing", img: memberImages.andresFlores },
  { nombre: "Valeria Zambrano", rol: "Legal", img: memberImages.valeriaZambrano },
  { nombre: "Sebastian Julio", rol: "Legal", img: memberImages.sebastianJulio },
];

export default function WhoAre() {
  const visibleCount = 3;

  // startIndex actual que se muestra
  const [startIndex, setStartIndex] = useState(0);
  // dirección de animación: 'left' o 'right'
  const [direction, setDirection] = useState('right');
  // controla si estamos en animación de salida
  const [isExiting, setIsExiting] = useState(false);
  // índice que mostrará el siguiente grupo tras animación de salida
  const [nextIndex, setNextIndex] = useState(null);

  const handleChange = (newDirection, newIndex) => {
    if (isExiting) return; // no permitir cambio durante animación de salida
    setDirection(newDirection);
    setIsExiting(true);
    setNextIndex(newIndex);
  };

  const siguiente = () => {
    handleChange(
      'right',
      (startIndex + visibleCount) % miembros.length
    );
  };

  const anterior = () => {
    handleChange(
      'left',
      (startIndex - visibleCount + miembros.length) % miembros.length
    );
  };

  // Cuando termina la animación de salida, cambiamos el contenido y quitamos animación de salida
  useEffect(() => {
    if (!isExiting) return;
    const timeout = setTimeout(() => {
      setStartIndex(nextIndex);
      setIsExiting(false);
      setNextIndex(null);
    }, 1200); // duración de animación en ms (igual que el CSS)
    return () => clearTimeout(timeout);
  }, [isExiting, nextIndex]);

  // Autoplay cada 5s
  useEffect(() => {
    const interval = setInterval(() => {
      siguiente();
    }, 5000);
    return () => clearInterval(interval);
  }, [startIndex]);

  // Miembros a mostrar (según startIndex)
  const visibleMiembros = [];
  for (let i = 0; i < visibleCount; i++) {
    const idx = (startIndex + i) % miembros.length;
    visibleMiembros.push(miembros[idx]);
  }

  // Clases de animación: si está saliendo, usar clase de salida según dirección, si no, clase de entrada
  const slideClass = isExiting
    ? direction === 'left'
      ? 'slide-out-left'
      : 'slide-out-right'
    : direction === 'left'
    ? 'slide-in-left'
    : 'slide-in-right';

  return (
    <section className="carrusel3-container">
      <h2 className="equipo-titulo">Conocé al equipo</h2>
      <div className="carrusel3-wrapper">
        <button className="flecha3 izquierda" onClick={anterior}>‹</button>
        <div className={`carrusel3-slide ${slideClass}`}>
          {visibleMiembros.map((miembro, index) => (
            <div className="tarjeta-miembro" key={index}>
              <div className="imagen-circulo">
                <img src={miembro.img} alt={miembro.nombre} />
              </div>
              <h3>{miembro.nombre}</h3>
              <p>{miembro.rol}</p>
            </div>
          ))}
        </div>
        <button className="flecha3 derecha" onClick={siguiente}>›</button>
      </div>
    </section>
  );
}