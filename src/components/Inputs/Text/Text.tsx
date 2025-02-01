import { useEffect, useState } from "react";
import { Maskable, Validatable, ValueState } from "../../../types/types";

import "./Text.scss";

export interface TextInput
    extends Validatable<string>,
        ValueState<string>,
        Maskable<string> {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

export function Text({
    label,
    onValidate,
    errorMessage,
    successMessage,
    placeholder,
    value,
    setValue,
    valid,
    disabled,
    mask
}: TextInput) {
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
    useEffect(() => setIsValid(valid), [valid]);

    function HandleChange(value: string) {
        if (onValidate) {
            setIsValid(onValidate(value));
        }

        if(mask) {
            value = mask(value);
        }

        return setValue(value);
    }

    return (
        <div className="form-group">
            {label ? (
                <label htmlFor="" className="form-label">
                    {label}
                </label>
            ) : (
                ""
            )}
            <input
                type="text"
                className={`form-control ${
                    isValid !== undefined
                        ? isValid
                            ? "is-valid"
                            : "is-invalid"
                        : ""
                }`}
                placeholder={placeholder}
                value={value as string}
                onChange={(e) => HandleChange(e.currentTarget.value)}
                disabled={disabled}
            />
            {isValid !== null ? (
                isValid ? (
                    successMessage ? (
                        <div className="valid-feedback">{successMessage}</div>
                    ) : (
                        ""
                    )
                ) : errorMessage ? (
                    <div className="invalid-feedback">{errorMessage}</div>
                ) : (
                    ""
                )
            ) : (
                ""
            )}
        </div>
    );
}
