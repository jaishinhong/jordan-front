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
