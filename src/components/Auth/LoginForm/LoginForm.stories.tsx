import { Meta, StoryFn } from "@storybook/react";
import { LoginForm } from "./LoginForm";

export default {
    title: 'Auth/Login Form',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof LoginForm> ;

const Template: StoryFn<typeof LoginForm> = (args) => {
    return <LoginForm
                { ...args }
            />;
}

export const Default = Template.bind({});
Default.args = {
    bordered: true,
    title: "Login"
}