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
import CartPage from "../pages/CartPage";
import CartContextProvider from "../features/cart/context/cartContextProvider";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import MyOrderPage from "../pages/MyOrderPage";
import OrderContextProvider from "../features/order/context/OrderContextProvider";
import PaymentPage from "../pages/PaymentPage";
import SummaryPage from "../pages/SummaryPage";
import UpdateProductPage from "../pages/UpdateProductPage";
import LandingPage from "../pages/LandingPage";
import Footer from "../layouts/Footer";
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
                        <LandingPage />
                        <Footer />
                    </ProductContextProvider>
                )
            },
            {
                path: "/home",
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
                    <CartContextProvider>
                        <ProductContextProvider>
                            <ProductPage />
                        </ProductContextProvider>
                    </CartContextProvider>
                )
            },
            {
                path: "/cart",
                element: (
                    <ProtectedRoute>
                        <CartContextProvider>
                            <CartPage />
                        </CartContextProvider>
                    </ProtectedRoute>
                )
            },
            {
                path: "/order",
                element: (
                    <OrderContextProvider>
                        <MyOrderPage />
                    </OrderContextProvider>
                )
            },
            {
                path: "/payment/:id",
                element: (
                    <OrderContextProvider>
                        <PaymentPage />
                    </OrderContextProvider>
                )
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
                        element: (
                            <OrderContextProvider>
                                <SummaryPage />
                            </OrderContextProvider>
                        )
                    },
                    {
                        path: "/admin/addProduct",
                        element: (
                            <AdminProductContextProver>
                                <AddProductPage />
                            </AdminProductContextProver>
                        )
                    },
                    {
                        path: "/admin/updateProduct",
                        element: (
                            <AdminProductContextProver>
                                <UpdateProductPage />
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
