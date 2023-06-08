export default function SideBarButton({ title, onClick, active }) {
    return (
        <button
            className={
                active[title]
                    ? "font-semibold text-xl text-center h-20 rounded bg-gray-300"
                    : "font-semibold text-xl text-center h-20 rounded hover:bg-gray-300"
            }
            onClick={onClick}
        >
            {title}
        </button>
    );
}
