import { useState } from "react";
import { CreatePasswordValidation } from "../../custom/CreatePasswordValidation/CreatePasswordValidation";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
import { Password } from "../../inputs/Password/Password";
import { Text } from "../../inputs/Text/Text";
import { OnValidateInputState } from "../../inputs/types";

import '../../../scss/style.scss';
import { Button } from "../../button/Button";
import { BasicValidation } from "../../../validations/inputs/BasicValidation/BasicValidation";
import { PasswordValidation } from "../../../validations/inputs/Password/PasswordValidation";

export function SignUpForm({
    title,
    bordered,
    options,
    onSubmitForm
}: IFormSignUpFormProps) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [terms, setTerms] = useState(false);

    const [states, setStates] = useState<{ 
        username: OnValidateInputState; 
        email: OnValidateInputState; 
        password: OnValidateInputState; 
        confirmPassword: OnValidateInputState;
        terms: OnValidateInputState 
    } | undefined>(undefined);

    const HandleValidateUsername = (value: string) => BasicValidation.not_empty(value);
    const HandleValidateEmail = (value: string) => BasicValidation.valid_email(value);
    const HandleValidatePassword = (value: string) => PasswordValidation.completeValidation(value, options?.passwordValidation?.minimumChars!);
    const HandleValidateConfirmPassword = (value: string) => value !== "" && value === password;
    const HandleValidateTerms = (value: boolean) => value;

    async function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        
        let errors: boolean[] = [];

        setStates({
            username: HandleValidateUsername(username) ? 'valid' : 'invalid',
            email: HandleValidateEmail(email) ? 'valid' : 'invalid',
            password: HandleValidatePassword(password) ? 'valid' : 'invalid',
            confirmPassword: HandleValidateConfirmPassword(confirmPassword) ? 'valid' : 'invalid',
            terms: HandleValidateTerms(terms) ? 'valid' : 'invalid',
        });

        errors.push(HandleValidateUsername(username));
        errors.push(HandleValidateEmail(email));
        errors.push(HandleValidatePassword(password));
        errors.push(HandleValidateConfirmPassword(confirmPassword));
        errors.push(HandleValidateTerms(terms));

        if(errors.filter( x => x === false).length === 0) {
            if(onSubmitForm) {
                await onSubmitForm({ username, email, password });
            }
        }
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
                        placeholder="Insert your username here"
                        state={ states?.username }
                        onValidate={ HandleValidateUsername }
                    />
                </div>
                <div className="col">
                    <Text 
                        label="E-mail" 
                        value={email}
                        setValue={ setEmail }
                        placeholder="Insert your e-mail here"
                        state={ states?.email }
                        onValidate={ HandleValidateEmail }
                    />
                </div>
            </div>
            <Password 
                label="Password"
                value={password}
                setValue={ setPassword }
                placeholder="Insert your password here"
                state={ states?.password }
                onValidate={ HandleValidatePassword }
            />
            <CreatePasswordValidation
                password={ password }
                minimumChars={options?.passwordValidation?.minimumChars}
                hasNumber={options?.passwordValidation?.hasNumber}
                hasUpperCase={options?.passwordValidation?.hasUpperCase}
                hasSpecialChar={options?.passwordValidation?.hasSpecialChar}
            />
            <Password 
                value={confirmPassword}
                setValue={ setConfirmPassword }
                label="Confirm password" 
                placeholder="Insert your password again here"
                state={ states?.confirmPassword }
                onValidate={ HandleValidateConfirmPassword }
            />
            <Checkbox 
                value={terms}
                setValue={ setTerms }
                label="Do you agree with the Terms & Conditions?"
                id="conditions-agree"
                state={ states?.terms }
            />
            <Button label="Create account" color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}