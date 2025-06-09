import "./About.css";
import {useTitle} from "../../../Utils/UseTitle.ts";
import {Music} from "../../SharedArea/Music/Music.tsx";

export function About() {
    useTitle("About")
    return (
        <div className="About">
			<Music/>
        </div>
    );
}
