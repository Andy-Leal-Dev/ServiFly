import { useState } from 'react';
import logo from '../assets/img/logo.png';
import logogoogle from '../assets/img/logogoogle.png';
import logofacebook from '../assets/img/logofacebook.png';
import Icon from '../assets/img/Icon.png';
import '../styles/login.css';

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      <div className="login-container">
        {/* Panel izquierdo fijo */}
        <div className="login-left">
          <img
            src={logo}
            alt="ServiFly Logo"
            style={{
              width: '300px',
              marginBottom: '-1rem',
              marginRight: '25rem',
              marginTop: '-10rem'
            }}
          />
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

                    <label htmlFor="cedula">Cédula</label>
                    <input type="text" id="cedula" placeholder="Cédula" />

                    <label htmlFor="correo">Correo electrónico</label>
                    <input type="email" id="correo" placeholder="Correo electrónico" />

                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" id="telefono" placeholder="Teléfono" />

                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" id="direccion" placeholder="Dirección" />

                    <label htmlFor="nacimiento">Fecha de nacimiento</label>
                    <input type="date" id="nacimiento" />

                    <div className="form-checkbox">
                      <input type="checkbox" id="terms" />
                      <label htmlFor="terms">Acepto los términos y servicios</label>
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

      {/* Footer */}
      <footer style={{
        backgroundColor: '#f2f2f2',
        color: '#0F1C2F',
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem'
      }}>
        <p> <strong>&copy; {new Date().getFullYear()} ServiFly. Todos los derechos reservados.</strong></p>
      </footer>
    </>
  );
}

export default Login;