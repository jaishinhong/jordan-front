import { useRef, useState } from "react";
import { UploadIcon } from "../icons";
import InputProduct from "../features/admin/components/InputProduct";
import SelectInput from "../features/admin/components/SelectInput";
import useAdminProduct from "../features/admin/hook/useAdminProduct";
import { toast } from "react-toastify";

const initialValue = {
    name: "",
    price: "",
    categoryId: "1"
};
// ddddddddddddd
export default function AddProductPage() {
    const [input, setInput] = useState(initialValue);

    const [item, setItem] = useState({ name: "", quantity: "" });
    const [stock, setStock] = useState([]);

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

    const handleChangeItem = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };
    const handleClick = () => {
        // console.log(item);
        setStock([...stock, item]);
        setItem({ name: "", quantity: "" });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await addProductData(input, file, stock);
            toast.success("add product successfully");
            setInput(initialValue);
            setFile(null);
            console.log(stock);
        } catch (err) {
            toast.error("add product fail");
        }
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
                <SelectInput
                    value={input.categoryId}
                    onChange={handleChangeInput}
                />
                <button
                    type="button"
                    className="mt-5 border border-black rounded hover:bg-gray-300"
                    onClick={handleClick}
                >
                    Add
                </button>
                <InputProduct
                    title="Size name"
                    value={item.name}
                    name="name"
                    onChange={handleChangeItem}
                />
                <InputProduct
                    title="Quantity"
                    value={item.quantity}
                    name="quantity"
                    onChange={handleChangeItem}
                />

                <button className="text-white bg-black rounded mt-2 h-7">
                    Add Product
                </button>
            </form>
            <div className="flex flex-col gap-5">
                {stock.map((el, index) => (
                    <div className="flex gap-5" key={index}>
                        <h1>item {index}</h1>
                        <h1>size {el.name}</h1>
                        <h1>quantity {el.quantity}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}
