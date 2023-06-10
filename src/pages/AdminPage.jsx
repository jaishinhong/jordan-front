import AdminSidebarButton from "../features/admin/components/AdminSidebarButton";
import { useNavigate } from "react-router-dom";

export default function AdminPage({ children }) {
    const navigate = useNavigate();
    return (
        <div className="min-w-full flex h-[calc(100vh-148px)] mt-20">
            <div className="w-[20%] flex flex-col gap-10">
                <AdminSidebarButton title="Summary" />
                <AdminSidebarButton
                    title="AddProducts"
                    onClick={() => navigate("/admin/addProduct")}
                />
            </div>
            {children}
        </div>
    );
}
