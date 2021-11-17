import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import {
	DropDown,
	DropDownProps,
	DropDownItem,
	DropDownVariant,
} from "../components";

export default {
	title: "DropDown",
	component: DropDown,
} as Meta;

const GradientTemplateComponent: Story<DropDownProps> = ({
	title,
	...args
}) => {
	const [currentSelectionId, setCurrentSelectionId] = useState("");

	return (
		<>
			<DropDown
				variant={DropDownVariant.Gradient}
				title="Vote"
				value={currentSelectionId}
				onValueChange={(value) => setCurrentSelectionId(value)}
				{...args}
			>
				<DropDownItem icon="HowToVote" value="For">
					For
				</DropDownItem>
				<DropDownItem icon="HowToVote" value="Abstain">
					Abstain
				</DropDownItem>
				<DropDownItem icon="HowToVote" value="Against">
					Against
				</DropDownItem>
				<DropDownItem icon="OpenInNewTab" value="Delegate">
					Delegate
				</DropDownItem>
			</DropDown>

			{currentSelectionId && (
				<>
					<br />
					<p>You Clicked: {currentSelectionId}</p>
				</>
			)}
		</>
	);
};

const TransparentTemplateComponent: Story<DropDownProps> = ({
	title,
	...args
}) => {
	const [currentGas, setCurrentGas] = useState("201");

	return (
		<>
			<DropDown
				variant={DropDownVariant.Transparent}
				title={currentGas}
				value={currentGas}
				onValueChange={(value) => setCurrentGas(value)}
				icon="LocalGas"
				{...args}
			>
				<DropDownItem value={"181"}>Standard (181 Gwei)</DropDownItem>
				<DropDownItem value={"201"}>Fast (201 Gwei)</DropDownItem>
				<DropDownItem value={"221"}>Instant (221 Gwei)</DropDownItem>
			</DropDown>

			<br />
			<p>Current Gas: {currentGas} Gwei</p>
		</>
	);
};

const Template: Story<DropDownProps> = (args) => (
	<GradientTemplateComponent {...args} />
);

export const Gradient = Template.bind({});
Gradient.args = {};

export const Transparent = TransparentTemplateComponent.bind({});
Transparent.args = {};
