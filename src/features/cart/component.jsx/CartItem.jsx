import { BinIcon } from "../../../icons";
export default function CartItem({
    src,
    name,
    price,
    amount,
    category,
    size,
    onDelete
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
                    <p>{amount}</p>
                    <div className="mt-5" onClick={onDelete} role="button">
                        <BinIcon />
                    </div>
                </div>
            </div>
            <h1>฿ {price}</h1>
        </div>
    );
}
