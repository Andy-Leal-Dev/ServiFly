import { Link } from 'react-router-dom';
import '../styles/Condiciones.css'

function Condiciones() {
  return (
    <div className="condiciones-container">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Términos y Condiciones</h1>

      <p>
        Bienvenido a <strong>ServiFly</strong>. Al acceder o utilizar nuestros servicios, aceptas los siguientes términos y condiciones.
        Si no estás de acuerdo con alguno de estos términos, por favor no uses nuestra plataforma.
      </p>

      <h2 style={{ marginTop: '2rem' }}>1. Uso de la plataforma</h2>
      <p>
        ServiFly es un portal que conecta usuarios con expertos en diversas áreas. El uso del sitio debe ser
        responsable, respetando a otros usuarios y cumpliendo con las leyes vigentes.
      </p>

      <h2 style={{ marginTop: '2rem' }}>2. Privacidad</h2>
      <p>
        La información personal que nos proporciones será tratada conforme a nuestra <Link to="/privacidad" >Política de Privacidad</Link>.
      </p>

      <h2 style={{ marginTop: '2rem' }}>3. Responsabilidad</h2>
      <p>
        No nos hacemos responsables por problemas derivados de acuerdos entre usuarios y expertos. Actuamos
        únicamente como intermediarios tecnológicos.
      </p>

      <h2 style={{ marginTop: '2rem' }}>4. Cambios en los términos</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos cuando esto ocurra.
      </p>

      <Link to="/" className="volver-link">
      ← Volver al inicio
      </Link>
    </div>
  );
}

export default Condiciones;