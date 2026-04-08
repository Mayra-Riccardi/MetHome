import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ product }) => {
    return (
        <div className="card">
            <div className="card-img">
                <img className="item-img" src={product.image} alt={product.name} />
            </div>
            <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-desc">{product.description}</p>
                <Link to={"/detail/" + product.id} className="card-link">
                    Ver detalle
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Item;
