import useAuth from "./features/auth/hook/useAuth";
import Router from "./route/Router";
import { getAccessToken } from "./utils/localstorage";

function App() {
    const { fetchMe } = useAuth();

    const accessTokenFn = async () => {
        if (getAccessToken()) {
            await fetchMe();
        }
    };
    accessTokenFn();
    return (
        <div>
            <Router />
        </div>
    );
}

export default App;
