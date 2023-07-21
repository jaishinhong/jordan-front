export default function Card({ name, price, image }) {
    return (
        <div className="flex flex-col gap-3">
            <img src={image} alt="" className="w-[300px] h-[300px]" />
            <div className="flex justify-between font-semibold text-lg">
                <h1>{name}</h1>
                <h1>price {price}</h1>
            </div>
        </div>
    );
}
