import { ItemList } from '../ItemList/ItemList';
import './itemlistcontainer.css';
import useProducts from "../../hooks/useProducts";
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const {category} = useParams();
  const {products, loading} = useProducts(category);

  return (
    <main className='ItemListContainer'>
      {
        loading ? <Loading /> : <ItemList products = {products} />
      }
    </main>
  )
}

export default ItemListContainer;