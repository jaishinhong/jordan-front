import { Link } from "react-router-dom";
import InputLogin from "../features/auth/components/InputLogin";
import { useState } from "react";
import validateLogin from "../features/auth/validator/validate-login";
import useAuth from "../features/auth/hook/useAuth";
import { Navigate } from "react-router-dom";

export default function loginPage() {
    const [input, setInput] = useState({ email: "", password: "" });
    const [error, setError] = useState({});
    const { login } = useAuth();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const result = validateLogin(input);
            if (result) {
                return setError(result);
            }
            setError({});
            await login(input);
            <Navigate to="/" />;
            console.log("hello");
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col max-w-sm m-auto gap-7 mt-40 px-7">
                    <h1 className="text-center text-2xl font-semibold">
                        Login
                    </h1>
                    <div>
                        <InputLogin
                            placeholder="Email"
                            value={input.email}
                            name="email"
                            onChange={handleChangeInput}
                        />
                        <p className="text-red-600 text-sm">{error.email}</p>
                    </div>
                    <div>
                        <InputLogin
                            placeholder="password"
                            value={input.password}
                            name="password"
                            onChange={handleChangeInput}
                        />
                        <p className="text-red-600 text-sm">{error.password}</p>
                    </div>
                    <button className="h-10 text-white bg-black rounded w-56 self-center">
                        Sign in
                    </button>
                    <Link to="/register" className="self-center">
                        don't have an account? join us
                    </Link>
                </div>
            </form>
        </>
    );
}
