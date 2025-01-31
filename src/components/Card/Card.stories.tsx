import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
	title: 'Components/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: "Card title",
        subtitle: "Card subtitle",
		text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		// links: [
		// 	{ label: "Card link", href: "#" },
		// 	{ label: "Another link", href: "#" }
		// ],
		cardHeader: (<>Featured</>),
		children: (<a href="#" className="btn btn-primary">Go somewhere</a>)
	},
};