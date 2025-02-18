import { useEffect, useState } from 'react';
import { Validatable, ValueState } from '../../../types/InputTypes';

export interface CheckboxInput extends Validatable<boolean>, ValueState<boolean> {
    label?: string;
    placeholder?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
}

export function Checkbox({
    setValue,
    onValidate,
    label,
    errorMessage,
    successMessage,
    id,
    name,
    valid,
    disabled,
    value
}: CheckboxInput) {
    const [isValid, setIsValid] = useState<boolean | undefined>(valid);

    useEffect(() => setIsValid(valid), [valid]);

    function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        if(onValidate) {
            setIsValid(onValidate( e.currentTarget.checked ));
        }

        return setValue(e.currentTarget.checked);
    }

    return (
        <div className="form-check">
            <input 
                type="checkbox"
                onChange={ HandleChange } 
                className={`form-check-input ${ isValid !== undefined ? isValid ? 'is-valid' : 'is-invalid' : '' }`} 
                name={name} 
                id={ id } 
                checked={ value }
                disabled={ disabled }
            />
            { label ? <label className="form-check-label" htmlFor={ id }>{ label }</label> : '' }
            { isValid !== null ? 
                isValid ? successMessage ? <div className="valid-feedback">{ successMessage }</div> : ''
                        : errorMessage ? <div className="invalid-feedback">{ errorMessage }</div> : ''
            : ''}
        </div>
    );
}