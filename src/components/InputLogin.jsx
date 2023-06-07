export default function InputLogin({ placeholder, value, name, onChange }) {
    return (
        <input
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            className="h-10 border rounded border-black w-full p-2"
            onChange={onChange}
        />
    );
}
