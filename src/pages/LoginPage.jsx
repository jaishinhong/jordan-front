import { Link } from "react-router-dom";
import InputLogin from "../components/inputLogin";
import { useState } from "react";

export default function loginPage() {
    const [input, setInput] = useState({ email: "", password: "" });

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    return (
        <>
            <form>
                <div className="flex flex-col max-w-sm m-auto gap-7 mt-40 items-center px-5">
                    <h1 className="text-center text-2xl font-semibold">
                        Login
                    </h1>
                    <InputLogin
                        placeholder="Email"
                        value={input.email}
                        name="email"
                        onChange={handleChangeInput}
                    />
                    <InputLogin
                        placeholder="password"
                        value={input.password}
                        name="password"
                        onChange={handleChangeInput}
                    />
                    <button className="h-10 text-white bg-black rounded w-56">
                        Sign in
                    </button>
                    <Link to="/register">
                        <p>don't have an account? join us</p>
                    </Link>
                </div>
            </form>
        </>
    );
}
