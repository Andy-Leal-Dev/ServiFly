import logo from '../assets/img/logo.png';
import logogoogle from '../assets/img/logogoogle.png';
import logofacebook from '../assets/img/logofacebook.png';
import Icon from '../assets/img/Icon.png';
import '../styles/login.css';
function App() {
  return (
    <>
      <div className="login-container">
        <div className="login-left">
          <img src={logo} alt="ServiFly Logo" style={{ width: '300px', marginBottom: '-1rem', marginRight: '25rem', marginTop: '-10rem' }} />
          <h1 style={{ marginTop: '5rem', marginBottom: '2rem' }}>
            Conecta con los expertos <br />
            más demandados en <br />
            el mundo para <strong style={{ color: '#0F1C2F' }}>resolver <br />
            tus problemas.</strong>
          </h1>
        </div>

        <div style={{ marginTop: '3rem', marginRight: '2rem', marginBottom: '2rem' }} className="login-right">
          <div className="login-box">
            <img src={Icon} alt="ServiFly Logo" style={{ width: '80px', marginBottom: '-1rem', marginRight: '1.5rem', marginTop: '-0.5rem' }} />
            <h2 style={{ marginTop: '0.5rem' }}>¡Bienvenido de <br /> vuelta!</h2>
            <form>
              <div style={{ marginTop: '-0.5rem' }} className="form">
                <p style={{ marginRight: '1rem' }}><strong>Email o nombre de usuario</strong></p>
                <input type="text" placeholder="Email o nombre de usuario" />
                <p className='Indicaciones'><strong>Contraseña</strong></p>
                <input type="password" placeholder="Contraseña" />
                <button style={{ marginTop: '0.5rem' }} type="submit">Iniciar Sesión</button>
                <hr style={{ marginTop: '-0.5rem' }} />
                <button style={{ marginTop: '-0.5rem' }} className="google">
                  <img src={logogoogle} alt="Google Logo" style={{ width: '20px', textAlign: 'left', marginRight: '10px' }} />
                  Continuar con Google
                </button>
                <button style={{ marginTop: '-0.5rem' }} className="facebook">
                  <img src={logofacebook} alt="Facebook Logo" style={{ width: '20px', marginRight: '10px' }} />
                  Continuar con Facebook
                </button>
                <div style={{ marginTop: '-0.5rem' }} className="links">
                  <a style={{ marginTop: '-0.5rem' }} href="#">¿Has olvidado tu contraseña?</a><br />
                  <a href="#">¿No tienes una cuenta? <strong>Regístrate</strong></a>
                </div>
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

export default App;