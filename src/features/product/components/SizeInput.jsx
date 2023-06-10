export default function SizeInput({ onChange, check, product }) {
    // console.log(product);
    return (
        <>
            {product.Sizes?.map((el) => (
                <div
                    className={
                        check[el.name]
                            ? "border border-gray-600 w-32 h-12 flex justify-center items-center rounded hover:bg-gray-300 bg-gray-300"
                            : "border border-gray-600 w-32 h-12 flex justify-center items-center rounded hover:bg-gray-300"
                    }
                    key={el.id}
                >
                    <input
                        type="radio"
                        id={el.name}
                        name="size"
                        value={el.name}
                        onChange={onChange}
                        className="appearance-none"
                    />
                    <label
                        htmlFor={el.name}
                        className="w-full h-full flex justify-center items-center"
                        role="button"
                    >
                        {`US ${el.name}`}
                    </label>
                </div>
            ))}
        </>
    );
}
