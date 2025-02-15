import { ReactNode, useEffect, useRef } from "react";
import { useAppTheme } from "../../../hooks/useAppTheme";

export interface HeaderProps {
    children: ReactNode;
    className?: string;
}

export function Header({ children, className }: HeaderProps) {
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
        <header ref={header} className={`header ${className}`}>
            <div className="header-wrapper">
                <div className="container">
                    { children }
                </div>
            </div>
        </header>
    );
}