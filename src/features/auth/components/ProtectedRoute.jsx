import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function ProtectedRoute({ children }) {
    const { authenticate } = useAuth();
    console.log(authenticate);

    if (!authenticate?.isAuthen) {
        return <Navigate to="/login" />;
    }
    return children;
}
