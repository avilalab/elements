import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonColorType } from './Button';

const meta = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Click me!',
		color: 'primary'
	},
	argTypes: {
		color: {
			options: [ 'danger', 'default', 'nav', 'primary', 'secondary', 'success', 'third', 'warning' ] as ButtonColorType[] as string[],
			control: {
				type: 'select'
			}
		}
	}
};