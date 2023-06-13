import axios from "./axios";

export const addOrder = () => axios.post("/order/addOrder");
export const getOrder = () => axios.get("/order/getOrders");
export const getOrderById = (id) => axios.get(`/order/getOrderById/${id}`);
export const getAllOrder = () => axios.get("/order/getAllOrder");
export const updatePayment = (id, input) =>
    axios.put(`/order/addPayment/${id}`, input);
export const updateOrderStatus = (id, input) =>
    axios.put(`/order/updateOrderStatus/${id}`, input);
