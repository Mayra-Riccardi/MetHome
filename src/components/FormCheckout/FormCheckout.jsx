import React from 'react'
import "./FormCheckout.css";

const FormCheckout = ({dataForm, handleChangeInput, sendOrder}) => {
  return (
    <form onSubmit={sendOrder} className="checkout-form">
        <h2>Solicitud de presupuesto</h2>
        <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="Nombre completo"></input>
        <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="Numero de telefono"></input>
        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="Correo electrónico"></input>
        <button type="submit">Enviar solicitud</button>
    </form>
  )
};

export default FormCheckout;