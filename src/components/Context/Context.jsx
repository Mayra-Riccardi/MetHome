import { createContext, useState } from "react";
import Swal from 'sweetalert2';

const Context = createContext();
  
const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (product) => {
    const alreadyInCart = cart.some((item) => item.id === product.id);
  
    if (alreadyInCart) {
      Swal.fire({
        icon: 'info',
        title: 'El producto ya está en el presupuesto',
        text: `${product.name} ya está en tu selección.`,
        confirmButtonColor: '#4CAF50'
      });
    } else {
      setCart([...cart, product]);
  
      Swal.fire({
        icon: 'success',
        title: 'Producto agregado',
        text: `${product.name} fue añadido al presupuesto.`,
        confirmButtonColor: '#4CAF50'
      });
    }
  };
  
  const totalQuantity = () => {
    const total = cart.reduce((total, product) => total + product.quantity, 0);
    return total;
  };

  const totalPrice = () => {
    const total = cart.reduce((total, product) => total + (product.quantity * product.price), 0);
    return total;
  };

  const eliminarproductoById = (id) => {
    const productoEliminado = cart.filter((product) => product.id !== id);
    setCart(productoEliminado);
  };

  const actualizarCantidad = (id, nuevaCantidad) => {
    const actualizarCarrito = cart.map((product) => {
      if (product.id === id) {
        return {...product, quantity: nuevaCantidad};
      }
    return product;
    });
    setCart(actualizarCarrito)
  };

  const deleteCart = () => {
    setCart([])
  };

  return (
    <Context.Provider value={{cart, addProductInCart, totalQuantity, totalPrice, eliminarproductoById, actualizarCantidad, deleteCart}}>
        {children}
    </Context.Provider>
  )
};

export {Context, CartProvider};