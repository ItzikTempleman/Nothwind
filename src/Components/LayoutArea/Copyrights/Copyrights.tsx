import "./Copyrights.css";
import {TotalEmployees} from "../../EmployeeArea/TotalEmployees/TotalEmployees.tsx";

export function Copyrights() {
    return (
        <div className="Copyrights">
            <TotalEmployees/>
            <hr/>
            <p> &copy; 2025 Itzik Templeman <sup>&reg;</sup> Northwind traders</p>
        </div>
    );
}
