import { Navigate } from "react-router-dom";
import useAuth from "../../auth/hook/useAuth";

export default function AdminProtectedRoute({ children }) {
    const { authenticate } = useAuth();
    // console.log(authenticate);
    if (authenticate.user?.role === "admin") {
        return children;
    }
    return <Navigate to="/" />;
}
