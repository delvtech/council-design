import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { Link, Sidebar, SidebarProps } from "../components";

export default {
	title: "Sidebar",
	component: Sidebar,
} as Meta;

const SidebarTemplate: Story<SidebarProps> = (args) => {
	const [index, setIndex] = useState(0);

	return (
		<Sidebar {...args}>
			<Link
				href="#"
				className="my-6 w-max"
				onClick={() => setIndex(0)}
				active={index === 0}
			>
				Link 1
			</Link>
			<Link
				href="#"
				className="my-6 w-max"
				onClick={() => setIndex(1)}
				active={index === 1}
			>
				Link 2
			</Link>
			<Link
				href="#"
				className="my-6 w-max"
				onClick={() => setIndex(2)}
				active={index === 2}
			>
				Link 3
			</Link>
			<Link
				href="#"
				className="my-6 w-max"
				onClick={() => setIndex(3)}
				active={index === 3}
			>
				Another Link
			</Link>
		</Sidebar>
	);
};

const Template: Story<SidebarProps> = (args) => <SidebarTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {};
