import "./Navbarfirst.css";
import CartWidget from "../CartWidget/CartWidget";
import metlogo from "../../assets/logo_met.svg";
import { Link, NavLink } from "react-router-dom";

const Navbarfirst = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Link className="header__logo" to="/">
                    <img src={metlogo} alt="Logo MET" className="header__logo-img" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__links">
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/Service">Servicios</NavLink></li>
                        <li><NavLink to="/category">Productos</NavLink></li>
                        <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                        <li><NavLink to="/Contacto">Contacto</NavLink></li>
                    </ul>
                </nav>
                <div className="header__cart">
                    <CartWidget />
                </div>
            </div>
        </header>
    );
};

export default Navbarfirst;
