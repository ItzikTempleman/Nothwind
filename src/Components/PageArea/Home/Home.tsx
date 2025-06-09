import "./Home.css";
import foodImage from '../../../assets/images/food.jpeg';
import {useTitle} from "../../../Utils/UseTitle.ts";
export function Home() {
    useTitle("Home")
    return (
        <div className="Home">
			<p>Home Component</p>
            <img src={foodImage} />
        </div>
    );
}
