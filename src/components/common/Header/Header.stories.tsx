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
                <Header>
                    <h2>{ 'SITE NAME HERE' }</h2>
                    <ul className="nav">
                        { [
                            { url: "/", title: 'Home' },
                            { url: "/about", title: 'About' },
                        ].map( item => (<li className="nav-item" key={ item.url }><a className="nav-link" href={ item.url }>{ item.title }</a></li>) ) }
                    </ul>
                </Header>
            );
        },
    ],
};