import "./Menu.css";
import {NavLink} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useSelector} from "react-redux";
import {AppState} from "../../../Redux/Store.ts";
import {UserModel} from "../../../Models/user-models/UserModel.ts";
import {Role} from "../../../Models/user-models/Role.ts";
import {TotalEmployees} from "../../EmployeeArea/TotalEmployees/TotalEmployees.tsx";

export function Menu() {
    const user = useSelector<AppState, UserModel>(state => state.user);
    return (
        <div className="Menu">
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/products/new" className="nav-link">Add new product</NavLink>
            <NavLink to="/products" end className="nav-link">Products</NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/employees/new" className="nav-link">Add new employee</NavLink>
            <NavLink to="/employees" end className="nav-link">Employees</NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact-us" className="nav-link">Contact us</NavLink>
            <hr className="menu-divider"/>
            <NavLink to="/register" className="nav-link">Register</NavLink>
            {user?.role === Role.Admin && <NavLink to="/admin" className="nav-link">Admin</NavLink>}
            <hr className="menu-divider"/>
            <TotalEmployees/>
        </div>
    );
}
