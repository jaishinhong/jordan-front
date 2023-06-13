import { Link } from "react-router-dom";
import useAuth from "../features/auth/hook/useAuth";

export default function Header() {
    const { authenticate, logout } = useAuth();
    // console.log(authenticate, "headerrrrr");

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    JORDANSTORE
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        {authenticate.user?.role == "admin" && (
                            <Link to="/admin/summary">Admin</Link>
                        )}
                    </li>
                    <li className="flex">
                        {authenticate.isAuthen ? (
                            <p
                                onClick={() => {
                                    logout();
                                }}
                                className="font-semibold"
                            >
                                Log out
                            </p>
                        ) : (
                            <Link to="/login">Sign In</Link>
                        )}
                    </li>

                    <li>
                        {authenticate.isAuthen && (
                            <details>
                                <summary className="font-semibold">
                                    My Profile
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li>
                                        <Link
                                            to="/cart"
                                            className="font-semibold"
                                        >
                                            My cart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/order"
                                            className="font-semibold"
                                        >
                                            My order
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
}
