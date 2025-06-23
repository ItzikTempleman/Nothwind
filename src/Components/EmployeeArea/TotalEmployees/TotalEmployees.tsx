import "./TotalEmployees.css";
import {useSelector} from "react-redux";
import type {AppState} from "../../../Redux/Store.ts";

export function TotalEmployees() {

    const count = useSelector<AppState, number>(state => state.employees.length)


    return (
        <div className="TotalEmployees">
            <span>Total Employees: {count}</span>
        </div>
    );
}
