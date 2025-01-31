import { useState } from "react";
import { Button } from "../../button/Button";
import { Text } from "../../inputs/Text/Text";
import { Validatable } from "../../../types/types";

export interface ResetCodeForm extends Validatable<{ code: string }> {
    title?: string;
    bordered?: boolean;
    onSubmitForm: (code: string) => boolean;
}

export function ResetCodeForm({
    title,
    bordered,
    onSubmitForm,
    successMessage,
    errorMessage,
    onValidate
}: ResetCodeForm) {
    const [code, setCode] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();
        let tmp_isCodeValid: boolean | undefined = false;
        
        if(onValidate && onSubmitForm) {
            tmp_isCodeValid = onValidate({ code });
            setIsValid(tmp_isCodeValid);

            if(tmp_isCodeValid) return onSubmitForm(code);
        }

        return onSubmitForm(code);
    }

    return (
        <form className={`form ${ bordered ? 'form-bordered' : '' }`}>
            { title ? <h4 className="title"> { title }</h4> : '' }
            <Text
                label="Reset code"
                value={ code }
                setValue={ setCode }
                placeholder="Insert the reset code here"
                errorMessage={ errorMessage }
                successMessage={ successMessage }
                onValidate={() => isValid }
            />
            <Button 
                label="Send reset link"
                color="primary"
                onClick={HandleOnSubmitForm}
            >Reset password <i className="fa fa-arrow-right"></i></Button>
        </form>
    );
}