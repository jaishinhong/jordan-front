import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">JORDANSTORE</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to="/login">Sign In</Link>
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
