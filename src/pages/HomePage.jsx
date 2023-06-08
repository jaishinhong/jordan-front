import { useState } from "react";
import ProductCart from "../features/product/components/ProductCart";
import SideBarButton from "../features/product/components/SideBarButton";

const title = ["All", "Men", "Women", "Kids"];

export default function HomePage() {
    const [active, setActive] = useState({ All: true });
    const handleActiveButton = (title) => {
        setActive({ [title]: true });
    };

    return (
        <div className="min-w-full flex h-[calc(100vh-148px)] mt-20">
            <div className="w-[20%] flex flex-col gap-5 ">
                {title.map((el, i) => (
                    <SideBarButton
                        title={el}
                        onClick={() => {
                            handleActiveButton(el);
                        }}
                        active={active}
                        key={i}
                    />
                ))}
            </div>
            <div className="grid grid-cols-3 w-full gap-5 px-10 overflow-y-scroll">
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
                <ProductCart />
            </div>
        </div>
    );
}
