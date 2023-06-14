import useAdminProduct from "../hook/useAdminProduct";
import EditForm from "./EditForm";

export default function ProductItem({ image, name, price, id }) {
    const { removeProduct } = useAdminProduct();

    return (
        <div className="flex justify-between mx-10 border-b-2 p-3">
            <img src={image} alt="" className="w-[150px] h-[150px]" />
            <h1 className="self-center">{name}</h1>
            <h1 className="self-center">{price}</h1>
            <div className="self-center">
                <label htmlFor={`my_modal_${id}`} className="btn">
                    Edit
                </label>
                <input
                    type="checkbox"
                    id={`my_modal_${id}`}
                    className="modal-toggle"
                />
                <div className="modal">
                    <div className="modal-box">
                        <EditForm id={id} name={name} price={price} />
                    </div>
                    <label
                        className="modal-backdrop"
                        htmlFor={`my_modal_${id}`}
                    >
                        Close
                    </label>
                </div>
            </div>
            <button
                className="h-10 w-20 border border-black rounded hover:bg-slate-300 self-center"
                onClick={() => removeProduct(id)}
            >
                Delete
            </button>
        </div>
    );
}
