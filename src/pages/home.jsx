import '../styles/home.css';
import logo from '../assets/img/LogoBlanco.png';
import fondo1 from '../assets/img/fondo1.jpg';
import fondo2 from '../assets/img/fondo2.jpg';
import fondo3 from '../assets/img/fondo3.jpg';
import icono1 from '../assets/img/icono1.png';
import icono2 from '../assets/img/icono2.png';
import icono3 from '../assets/img/icono3.png';
import ilustracion from '../assets/img/ilustracion.png';
import Footer from '../components/footer.jsx';
import WhoAre from '../components/whoAre.jsx';
import Institutional from '../components/institucional.jsx'; 
import { useEffect, useState } from 'react';

const slides = [
  {
    image: fondo1,
    text: 'Bienvenido a la nueva manera de resolver tus problemas.',
  },
  {
    image: fondo2,
    text: 'Conecta con expertos en la mejor plataforma de servicios.',
  },
  {
    image: fondo3,
    text: 'Tu solución está a un clic de distancia.',
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* CARRUSEL */}
      <div className="home-carousel">
        <header className="navbar">
          <div className="logo">
            <img src={logo} alt="ServiFly Logo" />
          </div>
         
          <nav className="menu">
            <a href="/">Inicio</a>
            <a href="#institucional">Nosotros</a>
            <a href="/login?register=true">Regístrate</a>
            <a href="/login" className="login">Iniciar Sesión</a>
          </nav>
        </header>

        <div className="slider-container">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                className="slide"
                key={index}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="overlay">
                  <h1>{slide.text}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={idx === currentIndex ? 'active' : ''}
            ></span>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE SERVICIOS */}
      <section className="servicios">
        <h2 className="titulo-servicios">
          Algunos de nuestros servicios{' '}
        </h2>

        <div className="cards-servicios">
          <div className="card-servicio">
            <img src={fondo1} alt="Electricidad" />
            <div className="info">
              <h3>Electricidad</h3>
              <p>Servicios eléctricos confiables, rápidos y seguros cerca de ti.</p>
            </div>
          </div>

          <div className="card-servicio">
            <img src={fondo2} alt="Servicio TI" />
            <div className="info">
              <h3>Servicio TI</h3>
              <p>Soporte técnico, mantenimiento y soluciones digitales al alcance de tu mano.</p>
            </div>
          </div>

          <div className="card-servicio">
            <img src={fondo3} alt="Mecánico" />
            <div className="info">
              <h3>Mecánico</h3>
              <p>Reparación de vehículos, mantenimiento y asistencia mecánica a domicilio.</p>
            </div>
          </div>
        </div>

        <div className="ofrecemos-todo">
          <h2>
            <strong>En servifly te ofrecemos todo</strong>
          </h2>
          <p>
            Desde los mejores métodos de pago hasta los mejores profesionales y plataforma
            para que puedas tener la mejor atención
          </p>
        </div>
      </section>

      {/* SECCIÓN DE BENEFICIOS */}
      <section className="beneficios">
        <div className="beneficios-top">
          <div className="beneficio">
            <div className="circulo">
              <img src={icono1} alt="Icono 1" />
            </div>
            <p><strong>Profesionales<br />calificados</strong></p>
          </div>
          <div className="beneficio">
            <div className="circulo">
              <img src={icono2} alt="Icono 2" />
            </div>
            <p><strong>Plataforma<br />intuitiva y fácil</strong></p>
          </div>
          <div className="beneficio">
            <div className="circulo">
              <img src={icono3} alt="Icono 3" />
            </div>
            <p><strong>Crea y contrata<br />servicios</strong></p>
          </div>
        </div>

        
      </section>

      {/* SECCIÓN INSTITUCIONAL vision,mision,valores, etc */}
      <Institutional />

      {/* Seccion de quienes somos */}
      <div className="home-section">
        <WhoAre />
      </div>

      <section className="contacto-section">
  <div className="beneficios-main">
    <img src={ilustracion} alt="Ilustración" />
    <div className="texto-beneficio">
      <h2>Contáctanos</h2>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Gracias por tu mensaje!');
          e.target.reset();
        }}
      >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Tu email" required />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" rows="5" required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</section>



      {/* Footer, cada que se llama se debe pasar con la propiedad "bgColor" y pasarle el color */}
      <Footer bgColor="#fff" />
    </>
  );
}

export default Home;