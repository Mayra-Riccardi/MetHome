import { useState, useContext } from "react";
import { Context } from "../Context/Context";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import DB from "../../DB/DB.js";
import "./Chekcout.css";

const Checkout = () => {

  const [dataForm, setDataForm] = useState ({
    fullname: "",
    phone: "",
    email: "",
    company: "",
    address: "",
    province: "",
    country: "Argentina",
    message: "",
  })

  const [orderId, setOrderId] = useState(null);
  const {cart} = useContext(Context);


  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name] : event.target.value});
  }

  const sendOrder = (event) => {
    event.preventDefault();

    const products = cart.map((p) => ({
      id: p.id,
      name: p.name,
      quantity: p.quantity,
      category: p.category ?? null,
      // Mejor práctica: el código/SKU debe venir desde la DB (field `code`).
      code: p.code ?? null,
    }));

    const order = {
      buyer: { ...dataForm },
      products,
      status: "pendiente",
      createdAt: serverTimestamp(),
    };

  uploadOrder(order);
  }

  const uploadOrder = async(order) => {
    try {
      const orderRef = collection(DB, "orders");
      const response = await addDoc(orderRef, order);

      setOrderId(response.id);
      try {
        await fetch("/mailer.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "checkout",
            orderId: response.id,
            buyer: order.buyer,
            products: order.products,
          }),
        });
      } catch (error) {
        console.log("No se pudo enviar el email", error);
      }
    } catch (error) {
      console.log("Error al subir la solicitud", error)
    }
  }

  return (
    <div className="checkout-container">
      {
        orderId ?
        (
          <div className="checkout-success">
            <h2>Solicitud enviada correctamente</h2>
            <p>Conservá el código de solicitud: {orderId}</p>
          </div>
        ) : 
        (
        <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder}/>
        )
      }
    </div>
  )
}

export default Checkout;