import { useEffect, useState } from 'react';
import { Validatable, ValueState } from '../../../types/InputTypes';

export interface PasswordInput extends Validatable<string>, ValueState<string> {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

export function Password({
    label,
    onValidate,
    errorMessage,
    successMessage,
    placeholder,
    value,
    setValue,
    valid,
    disabled
}: PasswordInput) {
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

    useEffect(() => setIsValid(valid), [valid]);

    function HandleChange(value: string) {
        if(onValidate) {
            setIsValid(onValidate( value ));
        }

        return setValue(value);
    }

    return (
        <div className="form-group">
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <input 
                type="password"
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