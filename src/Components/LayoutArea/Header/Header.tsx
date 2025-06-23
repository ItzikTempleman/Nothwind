import "./Header.css";
import {UserMenu} from "../../UserArea/UserMenu/UserMenu.tsx";

export function Header() {
    return (
        <div className="Header">
            <UserMenu/>
			<h2>Northwind Traders</h2>
        </div>
    );
}
