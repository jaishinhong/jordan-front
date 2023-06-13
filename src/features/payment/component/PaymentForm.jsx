import React, { useState } from "react";
import useOrder from "../../order/hook/useOrder";

export default function PaymentForm({ id }) {
    const [input, setInput] = useState({ address: "" });
    const [file, setFile] = useState(null);
    const { updatePayment } = useOrder();

    const handleChange = (e) => {
        setInput({ address: e.target.value });
    };
    const handleChangeFile = (e) => {
        setFile(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await updatePayment(id, input, file);
            alert("update successfully");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="address" className="text-xl font-semibold">
                    Add your Address
                </label>
                <textarea
                    name="address"
                    id=""
                    cols="10"
                    rows="4"
                    className="border border-black"
                    value={input.address}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Upload your Receipt</h1>
                <img
                    src="https://www.caltilage.com/wp-content/uploads/2019/11/kbank-logo.jpg"
                    alt=""
                    className="w-32 h-12"
                />
                <h1>XXX-XXXX-XXX</h1>
                <input type="file" onChange={handleChangeFile} />
            </div>
            <button className="h-10 rounded-full border border-black text-xl font-semibold hover:bg-black hover:text-white">
                Confirm
            </button>
        </form>
    );
}
