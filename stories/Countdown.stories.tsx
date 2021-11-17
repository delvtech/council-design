import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { Button, Countdown, CountdownProps } from "../components";

export default {
	title: "Countdown",
	component: Countdown,
} as Meta;

const TemplateCompnent = ({
	hours,
	minutes,
	seconds,
}: {
	hours?: number;
	minutes?: number;
	seconds?: number;
}) => {
	const [complete, setComplete] = useState(false);
	const [forceResetKey, setForceResetKey] = useState(new Date().getTime());

	const onComplete = () => {
		setComplete(true);
	};

	const onReset = () => {
		setComplete(false);
		setForceResetKey(new Date().getTime());
	};

	return (
		<>
			<Countdown
				hours={hours}
				minutes={minutes}
				seconds={seconds}
				onComplete={onComplete}
				key={forceResetKey}
			/>
			{complete && (
				<>
					<br /> <br />
					<Button onClick={onReset}>Restart</Button>
				</>
			)}
		</>
	);
};

const Template: Story<CountdownProps> = (args) => (
	<TemplateCompnent {...args} />
);

export const Default = Template.bind({});
Default.args = {
	hours: 0,
	minutes: 0,
	seconds: 5,
};
