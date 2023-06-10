import { Link } from "react-router-dom";

export default function ProductCard({ name, price, src, category, id }) {
    let type;
    if (category === 1) {
        type = "Men";
    } else if (category === 2) {
        type = "Women";
    } else {
        type = "kids";
    }
    return (
        <Link to={`/product/${id}`}>
            <div>
                <img src={src} alt="jordan shoes" />
                <div>
                    <h1>{name}</h1>
                    <h1>{type}</h1>
                </div>
                <h1>{price}</h1>
            </div>
        </Link>
    );
}
