import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { ThemeContextProvider } from "../../../contexts/ThemeContext";
import { useAppTheme } from "../../../hooks/useAppTheme";
import { Button } from "../../Button/Button";

export default {
    title: "Common/Header",
    component: Header,
    decorators: [
        (Story) => (
            <ThemeContextProvider>
                <div style={{ width: '100%', height: '150vh' }}>
                    <Story />
                </div>
            </ThemeContextProvider>
        ),
    ],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
    decorators: [
        () => {
            const { appTheme, setTheme } = useAppTheme();

            return (
                <Header>
                    <h2>{ 'SITE NAME HERE' }</h2>
                    <Button
                        color="primary"
                        onClick={() => setTheme(appTheme === 'light' ? 'dark' : 'light')}
                    >
                        { appTheme == 'dark' ? <i className="fa fa-sun"></i> : <i className="fa fa-moon"></i> }
                        <span className="mx-2">{ appTheme.toString()  }</span>
                    </Button>
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