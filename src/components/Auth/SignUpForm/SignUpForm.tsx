import { useState } from "react";
import { CreatePasswordValidation } from "../CreatePasswordValidation/CreatePasswordValidation";
import { Checkbox } from "../../Inputs/Checkbox/Checkbox";
import { Password } from "../../Inputs/Password/Password";
import { Text } from "../../Inputs/Text/Text";
import { Button } from "../../Button/Button";
import { PasswordValidations, PasswordValidationsType } from "../../../validations/PasswordValidation";

import './SignUpForm.scss';
import { Email } from "../../Inputs/Email/Email";

export interface SignUpForm {
    title?: string;
    bordered?: boolean;
    passwordValidations?: PasswordValidationsType[];
    passwordMinChar?: number;
    onSubmitForm: (data: { username: string; email: string; password: string; confirmPassword: string; terms: boolean; }) => boolean;
    completeMessage: string;
}

export function SignUpForm({
    title,
    bordered,
    passwordValidations,
    passwordMinChar,
    onSubmitForm
}: SignUpForm) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [validations, setValidations] = useState<{
        username: boolean | undefined;
        email: boolean | undefined;
        password: boolean | undefined;
        confirmPassword: boolean | undefined;
        terms: boolean | undefined;
    }>({
        username: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined,
        terms: undefined
    });

    const HandleValidateUsername = (value: string) => value !== "";
    const HandleValidateEmail = (value: string) => (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || value === "") ? false : true;
    const HandleValidateConfirmPassword = (value: string) => PasswordValidations.matchPassword(password, value);
    const HandleValidateTerms = (value: boolean) => value;
    const isEnable = (type: PasswordValidationsType) => passwordValidations ? passwordValidations.filter( x => x === type).length > 0 : false;
    const HandleValidatePassword = (value: string) => {
        let errors:boolean[] = [];
        if(passwordValidations && passwordValidations.length > 0) {
            passwordValidations.map( validation => {
                switch(validation) {
                    case 'minimumChars':
                        errors.push(PasswordValidations[validation](value, passwordMinChar));
                        break;

                    case 'matchPassword':
                        errors.push(PasswordValidations[validation](value, confirmPassword));
                        break;
                    
                    default:
                        errors.push(PasswordValidations[validation](value));
                        break;
                }

            });
        } else {
            errors.push(value.length === 0 ? false : true);
        }

        if(errors.filter( x => x === false).length > 0) {
            return false;
        }
        
        return true;
    };

    

    async function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        
        setIsLoading(true);
                
        setValidations({
            username: HandleValidateUsername(username),
            email: HandleValidateEmail(email),
            password: HandleValidatePassword(password),
            confirmPassword: HandleValidateConfirmPassword(confirmPassword),
            terms: HandleValidateTerms(terms)
        });
        
        if(
            HandleValidateUsername(username) &&
            HandleValidateEmail(email) &&
            HandleValidatePassword(password) &&
            HandleValidateConfirmPassword(confirmPassword) &&
            HandleValidateTerms(terms)
        ) {
            return onSubmitForm({
                username,
                email,
                password,
                confirmPassword,
                terms
            });
        }
        setIsLoading(false);
        return false;
    }
    
    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }
            <div className="row">
                <div className="col">
                    <Text 
                        label="Username" 
                        value={username}
                        setValue={ setUsername }
                        placeholder="Username"
                        onValidate={ HandleValidateUsername }
                        valid={ validations.username }
                        disabled={ isLoading }
                    />
                </div>
                <div className="col">
                    <Email 
                        label="E-mail" 
                        value={email}
                        setValue={ setEmail }
                        placeholder="E-mail"
                        onValidate={ HandleValidateEmail }
                        valid={ validations.email }
                        disabled={ isLoading }
                    />
                </div>
            </div>
            <Password 
                label="Password"
                value={password}
                setValue={ setPassword }
                placeholder="Password"
                onValidate={ HandleValidatePassword }
                valid={ validations.password }
                disabled={ isLoading }
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
                placeholder="Password again"
                onValidate={ HandleValidateConfirmPassword }
                valid={ validations.confirmPassword }
                disabled={ isLoading }
            />
            <Checkbox
                value={terms}
                setValue={ setTerms }
                label="Do you agree with the Terms & Conditions?"
                id="conditions-agree"
                onValidate={ (value) => value ? undefined : false  }
                valid={ validations.terms === undefined ? undefined : ( validations.terms === true ? undefined : false ) }
                disabled={ isLoading }
            />
            <Button isLoading={ isLoading } label="Create account" color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}