import { Link } from "react-router-dom";
import './Item.css';

//conviene desestructurarlo para no tener que colocar props. y cada dato del producto tambien colocar props.product....
const Item = ({product}) => {
    return (
        <div className="card">
            <div className="card-img">
                <img className="item-img" src={product.image} alt="image product" />
            </div>
            <div className="Description">
                <ul>
                    <li><h3>{product.name}</h3></li>
                    <li>{product.description}</li>
                    <li>
                        <Link to={"/detail/" + product.id}>Detalle del producto</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Item;