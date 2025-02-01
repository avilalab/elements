import { Meta, StoryFn } from "@storybook/react";
import { Text } from "./Text";
import { useState } from "react";

export default {
    title: 'Inputs/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    }
} as Meta<typeof Text> ;

const Template: StoryFn<typeof Text> = (args) => {
    const [text, setText] = useState('');
    return <Text
                { ...args }
                value={ text }
                setValue={ setText }
                onValidate={ (value: string) => value.length > 3 }
            />;
}

export const Default = Template.bind({});
Default.args = {}