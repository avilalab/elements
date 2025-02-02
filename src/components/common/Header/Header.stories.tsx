import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Header } from "./Header";

export default {
    title: "Common/Header",
    component: Header,
    parameters: {
    },
    decorators: [
        (Story) => (
            <div style={{ width: '100%', height: '100%' }}>
                <Story />
            </div>
        ),
    ],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    decorators: [
        () => {
            return (
                <Header menu=""/>
            );
        },
    ],
};