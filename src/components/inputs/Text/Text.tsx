import { useState } from 'react';
import { Validatable, ValueState } from '../../../types/types';
import './Text.scss';

export interface TextInput extends Validatable<string>, ValueState<string> {
    label?: string;
    placeholder?: string;
}

export function Text({
    label,
    onValidate,
    errorMessage,
    successMessage,
    placeholder,
    value,
    setValue
}: TextInput) {
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
            <input 
                type="text"
                className={`form-control ${ isValid !== null ? isValid ? 'is-valid' : 'is-invalid' : '' }`} 
                placeholder={ placeholder } 
                value={value as string}
                onChange={  e => HandleChange(e.currentTarget.value)  }
            />
            { isValid !== null ? 
                isValid ? successMessage ? <div className="valid-feedback">{ successMessage }</div> : ''
                        : errorMessage ? <div className="invalid-feedback">{ errorMessage }</div> : ''
            : ''}
        </div>
    );
}