import "./Nosotros.css";

const Nosotros = () => {
  return (
    <main className="about">
      <section className="about-hero">
        <div className="about-hero__content">
          <h1>Nosotros</h1>
          <p>
            Somos MET. Acompañamos a la industria con servicios de verificación,
            mantenimiento y optimización para mejorar la confiabilidad de tus
            equipos.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-card">
          <h2>Nuestra misión</h2>
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
      </section>
    </main>
  );
};

export default Nosotros;