import { useEffect } from "react";
import useOrder from "../features/order/hook/useOrder";

export default function SummaryPage() {
    const { getAllOrder, allOrders, updateOrderStatus } = useOrder();

    useEffect(() => {
        getAllOrder();
    }, []);

    const handleClick = async (el) => {
        try {
            await updateOrderStatus(el, "approved");
            getAllOrder();
        } catch (err) {
            console.log(err);
        }
    };

    // console.log(allOrders);
    return (
        <div className="flex flex-col gap-5 w-[80%]">
            <div className="flex justify-between mx-40">
                <h1 className="text-xl font-semibold">orderId</h1>
                <h1 className="text-xl font-semibold">receipt</h1>
                <h1 className="text-xl font-semibold">status</h1>
                <h1 className="text-xl font-semibold invisible">update</h1>
            </div>
            {allOrders.map((el) => (
                <div className="flex justify-between mx-40" key={el.id}>
                    <h1 className="text-lg font-normal">{el.id}</h1>

                    <label htmlFor={`my_modal_7${el.id}`} className="btn w-32">
                        view receipt
                    </label>
                    <input
                        type="checkbox"
                        id={`my_modal_7${el.id}`}
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box p-0">
                            <img src={el.receipt} alt="receipt" />
                        </div>
                        <label
                            className="modal-backdrop"
                            htmlFor={`my_modal_7${el.id}`}
                        >
                            Close
                        </label>
                    </div>
                    <h1 className="text-lg font-normal">{el.status}</h1>
                    <button
                        className=" font-normal border border-black rounded p-1 hover:bg-gray-300"
                        onClick={() => handleClick(el.id)}
                    >
                        update
                    </button>
                </div>
            ))}
        </div>
    );
}
