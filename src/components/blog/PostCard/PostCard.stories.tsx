import type { Meta, StoryObj } from '@storybook/react';
import { PostCard } from './PostCard';

const meta = {
	title: 'Blog/Post Card',
	component: PostCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		postTitle: "AWS EC2: Quick Start",
		postExcerpt: "Learn how to create a virtual machine in the world's biggest ecosystem.",
		postCategory: "DevOps",
		postAuthor: "Fernando Avila",
		postReadTime: 6,
		postRating: 1,
		postCategoryBackgroundColor: "#b55959",
		postCategoryColor: '#FFFFFF'
	},
};