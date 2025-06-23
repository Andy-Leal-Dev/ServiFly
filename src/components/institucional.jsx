import React, { useState } from 'react';
import '../styles/home.css'; // Asegúrate de tener los estilos necesarios aquí

const modalData = [
  {
    titulo: "Misión",
    contenido: `Ofrecer una plataforma digital eficiente, confiable y accesible que conecte a personas con profesionales y oficios especializados en su área geográfica, facilitando la contratación de servicios mediante pagos tradicionales o intercambios por trueque.`
  },
  {
    titulo: "Visión",
    contenido: `Convertirse en la aplicación líder en América Latina en la contratación de servicios locales, promoviendo el desarrollo de economías colaborativas, la transparencia en las tarifas, y la inclusión digital de pequeños profesionales y emprendedores.`
  },
  {
    titulo: "Propuesta de Valor",
    contenido: `"ServiFLy transforma la manera en que las personas acceden a servicios profesionales, integrando proximidad, flexibilidad de pago y confianza en un solo lugar."`
  },
  {
    titulo: "Valores Corporativos",
    contenido: `
<ul>
  <li><strong>Conectividad:</strong> Acercamos personas y soluciones en su propio entorno.</li>
  <li><strong>Confianza:</strong> Fomentamos relaciones honestas y transparentes entre usuarios y prestadores.</li>
  <li><strong>Accesibilidad:</strong> Nos adaptamos a distintos niveles económicos y tecnológicos.</li>
  <li><strong>Innovación:</strong> Apostamos por herramientas modernas como el trueque digital y la georreferenciación.</li>
  <li><strong>Colaboración:</strong> Impulsamos una economía local justa, flexible y sustentable.</li>
</ul>`
  }
];

function institutional() {
  const [modalIndex, setModalIndex] = useState(null);

  const handleOpen = (index) => setModalIndex(index);
  const handleClose = () => setModalIndex(null);

  return (
    <section id='institucional' className="institucional">
      <h2 className="titulo-institucional">Conocé nuestra esencia</h2>
      <div className="bloques-horizontales">
        {modalData.map((item, index) => (
          <div
            key={index}
            className="card-institucional"
            onClick={() => handleOpen(index)}
          >
            <h3>{item.titulo}</h3>
          </div>
        ))}
      </div>

      {modalIndex !== null && (
        <div className="modal-fondo" onClick={handleClose}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar-modal" onClick={handleClose}>✖</button>
            <h3>{modalData[modalIndex].titulo}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: modalData[modalIndex].contenido.replace(/\n/g, '<br>')
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default institutional;