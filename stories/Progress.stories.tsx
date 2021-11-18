import { Meta, Story } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Progress } from "../components";

export default {
	title: "Progress",
	component: Progress,
} as Meta;

const TemplateComponent = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const incrementInterval = setInterval(() => {
			setProgress((progress) => progress + 0.01);
		}, 20);
		const restartInterval = setInterval(() => {
			setProgress(0);
		}, 2000);

		return () => {
			clearInterval(incrementInterval);
			clearInterval(restartInterval);
		};
	}, []);

	return <Progress progress={progress} />;
};

const Template: Story = () => <TemplateComponent />;

export const Default = Template.bind({});
Default.args = {};
