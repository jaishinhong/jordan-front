export default function InputProduct({ title, value, name, onChange }) {
    return (
        <>
            <h1>{title}</h1>
            <input
                name={name}
                type="text"
                className="border border-black rounded"
                value={value}
                onChange={onChange}
            />
        </>
    );
}
