import { useState } from "react";
import useProducts from "../hooks/useProducts";
import './hocFilterProducts.css';

const hocFilterProducts = (Component) => {

  return function () {
    const [query, setQuery] = useState("");
    const { products, loading} = useProducts();

    //DECLARAMOS EL IMPUT PARA LA BUSQUEDA DEL PRODUCTO
    //DECLARAMOS EL EVENTO ONCHANGE QUE VA A SER MANEJADO POR LA FUNCION
    const changeInput = (event) => {
      setQuery(event.target.value.toLowerCase());
    };

    // con la funcion sarch recibo la lista de productos. y lo vamos a guardar en la variable filterproducts.. Lo vamos a filtrar el array con el metodo.filter por lo que el usuario valla escribiendo en el input (query)
    // buscamos po nombre y usamos lowercase para pasarlo en minisculas y el include para verificar que este dentro del nombre
    const search = (productsList) => {
      const filterProducts = productsList.filter((product) => {
        return product.name.toLowerCase().includes(query);
      });

      return filterProducts;
    };


    //event posee la informacion del evento y lo capturo con target y tomo el valor con value (obtengo el valor actual del input) y lo guardamos en mi variable de estado setQuery
      return(
        <div className="products-page">
          <div className="search-bar">
            <input type="text" placeholder="Buscar producto" onChange={changeInput}/>
          </div>
          <Component products={search(products)} />
        </div>
      )
  }
}

export default hocFilterProducts;