import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../components/footer'
import logo from '../assets/img/logo.png';
import logogoogle from '../assets/img/logogoogle.png';
import logofacebook from '../assets/img/logofacebook.png';
import Icon from '../assets/img/Icon.png';
import '../styles/login.css';

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
const location = useLocation(); // 👈 obtiene la URL actual

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('register') === 'true') {
      setIsRegistering(true); //  muestra el formulario de registro automáticamente
       window.history.replaceState({}, '', '/login'); // Hace que en la url se limpie y se coloque solo /login
    }
  }, [location]);
  return (
    <>
      <div className="login-container">
        {/* Panel izquierdo fijo */}
        <div className="login-left">
          <Link to="/">
          <img
            src={logo}
            alt="ServiFly Logo"
            style={{
              width: '300px',
              marginBottom: '-1rem',
              marginRight: '25rem',
              marginTop: '-9rem'
            }}
          />
          </Link>
          <h1 style={{ marginTop: '5rem', marginBottom: '2rem' }}>
            Conecta con los expertos <br />
            más demandados en <br />
            el mundo para <strong style={{ color: '#0F1C2F' }}>resolver <br />
              tus problemas.</strong>
          </h1>
        </div>

        {/* Panel derecho con formulario */}
        <div className="login-right">
          <div className={`login-box ${isRegistering ? 'slide-in' : ''}`}>
            <img
              src={Icon}
              alt="ServiFly Logo"
              style={{ width: '80px', marginBottom: '-1rem', marginRight: '1.5rem', marginTop: '-0.5rem' }}
            />
            <h2 style={{ marginTop: '0.5rem' }}>
              {isRegistering ? '¡Crea tu cuenta!' : '¡Bienvenido de vuelta!'}
            </h2>

            <form>
              <div className="form">
                {isRegistering ? (
                  <>
                    <label htmlFor="nombres">Nombres</label>
                    <input type="text" id="nombres" placeholder="Nombres" />

                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" id="apellidos" placeholder="Apellidos" />

                    <label htmlFor="correo">Correo electrónico</label>
                    <input type="email" id="correo" placeholder="Correo electrónico" />

                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" id="telefono" placeholder="Teléfono" />

                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" id="direccion" placeholder="Dirección" />

                    <label htmlFor="nacimiento">Fecha de nacimiento</label>
                    <input type="date" id="nacimiento" />

                    <label htmlFor='password'>Contraseña</label>
                    <input type='password' id='password'/>

                    <label htmlFor='passwordRepeat'>Repita la Contraseña</label>
                    <input type='password' id='passwordRepeat' />

                    <div className="form-checkbox">
                      <input type="checkbox" id="terms" />
                      <label htmlFor="terms">
                        Acepto los <Link to="/Condiciones" target="_blank" style={{ color: '#004d4d'  }}>términos y servicios</Link>
                        </label>
                        </div>

                    <button type="submit">Registrarse</button>
                    <div className="links">
                      <a href="#" onClick={() => setIsRegistering(false)}>¿Ya tienes una cuenta? <strong>Inicia sesión</strong></a>
                    </div>
                  </>
                ) : (
                  <>
                    <label htmlFor="login">Email o nombre de usuario</label>
                    <input type="text" id="login" placeholder="Email o nombre de usuario" />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" placeholder="Contraseña" />

                    <button type="submit">Iniciar sesión</button>
                    <hr />

                    <button className="google">
                      <img src={logogoogle} alt="Google Logo" />
                      Continuar con Google
                    </button>

                    <button className="facebook">
                      <img src={logofacebook} alt="Facebook Logo" />
                      Continuar con Facebook
                    </button>

                    <div className="links">
                      <a href="#">¿Has olvidado tu contraseña?</a><br />
                      <a href="#" onClick={() => setIsRegistering(true)}>¿No tienes una cuenta? <strong>Regístrate</strong></a>
                    </div>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Complemento del  Footer */}
     
      <Footer /> 
      
    </>
  );
}

export default Login;