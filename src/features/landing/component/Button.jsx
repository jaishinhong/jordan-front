export default function Button({ title }) {
    return (
        <button className="border border-black rounded-2xl block m-auto px-5 py-2 text-xl hover:bg-black hover:text-white hover:scale-110">
            {title}
        </button>
    );
}
