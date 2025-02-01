import { useEffect, useState } from 'react';
import { PasswordValidations } from '../../../validations/PasswordValidation';

import './CreatePasswordValidation.scss';

interface CreatePasswordValidation {
    password: string;
    minimumChars?: boolean;
    min?: number;
    hasNumber?: boolean;
    hasUpperCase?: boolean;
    hasSpecialChar?: boolean;
    setValidation?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ICreatePasswordValidationItemProps {
    label: string;
    password: string;
    onValidate: (password: string) => boolean;
}

export function CreatePasswordValidation({
    password,
    min,
    hasNumber,
    hasSpecialChar,
    hasUpperCase,
    minimumChars,
    setValidation
}: CreatePasswordValidation) {
    useEffect(() => {
        HandleIsPasswordValid(password);
    }, [password]);

    function HandleIsPasswordValid(password: string) {
        let results: boolean[] = [];

        if(minimumChars) results.push(PasswordValidations.minimumChars(password, min));
        if(hasNumber) results.push(PasswordValidations.hasNumber(password));
        if(hasUpperCase) results.push(PasswordValidations.hasUpperCase(password));
        if(hasSpecialChar) results.push(PasswordValidations.hasSpecialChar(password));

        if(setValidation) {
            setValidation(!(results.filter( x => x === false).length > 0));
        }
    }

    return (
        <div className="create-password-validation">
            <ul className="list-group">
                { minimumChars ? <CreatePasswordValidationItem label={`Minimun ${min ?? 8} characters`} password={password} onValidate={ (password) => PasswordValidations.minimumChars(password, min) } /> : '' }
                { hasNumber ? <CreatePasswordValidationItem label='At least 1 number' password={password} onValidate={ PasswordValidations.hasNumber } /> : '' }
                { hasUpperCase ? <CreatePasswordValidationItem label='At least 1 uppercase letter' password={password} onValidate={ PasswordValidations.hasUpperCase } /> : '' }
                { hasSpecialChar ? <CreatePasswordValidationItem label='At least 1 special character [ !@#$%^&* ]' password={password} onValidate={ PasswordValidations.hasSpecialChar } /> : '' }
            </ul>
        </div>
    );
}



export function CreatePasswordValidationItem({
    label,
    password,
    onValidate,
}: ICreatePasswordValidationItemProps) {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        setIsValid(onValidate(password));
    }, [password]);

    return (
        <li className={`list-group-item ${ isValid ? 'valid' : '' }`}><i className="fa fa-check"></i>{ label }</li>
    );
}