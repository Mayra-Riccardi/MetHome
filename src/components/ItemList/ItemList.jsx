import Item from '../Item/Item';
import hocFilterProducts from '../../hoc/hocFilterProducts';
import './ItemList.css';

const ItemList = ({products = []}) => {
  return (
    <div className='itemlist'>
      {
        products.map((product) => (
          <Item product = {product} key={product.id} />
        ))
      }
      
    </div>
  )
};

//creamos una variable que sea igual a la ejecución de nuestro hoc con el componente ItemList.
const ItemListWithSearch = hocFilterProducts(ItemList);

//Devolvemos el item list y el item list con la barrita de busqueda
export {ItemList, ItemListWithSearch};
