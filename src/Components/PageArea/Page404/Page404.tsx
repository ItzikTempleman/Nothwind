import "./Page404.css";
import {NavLink} from "react-router-dom";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function Page404() {
    useTitle("Page not found")
    return (
        <div className="Page404">
            <h1>404</h1>
			<p>The page you are looking for doesnt exist</p>
            <NavLink to={"/home"}>Return to home </NavLink>
        </div>
    );
}
