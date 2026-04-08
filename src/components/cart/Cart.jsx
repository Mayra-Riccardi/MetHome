import { useContext } from "react";
import { Context } from "../Context/Context";
import { Link } from "react-router-dom";
import CountCart from "../CountCart/CountCart";
import "./cart.css";

const Cart = () => {
    const { cart, eliminarproductoById, deleteCart } = useContext(Context);

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                <h2>Tu selección está vacía</h2>
                <p>Explorá nuestro catálogo y agregá los productos que necesitás presupuestar.</p>
                <Link to="/category" className="cart-empty__btn">Ver productos</Link>
            </div>
        );
    }

    return (
        <div className="cartmax">
            <div className="cart-header">
                <h2>Solicitud de presupuesto</h2>
                <button className="cart-clear" onClick={deleteCart}>Vaciar selección</button>
            </div>

            <div className="cart-list">
                {cart.map((productCart) => (
                    <div key={productCart.id} className="cart-item">
                        <div className="cart-item__img">
                            <img src={productCart.image} alt={productCart.name} />
                        </div>
                        <div className="cart-item__info">
                            <p className="cart-item__name">{productCart.name}</p>
                            {productCart.category && (
                                <p className="cart-item__category">{productCart.category}</p>
                            )}
                            {productCart.code && (
                                <p className="cart-item__code">Código: {productCart.code}</p>
                            )}
                        </div>
                        <div className="cart-item__qty">
                            <CountCart id={productCart.id} quantity={productCart.quantity} stock={productCart.stock} />
                        </div>
                        <button className="cart-item__remove" onClick={() => eliminarproductoById(productCart.id)} aria-label="Eliminar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="3 6 5 6 21 6"/>
                                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                                <path d="M10 11v6M14 11v6"/>
                                <path d="M9 6V4h6v2"/>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-footer">
                <span className="cart-footer__count">{cart.length} producto{cart.length !== 1 ? "s" : ""} seleccionado{cart.length !== 1 ? "s" : ""}</span>
                <Link to="/Checkout" className="cart-footer__btn">Continuar →</Link>
            </div>
        </div>
    );
};

export default Cart;
