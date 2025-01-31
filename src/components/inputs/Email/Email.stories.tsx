import { Meta, StoryFn } from "@storybook/react";
import { Email } from "./Email";
import { useState } from "react";

export default {
    title: 'Forms/Inputs/Email',
    component: Email,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof Email> ;

const Template: StoryFn<typeof Email> = (args) => {
    const [value, setValue] = useState<string>('');

    return <Email {...args} value={ value } setValue={ setValue } />;
}

export const Default = Template.bind({});
Default.args = {}