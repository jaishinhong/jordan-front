import { useRef, useState } from "react";
import { UploadIcon } from "../icons";
import InputProduct from "../features/admin/components/InputProduct";
import SelectInput from "../features/admin/components/SelectInput";
import useAdminProduct from "../features/admin/hook/useAdminProduct";

const initialValue = {
    name: "",
    price: "",
    categoryId: "1",
    size: "",
    quantity: ""
};
export default function AddProductPage() {
    const [input, setInput] = useState(initialValue);
    const [file, setFile] = useState(null);
    const inputEl = useRef();
    const { addProductData } = useAdminProduct();

    const handleChangeInput = (e) => {
        if (e.target.name) {
            setInput({ ...input, [e.target.name]: e.target.value });
        } else {
            setInput({ ...input, categoryId: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addProductData(input, file);
        alert("add product successfully");
        setInput(initialValue);
        setFile(null);
    };

    return (
        <div className="flex h-[100%] w-[80%] gap-10 justify-center">
            <div
                className="w-[30%] h-[50%] flex justify-center items-center border border-black rounded"
                onClick={() => inputEl.current.click()}
                role="button"
            >
                {!file && <UploadIcon />}
                <input
                    type="file"
                    className="hidden"
                    ref={inputEl}
                    onChange={(e) => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0]);
                        }
                    }}
                />
                {file && (
                    <img
                        src={URL.createObjectURL(file)}
                        alt=""
                        className="w-full h-full"
                    />
                )}
            </div>
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
                <InputProduct
                    title="Size name"
                    value={input.size}
                    name="size"
                    onChange={handleChangeInput}
                />
                <InputProduct
                    title="Quantity"
                    value={input.quantity}
                    name="quantity"
                    onChange={handleChangeInput}
                />
                <SelectInput
                    value={input.categoryId}
                    onChange={handleChangeInput}
                />

                <button className="text-white bg-black rounded mt-2 h-7">
                    Add Product
                </button>
            </form>
        </div>
    );
}
