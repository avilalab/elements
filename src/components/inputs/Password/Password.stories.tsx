import { Meta, StoryFn } from "@storybook/react";
import { Password } from "./Password";
import { useState } from "react";

export default {
    title: 'Forms/Inputs/Password',
    component: Password,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof Password> ;

const Template: StoryFn<typeof Password> = (args) => {
    const [value, setValue] = useState<string>('');

    return <Password {...args} value={ value } setValue={ setValue } />;
}

export const Default = Template.bind({});
Default.args = {}