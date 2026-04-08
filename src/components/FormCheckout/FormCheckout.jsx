import "./FormCheckout.css";

const FormCheckout = ({dataForm, handleChangeInput, sendOrder}) => {
  return (
    <form onSubmit={sendOrder} className="checkout-form">
        <h2>Solicitud de presupuesto</h2>
        <p className="checkout-subtitle">Completá tus datos para enviar la consulta.</p>

        <div className="checkout-row">
          <label className="checkout-field">
            <span>Nombre y apellido</span>
            <input
              type="text"
              name="fullname"
              value={dataForm.fullname}
              onChange={handleChangeInput}
              placeholder="Nombre y apellido"
              autoComplete="name"
              required
            />
          </label>
        </div>

        <div className="checkout-row checkout-row--2">
          <label className="checkout-field">
            <span>Celular</span>
            <input
              type="tel"
              name="phone"
              value={dataForm.phone}
              onChange={handleChangeInput}
              placeholder="+54 9 11 1234-1234"
              autoComplete="tel"
              required
            />
          </label>

          <label className="checkout-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChangeInput}
              placeholder="correo@ejemplo.com"
              autoComplete="email"
              required
            />
          </label>
        </div>

        <div className="checkout-row checkout-row--2">
          <label className="checkout-field">
            <span>Empresa</span>
            <input
              type="text"
              name="company"
              value={dataForm.company}
              onChange={handleChangeInput}
              placeholder="Empresa"
              autoComplete="organization"
              required
            />
          </label>

          <label className="checkout-field">
            <span>Provincia</span>
            <input
              type="text"
              name="province"
              value={dataForm.province}
              onChange={handleChangeInput}
              placeholder="Provincia"
              autoComplete="address-level1"
              required
            />
          </label>
        </div>

        <div className="checkout-row checkout-row--2">
          <label className="checkout-field">
            <span>Dirección</span>
            <input
              type="text"
              name="address"
              value={dataForm.address}
              onChange={handleChangeInput}
              placeholder="Dirección"
              autoComplete="street-address"
              required
            />
          </label>

          <label className="checkout-field">
            <span>País</span>
            <select
              name="country"
              value={dataForm.country}
              onChange={handleChangeInput}
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
        </div>

        <label className="checkout-field">
          <span>Mensaje</span>
          <textarea
            name="message"
            value={dataForm.message ?? ""}
            onChange={handleChangeInput}
            rows={5}
            placeholder="Comentanos en qué podemos ayudarte"
            required
          />
        </label>

        <div className="checkout-actions">
          <button type="submit">Enviar solicitud</button>
        </div>
    </form>
  )
};

export default FormCheckout;