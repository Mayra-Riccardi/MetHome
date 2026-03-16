import './App.css';
import NavBar from './components/navbar/NavBar';
import Navbarfirst from './components/Navbarfirst/Navbarfirst';
import ItemListContainer from './components/listcontainer/ItemListContainer';
import { ItemListWithSearch } from './components/ItemList/ItemList';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout/Chekcout';
import Footer from './components/footer/footer';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
import Contacto from './Pages/Contacto/Contacto';
import Nosotros from './Pages/Nosotros/Nosotros';

function App() {
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
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/nosotros" element={<Nosotros />} />
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