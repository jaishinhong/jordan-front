import AdminSidebarButton from "../features/admin/components/AdminSidebarButton";
export default function AdminPage({ children }) {
    return (
        <div className="min-w-full flex h-[calc(100vh-148px)] mt-20">
            <div className="w-[20%] flex flex-col gap-10">
                <AdminSidebarButton title="Summary" />
                <AdminSidebarButton title="AddProducts" />
            </div>
            <div>{children}</div>
        </div>
    );
}
