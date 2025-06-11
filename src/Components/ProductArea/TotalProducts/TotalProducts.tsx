import "./TotalProducts.css";
import {useSelector} from "react-redux";
import type {AppState} from "../../../Redux/Store.ts";

export function TotalProducts() {

    const count = useSelector<AppState, number>(state => state.products.length)


    return (
        <div className="TotalProducts">
            <span>Total Products: {count}</span>
        </div>
    );
}
