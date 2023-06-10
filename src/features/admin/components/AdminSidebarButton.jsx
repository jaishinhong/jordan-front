export default function AdminSidebarButton({ title, onClick }) {
    return (
        <button
            className="font-semibold text-xl h-20 rounded hover:bg-gray-300"
            onClick={onClick}
        >
            {title}
        </button>
    );
}
