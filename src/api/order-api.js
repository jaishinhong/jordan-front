import axios from "./axios";

export const addOrder = () => axios.post("/order/addOrder");
export const getOrder = () => axios.get("/order/getOrders");
