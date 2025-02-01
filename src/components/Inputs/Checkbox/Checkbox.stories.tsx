import { Meta, StoryFn } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

export default {
    title: 'Inputs/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof Checkbox> ;

const Template: StoryFn<typeof Checkbox> = (args) => {
    const [value, setValue] = useState<boolean>(false);

    return <Checkbox {...args} value={ value } setValue={ setValue } />;
}

export const Default = Template.bind({});
Default.args = {}