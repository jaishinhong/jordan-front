import { Navigate } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function RedirectIfLogin({ children }) {
    const { authenticate } = useAuth();
    if (authenticate.isAuthen) {
        return <Navigate to="/" />;
    }
    return children;
}
