import { Meta, Story } from "@storybook/react";
import {
	ArrowForward,
	Close,
	Copy,
	DownArrow,
	HourGlass,
	HowToVote,
	OpenInNewTab,
	Twitter,
	Help,
	LocalGas,
	Refresh,
	DoneAll,
	Done,
	Warning,
} from "../icons";

export default {
	title: "Icons",
} as Meta;

const CollectionTemplate: Story = () => (
	<>
		<div className="bg-black fixed top-0 left-0 right-0 bottom-0" />
		<div className="grid grid-cols-6 gap-x-2 gap-y-20 relative z-10 justify-items-center items-center my-4">
			<ArrowForward />
			<Close />
			<Copy />
			<DownArrow />
			<HourGlass />
			<HowToVote />
			<OpenInNewTab />
			<Twitter />
			<Help />
			<LocalGas />
			<Refresh />
			<DoneAll />
			<Done />
			<Warning />
		</div>

		<div className="mt-20 relative z-10">
			<p className="text-white text-center">
				The following icons are stored as images
			</p>
			<div className="grid grid-cols-2 gap-4 justify-items-center items-center">
				<img src="./assets/elfi-token.svg" />
				<img src="./assets/council-logo.png" />
			</div>
		</div>
	</>
);

const CustomConfigTemplate: Story = () => (
	<>
		<div className="bg-black fixed top-0 left-0 right-0 bottom-0" />
		<div className="grid grid-cols-3 gap-3 relative z-10 justify-items-center items-center my-4">
			<ArrowForward fill={"red"} />
			<Copy style={{ height: "40px", width: "40px" }} />
			<DoneAll className="opacity-30" />
		</div>
	</>
);

export const Collection = CollectionTemplate.bind({});

export const CustomConfiguration = CustomConfigTemplate.bind({});
