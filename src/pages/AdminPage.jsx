import { Navigate } from "react-router-dom";
import AdminSidebarButton from "../features/admin/components/AdminSidebarButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminPage({ children }) {
    const navigate = useNavigate();
    const [active, setActive] = useState({
        summary: true,
        addProduct: false,
        updateProduct: false
    });

    const handleClick = (e) => {
        if (e.target.name === "summary") {
            navigate("/admin/summary");
            setActive({ summary: true, addProduct: false });
        }
        if (e.target.name === "addProduct") {
            navigate("/admin/addProduct");
            setActive({ summary: false, addProduct: true });
        }
        if (e.target.name === "updateProduct") {
            navigate("/admin/updateProduct");
            setActive({
                summary: false,
                addProduct: false,
                updateProduct: true
            });
        }
    };

    return (
        <>
            <Navigate to="/admin/summary" />
            <div className="min-w-full flex h-[calc(100vh-148px)] mt-20">
                <div className="w-[20%] flex flex-col gap-10">
                    <AdminSidebarButton
                        title="Summary"
                        name="summary"
                        onClick={handleClick}
                        active={active.summary}
                    />
                    <AdminSidebarButton
                        title="AddProducts"
                        onClick={handleClick}
                        name="addProduct"
                        active={active.addProduct}
                    />
                    <AdminSidebarButton
                        title="UpdateProduct"
                        onClick={handleClick}
                        name="updateProduct"
                        active={active.updateProduct}
                    />
                </div>
                {children}
            </div>
        </>
    );
}
