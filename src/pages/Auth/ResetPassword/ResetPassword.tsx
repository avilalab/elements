import { useState } from "react";
import { ResetPasswordEndForm, ResetPasswordForm } from "../../../components/forms/ResetPasswordForm/ResetPasswordForm";
import { IPageResetPasswordProps } from "./types";
import { ResetCodeForm } from "../../../components/forms/ResetCodeForm/ResetCodeForm";

export function ResetPassword({
    resetCodeForm,
    resetPasswordForm,
    resetPasswordEndForm
}: IPageResetPasswordProps) {
    const [code, setCode] = useState<string>('');
    const [isPasswordSet, setIsPasswordSet] = useState(false);

    if(code === '') {
        return (
            <ResetCodeForm
                onSubmitForm={({code}) => new Promise(() => {
                    setCode(code);
                })} 
                {...resetCodeForm}
            />
        );
    }

    if(!isPasswordSet) {
        return (
            <ResetPasswordForm 
                onSubmitForm={({}) => new Promise(() => {
                    setIsPasswordSet(true);
                })}
                {...resetPasswordForm}
            />
        );
    }

    return (
        <ResetPasswordEndForm
            {...resetPasswordEndForm!}
        />
    );
}