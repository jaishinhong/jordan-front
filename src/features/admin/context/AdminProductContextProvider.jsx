import { createContext, useState } from "react";
import {
    addProduct,
    getProducts,
    updateProducts,
    deleteProduct
} from "../../../api/admin-api";

export const adminProductContext = createContext();

export default function AdminProductContextProvder({ children }) {
    const [products, setProducts] = useState([]);

    const addProductData = async (input, file, stock) => {
        // console.log(input);
        const formData = new FormData();
        // let stock = [];
        // if (input.quantity && input.size) {
        //     const obj = { name: input.size, quantity: input.quantity };
        //     stock.push(obj);
        // }
        if (input) {
            formData.append("name", input.name);
            formData.append("price", input.price);
            formData.append("categoryId", input.categoryId);
            formData.append("stock", JSON.stringify(stock));
        }
        if (file) {
            formData.append("image", file);
        }
        try {
            await addProduct(formData);
        } catch (err) {
            console.log(err);
        }
    };

    const getAllProducts = async () => {
        try {
            const products = await getProducts();
            setProducts(products.data.products);
        } catch (err) {
            console.log(err);
        }
    };

    const updateProduct = async (id, input, file) => {
        try {
            const formData = new FormData();
            if (input || file) {
                formData.append("name", input.name);
                formData.append("price", input.price);
                formData.append("categoryId", input.categoryId);
                formData.append("image", file);
                await updateProducts(id, formData);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const removeProduct = async (id) => {
        try {
            await deleteProduct(id);
            alert("delete successfully");
            getAllProducts();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <adminProductContext.Provider
            value={{
                addProductData,
                getAllProducts,
                products,
                updateProduct,
                removeProduct
            }}
        >
            {children}
        </adminProductContext.Provider>
    );
}
