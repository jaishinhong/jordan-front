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
            }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
