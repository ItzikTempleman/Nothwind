import "./Menu.css";
import {NavLink} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Menu() {
    return (
        <div className="Menu">


            <NavLink to="/home" className="nav-link">Home</NavLink>
            <hr className="menu-divider" />
            <NavLink to="/products/new" className="nav-link">Add new product</NavLink>
            <NavLink to="/products" end className="nav-link">Products</NavLink>
            <hr className="menu-divider" />
            <NavLink to="/employees/new" className="nav-link">Add new employee</NavLink>
            <NavLink to="/employees" end className="nav-link">Employees</NavLink>
            <hr className="menu-divider" />
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact-us" className="nav-link">Contact us</NavLink>
        </div>
    );
}
