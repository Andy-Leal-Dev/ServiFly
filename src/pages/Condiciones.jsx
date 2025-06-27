import { Link } from 'react-router-dom';
import '../styles/Condiciones.css';
import logo from '../assets/img/logo.png'; // Asegúrate de que esta ruta sea correcta

function Condiciones() {
  return (
    <div className="condiciones-container">
      <img src={logo} alt="Logo ServiFly" style={{ width: '200px', marginBottom: '2rem' }} />
      <h1>Términos y Condiciones de Uso de ServiFly</h1>

      <h2>1. Aceptación de los Términos</h2>
      <p>
        Al utilizar Servifly, tanto en su plataforma web como a través de la aplicación móvil,
        aceptas estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con
        alguna cláusula, te pedimos que no utilices nuestros servicios.
      </p>

      <h2>2. Requisitos de Edad</h2>
      <p>
        El uso de Servifly está restringido a personas mayores de 18 años. Al registrarte, declaras
        que cumples con este requisito y asumes la responsabilidad de la veracidad de dicha afirmación.
        Nos reservamos el derecho de suspender o eliminar cuentas que no cumplan con esta condición.
      </p>

      <h2>3. Descripción del Servicio</h2>
      <p>
        Servifly es una plataforma digital que conecta a profesionales independientes con usuarios que requieren
        diversos servicios (como reparación de electrodomésticos, desarrollo web, diseño gráfico, entre otros).
        Tanto nuestra página web como nuestra app actúan como intermediario facilitador, pero no participan
        en los acuerdos privados entre profesionales y clientes.
      </p>

      <h2>4. Registro y Ubicación</h2>
      <p>
        Para utilizar los servicios, debes registrarte y proporcionar tu ubicación actual. Esta información permite
        mostrar los profesionales o servicios disponibles cerca de ti y optimizar las búsquedas.
      </p>

      <h2>5. Obligaciones del Usuario</h2>
      <p>
        Tanto los profesionales como los clientes deben proporcionar información verídica y actualizada. Los
        profesionales son responsables del cumplimiento de las leyes que regulan su actividad.
      </p>

      <h2>6. Tarifas y Comisiones</h2>
      <p>
        Servifly cobra una comisión sobre el monto total de cada transacción realizada a través de nuestras
        plataformas. Dicha comisión será deducida automáticamente al momento del pago al profesional. Los detalles
        sobre las tarifas se encuentran en nuestra sección de <strong>“Tarifas y Facturación”</strong>.
      </p>

      <h2>7. Métodos de Pago</h2>
      <p>
        La app admite múltiples formas de pago. Los pagos se procesan a través de proveedores externos seguros.
        El usuario acepta los términos y condiciones de dichos proveedores al utilizar sus servicios desde nuestra plataforma.
      </p>

      <h2>8. Responsabilidades y Limitaciones</h2>
      <p>
        Servifly no se hace responsable por la calidad, cumplimiento, o resultados de los servicios prestados por los
        profesionales. La relación contractual es entre cliente y profesional. Sin embargo, fomentamos la retroalimentación
        y reseñas para mejorar la experiencia de todos los usuarios.
      </p>

      <h2>9. Propiedad Intelectual</h2>
      <p>
        Todo el contenido de la plataforma, así como el diseño y funcionalidades, son propiedad de Servifly y están protegidos
        por las leyes aplicables.
      </p>

      <h2>10. Modificaciones</h2>
      <p>
        Nos reservamos el derecho a modificar estos términos en cualquier momento. El uso continuado de la app implica tu aceptación
        de dichos cambios.
      </p>

      <Link to="/" className="volver-link">
        ← Volver al inicio
      </Link>
    </div>
  );
}

export default Condiciones;