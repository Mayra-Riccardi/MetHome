import "./navbar.css";
import { NavLink } from "react-router-dom";

const categories = [
    { path: "/category", label: "Todos", end: true },
    { path: "/category/controladores", label: "Controladores" },
    { path: "/category/medicion", label: "Medición y optimización de combustión" },
    { path: "/category/control", label: "Control integral de calderas" },
    { path: "/category/sensores", label: "Sensores de llama" },
    { path: "/category/servosvalvulas", label: "Válvulas y servomotores" },
    { path: "/category/pilotos", label: "Pilotos" },
];

const NavBar = () => {
    return (
        <nav className="navbarproduct" aria-label="Categorías de productos">
            <ul className="navlinksprod">
                {categories.map(({ path, label, end }) => (
                    <li key={path}>
                        <NavLink
                            to={path}
                            end={end}
                            className={({ isActive }) => (isActive ? "category-tab active" : "category-tab")}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
