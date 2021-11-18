import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { Button, Banner, Link } from "../components";

export default {
	title: "Banner",
	component: Banner,
} as Meta;

const DefaultTemplateComponent: Story = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open Banner</Button>
			<Banner open={open} onClose={() => setOpen(false)}>
				Banner Text
			</Banner>
		</div>
	);
};

const BannerWithLinkTemplateComponent: Story = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Button onClick={() => setOpen(true)}>Open Banner</Button>
			<Banner open={open} onClose={() => setOpen(false)}>
				Some Banner Text with{" "}
				<Link
					href="https://www.google.com/"
					bannerLink
					externalLink
					referrerPolicy="no-referrer"
				>
					a link to some page
				</Link>
			</Banner>
		</div>
	);
};

const Template = () => <DefaultTemplateComponent />;

export const Default = Template.bind({});

export const BannerWithLink = BannerWithLinkTemplateComponent.bind({});
