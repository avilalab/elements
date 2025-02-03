import { ReactNode, useRef } from "react";
import './Header.scss';


export interface HeaderProps {
    children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
    const header = useRef<HTMLHeadingElement>(null);

    return (
        <header ref={header} className="header">
            <div className="header-wrapper">
                <div className="header-container">
                    { children }
                </div>
            </div>
        </header>
    );
}