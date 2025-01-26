import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta = {
	title: 'Components/Table',
	component: Table<GenericTableContent>,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Table<GenericTableContent>>;

export default meta;
type Story = StoryObj<typeof meta>;

const data: GenericTableContent[] = [
	{
		id: 1,
		name: "Fernando Avila",
		email: "fernandoavilajunior@gmail.com"
	},
	{
		id: 2,
		name: "Beatriz Amorim",
		email: "biabaybia@hotmail.com"
	},
	{
		id: 3,
		name: "Rodrigo Veiga",
		email: "rodrigosuino@gmail.com"
	},
];

export const Default: Story = {
	args: {
		data,
		fields: [ 'id', 'name', 'email' ],
		actions: () => (
			<div className="d-flex" style={{ gap: 8 }}>
				<button className="btn btn-third">View</button>
				<button className="btn btn-primary">Edit</button>
				<button className="btn btn-danger">Delete</button>
			</div>
		),
		options: {
			noDataRender: () => <h5>There is no data to show!!!</h5>
		}
	}
};

interface GenericTableContent {
	id: number;
	name: string;
	email: string;
}