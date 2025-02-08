import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useAppTheme() {
    const context = useContext(ThemeContext);
    return context;
}