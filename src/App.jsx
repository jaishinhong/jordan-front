import Loading from "./component/Loading";
import useAuth from "./features/auth/hook/useAuth";

import Router from "./route/Router";

function App() {
    const { initialLoading } = useAuth();

    if (initialLoading) {
        return <Loading />;
    }
    return (
        <div className="min-w-[700px]">
            <Router />
        </div>
    );
}

export default App;
