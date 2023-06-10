import { useContext } from "react";
import { ProductContext } from "../context/ProductContextProvider";

export const useProduct = function () {
    return useContext(ProductContext);
};
