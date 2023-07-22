import { useEffect } from "react";
import Button from "../features/landing/component/Button";
import Card from "../features/landing/component/Card";
import { useProduct } from "../features/product/hook/useProduct";
import { Link } from "react-router-dom";
import Carousel from "../features/landing/component/Carousel";

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
                        src="https://r4.wallpaperflare.com/wallpaper/829/552/852/4k-basketball-player-chicago-bulls-michael-jordan-wallpaper-a39e88d06efcd8dea33188e276d0bc71.jpg"
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
                <Carousel products={products} />
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
