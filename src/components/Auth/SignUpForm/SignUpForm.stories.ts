import { Meta, StoryObj } from "@storybook/react";
import { SignUpForm } from "./SignUpForm";

const meta = {
    title: 'Extra/Forms/SignUpForm',
    component: SignUpForm,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof SignUpForm> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Create account',
        bordered: true,
        onSubmitForm: (result) => {
            console.log(result);
        },
        options: {
            usernameMinLength: 4,
            passwordValidation: {
                hasNumber: true,
                hasSpecialChar: true,
                hasUpperCase: true,
                minimumChars: 8
            }
        }
    }
};