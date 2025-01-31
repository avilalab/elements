import type { Meta, StoryObj } from '@storybook/react';
import { PostMetaWidget } from './PostMetaWidget';

const meta = {
	title: 'Widgets/PostMetaWidget',
	component: PostMetaWidget,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostMetaWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		postCategories: [
			{ name: 'TypeScript', href: '#' },
		],
		postLastUpdate: '35 minutes ago',
		postAuthor: "Fernando Avila",
		postRating: 2,
		postReadingTime: 1
	},
};