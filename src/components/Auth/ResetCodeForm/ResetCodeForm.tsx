import { useState } from "react";
import { Button } from "../../Button/Button";
import { Text } from "../../Inputs/Text/Text";
import { Validatable } from "../../../types/InputTypes";

export interface ResetCodeForm extends Validatable<{ code: string }> {
    title?: string;
    bordered?: boolean;
    onSubmitForm: (code: string) => boolean;
}

export interface ResetCodeValidation {
    code: boolean | undefined;
}

export function ResetCodeForm({
    title,
    bordered,
    onSubmitForm,
    successMessage,
    errorMessage,
    onValidate
}: ResetCodeForm) {
    const [isLoading, setIsLoading] = useState(false);
    const [code, setCode] = useState<string>('');
    const [validations, setValidations] = useState<ResetCodeValidation>({ code: undefined });

    const HandleValidateCode = (value: string) : boolean => {
        if(onValidate) {
            let result = onValidate({ code: value });

            return result === undefined ? false : result;
        }

        return value.length > 0;
    };

    function HandleOnSubmitForm(e: any) {
        e.preventDefault();

        setValidations({
            code: HandleValidateCode( code )
        });
        
        setIsLoading(true);

        if(HandleValidateCode( code )) {
            return onSubmitForm(code);
        }
        
        setIsLoading(false);
        
        return false;
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
                onValidate={ (value) => onValidate ? onValidate({ code: value }) : undefined }
                valid={ validations.code }
                disabled={ isLoading }
                mask={ (value) => {
                    value = value.toUpperCase();
                    value = value.replace(/[^A-Z0-9]/g, "");

                    if (value.length > 4) {
                        value = value.slice(0, 4) + "-" + value.slice(4, 8);
                    }

                    return value;
                }}
            />
            <Button
                isLoading={ isLoading }
                label="Send reset link"
                color="primary"
                onClick={ HandleOnSubmitForm }
            >Reset password <i className="fa fa-arrow-right"></i></Button>
        </form>
    );
}