import "./Contacto.css";

const Contacto = () => {
  return (
    <main className="contact">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <div className="contact-kicker">MET · Contacto</div>
          <h1>Contactanos</h1>
          <p>
            Enviá tus dudas o consultas sobre productos o servicios. Te
            responderemos a la brevedad por el medio que prefieras.
          </p>

          <div className="contact-hero__mini">
            <div className="contact-mini">
              <div className="contact-mini__label">Ubicación</div>
              <div className="contact-mini__value">Pilar del este · Buenos Aires</div>
            </div>
            <div className="contact-mini">
              <div className="contact-mini__label">Email</div>
              <a className="contact-mini__value" href="mailto:mtysko111@gmail.com">
                mtysko111@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-container">
        <div className="contact-card">
          <div className="contact-card__grid">
            <div className="contact-card__main">
              <h2>Formulario</h2>
              <p className="contact-card__subtitle">
                Completá tus datos y contanos en qué podemos ayudarte.
              </p>

              <form className="contact-form">
                <label className="contact-field">
                  <span>Nombre y apellido</span>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Nombre y apellido"
                    autoComplete="name"
                    required
                  />
                </label>

                <div className="contact-row">
                  <label className="contact-field">
                    <span>Celular</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+54 9 11 1234-1234"
                      autoComplete="tel"
                      required
                    />
                  </label>

                  <label className="contact-field">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="correo@ejemplo.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label className="contact-field">
                  <span>País</span>
                  <select name="country" defaultValue="Argentina" required>
                    <option value="Argentina">Argentina</option>
                    <option value="Chile">Chile</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Brasil">Brasil</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Perú">Perú</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                  </select>
                </label>

                <label className="contact-field">
                  <span>Mensaje</span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Comentanos en qué podemos ayudarte"
                    required
                  />
                </label>

                <div className="contact-actions">
                  <button
                    className="contact-btn contact-btn--primary"
                    type="submit"
                  >
                    Enviar
                  </button>
                  <button className="contact-btn contact-btn--ghost" type="reset">
                    Limpiar
                  </button>
                </div>
              </form>
            </div>

            <aside className="contact-card__side" aria-label="Datos de contacto">
              <h3>Datos de contacto</h3>
              <div className="contact-side__items">
                <div className="contact-side__item">
                  <div className="contact-side__label">WhatsApp</div>
                  <a className="contact-side__value" href="https://wa.me/5491131716356">
                    +54 9 11 3171-6356
                  </a>
                </div>

                <div className="contact-side__item">
                  <div className="contact-side__label">Email</div>
                  <a className="contact-side__value" href="mailto:mtysko111@gmail.com">
                    mtysko111@gmail.com
                  </a>
                </div>

                <div className="contact-side__item">
                  <div className="contact-side__label">Ubicación</div>
                  <div className="contact-side__value">
                    Pilar del este<br />
                    Pilar, Buenos Aires<br />
                    Argentina
                  </div>
                </div>

                <div className="contact-side__item">
                  <div className="contact-side__label">LinkedIn</div>
                  <a className="contact-side__value" href="#" aria-disabled="true">
                    Próximamente
                  </a>
                </div>
              </div>

              <div className="contact-side__note">
                Respondemos a la brevedad. Si es urgente, escribinos por WhatsApp.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
};

export default Contacto;