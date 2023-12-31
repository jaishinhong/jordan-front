import { createContext, useEffect, useState } from "react";
import * as authService from "../../../api/auth-api";
import {
    setAccessToken,
    removeAccessToken,
    getAccessToken
} from "../../../utils/localstorage";

export const AuthContext = createContext();

const initialValue = { isAuthen: false, user: null };

export default function AuthContextProvider({ children }) {
    const [authenticate, setAuthenticate] = useState(initialValue);
    const [initialLoading, setInitialLoading] = useState(true);

    const register = async (input) => {
        const res = await authService.register(input);
        setAccessToken(res.data.accessToken);
        const resultFetchMe = await authService.fetchMe();
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
        try {
            const resultFetchMe = await authService.fetchMe();
            setAuthenticate({
                ...authenticate,
                isAuthen: true,
                user: resultFetchMe.data.user
            });
            setInitialLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    const logout = () => {
        removeAccessToken();
        setAuthenticate({ ...authenticate, isAuthen: false, user: null });
    };

    useEffect(() => {
        const accessTokenFn = async () => {
            if (getAccessToken()) {
                await fetchMe();
            } else {
                setInitialLoading(false);
            }
        };
        accessTokenFn();
    }, []);
    // console.log(authenticate);
    return (
        <AuthContext.Provider
            value={{
                register,
                login,
                authenticate,
                logout,
                fetchMe,
                initialLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
