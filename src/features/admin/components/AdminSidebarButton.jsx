export default function AdminSidebarButton({ title, onClick, name, active }) {
    return (
        <button
            className={
                active
                    ? "font-semibold text-xl h-20 rounded bg-gray-300"
                    : "font-semibold text-xl h-20 rounded hover:bg-gray-300"
            }
            onClick={onClick}
            name={name}
        >
            {title}
        </button>
    );
}
