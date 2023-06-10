import { createContext } from "react";
import { addProduct } from "../../../api/admin-api";

export const adminProductContext = createContext();

export default function AdminProductContextProvder({ children }) {
    const addProductData = async (input, file) => {
        console.log(input);
        const formData = new FormData();
        let stock = [];
        if (input.quantity && input.size) {
            const obj = { name: input.size, quantity: input.quantity };
            stock.push(obj);
        }
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

    return (
        <adminProductContext.Provider value={{ addProductData }}>
            {children}
        </adminProductContext.Provider>
    );
}
