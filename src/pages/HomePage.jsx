import { useEffect, useState } from "react";
import ProductCard from "../features/product/components/ProductCard";
import SideBarButton from "../features/product/components/SideBarButton";
import { useProduct } from "../features/product/hook/useProduct";
import { SearchIcon } from "../icons";
import { useLocation } from "react-router-dom";
const title = ["All", "Men", "Women", "Kids"];

export default function HomePage() {
    const { state } = useLocation();

    const [active, setActive] = useState(
        state ? { [state.type]: true } : { All: true }
    );
    const {
        getAllProduct,
        products,
        getProductByCategoryId,
        getSearchedProducts
    } = useProduct();

    const [searchInput, setSearchInput] = useState("");

    const handleActiveButton = (title) => {
        setActive({ [title]: true });
    };

    useEffect(() => {
        if (searchInput) {
            if (active.Men) {
                getSearchedProducts(searchInput, 1);
            } else if (active.Women) {
                getSearchedProducts(searchInput, 2);
            } else if (active.Kids) {
                getSearchedProducts(searchInput, 3);
            } else {
                getSearchedProducts(searchInput);
            }
        } else {
            if (active.Men) {
                getProductByCategoryId(1);
            } else if (active.Women) {
                getProductByCategoryId(2);
            } else if (active.Kids) {
                getProductByCategoryId(3);
            } else {
                getAllProduct();
            }
        }
    }, [searchInput, active]);

    const handleChangeSearchInput = (e) => {
        setSearchInput(e.target.value);
        // console.log(e.target.value);
    };
    // console.log(products);
    return (
        <div className="min-w-full flex h-[calc(100vh-148px)] mt-20">
            <div className="w-[20%] flex flex-col gap-5 ">
                <div className="flex gap-3 p-3">
                    <input
                        className="h-8 w-[80%] border border-black p-2 rounded-md"
                        type="text"
                        placeholder="search..."
                        value={searchInput}
                        onChange={handleChangeSearchInput}
                        id="search"
                    />
                    <label htmlFor="search" role="button">
                        <SearchIcon />
                    </label>
                </div>
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
