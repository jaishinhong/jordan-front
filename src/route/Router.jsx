import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Header from "../layouts/Header";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Outlet />
            </>
        ),
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "Register",
                element: <Register />
            },
            {
                path: "/product/:id",
                element: <h1>product</h1>
            },
            {
                path: "/order",
                element: <h1>order</h1>
            },
            {
                path: "admin",
                element: <h1>Admin</h1>
            }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
