import { BinIcon } from "../../../icons";
export default function CartItem({
    src,
    name,
    price,
    amount,
    category,
    size,
    onDelete,
    increaseQuantity,
    decreaseQuantity
}) {
    let type;
    if (category === 1) {
        type = "Men";
    } else if (category === 2) {
        type = "Women";
    } else {
        type = "kids";
    }
    return (
        <div className="flex gap-4">
            <img src={src} alt="" className="w-[150px] h-[150px]" />
            <div className="flex-1">
                <h1>{name}</h1>
                <p>{type} shoes</p>
                <div>
                    <p>size {size}</p>
                    <div className="flex text-xl gap-2">
                        <button
                            className="border border-black w-5 rounded"
                            onClick={increaseQuantity}
                        >
                            +
                        </button>
                        <p>{amount}</p>
                        <button
                            className="border border-black w-5 rounded "
                            onClick={decreaseQuantity}
                        >
                            -
                        </button>
                    </div>
                    <div className="mt-5" onClick={onDelete} role="button">
                        <BinIcon />
                    </div>
                </div>
            </div>
            <h1>฿ {price}</h1>
        </div>
    );
}
