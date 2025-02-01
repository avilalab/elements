import { Meta, StoryFn } from "@storybook/react";
import { TextArea } from "./TextArea";
import { useState } from "react";

export default {
    title: 'Inputs/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof TextArea> ;

const Template: StoryFn<typeof TextArea> = (args) => {
    const [value, setValue] = useState<string>("");

    return <TextArea {...args} value={ value } setValue={ setValue } />;
}

export const Default = Template.bind({});
Default.args = {}