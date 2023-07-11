import axios from "./axios";

export const getAllProduct = () => axios.get("/product/getAllProduct");
export const getProductById = (id) =>
    axios.get(`/product/getProductById/${id}`);
export const getProductByCategoryId = (id) =>
    axios.get(`/product/getProductByCategoryId/${id}`);
export const getSearchedProducts = (name, id) =>
    axios.get(`product/getSearchedProduct/?name=${name}&categoryId=${id}`);
