import { Meta, StoryObj } from "@storybook/react";
import { ResetPasswordForm } from "./ResetPasswordForm";

const meta = {
    title: 'Extra/Forms/ResetPasswordForm',
    component: ResetPasswordForm,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof ResetPasswordForm> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        bordered: true,
        message: '',
        title: 'Reset Password',
        
        options: {
            resetCodeOptions: {
                title: 'Reset password',
                bordered: true,
                message: 'Enter your e-mail below and access the reset password link that we gonna send to you.',
            },
            passwordValidation: {
                hasNumber: true,
                hasSpecialChar: true,
                hasUpperCase: true,
                minimumChars: 8
            }
        }
    }
};