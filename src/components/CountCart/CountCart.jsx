import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import "./CountCart.css";

const CountCart = ({id, quantity, stock}) => {
    const [count, setCount] = useState(quantity);
    const {actualizarCantidad} = useContext(Context);

    const sumar = () => {
        if (count < stock) {
        const newCount = count + 1;
        setCount(newCount);
        actualizarCantidad(id, newCount);
        }
    };

    const restar = () => {
        if (count > 1) {
        const newCount = count - 1;
        setCount(newCount);
        actualizarCantidad(id, newCount);
        }
    };

    return (
        <div className="countcart">
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
        </div>
    );
    };

    export default CountCart;