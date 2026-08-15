import './ItemDetail.css';
import Count from '../Count/Count';
import { useContext, useState } from 'react';
import { Context } from '../Context/Context';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product = {} }) => {
  const { addProductInCart } = useContext(Context);
  const [isAdded, setIsAdded] = useState(false);

  const addProduct = (quantity) => {
    addProductInCart({ ...product, quantity });
    setIsAdded(true);
  };

  return (
    <div className='pagedetail'>
      <div className='imgdetail'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='productdetail'>
        {product.category && <span className="detail-category">{product.category}</span>}
        <h1 className='titledetail'>{product.name}</h1>
        <hr className="detail-divider" />
        <p className='textdetail'>{product.description}</p>
        {isAdded ? (
          <Link to="/Cart" className="cartbutton">Ir al presupuesto →</Link>
        ) : (
          <Count addProduct={addProduct} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
