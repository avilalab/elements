import { useState } from 'react';
import { Validatable, ValueState } from '../../../types/types';

import './Checkbox.scss';

export interface CheckboxInput extends Validatable<boolean>, ValueState<boolean> {
    label?: string;
    placeholder?: string;
    id?: string;
    name?: string;
}

export function Checkbox({
    setValue,
    value,
    onValidate,
    label,
    errorMessage,
    successMessage,
    id,
    name
}: CheckboxInput) {
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

    function HandleChange(value: boolean) {
        if(onValidate) {
            setIsValid(onValidate( value ));
        }

        return setValue(value);
    }

    return (
        <div className="form-check">
            <input 
                type="checkbox"
                onChange={ e => HandleChange(e.currentTarget.checked) } 
                className={`form-check-input ${ isValid !== null ? isValid ? 'is-valid' : 'is-invalid' : '' }`} 
                name={name} 
                id={ id } 
                checked={ value } 
            />
            { label ? <label className="form-check-label" htmlFor={ id }>{ label }</label> : '' }
            { isValid !== null ? 
                isValid ? successMessage ? <div className="valid-feedback">{ successMessage }</div> : ''
                        : errorMessage ? <div className="invalid-feedback">{ errorMessage }</div> : ''
            : ''}
        </div>
    );
}