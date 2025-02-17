import { ReactNode } from "react";
import { Loading } from "../Loading/Loading";

export type ButtonColorType = 'primary' | 'secondary' | 'third' | 'default' | 'success' | 'danger' | 'warning' | 'nav';

export interface ButtonProps {
    color?: ButtonColorType;
    label?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
    isLoading?: boolean;
    disabled?: boolean;
    className?: string;
}

export const Button = ({
    label,
    onClick,
    color,
    children,
    isLoading,
    disabled = false,
    className
}: ButtonProps) => {
    return (
        <button
            className={`btn ${color ? "btn-" + color.toString() : ""} ${className}`}
            onClick={onClick}
            disabled={isLoading ?? disabled}
        >
            {isLoading ? <Loading /> : children ?? label }
        </button>
    );
};
