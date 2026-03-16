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
                        <Link to="/category/gas">Gas</Link>
                    </li>
                    <li>
                        <Link to="/category/aire">Aire</Link>
                    </li>
                    <li>
                        <Link to="/category/programadores">Programadores</Link>
                    </li>
                    <li>
                        <Link to="/category/quemadores">Quemadores</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;
