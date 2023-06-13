import OrderList from "../features/order/component/OrderList";
import useOrder from "../features/order/hook/useOrder";

export default function MyOrderPage() {
    const { orders } = useOrder();
    // console.log(orders);
    return (
        <div className="flex items-center flex-col mt-[100px] gap-8">
            <h1 className="text-2xl font-semibold">my Orders</h1>
            {orders.map((el) => (
                <OrderList
                    orderId={el.id}
                    items={el.Items}
                    status={el.status}
                    key={el.id}
                />
            ))}
        </div>
    );
}
