export default function SelectInput({ value, onChange, name }) {
    return (
        <select
            value={value}
            onChange={onChange}
            className="mt-2 border border-black"
            name={name}
        >
            <option value="1">Men</option>
            <option value="2">Women</option>
            <option value="3">kids</option>
        </select>
    );
}
