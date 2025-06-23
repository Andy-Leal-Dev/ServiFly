import { useState } from 'react';
import '../styles/whoAre.css';
import Logo from '../assets/img/logo.png';

const departamentos = {
  "Project Manager": [
    { nombre: "Andrierber Leal", img: Logo },
  ],
  "Desarrollo Frontend": [
    { nombre: "Oscar Santander", img: Logo },
    { nombre: "Endyths Carrasquel", img: Logo }
  ],
  "Desarrollo Backend": [
    { nombre: "Miguel Ponce", img: Logo },
    { nombre: "Julian noMeAcuerdoelApellido", img: Logo }
  ],
  "QA tester": [
    { nombre: "Un Random", img: Logo }
  ],
  "Equipo Legal": [
    { nombre: "No se", img: Logo }
  ],
  "Marketing": [
    { nombre: "El Primo", img: Logo }
  ],
};

export default function WhoAre() {
  const [depOpen, setDepOpen] = useState(null);

  return (
    <div className="quienes-somos-container">
      <h2 className="titulo-quienes-somos">Quiénes somos</h2>

      <div className="diagrama-departamentos">
        {Object.keys(departamentos).map(dep => (
          <div key={dep} className="departamento">
            <div
              className="titulo-dep"
              onClick={() => setDepOpen(depOpen === dep ? null : dep)}
            >
              {dep} {depOpen === dep ? '−' : '+'}
            </div>

            {depOpen === dep && (
              <div className={`miembros abierto`}>
                {departamentos[dep].map((persona, idx) => (
                  <div key={idx} className="miembro">
                    <img
                      src={persona.img}
                      alt={persona.nombre}
                      className="miembro-img"
                    />
                    <p>{persona.nombre}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}