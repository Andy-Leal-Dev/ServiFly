import { useState } from 'react';
import '../styles/whoAre.css';
import memberImages from '../utils/memberImages';

const departamentos = {
  "Project Manager": [
    { nombre: "Andrierber Leal", img: memberImages.andrierberLeal },
  ],
  "Desarrollo Frontend": [
    { nombre: "Oscar Santander", img: memberImages.oscarSantander },
    { nombre: "Endyths Carrasquel", img: memberImages.endythsCarrasquel }
  ],
  "Desarrollo Backend": [
    { nombre: "Miguel Ponce", img: memberImages.miguelPonce },
    { nombre: "Julian Amer", img: memberImages.julianAmer },
    { nombre: "Dixon Ramos", img: memberImages.dixonRamos }
  ],
  "QA tester": [
    { nombre: "Luis Sepulveda", img: memberImages.luisSepulveda },
    { nombre: "Alexander Berrueta", img: memberImages.alexanderBerrueta}
  ],
  "Equipo Legal": [
    { nombre: "Jose Carrasquel", img: memberImages.joseCarrasquel },
    { nombre: "Sebastian Julio", img: memberImages.sebastianJulio},
    { nombre: "Diana Herrera", img: memberImages.dianaHerrera},
    { nombre: "Valeria Zambrano", img: memberImages.valeriaZambrano}
  ],
  "Marketing": [
    { nombre: "Andres Flores", img: memberImages.andresFlores },
    { nombre: "Genesis Fernández", img: memberImages.genesisFernandez},
    { nombre: "Cristopher Gomez", img: memberImages.cristopherGomez}
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