import { createContext, useEffect, useState } from "react";
import * as cartService from "../../../api/cart-api";
import * as orderService from "../../../api/order-api";

export const CartContext = createContext();
export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addCart = async (input) => {
        try {
            await cartService.addCart(input);
        } catch (err) {
            console.log(err);
        }
    };

    const getCartsByUser = async () => {
        const result = await cartService.getCartsByUser();
        setCart(result.data.result);
    };

    const addOrder = async () => {
        try {
            await orderService.addOrder();
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCartByUserId = async () => {
        try {
            await cartService.deleteCartByUser();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCartsByUser();
    }, []);

    const deleteCart = async (id) => {
        console.log(id);
        await cartService.deleteCart(id);
        const result = await cartService.getCartsByUser();
        setCart(result.data.result);
    };

    return (
        <CartContext.Provider
            value={{ addCart, cart, deleteCart, addOrder, deleteCartByUserId }}
        >
            {children}
        </CartContext.Provider>
    );
}
