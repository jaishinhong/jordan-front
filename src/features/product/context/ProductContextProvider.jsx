import { createContext, useState } from "react";
import * as productService from "../../../api/product-api";

export const ProductContext = createContext();

export const ProductContextProvider = function ({ children }) {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});

    const getAllProduct = async () => {
        const result = await productService.getAllProduct();
        setProducts(result.data.products);
    };

    const getProductByCategoryId = async (id) => {
        const res = await productService.getProductByCategoryId(id);
        setProducts(res.data.products);
    };

    const getProductById = async (id) => {
        const res = await productService.getProductById(id.id);
        setProduct(res.data.product);
    };

    const getSearchedProducts = async (name, id) => {
        // console.log(name);
        const res = await productService.getSearchedProducts(name, id);
        console.log(res.data.searchedProducts);
        setProducts(res.data.searchedProducts);
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
                getSearchedProducts
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
