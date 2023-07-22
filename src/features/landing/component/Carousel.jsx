import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { LeftIcon, RightIcon } from "../../../icons";

export default function ({ products }) {
    const [items, setItems] = useState([]);
    const [carousel, setCarousel] = useState([0, 3]);
    const [hover, setHover] = useState("");

    const handleClick = (name) => {
        if (name == "right") {
            if (carousel[1] !== products.length)
                setCarousel((cur) => [++cur[0], ++cur[1]]);
        }
        if (name == "left") {
            if (carousel[0] !== 0) {
                setCarousel((cur) => [--cur[0], --cur[1]]);
            }
        }
    };

    useEffect(() => {
        setItems(products);
        setItems((cur) => cur.slice(carousel[0], carousel[1]));
    }, [products, carousel]);
    return (
        <div>
            <div className="flex justify-between mb-5">
                <h1 className="text-xl font-semibold ">Popular</h1>
                <div className="flex gap-5 font-semibold text-xl">
                    <button
                        onClick={() => handleClick("left")}
                        onMouseEnter={() => setHover("left")}
                        onMouseLeave={() => setHover("")}
                    >
                        <LeftIcon
                            height="2.5rem"
                            width="2.5rem"
                            fill={hover == "left" ? "#f0eded" : "none"}
                        />
                    </button>
                    <button
                        onClick={() => handleClick("right")}
                        onMouseEnter={() => setHover("right")}
                        onMouseLeave={() => setHover("")}
                    >
                        <RightIcon
                            height="2.5rem"
                            width="2.5rem"
                            fill={hover == "right" ? "#f0eded" : "none"}
                        />
                    </button>
                </div>
            </div>
            <div className="flex justify-between">
                {items.map((el) => (
                    <Link to={`/product/${el.id}`} key={el.id}>
                        <Card
                            name={el.name}
                            price={el.price}
                            image={el.image}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
