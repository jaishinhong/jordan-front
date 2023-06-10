import axios from "./axios";

export const addProduct = (input) => axios.post("admin/addProduct", input);
