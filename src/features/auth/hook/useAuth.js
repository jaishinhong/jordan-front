import { useContext } from "react";
import { AuthContext } from "../contex/authContexProvider";

export default function useAuth() {
    return useContext(AuthContext);
}
