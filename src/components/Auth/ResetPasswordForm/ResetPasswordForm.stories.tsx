import { Meta, StoryFn } from "@storybook/react";
import { ResetPasswordForm } from "./ResetPasswordForm";

export default {
    title: 'Auth/Reset Password Form',
    component: ResetPasswordForm,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof ResetPasswordForm> ;

const Template: StoryFn<typeof ResetPasswordForm> = (args) => {
    return <ResetPasswordForm
                { ...args }
                onSubmitForm={ (data) => {
                    console.log(data);
                    return true;
                } }
            />;
}

export const Default = Template.bind({});
Default.args = {
    passwordValidations: [ "hasNumber", "hasSpecialChar", "hasUpperCase", "minimumChars" ]
}