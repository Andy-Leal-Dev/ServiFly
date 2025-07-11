import { Link } from 'react-router-dom';
import '../styles/Condiciones.css';
import logo from '../assets/img/logo.png';

function Condiciones() {
  return (
    <div className="condiciones-container">
      <img src={logo} alt="Logo ServiFly" style={{ width: '200px', marginBottom: '2rem' }} />
      <h1>Términos y Condiciones de Uso de Servifly</h1>

      <h2>1. Aceptación de los Términos</h2>
      <p>
        Al utilizar Servifly, tanto en su plataforma web como a través de la aplicación móvil, aceptas
        estar sujeto a los siguientes términos y condiciones. Si no estás de acuerdo con alguna
        cláusula, te pedimos que no utilices nuestros servicios.
      </p>

      <h2>2. Requisitos de Edad</h2>
      <p>
        El uso de Servifly está restringido a personas mayores de 18 años. Al registrarte, declaras que
        cumples con este requisito y asumes la responsabilidad de la veracidad de dicha afirmación.
        Nos reservamos el derecho de suspender o eliminar cuentas que no cumplan con esta
        condición.
      </p>

      <h2>3. Descripción del Servicio</h2>
      <p>
        Servifly es una plataforma digital que conecta a profesionales independientes con usuarios
        que requieren diversos servicios (como reparación de electrodomésticos, desarrollo web,
        diseño gráfico, entre otros). Tanto nuestra página web como nuestra app actúan como
        intermediario facilitador, pero no participan en los acuerdos privados entre profesionales y
        clientes.
      </p>

      <h2>4. Registro y Ubicación</h2>
      <p>
        Para utilizar los servicios, debes registrarte y proporcionar tu ubicación actual. Esta
        información permite mostrar los profesionales o servicios disponibles cerca de ti y optimizar
        las búsquedas.
      </p>

      <h2>5. Obligaciones del Usuario</h2>
      <p>
        Tanto los profesionales como los clientes deben proporcionar información verídica y
        actualizada. Los profesionales son responsables del cumplimiento de las leyes que regulan su
        actividad.
      </p>

      <h2>6. Tarifas y Comisiones</h2>
      <h3>● Aplicación de Comisiones</h3>
      <p>
        Servifly cobra una comisión por cada transacción completada a través de su
        plataforma, ya sea mediante la página web o la aplicación móvil. Esta comisión
        representa el costo por el uso de nuestra infraestructura digital, así como por la
        visibilidad y gestión que brindamos a los profesionales registrados.
      </p>

      <h3>● Cálculo y Deducción Automática</h3>
      <p>
        En los pagos realizados por transferencia bancaria o pago móvil, la comisión
        correspondiente será calculada y deducida automáticamente antes de transferirse el
        monto restante al profesional.
      </p>

      <h3>● Pagos en Efectivo</h3>
      <p>
        Cuando el cliente realiza el pago en efectivo directamente al profesional, este
        último tiene la obligación de emitir y subir una factura válida a la plataforma
        como constancia. A partir de esa factura, Servifly calculará la comisión aplicable, la
        cual será debitada posteriormente a través del mecanismo acordado con el profesional
        (por ejemplo: pago móvil, retención en futuros cobros, etc.).
      </p>

      <h3>● Transparencia y Actualización</h3>
      <p>
        El porcentaje o monto de la comisión puede variar dependiendo del tipo de servicio
        o promociones aplicables. Las tarifas vigentes están disponibles en nuestra sección de
        “Tarifas y Facturación” dentro de la plataforma. Servifly se reserva el derecho de
        modificar estos porcentajes, notificando a los usuarios con antelación razonable.
      </p>

      <h2>7. Métodos de Pago</h2>
      <p>
        Servifly admite las siguientes formas de pago para facilitar la contratación de servicios a
        través de la plataforma:
      </p>
      <ul>
        <li>
          <strong>Transferencia Bancaria:</strong> Los usuarios podrán cancelar los servicios mediante
          transferencia electrónica desde su entidad bancaria. Esta opción se gestiona a través
          de los mecanismos integrados en la app y los pagos son procesados por proveedores
          externos seguros.
        </li>
        <li>
          <strong>Pago Móvil:</strong> La plataforma también acepta pagos por medio de servicios de pago
          móvil autorizados. Al optar por esta modalidad, el usuario acepta los términos de
          dichos proveedores y es responsable de verificar que la transacción se haya realizado
          correctamente.
        </li>
        <li>
          <strong>Pago en Efectivo:</strong> Si el usuario elige pagar en efectivo directamente al profesional,
          este debe emitir una factura válida por el monto recibido y subirla a la plataforma
          Servifly. Este paso es indispensable para calcular y aplicar la comisión
          correspondiente.
        </li>
      </ul>
      <p>
        Servifly no almacena información bancaria de los usuarios y utiliza proveedores
        especializados que garantizan seguridad en el procesamiento de pagos.
      </p>

      <h2>8. Responsabilidades y Limitaciones</h2>
      <p>
        Servifly no se hace responsable por la calidad, cumplimiento o resultados de los servicios
        prestados por los profesionales. La relación contractual es entre cliente y profesional. Sin
        embargo, fomentamos la retroalimentación y las reseñas para mejorar la experiencia de todos
        los usuarios.
      </p>

      <h2>9. Propiedad Intelectual</h2>
      <p>
        Todo el contenido de la plataforma, así como su diseño, marca, textos y funcionalidades, son
        propiedad de Servifly y están protegidos por las leyes aplicables sobre propiedad intelectual.
      </p>

      <h2>10. Modificaciones</h2>
      <p>
        Nos reservamos el derecho a modificar estos términos en cualquier momento. El uso
        continuado de la app implica tu aceptación de dichos cambios.
      </p>

      <Link to="/" className="volver-link">
        ← Volver al inicio
      </Link>
    </div>
  );
}

export default Condiciones;