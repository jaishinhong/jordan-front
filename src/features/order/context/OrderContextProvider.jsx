import { createContext, useState } from "react";
import * as orderService from "../../../api/order-api";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
    const [orders, setOrders] = useState([]);

    const getOrders = async () => {
        try {
            const orders = await orderService.getOrder();
            setOrders(orders.data.orders);
            console.log(orders.data.orders);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <OrderContext.Provider value={{ getOrders, orders }}>
            {children}
        </OrderContext.Provider>
    );
}
