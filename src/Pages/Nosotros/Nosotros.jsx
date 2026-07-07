import "./Nosotros.css";
import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-hero__content">
          <div className="about-kicker">MET · Servicios industriales</div>
          <h1>Nosotros</h1>
          <p>
            Somos MET. Acompañamos a la industria con servicios de verificación,
            mantenimiento y optimización para mejorar la confiabilidad de tus
            equipos.
          </p>

          <div className="about-hero__actions">
            <Link className="about-btn about-btn--primary" to="/Contacto">
              Pedir presupuesto
            </Link>
            <Link className="about-btn about-btn--ghost" to="/Service">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      <section className="about-container">
        <div className="about-stats">
          <div className="about-stat">
            <div className="about-stat__value">38</div>
            <div className="about-stat__label">Años de trayectoria</div>
          </div>
          <div className="about-stat">
            <div className="about-stat__value">183+</div>
            <div className="about-stat__label">Empresas acompañadas</div>
          </div>
          <div className="about-stat">
            <div className="about-stat__value">52</div>
            <div className="about-stat__label">Paises donde prestamos servicios</div>
          </div>
        </div>

        <section className="about-section">
        <div className="about-card">
          <h2>Misión</h2>
          <p>
            Brindar soluciones técnicas con foco en seguridad, eficiencia y
            continuidad operativa.
          </p>
        </div>

        <div className="about-card">
          <h2>Qué hacemos</h2>
          <ul>
            <li>Mantenimiento y puesta a punto de quemadores</li>
            <li>Automatizaciones y actualizaciones</li>
            <li>Protocolos y verificaciones de seguridad</li>
            <li>Análisis de combustión e informes</li>
            <li>Mejoras de eficiencia energética</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Cómo trabajamos</h2>
          <p>
            Relevamos, medimos, documentamos y proponemos acciones concretas.
            Priorizamos intervenciones claras, trazables y seguras.
          </p>
        </div>

        <div className="about-card about-card--wide">
          <h2>Valores</h2>
          <div className="about-values">
            <div className="about-value">
              <div className="about-value__icon" aria-hidden="true" />
              <div>
                <h3>Seguridad</h3>
                <p>Protocolos claros, verificación y trazabilidad.</p>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value__icon about-value__icon--alt" aria-hidden="true" />
              <div>
                <h3>Confiabilidad</h3>
                <p>Medición, diagnóstico y mejoras con impacto real.</p>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value__icon about-value__icon--dark" aria-hidden="true" />
              <div>
                <h3>Respuesta</h3>
                <p>Acompañamiento técnico y comunicación directa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="about-cta">
          <div className="about-cta__content">
            <h2>¿Querés que lo evaluemos juntos?</h2>
            <p>
              Contanos tu necesidad y armamos una propuesta a medida para tu
              instalación.
            </p>
          </div>
          <Link className="about-btn about-btn--primary" to="/Contacto">
            Contactarnos
          </Link>
        </section>
      </section>
    </main>
  );
};

export default Nosotros;