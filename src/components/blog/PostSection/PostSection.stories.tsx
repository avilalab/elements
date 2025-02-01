import type { Meta, StoryObj } from '@storybook/react';
import { PostSection } from './PostSection';

const meta = {
	title: 'Blog/Post Section',
	component: PostSection,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof PostSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		active: 1,
		topics: [
			{ title: 'Prerequisites', anchor: '#' },
			{ title: 'Step 1: Including JavaScript in Your HTML', anchor: '#' },
			{ title: 'Step 2: Basic JavaScript Functions', anchor: '#' },
			{ title: 'Step 3: DOM Manipulation', anchor: '#' },
			{ title: 'Step 4: Event Handling', anchor: '#' },
			{ title: 'Step 5: Asynchronous JavaScript (AJAX)', anchor: '#' },
			{ title: 'Conclusion', anchor: '#' },
		]
	},
};