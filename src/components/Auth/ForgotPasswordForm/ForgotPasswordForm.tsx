import { useEffect, useState } from "react";
import { Text } from "../../inputs/Text/Text";
import { IFormForgotPasswordFormProps, IInputValidation } from "../../inputs/types";

import '../../../scss/style.scss';
import { Button } from "../../button/Button";

export function ForgotPasswordForm({
    title,
    bordered,
    onSubmitForm,
    message,
    options
}: IFormForgotPasswordFormProps) {
    const [email, setEmail] = useState('');
    const [emailValidation, setEmailValidation] = useState<IInputValidation | undefined>(undefined);

    useEffect(() => {
        if(email.length > 4) {
            validations.email();
        }
    }, [email]);

    const validations = {
        email: () => {
            if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) || email === "") {
                setEmailValidation({
                    status: "invalid",
                    message: "Invalid e-mail"
                });
                return false;
            } else {
                setEmailValidation({
                    status: "valid"
                });
                return true;
            }
        }
    };

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        const results = [];

        results.push(validations.email());

        return results.filter(x => x === false).length === 0 ? onSubmitForm({ email }) : false;
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }
            { message ? <p>{ message }</p> : '' }
            <Text label="E-mail" value={email} validation={emailValidation} onChange={e => setEmail(e.currentTarget.value)}  placeholder="Insert your e-mail here" />
            <Button label="Send reset link" color="primary" onClick={HandleOnSubmitForm}>Send reset link <i className="fa fa-arrow-right"></i></Button>
            { 
                options?.backToSignIn ? 
                    <Button 
                        label="Back to sign in" 
                        color="nav" 
                        onClick={ e => {
                            e.preventDefault();

                            if(options?.backToSignIn) {
                                options.backToSignIn();
                            }
                        }} 
                    /> : '' }
        </form>
    );
}