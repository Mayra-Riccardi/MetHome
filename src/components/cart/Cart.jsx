import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import CountCart from "../CountCart/CountCart";
import "./cart.css";

const Cart = () => {
    const {cart, eliminarproductoById, deleteCart} = useContext(Context);

    if (cart.length === 0) {
        return (
            <div>
                <h2>No hay productos para presupuestar</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div className="cartmax">
            <h2>Mi solicitud de presupuesto</h2>
            {
                cart.map((productCart) => (
                    <div key={productCart.id} className="cart-conteiner">
                        <div>
                            <img src={productCart.image} alt="imagen" width={100}/>
                        </div>
                        <div>
                            <p>{productCart.name}</p>
                        </div>
                        <div>
                            <CountCart id={productCart.id} quantity={productCart.quantity} stock={productCart.stock}/>
                        </div>
                        <div>
                            {productCart.category ? <p>Categoría: {productCart.category}</p> : null}
                            {productCart.code || productCart.codigo ? (
                                <p>Código: {productCart.code ?? productCart.codigo}</p>
                            ) : null}
                        </div>
                        <div>
                            <button onClick={ () => {eliminarproductoById(productCart.id)}}>Eliminar</button>
                        </div>
                    </div>
                ))
            }
            <Link to="/Checkout">Continuar</Link>
            <button onClick={deleteCart}>Vaciar selección</button>
        </div>
    )
};

export default Cart;