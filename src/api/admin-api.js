import axios from "./axios";

export const addProduct = (input) => axios.post("admin/addProduct", input);
export const getProducts = () => axios.get("admin/getProducts");
export const updateProducts = (id, input) =>
    axios.put(`admin/updateProduct/${id}`, input);
export const deleteProduct = (id) => axios.delete(`admin/deleteProduct/${id}`);
