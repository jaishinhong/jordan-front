import { useContext } from "react";
import { OrderContext } from "../context/OrderContextProvider";

export default function useOrder() {
    return useContext(OrderContext);
}
