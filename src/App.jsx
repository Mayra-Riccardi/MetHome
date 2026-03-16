import './App.css';
import NavBar from './components/navbar/NavBar';
import Navbarfirst from './components/Navbarfirst/Navbarfirst';
import ItemListContainer from './components/listcontainer/ItemListContainer';
import { ItemListWithSearch } from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './components/Context/Context';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout/Chekcout';
import Footer from './components/footer/footer';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import Contacto from './Pages/Contacto/Contacto';

function App() {
  console.log("PROJECT ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);
  const location = useLocation();
  const showProductsNav = location.pathname.startsWith("/category");

  return (
        <div className="app-container">
          <Navbarfirst />
          {showProductsNav && <NavBar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Service' element={<Service />} />
            <Route path="/category" element={<ItemListWithSearch />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='*' element={<div>Error 404</div>} />
          </Routes>
          <Footer />
        </div>
  );
}

export default App;