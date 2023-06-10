import { useContext } from "react";
import { adminProductContext } from "../context/adminProductContextProvider";

export default function useAdminProduct() {
    return useContext(adminProductContext);
}
