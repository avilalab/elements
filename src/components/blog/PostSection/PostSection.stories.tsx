import type { Meta, StoryObj } from '@storybook/react';
import { PostSection } from './PostSection';
import { PostPageMock } from '../../mock/PostPageMock';

const meta = {
	title: 'Blog/Post Section',
	component: PostSection,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	decorators: [
        (Story) => (
            <PostPageMock>
                <Story />
            </PostPageMock>
        ),
    ],
} satisfies Meta<typeof PostSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};