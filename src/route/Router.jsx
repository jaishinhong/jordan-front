import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Header from "../layouts/Header";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import RedirectIfLogin from "../features/auth/components/redirectIfLogin";
import AdminPage from "../pages/AdminPage";

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
                element: (
                    <RedirectIfLogin>
                        <LoginPage />
                    </RedirectIfLogin>
                )
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
                path: "/admin",
                element: (
                    <AdminPage>
                        <Outlet />
                    </AdminPage>
                ),
                children: [
                    {
                        path: "/admin/summary",
                        element: <h1>Summary</h1>
                    },
                    {
                        path: "/admin/addProduct",
                        element: <h1>AddProduct</h1>
                    }
                ]
            }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
