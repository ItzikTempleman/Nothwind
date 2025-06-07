import "./Home.css";
import foodImage from '../../../assets/images/food.jpeg';
export function Home() {
    return (
        <div className="Home">
			<p>Home Component</p>
            <img src={foodImage} />
        </div>
    );
}
