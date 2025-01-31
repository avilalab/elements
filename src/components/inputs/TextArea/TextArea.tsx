import { useState } from 'react';
import { ValueState, Validatable } from '../../../types/types';

import './TextArea.scss';

export interface TextAreaInput extends Validatable<string>, ValueState<string> {
    label?: string;
    placeholder?: string;
    id?: string;
    name?: string;
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
    placeholder
}: TextAreaInput) {
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

    function HandleChange(value: string) {
        if(onValidate) {
            setIsValid(onValidate( value ));
        }

        return setValue(value);
    }

    return (
        <div className="form-group">
            { label ? <label htmlFor="" className="form-label">{ label }</label> : '' }
            <textarea 
                placeholder={ placeholder } 
                className={`form-control ${ isValid !== null ? isValid ? 'is-valid' : 'is-invalid' : '' }`}
                name={ name }
                id={ id }
                value={ value }
                onChange={ e => HandleChange(e.currentTarget.value) }
            ></textarea>
            { isValid !== null ? 
                isValid ? successMessage ? <div className="valid-feedback">{ successMessage }</div> : ''
                        : errorMessage ? <div className="invalid-feedback">{ errorMessage }</div> : ''
            : ''}
        </div>
    );
}