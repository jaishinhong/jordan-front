import { Link } from "react-router-dom";
import useAuth from "../features/auth/hook/useAuth";

export default function Header() {
    const { authenticate, logout } = useAuth();
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
                        {/* <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-base-100">
                                <li>
                                    <a>Link 1</a>
                                </li>
                                <li>
                                    <a>Link 2</a>
                                </li>
                            </ul>
                        </details> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}
