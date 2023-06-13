import { useEffect, useState } from "react";
import useOrder from "../../order/hook/useOrder";

export default function TotalPrice() {
    const { order } = useOrder();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        const shipping = 150;
        let total = order.Items?.reduce((acc, el) => {
            acc += el.Product.price * el.amount;
            return acc;
        }, 0);

        total += shipping;
        setTotalPrice(total);
    }, [order]);

    return (
        <div>
            <h1 className="text-xl font-semibold">total+shipping</h1>
            <h1>{!isNaN(totalPrice) && totalPrice}</h1>
        </div>
    );
}
