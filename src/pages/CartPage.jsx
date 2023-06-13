import React, { useEffect, useState } from "react";
import CartItem from "../features/cart/component.jsx/CartItem";
import useCart from "../features/cart/hook/useCart";
import { useNavigate } from "react-router-dom";
import useAuth from "../features/auth/hook/useAuth";
export default function CartPage() {
    const { cart, deleteCart, addOrder } = useCart();
    const navigate = useNavigate();
    // const { authenticate } = useAuth();
    // console.log(authenticate);
    const [price, setPrice] = useState({ price: "", totalPrice: "" });

    useEffect(() => {
        const DELIVERYPRICE = 150;
        const sum = cart.reduce((acc, el) => {
            return (acc += el.Product.price * el.amount);
        }, 0);
        setPrice({ ...price, price: sum, totalPrice: sum + DELIVERYPRICE });
    }, [cart]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!cart) {
            return alert("you don't have any item in your cart yet");
        }
        await addOrder();
        alert("your order has been added");
        navigate("/");
    };

    return (
        <div className="flex justify-center h-[calc(100vh-168px)] mt-[100px] gap-8">
            <div className=" min-w-[600px]">
                <h1 className="font-semibold text-xl mb-5">Cart</h1>
                <div className="flex flex-col gap-3">
                    {cart.map((el) => (
                        <CartItem
                            key={el.id}
                            src={el.Product.image}
                            name={el.Product.name}
                            price={el.Product.price}
                            amount={el.amount}
                            category={el.Product.categoryId}
                            size={el.size}
                            onDelete={() => deleteCart(el.id)}
                        />
                    ))}
                </div>
            </div>
            <div className="min-w-[337px]">
                <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <h1 className="font-semibold text-xl">Summary</h1>
                    <div className="flex justify-between">
                        <h1>price</h1>
                        <h1>{price.price}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>delivery price</h1>
                        <h1>150</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1>total price</h1>
                        <h1>{price.totalPrice}</h1>
                    </div>
                    <button className="h-14 bg-black text-white rounded-full font-semibold text-lg">
                        Check out
                    </button>
                </form>
            </div>
        </div>
    );
}