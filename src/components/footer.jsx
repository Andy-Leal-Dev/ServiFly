import facebookIcon from '../assets/img/logofacebook.png'; 
import xIcon from '../assets/img/logotwitterx.png';
import tiktokIcon from '../assets/img/logotiktok.png';
import instagramIcon from '../assets/img/logoinstagram.png'
import '../styles/footer.css'

function Footer({ bgColor = '#f2f2f2' }) {
  return (
   <footer className="footer" style={{ backgroundColor: bgColor }}>
  <p><strong>&copy; {new Date().getFullYear()} ServiFly. Todos los derechos reservados.</strong></p>
  <div className="footer-icons">
    <a
      href="https://www.facebook.com/profile.php?id=61577690067633"
      target="_blank"
      rel="noopener noreferrer"
      className="tooltip" 
      data-tooltip="Visítanos en Facebook"
    >
      <img src={facebookIcon} alt="Facebook" />
    </a>
    <a
      href="https://x.com/FlyServi"
      target="_blank"
      rel="noopener noreferrer"
      className='tooltip'
      data-tooltip="Síguenos en X (Twitter)"
    >
      <img src={xIcon} alt="X" />
    </a>
    <a
      href="https://www.tiktok.com/@servifly?lang=es-419"
      target="_blank"
      rel="noopener noreferrer"
      className='tooltip'
      data-tooltip="Míranos en TikTok"
    >
      <img src={tiktokIcon} alt="TikTok" />
    </a>
    <a
      href="https://www.instagram.com/servifly_sj?igsh=MXZwMTd4dGJ3bzN4bg=="
      target="_blank"
      rel="noopener noreferrer"
      className='tooltip'
      data-tooltip="Visita nuestro Instagram"
    >
      <img src={instagramIcon} alt="Instagram" />
    </a>
  </div>
  <p className="footer-slogan">Tu conexión directa con servicios confiables cerca de ti.</p>
  <a href="/Condiciones" class="footer-link">
  Términos y Condiciones
  </a><br/>
  <a href="/Politics" class="footer-link">
  Politicas de Privacidad
  </a>
</footer>
  );
}

export default Footer;