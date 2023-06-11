import { CartContext } from "../context/cartContextProvider";
import { useContext } from "react";

export default function useCart() {
    return useContext(CartContext);
}
