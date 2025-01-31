import { useState } from "react";
import { Checkbox } from "../../inputs/Checkbox/Checkbox";
import { Password } from "../../inputs/Password/Password";
import { Text } from "../../inputs/Text/Text";
import { Button } from "../../button/Button";
import { BasicValidation } from "../../../validations/inputs/BasicValidation/BasicValidation";

import './LoginForm.scss';

export function LoginForm({
    title,
    bordered,
    rememberPasswordOption = true,
    onSubmitForm
}: {
    title?: string;
    bordered?: boolean;
    message?: string;
    onSubmitForm?: (form: any) => Promise<void>;
    rememberPasswordOption?: boolean;
}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const HandleValidateUsername = (value: string) : boolean => value.length > 0;
    const HandleValidatePassword = (value: string) : boolean => value.length > 0;

    const [states, setStates] = useState<{
        username: 'default' | 'valid' | 'invalid';
        password: 'default' | 'valid' | 'invalid';
    }| undefined>(undefined);

    async function HandleOnSubmitForm(e: any) {
        e.preventDefault();

        setStates({
            username: HandleValidateUsername(username) ? 'valid' : 'invalid',
            password: HandleValidatePassword(password) ? 'valid' : 'invalid',
        });
        
        setIsLoading(true);
        const errors = [];

        errors.push(HandleValidateUsername(username));
        errors.push(HandleValidatePassword(password));

        if(errors.filter( x => x === false).length === 0) {
            if(onSubmitForm) {
                await onSubmitForm({ username, password, rememberPassword });
                setIsLoading(false);
            }
        }
        
        setIsLoading(false);
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`} action="">
            { title ? <h4 className="title"> { title }</h4> : '' }
            <Text 
                label="Username" 
                placeholder="Insert your username here"
                value={username}
                setValue={setUsername}
                errorMessage={'This field cannot be empty'}
                onValidate={HandleValidateUsername}
            />
            <Password
                label="Password" 
                value={ password }
                setValue={ setPassword } 
                placeholder="Insert your password here"
                errorMessage={'This field cannot be empty'}
                onValidate={HandleValidatePassword}
            />
            { rememberPasswordOption ? 
                <Checkbox 
                    label="Remember password?" 
                    id="remember-password" 
                    name="remember-password"
                    value={rememberPassword}
                    setValue={ setRememberPassword }
                /> : '' 
            }
            <Button label="Login" isLoading={isLoading} color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}