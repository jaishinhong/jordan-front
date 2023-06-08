import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contex/authContexProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </AuthContextProvider>
);
