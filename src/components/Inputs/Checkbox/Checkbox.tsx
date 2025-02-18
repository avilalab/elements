import { useEffect, useState } from 'react';
import { Validatable, ValueState } from '../../../types/InputTypes';

export interface CheckboxInput extends Validatable<boolean>, Omit<ValueState<boolean>, 'value'> {
    value?: boolean;
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
    const [isChecked, setIsChecked] = useState(value ?? false);

    useEffect(() => setIsValid(valid), [valid]);

    function HandleChange(value: boolean) {
        if(onValidate) {
            setIsValid(onValidate( value ));
        }

        setIsChecked(value);
        return setValue(value);
    }

    useEffect(() => {
        if(value) {
            setIsChecked(value);
        }
    }, [value]);

    return (
        <div className="form-check">
            <input 
                type="checkbox"
                onChange={ e => HandleChange(e.currentTarget.checked) } 
                className={`form-check-input ${ isValid !== undefined ? isValid ? 'is-valid' : 'is-invalid' : '' }`} 
                name={name} 
                id={ id } 
                checked={ isChecked }
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