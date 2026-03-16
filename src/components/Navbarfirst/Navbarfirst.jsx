import "./Navbarfirst.css";
import CartWidget from "../CartWidget/CartWidget";
import metlogo from "../../assets/logo2.png";
import { Form, Link } from "react-router-dom";

const Navbarfirst = () => {
    return(
        <header>
            <div className="primeralinea"></div>
            <div className="segundalinea">
                <div className="recuadro">
                    <Link className="logo" to="/">
                            <img src= {metlogo} width="120" height="120" alt="Logo MET" />
                    </Link>
                </div>
                <nav className="navbar">
                    <div className="navgral">
                        <ul className="navlinks">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Service">Servicios</Link>
                            </li>
                            <li>
                                <Link to="/category">Productos</Link>
                            </li>
                            <li>
                                <Link to="/Nosotros">Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/Contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="navcart">
                        <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default Navbarfirst;
