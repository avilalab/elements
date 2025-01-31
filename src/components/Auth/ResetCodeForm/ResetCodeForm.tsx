import { useState } from "react";
import { Button } from "../../button/Button";
import { IFormResetCodeFormProps } from "../ResetPasswordForm/types";
import { Text } from "../../inputs/Text/Text";
import { BasicValidation } from "../../../validations/inputs/BasicValidation/BasicValidation";

export function ResetCodeForm({
    title,
    bordered,
    onSubmitForm,
    message,
}: IFormResetCodeFormProps) {
    const [code, setCode] = useState<string>('');
    const [isCodeValid, setIsCodeValid] = useState<'default' | 'valid' | 'invalid'>('default');

    const HandleValidateCode = (value: string) : boolean => {
        let result = BasicValidation.not_empty(value!);
        
        setIsCodeValid(result ? 'valid' : 'invalid');
        return result;
    };

    async function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        
        const errors = [];

        errors.push(HandleValidateCode(code));

        if(errors.filter( x => x === false).length === 0) {
            if(onSubmitForm) {
                await onSubmitForm({ code });
            }
        }
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }
            { message ? <p>{ message }</p> : '' }
            <Text
                label="Reset code"
                value={ code }
                setValue={ setCode }
                placeholder="Insert the reset code here"
                onErrorMessage={ () => "Code cannot be null!" }
                onSuccessMessage={ () => "Code is valid!" }
                state={ isCodeValid }
            />
            <Button 
                label="Send reset link"
                color="primary"
                onClick={HandleOnSubmitForm}
            >Reset password <i className="fa fa-arrow-right"></i></Button>
        </form>
    );
}