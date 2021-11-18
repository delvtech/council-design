import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps } from "../components";

export default {
	title: "Button",
	component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
	<Button {...args}>Button</Button>
);
const TokenTemplate: Story<ButtonProps> = (args) => (
	<Button {...args}>0.00 ELFI Tokens</Button>
);

export const Default = Template.bind({});
Default.args = {
	fullWidth: false,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	fullWidth: true,
};

export const Gradient = Template.bind({});
Gradient.args = {
	gradientButton: true,
};

export const ElfiBalance = TokenTemplate.bind({});
ElfiBalance.args = {
	tokenBalanceButton: true,
};

export const WithdrawalOrRemovalButton = Template.bind({});
WithdrawalOrRemovalButton.args = {
	withdrawalOrRemovalButton: true,
};
