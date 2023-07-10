import axios from "./axios";

export const addCart = (input) => {
    return axios.post("/cart/addCart", input);
};

export const getCartsByUser = () => {
    return axios.get("/cart/getCartsByUser");
};

export const deleteCart = (id) => {
    return axios.delete(`cart/deleteCart/${id}`);
};

export const deleteCartByUser = () => axios.delete("cart/deleteCartByUser");

export const increaseQuantity = (id) =>
    axios.patch(`cart/increaseQuantity/${id}`);
export const decreaseQuantity = (id) =>
    axios.patch(`cart/decreaseQuantity/${id}`);
