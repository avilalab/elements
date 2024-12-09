import { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";

const meta = {
    title: 'Extra/Forms/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    }
} satisfies Meta<typeof LoginForm> ;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Sign In',
        bordered: true,
        rememberPasswordOption: true
    }
};

export const Invalid: Story = {
    args: {
        title: 'Sign In',
        bordered: true,
        rememberPasswordOption: true
    }
};

export const Valid: Story = {
    args: {
        title: 'Sign In',
        bordered: true,
        rememberPasswordOption: true
    }
};