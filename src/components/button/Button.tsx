import { ReactNode } from "react";
import { Loading } from "../Loading/Loading";
import './Button.scss';

export type ButtonColorType = 'primary' | 'secondary' | 'third' | 'default' | 'success' | 'danger' | 'warning' | 'nav';

export interface ButtonProps {
    color?: ButtonColorType;
    label: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
}

export const Button = ({
    label,
    onClick,
    color,
    children,
    isLoading,
    disabled = false,
}: ButtonProps) => {
    return (
        <button
            className={`btn ${color ? "btn-" + color.toString() : ""}`}
            onClick={onClick}
            disabled={isLoading ?? disabled}
        >
            {children ?? label}
            {isLoading ? <Loading /> : ""}
        </button>
    );
};
