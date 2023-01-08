import aboutCars from "../Components/AboutCars";
import { useParams, Link } from "react-router-dom";

const Car = () => {

    let params = useParams()

    return (
        <article>
            <h2>{aboutCars[params.id].CarMake}</h2>
            <h2>{aboutCars[params.id].carModel}</h2>
            <h2>{aboutCars[params.id].CarYear}</h2>
        </article>
    );
}

export default Car;





