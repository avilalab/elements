import { ReactNode, useEffect, useRef } from "react";
import './Header.scss';
import { useAppTheme } from "../../../hooks/useAppTheme";


export interface HeaderProps {
    children: ReactNode;
}

export function Header({ children }: HeaderProps) {
    const { scroll } = useAppTheme();
    const header = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        switch (scroll) {
            case 'initial':
                if (header.current) header.current.removeAttribute('data-stuck');
                break;

            case 'scrolling':
                if (header.current) header.current.setAttribute('data-stuck', '');
                break;
        }
    }, [scroll]);

    return (
        <header ref={header} className="header">
            <div className="header-wrapper">
                <div className="container">
                    { children }
                </div>
            </div>
        </header>
    );
}