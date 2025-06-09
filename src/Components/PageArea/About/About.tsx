import "./About.css";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function About() {
    useTitle("About Page")
    return (
        <div className="About">
			<p>About Component</p>
        </div>
    );
}
