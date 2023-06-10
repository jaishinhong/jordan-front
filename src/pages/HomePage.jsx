import { useEffect, useState } from "react";
import ProductCard from "../features/product/components/ProductCard";
import SideBarButton from "../features/product/components/SideBarButton";
import { useProduct } from "../features/product/hook/useProduct";
const title = ["All", "Men", "Women", "Kids"];

export default function HomePage() {
    const [active, setActive] = useState({ All: true });
    const { getAllProduct, products, getProductByCategoryId } = useProduct();
    const handleActiveButton = (title) => {
        setActive({ [title]: true });
    };

    useEffect(() => {
        if (active.All) {
            getAllProduct();
        } else if (active.Men) {
            getProductByCategoryId(1);
        } else if (active.Women) {
            getProductByCategoryId(2);
        } else if (active.Kids) {
            getProductByCategoryId(3);
        }
    }, [active]);

    return (
        <div className="min-w-full flex h-[calc(100vh-148px)] mt-20">
            <div className="w-[20%] flex flex-col gap-5 ">
                {title.map((el, i) => (
                    <SideBarButton
                        title={el}
                        onClick={() => handleActiveButton(el)}
                        active={active}
                        key={i}
                    />
                ))}
            </div>
            <div className="grid grid-cols-3 w-full gap-5 px-10 overflow-y-scroll">
                {products.map((el) => (
                    <ProductCard
                        key={el.id}
                        name={el.name}
                        price={el.price}
                        src={el.image}
                        category={el.categoryId}
                        id={el.id}
                    />
                ))}
            </div>
        </div>
    );
}
