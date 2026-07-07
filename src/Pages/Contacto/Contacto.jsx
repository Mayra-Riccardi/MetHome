import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../DB/DB.js";
import Swal from "sweetalert2";
import "./Contacto.css";

const INITIAL_FORM = {
  fullname: "",
  phone: "",
  email: "",
  country: "Argentina",
  message: "",
};

const Contacto = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, {
        ...form,
        createdAt: serverTimestamp(),
      });

      await fetch("/mailer.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form }),
      });

      Swal.fire({
        icon: "success",
        title: "Consulta enviada",
        text: "Te responderemos a la brevedad.",
        confirmButtonColor: "#dc143c",
      });

      setForm(INITIAL_FORM);
    } catch (error) {
      console.error("Error al enviar consulta", error);
      Swal.fire({
        icon: "error",
        title: "Error al enviar",
        text: "No se pudo enviar la consulta. Intentá de nuevo.",
        confirmButtonColor: "#dc143c",
      });
    } finally {
      setSending(false);
    }
  };

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
              <div className="contact-mini__value">Pilar · Buenos Aires</div>
            </div>
            <div className="contact-mini">
              <div className="contact-mini__label">Email</div>
              <a className="contact-mini__value" href="mailto:gonzalotysko@gmail.com">
                gonzalotysko@gmail.com
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

              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-field">
                  <span>Nombre y apellido</span>
                  <input
                    type="text"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
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
                      value={form.phone}
                      onChange={handleChange}
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
                      value={form.email}
                      onChange={handleChange}
                      placeholder="correo@ejemplo.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label className="contact-field">
                  <span>País</span>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                  >
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
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Comentanos en qué podemos ayudarte"
                    required
                  />
                </label>

                <div className="contact-actions">
                  <button
                    className="contact-btn contact-btn--primary"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "Enviando..." : "Enviar"}
                  </button>
                  <button
                    className="contact-btn contact-btn--ghost"
                    type="reset"
                    onClick={() => setForm(INITIAL_FORM)}
                    disabled={sending}
                  >
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
                  <a className="contact-side__value" href="https://wa.me/5491121872412">
                    +54 9 11 2187-2412
                  </a>
                </div>

                <div className="contact-side__item">
                  <div className="contact-side__label">Email</div>
                  <a className="contact-side__value" href="mailto:mtysko111@gmail.com">
                    mtysko111@gmail.com
                  </a>
                  <a className="contact-side__value" href="mailto:gonzalotysko@gmail.com">
                    gonzalotysko@gmail.com
                  </a>
                </div>

                <div className="contact-side__item">
                  <div className="contact-side__label">Ubicación</div>
                  <div className="contact-side__value">
                    Pilar, Buenos Aires<br />
                    Argentina
                  </div>
                </div>

                <div className="contact-side__item">
                  <div className="contact-side__label">LinkedIn</div>
                  <a
                    className="contact-side__value"
                    href="https://ar.linkedin.com/in/marcelo-eduardo-tysko-97a31a31"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver perfil
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
  );
};

export default Contacto;
