import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertType } from './Alert';

const meta = {
	title: 'Components/Alerts',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		mesage: "A wonderful serenity has taken possession",
		type: 'info'
	},
	argTypes: {
		type: {
			options: [ 'danger', 'info', 'success', 'warning' ] as AlertType[] as string[],
			control: {
				type: 'select'
			}
		}
	}
};