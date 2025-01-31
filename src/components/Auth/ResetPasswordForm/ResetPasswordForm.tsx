import { useState } from "react";
import { CreatePasswordValidation } from "../../custom/CreatePasswordValidation/CreatePasswordValidation";
import { Password } from "../../inputs/Password/Password";
import { Button } from "../../button/Button";
import { PasswordValidation, PasswordValidations, PasswordValidationsType } from "../../../validations/inputs/Password/PasswordValidation";

import './ResetPasswordForm.scss';

export interface ResetPasswordForm {
    title?: string;
    bordered?: boolean;
    passwordValidations?: PasswordValidationsType[];
    passwordMinChar?: number;
    onSubmitForm: (password: string) => boolean;
    completeMessage: string;
    onFinish: () => void;
}

export function ResetPasswordForm({
    title,
    bordered,
    passwordValidations,
    passwordMinChar,
    completeMessage,
    onSubmitForm,
    onFinish
}: ResetPasswordForm) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isPasswordSaved, setIsPasswordSaved] = useState(false);

    const HandleValidatePassword = (value: string) => {
        let errors:boolean[] = [];

        if(passwordValidations) {
            passwordValidations.map( validation => {
                switch(validation) {
                    case 'minimumChars':
                        errors.push(PasswordValidations[validation](password, passwordMinChar));
                        break;

                    case 'matchPassword':
                        errors.push(PasswordValidations[validation](password, confirmPassword));
                        break;
                    
                    default:
                        errors.push(PasswordValidations[validation](password));
                        break;
                }

            });
        }

        if(errors.filter( x => x === false).length > 0) {
            setIsValid(false);
            return false;
        }
        
        setIsValid(true);
        return true;
    };

    const HandleValidateConfirmPassword = (value: string) => PasswordValidations.matchPassword(password, value);

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        
        if(!isValid) return;

        return setIsPasswordSaved(onSubmitForm(password));
    }

    if(isPasswordSaved) {
        return (
            <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
                { title ? <h4 className="title"> { title }</h4> : '' }
                <div className="operation-result">
                    { status === "valid" ? (
                        <div className="icon success">
                            <i className="fa fa-check-circle"></i>
                        </div>
                    ) : (
                        <div className="icon danger">
                            <i className="fa fa-times-circle"></i>
                        </div>
                    ) }
                    <span className="message">{ completeMessage }</span>
                </div>
                <Button label="Go to sign in" onClick={ onFinish }>Go to Sign In <i className="fa fa-arrow-right"></i></Button>
            </form>
        );
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }
            <Password 
                label="Password"
                value={ password } 
                setValue={ setPassword }
                errorMessage={ "Password is invalid!" }
                successMessage={ "Password is valid!" }
                placeholder="Insert your password here"
                onValidate={ HandleValidatePassword }
            />
            <CreatePasswordValidation
                password={ password }
                minimumChars={ passwordValidations[] }
                hasNumber
                hasUpperCase
                hasSpecialChar
            />
            <Password 
                value={confirmPassword} 
                setValue={ setConfirmPassword }
                label="Confirm password"
                placeholder="Insert your password again here"
                errorMessage={ "Confirm password is invalid!" }
                successMessage={ "Confirm password is valid!" }
                onValidate={ HandleValidateConfirmPassword }
            />
            <Button label="Save password" color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}