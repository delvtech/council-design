import { Meta, Story } from "@storybook/react";
import { Link, LinkProps } from "../components";

export default {
	title: "Link",
	component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
	<Link href="#" {...args}>
		Click Me
	</Link>
);

const ExternalLinkTemplate: Story<LinkProps> = (args) => (
	<Link href="https://www.google.com" externalLink {...args}>
		Click Me
	</Link>
);

export const Default = Template.bind({});
Default.args = {};

export const ExternalLink = ExternalLinkTemplate.bind({});
ExternalLink.args = {};

export const Active = Template.bind({});
Active.args = {
	active: true,
};

export const Banner = Template.bind({});
Banner.args = {
	bannerLink: true,
};
