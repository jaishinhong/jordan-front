import AuthContextProvider from "./features/auth/contex/authContexProvider";
import Router from "./route/Router";

function App() {
    return (
        <div>
            <AuthContextProvider>
                <Router />
            </AuthContextProvider>
        </div>
    );
}

export default App;
