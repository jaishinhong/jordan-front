import useOrder from "../features/order/hook/useOrder";

export default function MyOrderPage() {
    const { getOrders } = useOrder();

    return (
        <div className="flex justify-center h-[calc(100vh-168px)] mt-[100px] gap-8">
            <button onClick={() => getOrders()}>checkkkkkkk</button>
        </div>
    );
}
