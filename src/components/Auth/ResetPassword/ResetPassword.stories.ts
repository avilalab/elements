import type { Meta, StoryObj } from '@storybook/react';
import { ResetPassword } from './ResetPassword';

const meta = {
	title: 'pages/Auth/ResetPassword',
	component: ResetPassword,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof ResetPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

const config: IFormProps = {
	bordered: true,
	title: "Reset Password",
	message: "Reset password page"
};

export const Valid: Story = {
	args: {
		resetCodeForm: config,
		resetPasswordEndForm: {
			...config,
			isOperationValid: 'valid'
		},
		resetPasswordForm: {
			...config,
			options: {
				passwordValidation: {
					hasNumber: true,
					hasSpecialChar: true,
					hasUpperCase: true,
					minimumChars: 8
				}
			}
		}
	},
};

export const Invalid: Story = {
	args: {
		resetCodeForm: config,
		resetPasswordEndForm: {
			...config,
			isOperationValid: 'invalid'
		},
		resetPasswordForm: {
			...config,
			options: {
				passwordValidation: {
					hasNumber: true,
					hasSpecialChar: true,
					hasUpperCase: true,
					minimumChars: 8
				}
			}
		}
	},
};