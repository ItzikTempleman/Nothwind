import "./Admin.css";
import {useAdmin} from "../../../Utils/UseAdmin.ts";

export function Admin() {
    useAdmin();

    return (
        <div className="Admin">

			<p>Admin</p>

        </div>
    );
}
