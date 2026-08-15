import { useState } from "react";
import "./Count.css";

const Count = ({ addProduct }) => {
    const [count, setCount] = useState(1);

    return (
        <div className="count-controls">
            <button className="count-btn" onClick={() => count > 1 && setCount(count - 1)}>−</button>
            <p className="count-value">{count}</p>
            <button className="count-btn" onClick={() => setCount(count + 1)}>+</button>
            <button className="add-btn" onClick={() => addProduct(count)}>Agregar al presupuesto</button>
        </div>
    );
};

export default Count;
