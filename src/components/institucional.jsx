import React from 'react';
import '../styles/home.css';

function Institutional() {
  return (
    <section id="institucional" className="institucional">
      <h2 className="titulo-institucional">Conocé nuestra esencia</h2>
      <div className="bloques-horizontales tarjetas-esencia">
        <div className="card-institucional tarjeta vision">
          <h3>Visión</h3>
          <p>
            Convertirse en la aplicación líder en América Latina en la contratación de servicios locales, promoviendo el desarrollo de economías colaborativas, la transparencia en las tarifas, y la inclusión digital de pequeños profesionales y emprendedores.
          </p>
        </div>
        <div className="card-institucional tarjeta mision adelantada">
          <h3>Misión</h3>
          <p>
            Ofrecer una plataforma digital eficiente, confiable y accesible que conecte a personas con profesionales y oficios especializados en su área geográfica, facilitando la contratación de servicios mediante pagos tradicionales o intercambios por trueque.
          </p>
        </div>
        <div className="card-institucional tarjeta objetivos">
          <h3>Objetivos</h3>
          <p>
            Desarrollar una aplicación multiplataforma (web y Android) centrada en la experiencia del usuario y el uso de geolocalización, con el propósito de conectar de forma directa a personas con profesionales y prestadores de servicios locales, fomentando la economía colaborativa mediante modalidades de contratación flexibles, como el pago tradicional o el trueque.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Institutional;