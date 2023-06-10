import useAuth from "./features/auth/hook/useAuth";
import Router from "./route/Router";

function App() {
    // const { authenticate } = useAuth();
    // console.log(authenticate);
    return (
        <div className="min-w-[700px]">
            <Router />
        </div>
    );
}

export default App;
