import useOrder from "../../order/hook/useOrder";

export default function OrderList() {
    const { order } = useOrder();
    return (
        <div className="flex flex-col gap-5">
            {order.Items?.map((el) => (
                <div key={el.id}>
                    <div className="flex justify-between gap-3 font-semibold">
                        <img
                            src={el.Product.image}
                            alt="jordan shoes"
                            className="w-[150px] h-[150px]"
                        />
                        <h1 className="self-end">{el.Product.name}</h1>
                        <h1 className="self-end">฿ {el.Product.price}</h1>
                        <h1 className="self-end">X {el.amount}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}
