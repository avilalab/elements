import { createContext, ReactNode, useEffect, useState } from "react";

export type ThemeType = 'dark' | 'light';
export type ScrollState = 'initial' | 'scrolling';

export interface ThemeContextData {
    appTheme: ThemeType;
    setTheme: (theme: ThemeType) => void;

    scroll: ScrollState;
}

interface ThemeContextProps {
    children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeContextProvider({ children }: ThemeContextProps) {
    const [appTheme, setAppTheme] = useState<ThemeType>('light');
    const [scroll, setScrollState] = useState<ScrollState>('initial');

    useEffect(() => {
        setTheme("dark");
        window
            .addEventListener(
                'scroll', 
                setScroll
            );
    }, []);

    const setTheme = (theme: ThemeType) => {
        document.querySelector('html')!.setAttribute('data-bs-theme', theme);
        setAppTheme(theme);
    }

    const setScroll = (e: any) => {
        if(window.scrollY > 50) {
            setScrollState('scrolling');
            return;
        }
        if(window.scrollY < 65) {
            setScrollState('initial');
            return;
        }
    }

    return (
        <ThemeContext.Provider
            value={{
                appTheme,
                setTheme,
                scroll
            }}
        >
            { children }
        </ThemeContext.Provider>
    );
}