import "./Menu.css";
import {NavLink} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Menu() {
    return (
        <div className="Menu">
            <div className="menu-header"><i className="bi bi-three-dots-vertical"></i><span>Menu</span></div>
            <NavLink to="/home" className="nav-link"><i className="bi bi-house-door-fill"></i> Home</NavLink>
            <NavLink to="/products" end className="nav-link"><i className="bi bi-fork-knife"></i>Products</NavLink>
            <NavLink to="/products/new" className="nav-link"><i className="bi bi-plus-lg"></i>Add</NavLink>
            <NavLink to="/employees" className="nav-link"><i className="bi bi-people"></i>Employees</NavLink>
            <NavLink to="/about" className="nav-link"><i className="bi bi-info-lg"></i>About</NavLink>
            <NavLink to="/contact-us" className="nav-link"><i className="bi bi-person-rolodex"></i>Contact</NavLink>
        </div>
    );
}
