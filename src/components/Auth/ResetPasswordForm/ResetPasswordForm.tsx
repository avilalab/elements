import { useState } from "react";
import { CreatePasswordValidation } from "../CreatePasswordValidation/CreatePasswordValidation";
import { Password } from "../../Inputs/Password/Password";
import { Button } from "../../Button/Button";
import { PasswordValidations, PasswordValidationsType } from "../../../validations/PasswordValidation";

export interface ResetPasswordValidations {
    password: boolean | undefined;
    confirmPassword: boolean | undefined;
}

export interface ResetPasswordForm {
    title?: string;
    bordered?: boolean;
    passwordValidations?: PasswordValidationsType[];
    passwordMinChar?: number;
    onSubmitForm: (data: { password: string; confirmPassword: string; }) => boolean;
}

export const ResetPasswordForm = ({
    title,
    bordered,
    passwordValidations,
    passwordMinChar,
    onSubmitForm
}: ResetPasswordForm) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validations, setValidations] = useState<ResetPasswordValidations>({ password: undefined, confirmPassword: undefined });

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
            return false;
        }
        
        return true;
    };

    const isEnable = (type: PasswordValidationsType) => passwordValidations ? passwordValidations.filter( x => x === type).length > 0 : false;
    const HandleValidateConfirmPassword = (value: string) => PasswordValidations.matchPassword(password, value);

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();

        setValidations({
            confirmPassword: HandleValidateConfirmPassword(confirmPassword),
            password: HandleValidatePassword(password)
        });
        
        if(
            HandleValidatePassword(password) &&
            HandleValidateConfirmPassword(confirmPassword)
        ) {
            return onSubmitForm({ password, confirmPassword });
        }

        return false;
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
                valid={ validations.password }
            />
            <CreatePasswordValidation
                password={ password }
                min={ passwordMinChar }
                minimumChars={ isEnable( "minimumChars" ) }
                hasNumber={ isEnable( "hasNumber" ) }
                hasUpperCase={ isEnable( "hasUpperCase" ) }
                hasSpecialChar={ isEnable( "hasSpecialChar" ) }
            />
            <Password 
                value={confirmPassword} 
                setValue={ setConfirmPassword }
                label="Confirm password"
                placeholder="Insert your password again here"
                errorMessage={ "Confirm password is invalid!" }
                successMessage={ "Confirm password is valid!" }
                onValidate={ HandleValidateConfirmPassword }
                valid={ validations.confirmPassword }
            />
            <Button label="Save password" color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}