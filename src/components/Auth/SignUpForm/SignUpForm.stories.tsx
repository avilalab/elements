import { Meta, StoryFn } from "@storybook/react";
import { SignUpForm } from "./SignUpForm";

export default {
    title: 'Auth/Sign Up Form',
    component: SignUpForm,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof SignUpForm> ;

const Template: StoryFn<typeof SignUpForm> = (args) => {
    return <SignUpForm
                { ...args }
                onSubmitForm={ (code) => true }
            />;
}

export const Default = Template.bind({});
Default.args = {
    completeMessage: "Account created!",
    passwordValidations: [ "hasNumber", "hasSpecialChar", "hasUpperCase", "minimumChars" ]
}