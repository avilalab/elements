import { useContext } from "react";
import { ModalContext, ModalContextData } from "./ModalContext";

export function useModal(): ModalContextData {
    const context = useContext(ModalContext);
    return context;
}