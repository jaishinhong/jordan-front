import { Link } from "react-router-dom";

export default function OrderList({ orderId, items, status }) {
    return (
        <Link
            to={`/payment/${orderId}`}
            className="flex gap-6 justify-between w-[60%] border-b-2 p-3 border-gray-300"
        >
            <h1 className="font-semibold">orderId {orderId}</h1>
            <div className="font-semibold">
                {items.map((el) => (
                    <h1 key={el.id}>{el.Product.name}</h1>
                ))}
            </div>
            <div className="font-semibold">
                <h1>Status</h1>
                <h1>{status}</h1>
            </div>
        </Link>
    );
}
