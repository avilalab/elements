import { useEffect, useState } from "react";
import { Button } from "../../Button/Button";
import { Email } from "../../Inputs/Email/Email";

export const ForgotPasswordForm = ({
    title,
    bordered,
    onSubmitForm,
    message,
    options
}: {
    title?: string;
    bordered?: boolean;
    message?: string;
    options?: {
        backToSignIn?: () => void;
    };
    onSubmitForm: (form: any) => void;
}) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (email.length > 4) {
            validations.email();
        }
    }, [email]);

    const validations = {
        email: () => !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) || email === ""
    };

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        const results = [];

        results.push(validations.email());

        return results.filter(x => x === false).length === 0 ? onSubmitForm({ email }) : false;
    }

    return (
        <form className={`form ${bordered ? 'form-bordered' : ''}`}>
            {title ? <h4 className="title"> {title}</h4> : ''}
            {message ? <p>{message}</p> : ''}
            <Email 
                label="E-mail" 
                value={ email }
                setValue={ setEmail }
                onValidate={(value) => value.length > 0}
                placeholder="Insert your e-mail here"
            />
            <Button label="Send reset link" color="primary" onClick={HandleOnSubmitForm}>Send reset link <i className="fa fa-arrow-right"></i></Button>
            {
                options?.backToSignIn ?
                    <Button
                        label="Back to sign in"
                        color="nav"
                        onClick={e => {
                            e.preventDefault();

                            if (options?.backToSignIn) {
                                options.backToSignIn();
                            }
                        }}
                    /> : ''}
        </form>
    );
}