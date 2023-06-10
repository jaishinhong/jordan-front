import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../features/product/hook/useProduct";
import SizeInput from "../features/product/components/SizeInput";
import useAuth from "../features/auth/hook/useAuth";

export default function ProductPage() {
    const { product, getProductById } = useProduct();
    const { authenticate } = useAuth();
    console.log(authenticate.user?.id);
    const param = useParams();
    const [input, setInput] = useState({
        productId: param,
        size: ""
    });
    const [check, setCheck] = useState({});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.size) {
            return alert("Please select your size");
        }
        setInput({ ...input, userId: authenticate.user?.id });
        console.log(input);
    };

    return (
        <div className="flex min-w-screen h-[calc(100vh-168px)] justify-center mt-[100px] gap-20">
            <img
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7683c588-e0f5-46b9-9382-ef6ec80db821/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-jordan-stadium-90-Jn6ZH4.png"
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
                <button className="w-[376px] h-[65px] bg-black text-white rounded-3xl text-xl">
                    Add to cart
                </button>
            </form>
        </div>
    );
}
