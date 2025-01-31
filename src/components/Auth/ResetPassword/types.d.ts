import { IFormResetCodeFormProps, IFormResetPasswordEndFormProps, IFormResetPasswordFormProps } from "../../forms/ResetPasswordForm/types";

interface IPageResetPasswordProps {
    resetCodeForm?: IFormResetCodeFormProps;
    resetPasswordForm?: IFormResetPasswordFormProps;
    resetPasswordEndForm?: IFormResetPasswordEndFormProps;
}