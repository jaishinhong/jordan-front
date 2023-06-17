import React, { useState } from "react";
import InputProduct from "./InputProduct";
import SelectInput from "./SelectInput";
import useAdminProduct from "../hook/useAdminProduct";
import { toast } from "react-toastify";

export default function EditForm({ id, name, price, inputEl }) {
    const { updateProduct, getAllProducts } = useAdminProduct();

    const [input, setInput] = useState({
        name: name,
        price: price,
        categoryId: "1"
    });
    const [file, setFile] = useState();

    const handleChangeInput = (e) => {
        if (e.target.name) {
            setInput({ ...input, [e.target.name]: e.target.value });
        }
        // console.log(input);
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await updateProduct(id, input, file);
            await getAllProducts();
            toast.success("update successfully");
            inputEl.current.click();
        } catch (err) {
            toast.error("update error");
        }
    };

    return (
        <>
            <input
                type="file"
                onChange={(e) => {
                    if (e.target.files[0]) {
                        setFile(e.target.files[0]);
                    }
                }}
            />
            <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
                <InputProduct
                    title="Product Name"
                    value={input.name}
                    name="name"
                    onChange={handleChangeInput}
                />
                <InputProduct
                    title="Price"
                    value={input.price}
                    name="price"
                    onChange={handleChangeInput}
                />
                <SelectInput
                    value={input.categoryId}
                    onChange={handleChangeInput}
                />
                <button className="text-white bg-black rounded mt-2 h-7">
                    Update Product
                </button>
            </form>
        </>
    );
}
