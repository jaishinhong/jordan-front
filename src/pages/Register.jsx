import React, { useState } from "react";
import InputRegister from "../features/auth/components/InputRegister";
import validateRegister from "../features/auth/validator/validate-register";
import useAuth from "../features/auth/hook/useAuth";

const initialInput = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

export default function Register() {
    const [input, setInput] = useState(initialInput);
    const [error, setError] = useState({});
    const { register } = useAuth();

    const handleChangeInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const result = validateRegister(input);
            if (result) {
                return setError(result);
            }
            setError({});
            await register(input);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col max-w-sm m-auto gap-7 mt-20 px-5">
                    <h1 className="text-center text-2xl font-semibold">
                        Create a new account
                    </h1>
                    <div>
                        <InputRegister
                            placeholder="Firstname"
                            name="firstName"
                            value={input.firstName}
                            onChange={handleChangeInput}
                        />
                        <p className="text-red-600 text-sm">
                            {error.firstName}
                        </p>
                    </div>
                    <div>
                        <InputRegister
                            placeholder="Lastname"
                            name="lastName"
                            value={input.lastName}
                            onChange={handleChangeInput}
                        />
                        <p className="text-red-600 text-sm">{error.lastName}</p>
                    </div>
                    <div>
                        <InputRegister
                            placeholder="Email"
                            name="email"
                            value={input.email}
                            onChange={handleChangeInput}
                        />
                        <p className="text-red-600 text-sm">{error.email}</p>
                    </div>
                    <div>
                        <InputRegister
                            placeholder="password"
                            name="password"
                            value={input.password}
                            onChange={handleChangeInput}
                        />
                        <p className="text-red-600 text-sm">{error.password}</p>
                    </div>
                    <div>
                        <InputRegister
                            placeholder="confirm password"
                            name="confirmPassword"
                            value={input.confirmPassword}
                            onChange={handleChangeInput}
                        />
                        <p className="text-red-600 text-sm">
                            {error.confirmPassword}
                        </p>
                    </div>
                    <button className="h-10 text-white bg-black rounded w-56 self-center">
                        Register
                    </button>
                </div>
            </form>
        </>
    );
}
