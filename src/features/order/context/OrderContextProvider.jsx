import { createContext, useEffect, useState } from "react";
import * as orderService from "../../../api/order-api";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});
    const [allOrders, setAllOrders] = useState([]);

    const getOrders = async () => {
        try {
            const orders = await orderService.getOrder();
            setOrders(orders.data.orders);
            // console.log(orders.data.orders);
        } catch (err) {
            console.log(err);
        }
    };

    const getOrderById = async (id) => {
        try {
            const order = await orderService.getOrderById(id);
            setOrder(order.data.order);
        } catch (err) {
            console.log(err);
        }
    };

    const getAllOrder = async () => {
        try {
            const orders = await orderService.getAllOrder();
            setAllOrders(orders.data.orders);
        } catch {
            console.log(err);
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    const updatePayment = async (id, address, receipt) => {
        try {
            const formData = new FormData();
            formData.append("address", address.address);
            formData.append("receipt", receipt);
            await orderService.updatePayment(id, formData);
        } catch (err) {
            console.log(err);
        }
    };

    const updateOrderStatus = async (id, status) => {
        try {
            status = { status };
            await orderService.updateOrderStatus(id, status);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <OrderContext.Provider
            value={{
                getOrders,
                orders,
                getOrderById,
                order,
                updatePayment,
                allOrders,
                getAllOrder,
                updateOrderStatus
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}
