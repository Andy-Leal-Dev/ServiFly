import { Link } from 'react-router-dom';
import '../styles/Condiciones.css';
import logo from '../assets/img/logo.png';

function Politics() {
  return (
    <div className="condiciones-container">
      <img src={logo} alt="Logo ServiFly" style={{ width: '200px', marginBottom: '2rem' }} />
      <h1>Política de Privacidad</h1>

      <h2>1. Información que Recopilamos</h2>
      <p>Recopilamos los siguientes datos personales de los usuarios registrados, tanto profesionales como clientes:</p>
      <ul>
        <li>Nombre completo</li>
        <li>Dirección</li>
        <li>Teléfono de contacto</li>
        <li>Dirección de correo electrónico</li>
        <li>Profesión y detalles sobre cómo la ejercen</li>
        <li>Información bancaria para fines de pago y contratación</li>
        <li>Datos de ubicación para facilitar la geolocalización de servicios</li>
      </ul>

      <h2>2. Uso de la Información</h2>
      <p>La información recopilada se utiliza para:</p>
      <ul>
        <li>Conectar a clientes con profesionales adecuados según su ubicación</li>
        <li>Mejorar la experiencia en la plataforma</li>
        <li>Personalizar los resultados de búsqueda de servicios</li>
        <li>Coordinar el pago por servicios contratados</li>
      </ul>

      <h2>3. Divulgación de Datos</h2>
      <p>
        Los datos personales no se comparten con terceros ajenos a nuestra empresa.
        Solo se facilitan a los profesionales registrados con el fin de cumplir con la prestación
        del servicio solicitado por el cliente.
      </p>

      <h2>4. Protección de la Información</h2>
      <p>Implementamos medidas de seguridad, incluyendo:</p>
      <ul>
        <li>Encriptación de la información sensible</li>
        <li>Restricción de acceso a datos solo al personal autorizado</li>
        <li>Servidores protegidos con medidas estándar de seguridad digital</li>
      </ul>

      <h2>5. Derechos de los Usuarios</h2>
      <p>Cada usuario tiene el derecho de:</p>
      <ul>
        <li>Acceder a su información personal</li>
        <li>Modificar o actualizar sus datos</li>
        <li>
          Eliminar su cuenta en cualquier momento, lo que también eliminará sus datos asociados
        </li>
      </ul>

      <h2>6. Contacto</h2>
      <p>
        Para dudas, solicitudes o ejercer cualquiera de los derechos mencionados, los usuarios
        pueden contactarnos a través de los canales oficiales disponibles en la plataforma.
      </p>

      <Link to="/" className="volver-link">
        ← Volver al inicio
      </Link>
    </div>
  );
}

export default Politics;