import type { Meta, StoryObj } from '@storybook/react';
import { PostMeta } from './PostMeta';

const meta = {
	title: 'Blog/Post Meta',
	component: PostMeta,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostMeta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		postCategories: [
			{ name: 'TypeScript', href: '#' },
		],
		postLastUpdate: 1738440700,
		postAuthor: "Fernando Avila",
		postRating: 2,
		postReadingTime: 1
	},
};