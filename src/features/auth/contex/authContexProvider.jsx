import { createContext, useState } from "react";
import * as authService from "../../../api/auth-api";
import { setAccessToken, removeAccessToken } from "../../../utils/localstorage";

export const AuthContext = createContext();

const initialValue = { isAuthen: false };
export default function AuthContextProvider({ children }) {
    const [authenticate, setAuthenticate] = useState(initialValue);

    const register = async (input) => {
        const res = await authService.register(input);
        setAccessToken(res.data.accessToken);
    };

    const login = async (input) => {
        const res = await authService.login(input);
        setAccessToken(res.data.accessToken);
        setAuthenticate({ ...authenticate, isAuthen: true });
    };

    const logout = () => {
        removeAccessToken();
        setAuthenticate({ ...authenticate, isAuthen: false });
    };

    return (
        <AuthContext.Provider value={{ register, login, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
