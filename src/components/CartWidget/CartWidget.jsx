import carrito from"../../assets/carrito.jpg";
import "./CartWidget.css";
import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const {totalQuantity} = useContext(Context);

  return (
    <Link to="/Cart" className="cartwidget">
        <img src= {carrito} width="50" height="50" alt="Presupuesto" />
        <span className="cart-badge">{totalQuantity()}</span>
    </Link>
  );
};

export default CartWidget;