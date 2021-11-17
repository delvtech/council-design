import { Meta, Story } from "@storybook/react";
import { Button, Indicator, IndicatorProps } from "../components";

export default {
	title: "Indicator",
	component: Indicator,
} as Meta;

const Template: Story<IndicatorProps> = (args) => (
	<Indicator {...args}>
		<Button gradientButton>Click Me</Button>
	</Indicator>
);

const AccentTemplate: Story<IndicatorProps> = (args) => (
	<Indicator {...args}>
		<Button>Click Me</Button>
	</Indicator>
);

export const Default = Template.bind({});
Default.args = {
	isActive: true,
};

export const Accent = AccentTemplate.bind({});
Accent.args = {
	isActive: true,
	accent: true,
};
