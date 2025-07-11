import { Link } from 'react-router-dom';
import '../styles/Condiciones.css';
import logo from '../assets/img/logo.png'; 

function Politics() {
  return (
    <div className="condiciones-container">
      <img src={logo} alt="Logo ServiFly" style={{ width: '200px', marginBottom: '2rem' }} />
      <h1>Política de Privacidad de ServiFly</h1>

      <h2>1. Introducción</h2>
      <p>
        En ServiFly valoramos tu privacidad y nos comprometemos a proteger la información personal que nos proporcionas.
        Esta política explica cómo recopilamos, usamos y compartimos tu información cuando utilizas nuestra plataforma web o app móvil.
      </p>

      <h2>2. Información que Recopilamos</h2>
      <p>
        Recopilamos información personal que proporcionas directamente, como tu nombre, correo electrónico, número de teléfono, dirección y ubicación.
        También recopilamos información técnica automáticamente, como dirección IP, tipo de navegador, sistema operativo y comportamiento de navegación.
      </p>

      <h2>3. Uso de la Información</h2>
      <p>
        Utilizamos tus datos para ofrecer y mejorar nuestros servicios, facilitar la conexión entre usuarios y profesionales,
        personalizar tu experiencia, procesar pagos, enviar notificaciones, y cumplir con obligaciones legales.
      </p>

      <h2>4. Compartición de la Información</h2>
      <p>
        Compartimos información solo cuando es necesario: con profesionales o clientes con quienes interactúas,
        con proveedores de servicios (como procesadores de pago) y cuando lo exige la ley.
      </p>

      <h2>5. Seguridad de los Datos</h2>
      <p>
        Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra accesos no autorizados,
        pérdidas o alteraciones. Sin embargo, ninguna transmisión de datos por Internet es completamente segura.
      </p>

      <h2>6. Derechos del Usuario</h2>
      <p>
        Tienes derecho a acceder, rectificar o eliminar tus datos personales. También puedes oponerte a ciertos tratamientos o solicitar la portabilidad de tus datos.
        Para ejercer estos derechos, contáctanos a través de <strong>privacidad@servifly.com</strong>.
      </p>

      <h2>7. Cookies y Tecnologías Similares</h2>
      <p>
        Usamos cookies para mejorar tu experiencia, analizar el tráfico y ofrecer contenido personalizado. Puedes gestionar tus preferencias de cookies desde la configuración de tu navegador.
      </p>

      <h2>8. Retención de Datos</h2>
      <p>
        Conservamos tu información mientras tu cuenta esté activa o sea necesario para cumplir con nuestras obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos.
      </p>

      <h2>9. Cambios en la Política</h2>
      <p>
        Nos reservamos el derecho a modificar esta política en cualquier momento. Notificaremos los cambios relevantes a través de nuestros canales oficiales.
        El uso continuado de nuestros servicios implica tu aceptación de dichas modificaciones.
      </p>

      <h2>10. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta Política de Privacidad, puedes escribirnos a <strong>privacidad@servifly.com</strong>.
      </p>

      <Link to="/" className="volver-link">
        ← Volver al inicio
      </Link>
    </div>
  );
}

export default Politics;