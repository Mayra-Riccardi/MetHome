import "./footer.css";
import metlogo from "../../assets/logo_met.svg";
import { Link } from "react-router-dom";

const IconWhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.858L.057 23.476a.75.75 0 0 0 .927.928l5.688-1.49A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.852 0-3.587-.5-5.082-1.375l-.361-.214-3.737.979.997-3.645-.235-.374A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const IconEmail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const IconPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">

        <div className="footer__brand">
          <img src={metlogo} alt="Logo MET" className="footer__logo-img" />
          <p className="footer__tagline">
            Verificación y mantenimiento industrial.<br />
            Más de 35 años de trayectoria.
          </p>
          <div className="footer__social">
            <a href="https://wa.me/5491131716356" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <IconWhatsApp />
            </a>
            <a href="mailto:mtysko111@gmail.com" aria-label="Email">
              <IconEmail />
            </a>
            <a href="https://ar.linkedin.com/in/marcelo-eduardo-tysko-97a31a31" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <IconLinkedIn />
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Service">Servicios</Link></li>
            <li><Link to="/category">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul>
            <li>
              <a href="https://wa.me/5491131716356" target="_blank" rel="noreferrer" className="footer__contact-link">
                <IconWhatsApp /> +54 9 11 3171-6356
              </a>
            </li>
            <li>
              <a href="mailto:mtysko111@gmail.com" className="footer__contact-link">
                <IconEmail /> mtysko111@gmail.com
              </a>
            </li>
            <li>
              <a href="https://ar.linkedin.com/in/marcelo-eduardo-tysko-97a31a31" target="_blank" rel="noreferrer" className="footer__contact-link">
                <IconLinkedIn /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Ubicación</h4>
          <ul>
            <li className="footer__contact-link">
              <IconPin /> Pilar del Este, Buenos Aires
            </li>
            <li>Argentina</li>
          </ul>
        </div>

      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} MET · Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
