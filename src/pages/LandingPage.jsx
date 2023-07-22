import { useEffect } from "react";
import Button from "../features/landing/component/Button";
import Card from "../features/landing/component/Card";
import { useProduct } from "../features/product/hook/useProduct";
import { Link } from "react-router-dom";

export default function LandingPage() {
    const { products, getAllProduct } = useProduct();

    useEffect(() => {
        getAllProduct();
    }, []);
    return (
        <>
            <div className="w-4/5 m-auto flex flex-col gap-5 mt-5">
                <Link to="/home">
                    <img
                        src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/9f8454ce-061f-4220-b878-d3bbf19709e7/%E0%B9%81%E0%B8%9A%E0%B8%A3%E0%B8%99%E0%B8%94%E0%B9%8C-jordan.jpg"
                        alt="banner"
                        className="w-full h-[550px] "
                    />
                </Link>
                <div className=" text-center font-semibold text-4xl">
                    <h1 className=" m-auto ">JORDAN</h1>
                    <h1 className=" m-auto  ">BASKETBALL</h1>
                </div>
                <Link to="/home">
                    <Button title="Shop All" />
                </Link>
                <h1 className="text-xl font-semibold">Popular</h1>
                <div className="flex justify-between">
                    {products.slice(0, 3).map((el) => (
                        <Link to={`/product/${el.id}`} key={el.id}>
                            <Card
                                name={el.name}
                                price={el.price}
                                image={el.image}
                            />
                        </Link>
                    ))}
                </div>
                <div className="flex p-5 gap-5">
                    <div className="relative">
                        <Link to="/home" state={{ type: "Men" }}>
                            <img
                                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/d4b204e4-6d5e-4108-9d7d-1eef1ff5910e/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B8%E0%B8%A9.png"
                                alt=""
                            />
                            <button className="text-black border border-black rounded-xl px-5 py-2 text-2xl absolute bottom-3 left-5 hover:bg-black hover:text-white hover:scale-110">
                                Men
                            </button>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link to="/home" state={{ type: "Women" }}>
                            <img
                                src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_467,c_limit/6ae224bf-5639-4cf6-8854-1777f8677cf7/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B9%89%E0%B8%B2-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B8%9B%E0%B8%81%E0%B8%A3%E0%B8%93%E0%B9%8C%E0%B9%80%E0%B8%AA%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%88%E0%B8%B2%E0%B8%81.png"
                                alt=""
                            />
                            <button className="text-black border border-black rounded-xl px-5 py-2 text-2xl absolute bottom-3 left-5 hover:bg-black hover:text-white hover:scale-110">
                                Women
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
