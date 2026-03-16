import { useState } from "react";
import "./Count.css";

const Count = ({stock, addProduct}) => {
    const [count, setCount] = useState(1);

    const handleClickDecrement = ()=> {
        if(count >= 1){
            setCount(count - 1);
        }
    };

    const handleClickIncrement = ()=> {
        if(count < stock){
            setCount(count + 1);
        }
    };

  return (
    <div className="count-controls">
        <button onClick={handleClickDecrement}>-</button>
        <p> {count} </p>
        <button onClick={handleClickIncrement}>+</button>
        <button onClick={ () => addProduct(count) }>Agregar al presupuesto</button>
    </div>
  )
};

export default Count;