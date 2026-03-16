import './ItemDetail.css';
import Count from '../Count/Count';
import { useContext, useState } from 'react';
import { Context } from '../Context/Context';
import { Link } from 'react-router-dom';

const ItemDetail = ({product = {}}) => {
  const {addProductInCart} = useContext(Context);

  const [isAdded, setIsAdded] = useState(false);

  const addProduct = (quantity) => {  
    const productCart = {...product, quantity};
      addProductInCart (productCart);
      setIsAdded(true);
  }

  return (
    <div className='pagedetail'>
        <div className='imgdetail'>
          <img src={product.image} alt="Imagen del producto" />
        </div>
        <div className='productdetail'>
          <p className='titledetail'>{product.name}</p>
          <p className='textdetail'>{product.description}</p>
          <div>
            {
              isAdded ?
                (
                  <div>
                    <Link to="/Cart" className="cartbutton">Ir al presupuesto</Link>
                  </div>
                )
                :
                (
                  <Count stock={product.stock} addProduct={addProduct}/>
                )
            }
          </div>
        </div>
    </div>
  )
}

export default ItemDetail;