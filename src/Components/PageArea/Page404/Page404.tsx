import "./Page404.css";
import {NavLink} from "react-router-dom";

export function Page404() {
    return (
        <div className="Page404">
            <h1>404</h1>
			<p>The page you are looking for doesnt exist</p>
            <NavLink to={"/home"}>Return to home </NavLink>
        </div>
    );
}
