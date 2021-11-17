import { Meta, Story } from "@storybook/react";
import { StatusButton, ButtonStatus, StatusButtonProps } from "../components";

export default {
	title: "StatusButton",
	component: StatusButton,
} as Meta;

const Template: Story<StatusButtonProps> = (args) => <StatusButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	status: ButtonStatus.Default,
};

export const Success = Template.bind({});
Success.args = {
	status: ButtonStatus.Success,
};

export const Fail = Template.bind({});
Fail.args = {
	status: ButtonStatus.Failed,
};

export const Queued = Template.bind({});
Queued.args = {
	status: ButtonStatus.Queued,
};
