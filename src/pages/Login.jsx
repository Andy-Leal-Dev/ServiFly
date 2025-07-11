import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaHome, FaBirthdayCake } from 'react-icons/fa';
import Footer from '../components/footer';
import PasswordResetModal from '../components/PasswordResetModal';
import logo from '../assets/img/logo.png';
import logogoogle from '../assets/img/logogoogle.png';
import Icon from '../assets/img/Icon.png';
import '../styles/login.css';

function Login() {
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const location = useLocation();

  const handlePasswordReset = (e) => {
    e.preventDefault();
    console.log('Solicitando restablecimiento para:', resetEmail);
    setShowResetModal(false);
    setResetEmail('');
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('register') === 'true') {
      setIsRegistering(true);
      window.history.replaceState({}, '', '/login');
    }
  }, [location]);

  return (
    <>
      <div className="login-container">
        {/* Panel izquierdo fijo */}
        <div className="login-left">
          <Link to="/">
            <img src={logo} alt="ServiFly Logo" className="logo-servifly" />
          </Link>
          <h1 className="login-title">
            Conecta con los expertos <br />
            más demandados en <br />
            el mundo para <strong style={{ color: '#0F1C2F' }}>resolver <br />
              tus problemas.</strong>
          </h1>
        </div>

        {/* Panel derecho con formulario */}
        <div className="login-right">
          <div className={`login-box ${isRegistering ? 'slide-in' : ''}`}>
            <img src={Icon} alt="ServiFly Icon" className="icon-login" />
            <h2>{isRegistering ? '¡Crea tu cuenta!' : '¡Bienvenido de vuelta!'}</h2>

            <form>
              <div className="form">
                {isRegistering ? (
                  <>
                    <label htmlFor="nombres">Nombres</label>
                    <div className="input-icon-wrapper">
                      <FaUser className="input-icon" />
                      <input type="text" id="nombres" placeholder="Nombres" />
                    </div>

                    <label htmlFor="apellidos">Apellidos</label>
                    <div className="input-icon-wrapper">
                      <FaUser className="input-icon" />
                      <input type="text" id="apellidos" placeholder="Apellidos" />
                    </div>

                    <label htmlFor="correo">Correo electrónico</label>
                    <div className="input-icon-wrapper">
                      <FaEnvelope className="input-icon" />
                      <input type="email" id="correo" placeholder="Correo electrónico" />
                    </div>

                    <label htmlFor="telefono">Teléfono</label>
                    <div className="input-icon-wrapper">
                      <FaPhone className="input-icon" />
                      <input type="text" id="telefono" placeholder="Teléfono" />
                    </div>

                    <label htmlFor="direccion">Dirección</label>
                    <div className="input-icon-wrapper">
                      <FaHome className="input-icon" />
                      <input type="text" id="direccion" placeholder="Dirección" />
                    </div>

                    <label htmlFor="nacimiento">Fecha de nacimiento</label>
                    <div className="input-icon-wrapper">
                      <FaBirthdayCake className="input-icon" />
                      <input type="date" id="nacimiento" />
                    </div>

                    <label htmlFor="password">Contraseña</label>
                    <div className="input-icon-wrapper">
                      <FaLock className="input-icon" />
                      <input type="password" id="password" />
                    </div>

                    <label htmlFor="passwordRepeat">Repita la Contraseña</label>
                    <div className="input-icon-wrapper">
                      <FaLock className="input-icon" />
                      <input type="password" id="passwordRepeat" />
                    </div>

                    <div className="form-checkbox">
                      <input type="checkbox" id="terms" />
                      <label htmlFor="terms">
                        Acepto los <Link to="/Condiciones" target="_blank">Términos y Condiciones</Link> y la <Link to="/Politics" target="_blank">Política de Privacidad</Link>.
                      </label>
                    </div>

                    <button type="submit">Registrarse</button>
                    <div className="links">
                      <a href="#" onClick={() => setIsRegistering(false)}>
                        ¿Ya tienes una cuenta? <strong>Inicia sesión</strong>
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <label htmlFor="login">Email o nombre de usuario</label>
                    <div className="input-icon-wrapper">
                      <FaEnvelope className="input-icon" />
                      <input type="text" id="login" placeholder="Email o nombre de usuario" />
                    </div>

                    <label htmlFor="password">Contraseña</label>
                    <div className="input-icon-wrapper">
                      <FaLock className="input-icon" />
                      <input type="password" id="password" placeholder="Contraseña" />
                    </div>

                    <button type="submit">
                      <Link to="/Dashboard" className="btn-login-link">
                        Iniciar sesión
                      </Link>
                    </button>

                    <hr />

                    <button className="google">
                      <img src={logogoogle} alt="Google Logo" />
                      Continuar con Google
                    </button>

                    <div className="links">
                      <a href="#" onClick={(e) => { e.preventDefault(); setShowResetModal(true); }}>
                        ¿Has olvidado tu contraseña?
                      </a><br />
                      <a href="#" onClick={() => setIsRegistering(true)}>
                        ¿No tienes una cuenta? <strong>Regístrate</strong>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <PasswordResetModal
        show={showResetModal}
        onClose={() => setShowResetModal(false)}
        onSubmit={handlePasswordReset}
        email={resetEmail}
        setEmail={setResetEmail}
      />

      <Footer />
    </>
  );
}

export default Login;
