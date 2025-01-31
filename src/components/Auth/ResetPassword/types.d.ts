import { IFormResetCodeFormProps, IFormResetPasswordEndFormProps, IFormResetPasswordFormProps } from "../ResetPasswordForm/types";

interface IPageResetPasswordProps {
    resetCodeForm?: IFormResetCodeFormProps;
    resetPasswordForm?: IFormResetPasswordFormProps;
    resetPasswordEndForm?: IFormResetPasswordEndFormProps;
}