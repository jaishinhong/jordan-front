import { createContext, useState } from "react";
import * as productService from "../../../api/product-api";

export const ProductContext = createContext();

export const ProductContextProvider = function ({ children }) {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    const getAllProduct = async () => {
        setLoading(true);
        const result = await productService.getAllProduct();
        setProducts(result.data.products);
        setLoading(false);
    };

    const getProductByCategoryId = async (id) => {
        setLoading(true);
        const res = await productService.getProductByCategoryId(id);
        setProducts(res.data.products);
        setLoading(false);
    };

    const getProductById = async (id) => {
        setLoading(true);
        const res = await productService.getProductById(id.id);
        setProduct(res.data.product);
        setLoading(false);
    };

    const getSearchedProducts = async (name, id) => {
        setLoading(true);
        const res = await productService.getSearchedProducts(name, id);
        console.log(res.data.searchedProducts);
        setProducts(res.data.searchedProducts);
        setLoading(false);
    };

    return (
        <ProductContext.Provider
            value={{
                getAllProduct,
                products,
                setProducts,
                getProductByCategoryId,
                product,
                getProductById,
                getSearchedProducts,
                loading
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
