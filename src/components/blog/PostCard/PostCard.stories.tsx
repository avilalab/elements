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
		postTitle: "Como integrar driver SQL Server",
		postExcerpt: "<p>Que o Laravel é uma framework incrível todos já sabem, mas você sabia que é possível integrá-lo com um banco SQL Server? Neste post você irá aprender a baixar os drivers necessários, habilitá-los nas configurações do PHP e configurar o arquivo .env com sucesso. &lt;aside&gt; 💡 Com os drivers baixados e instalados, o uso dos [&hellip;]</p>\n",
		postCategory: "DevOps",
		postAuthor: "Fernando Avila",
		postReadTime: 6,
		postRating: 1,
		postCategoryBackgroundColor: "#b55959",
		postCategoryColor: '#FFFFFF'
	},
};