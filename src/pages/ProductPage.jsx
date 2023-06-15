import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../features/product/hook/useProduct";
import SizeInput from "../features/product/components/SizeInput";
import useAuth from "../features/auth/hook/useAuth";
import { useNavigate } from "react-router-dom";
import useCart from "../features/cart/hook/useCart";
import { toast } from "react-toastify";
export default function ProductPage() {
    const { product, getProductById } = useProduct();
    const { authenticate } = useAuth();
    const { addCart } = useCart();

    const navigate = useNavigate();

    const param = useParams();

    const [input, setInput] = useState({
        productId: param.id,
        size: "",
        amount: 1
    });

    const [check, setCheck] = useState({});
    const [amount, setAmount] = useState(1);

    const handleChange = (e) => {
        setInput({ ...input, size: e.target.value });
        setCheck({ [e.target.id]: e.target.checked });
    };

    useEffect(() => {
        getProductById(param);
    }, []);

    let type;
    if (product.categoryId === 1) {
        type = "Men";
    } else if (product.categoryId === 2) {
        type = "Women";
    } else {
        type = "kids";
    }

    const handleIncrease = () => {
        setAmount((c) => c + 1);
        setInput({ ...input, amount });
    };
    const handleDecrease = () => {
        if (amount !== 1) {
            setAmount((c) => c - 1);
            setInput({ ...input, amount });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!authenticate.isAuthen) {
            return navigate("/login");
        }
        if (!input.size) {
            return alert("Please select your size");
        }
        console.log(input);
        await addCart(input);

        toast.success("add to cart successfully");
    };

    return (
        <div className="flex min-w-screen h-[calc(100vh-168px)] justify-center mt-[100px] gap-20">
            <img
                src={product.image}
                alt="jordan"
                className="w-[500px] h-[500px]"
            />
            <form
                className="min-w-[450px] flex flex-col gap-5"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl font-semibold">{product.name}</h1>
                <p className="text-xl font-semibold">{type}</p>
                <p className="text-xl font-semibold">{product.price}</p>
                <p className="text-xl font-semibold">Choose your size</p>
                <div className="grid grid-cols-3 w-[88%] gap-2">
                    <SizeInput
                        onChange={handleChange}
                        check={check}
                        product={product}
                    />
                </div>
                <div>
                    <div className="font-semibold text-xl">amount</div>
                    {amount}
                </div>
                <div className="gap-5 flex">
                    <div
                        className="font-semibold text-2xl border border-black w-8 flex justify-center rounded"
                        onClick={handleIncrease}
                        role="button"
                    >
                        +
                    </div>
                    <div
                        className="font-semibold text-2xl border border-black w-8 flex justify-center rounded"
                        onClick={handleDecrease}
                        role="button"
                    >
                        -
                    </div>
                </div>
                <button className="w-[376px] h-[65px] bg-black text-white rounded-3xl text-xl ">
                    Add to cart
                </button>
            </form>
        </div>
    );
}
