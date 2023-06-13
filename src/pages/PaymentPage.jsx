import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useOrder from "../features/order/hook/useOrder";
import OrderList from "../features/payment/component/OrderList";
import TotalPrice from "../features/payment/component/TotalPrice";
import PaymentForm from "../features/payment/component/PaymentForm";
export default function PaymentPage() {
    const id = useParams().id;
    const { getOrderById, order } = useOrder();

    useEffect(() => {
        getOrderById(id);
    }, []);

    return (
        <div className="flex items-center flex-col mt-[20px] gap-8">
            <h1 className="text-2xl font-semibold">OrderId {order.id}</h1>
            <div className="flex w-[80%] justify-between gap-5">
                <OrderList />
                <TotalPrice />
                <PaymentForm id={id} />
            </div>
        </div>
    );
}
