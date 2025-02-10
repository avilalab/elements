import { useState } from "react";
import { Checkbox } from "../../Inputs/Checkbox/Checkbox";
import { Password } from "../../Inputs/Password/Password";
import { Text } from "../../Inputs/Text/Text";
import { Button } from "../../Button/Button";

export interface LoginForm {
    title?: string;
    bordered?: boolean;
    message?: string;
    onSubmitForm: (form: { username: string; password: string; rememberPassword: boolean; }) => boolean;
    rememberPasswordOption?: boolean;
}

export interface LoginFormValidation {
    username: boolean | undefined;
    password: boolean | undefined;
}

export function LoginForm({
    title,
    bordered,
    rememberPasswordOption = true,
    onSubmitForm
}: LoginForm) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const [validations, setValidations] = useState<LoginFormValidation>({
        username: undefined,
        password: undefined
    });

    const [isLoading, setIsLoading] = useState(false);

    const HandleValidateUsername = (value: string) : boolean => value.length > 0;
    const HandleValidatePassword = (value: string) : boolean => value.length > 0;

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();

        setValidations({
            username: HandleValidateUsername(username),
            password: HandleValidatePassword(password),
        });
        
        setIsLoading(true);

        if(HandleValidateUsername(username) && HandleValidatePassword(password)) {
            return onSubmitForm({ username, password, rememberPassword });
        }
        
        setIsLoading(false);
        
        return false;
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
                valid={ validations.username }
                disabled={ isLoading }
            />
            <Password
                label="Password" 
                value={ password }
                setValue={ setPassword } 
                placeholder="Insert your password here"
                errorMessage={'This field cannot be empty'}
                onValidate={HandleValidatePassword}
                valid={ validations.password }
                disabled={ isLoading }
            />
            { rememberPasswordOption ? 
                <Checkbox 
                    label="Remember password?" 
                    id="remember-password" 
                    name="remember-password"
                    value={rememberPassword}
                    setValue={ setRememberPassword }
                    disabled={ isLoading }
                /> : '' 
            }
            <Button label="Login" isLoading={ isLoading } color="primary" onClick={HandleOnSubmitForm} />
        </form>
    );
}