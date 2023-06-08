export default function AdminSidebarButton({ title }) {
    return (
        <button className="font-semibold text-xl h-20 rounded hover:bg-gray-300">
            {title}
        </button>
    );
}
