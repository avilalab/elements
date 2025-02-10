import { useEffect, useState } from 'react';
import { Validatable, ValueState } from '../../../types/types';

export interface EmailInput extends Validatable<string>, ValueState<string> {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

export function Email({
    label,
    onValidate,
    errorMessage,
    successMessage,
    placeholder,
    value,
    setValue,
    valid,
    disabled
}: EmailInput) {
    const [isValid, setIsValid] = useState<boolean | undefined>(valid);
    useEffect(() => setIsValid(valid), [valid]);

    function HandleChange(value: string) {
        if(value.length > 0) {
            setIsValid((!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || value === "") ? false : true);
        } else {
            setIsValid(undefined);
        }

        if (onValidate) {
            setIsValid(onValidate(value));
        }

        return setValue(value);
    }

    return (
        <div className="form-group">
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <input 
                type="email"
                className={`form-control ${ isValid !== undefined ? isValid ? 'is-valid' : 'is-invalid' : '' }`} 
                placeholder={ placeholder } 
                value={value as string}
                onChange={  e => HandleChange(e.currentTarget.value)  }
                disabled={ disabled }
            />
            { isValid !== null ? 
                isValid ? successMessage ? <div className="valid-feedback">{ successMessage }</div> : ''
                        : errorMessage ? <div className="invalid-feedback">{ errorMessage }</div> : ''
            : ''}
        </div>
    );
}