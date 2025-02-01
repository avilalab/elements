import { Meta, StoryFn } from "@storybook/react";
import { ResetCodeForm } from "./ResetCodeForm";

export default {
    title: 'Auth/Reset Code Form',
    component: ResetCodeForm,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof ResetCodeForm> ;

const Template: StoryFn<typeof ResetCodeForm> = (args) => {
    return <ResetCodeForm
                { ...args }
                onSubmitForm={ (code) => true }
            />;
}

export const Default = Template.bind({});
Default.args = {
    errorMessage: "Code invalid!",
}