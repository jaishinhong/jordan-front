import { useEffect } from "react";
import useAdminProduct from "../features/admin/hook/useAdminProduct";
import ProductItem from "../features/admin/components/ProductItem";

export default function UpdateProductPage() {
    const { getAllProducts, products } = useAdminProduct();

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div className="flex flex-col w-[80%] p-10 gap-3">
            {products.map((el) => (
                <ProductItem
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    id={el.id}
                    product={el}
                    key={el.id}
                />
            ))}
        </div>
    );
}
