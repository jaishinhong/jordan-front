import { createContext, useState } from "react";
import * as authService from "../../../api/auth-api";
import { setAccessToken, removeAccessToken } from "../../../utils/localstorage";

export const AuthContext = createContext();

const initialValue = { isAuthen: false, user: null };

export default function AuthContextProvider({ children }) {
    const [authenticate, setAuthenticate] = useState(initialValue);

    const register = async (input) => {
        const res = await authService.register(input);
        setAccessToken(res.data.accessToken);
        setAuthenticate({
            ...authenticate,
            isAuthen: true,
            user: resultFetchMe.data.user
        });
    };

    const login = async (input) => {
        const res = await authService.login(input);
        setAccessToken(res.data.accessToken);
        const resultFetchMe = await authService.fetchMe();
        setAuthenticate({
            ...authenticate,
            isAuthen: true,
            user: resultFetchMe.data.user
        });
    };

    const fetchMe = async () => {
        const resultFetchMe = await authService.fetchMe();
        setAuthenticate({
            ...authenticate,
            isAuthen: true,
            user: resultFetchMe.data.user
        });
    };

    const logout = () => {
        removeAccessToken();
        setAuthenticate({ ...authenticate, isAuthen: false, user: null });
    };

    return (
        <AuthContext.Provider
            value={{ register, login, authenticate, logout, fetchMe }}
        >
            {children}
        </AuthContext.Provider>
    );
}
