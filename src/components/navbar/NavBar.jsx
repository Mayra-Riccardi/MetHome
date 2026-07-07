import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <header>
            <nav className="navbarproduct">
                <ul className="navlinksprod">
                    <li>
                        <Link to="/category">Todos</Link>
                    </li>
                    <li>
                        <Link to="/category/controladores">Controladores</Link>
                    </li>
                    <li>
                        <Link to="/category/medicion">Medición y optimización de combustión</Link>
                    </li>
                    <li>
                        <Link to="/category/control">Control integral de calderas</Link>
                    </li>
                    <li>
                        <Link to="/category/sensores">Sensores de llama</Link>
                    </li>
                    <li>
                        <Link to="/category/servosvalvulas">Válvulas y servomotores</Link>
                    </li>
                    <li>
                        <Link to="/category/pilotos">Pilotos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
