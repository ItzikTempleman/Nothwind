import "./ContactUs.css";
import {useTitle} from "../../../Utils/UseTitle.ts";

export function ContactUs() {
    useTitle("Contact us")
    return (
        <div className="ContactUs">
			<h2>Contact us</h2>
        </div>
    );
}
