import "./Home.css";

import {useTitle} from "../../../Utils/UseTitle.ts";
export function Home() {
    useTitle("Home")
    return (
        <div className="Home">
			<p>Home</p>

        </div>
    );
}
