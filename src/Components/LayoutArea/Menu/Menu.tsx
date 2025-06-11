import "./Menu.css";
import {NavLink} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Menu() {
    return (
        <div className="Menu">


            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact-us" className="nav-link">Contact us</NavLink>

            <NavLink to="/products/new" className="nav-link">Add new product</NavLink>
            <NavLink to="/products" end className="nav-link">Products</NavLink>

            <NavLink to="/employees/new" className="nav-link">Add new product</NavLink>
            <NavLink to="/employees" className="nav-link"end>Employees</NavLink>


        </div>
    );
}
