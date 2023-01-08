import aboutCars from "../Components/AboutCars";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
    return (
        <section className="grid">
            {aboutCars.map((e) => (
                    <div className="grid-item">
                        <p>{e.CarMake}</p>
                        <Link to={`/cars/${e.id}`}>Read more</Link>
                    </div>
            ))
            }
        </section>
    );
}

export default Home;