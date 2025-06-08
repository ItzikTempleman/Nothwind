import "./Menu.css";
import {NavLink} from "react-router-dom";

export function Menu() {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/products" end>Products</NavLink>
            <NavLink to="/products/new">Add Product</NavLink>
            <NavLink to="/employees">Employees</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-us">Contact us</NavLink>
        </div>
    );
}
