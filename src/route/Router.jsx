import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Header from "../layouts/Header";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import RedirectIfLogin from "../features/auth/components/redirectIfLogin";
import AdminPage from "../pages/AdminPage";
import AddProductPage from "../pages/AddProductPage";
import AdminProductContextProver from "../features/admin/context/adminProductContextProvider";
import AdminProtectedRoute from "../features/admin/components/AdminProtectedRoute";
import { ProductContextProvider } from "../features/product/context/ProductContextProvider";
import ProductPage from "../pages/ProductPage";

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
                element: (
                    <ProductContextProvider>
                        <HomePage />
                    </ProductContextProvider>
                )
            },
            {
                path: "/login",
                element: (
                    // <RedirectIfLogin>
                    <LoginPage />
                    // </RedirectIfLogin>
                )
            },
            {
                path: "Register",
                element: <Register />
            },
            {
                path: "/product/:id",
                element: (
                    <ProductContextProvider>
                        <ProductPage />
                    </ProductContextProvider>
                )
            },
            {
                path: "/order",
                element: <h1>order</h1>
            },
            {
                path: "/admin",
                element: (
                    <AdminProtectedRoute>
                        <AdminPage>
                            <Outlet />
                        </AdminPage>
                    </AdminProtectedRoute>
                ),
                children: [
                    {
                        path: "/admin/summary",
                        element: <h1>Summary</h1>
                    },
                    {
                        path: "/admin/addProduct",
                        element: (
                            <AdminProductContextProver>
                                <AddProductPage />
                            </AdminProductContextProver>
                        )
                    }
                ]
            }
        ]
    }
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
