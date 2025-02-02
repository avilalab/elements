import { useRef } from "react";
import './Header.scss';


export interface HeaderProps {
    menu: string;
}

export function Header({ menu }: HeaderProps) {
    const header = useRef<HTMLHeadingElement>(null);

    return (
        <header ref={header} className="header">
            <div className="header-wrapper">
                <div className="header-container">
                    <h1 className="logo-title">Logo</h1>
                    <h1 className="logo-title">Logo</h1>
                </div>
            </div>
        </header>
    );
}