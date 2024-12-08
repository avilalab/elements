import { themes } from '@storybook/theming'
import type { Preview } from "@storybook/react";
import '../src/scss/style.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            theme: themes.normal
        }
    },
};

export default preview;
