import { useEffect, useState } from 'react';
import { ValueState, Validatable, Maskable } from '../../../types/InputTypes';

export interface TextAreaInput extends Validatable<string>, ValueState<string>, Maskable<string> {
    label?: string;
    placeholder?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
}

export function TextArea({
    setValue,
    value,
    onValidate,
    label,
    errorMessage,
    successMessage,
    id,
    name,
    placeholder,
    disabled,
    valid,
    mask
}: TextAreaInput) {
    const [isValid, setIsValid] = useState<boolean | undefined>(valid);

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
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <textarea 
                placeholder={ placeholder } 
                className={`form-control ${ isValid !== undefined ? isValid ? 'is-valid' : 'is-invalid' : '' }`}
                name={ name }
                id={ id }
                value={ value }
                onChange={ e => HandleChange(e.currentTarget.value) }
                disabled={ disabled }
            ></textarea>
            { isValid !== null ? 
                isValid ? successMessage ? <div className="valid-feedback">{ successMessage }</div> : ''
                        : errorMessage ? <div className="invalid-feedback">{ errorMessage }</div> : ''
            : ''}
        </div>
    );
}