import type { Meta, StoryObj } from '@storybook/react';
import { PostNavigationButton, PostNavigationButtonProps } from './PostNavigationButton';

const meta = {
	title: 'Blog/Post Navigation Button',
	component: PostNavigationButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostNavigationButton>;

export default meta;
type Story = StoryObj<PostNavigationButtonProps>;

export const Primary: Story = {
	args: {
		type: 'previous',
		label: 'Text Tags: Blocks, headings and Inlines a quick start'
	},
	argTypes: {
		type: {
			options: ["previous", "next"],
			control: {
				type: 'inline-radio'
			}
		}
	}
};