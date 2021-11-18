import React from "react";

export enum TextVariant {
	Header = "Header",
	SubHeader = "SubHeader",
	SecondaryHeader = "SecondaryHeader",
	Navigation = "Navigation",
	ActiveNavigation = "ActiveNavigation",
	PastNavigation = "PastNavigation",
	Body = "Body",
}

export interface TextProps
	extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
	ignoreColor?: boolean;
	variant?: TextVariant;
}

export default function Text({
	children,
	className,
	ignoreColor,
	variant,
	...props
}: TextProps) {
	const bodyTextClasses = [
		"text-base",
		...(ignoreColor ? [] : ["text-textGrey"]),
	];
	const bodyText = (
		<p
			className={`${bodyTextClasses.join(" ")} ${className || ""}`}
			{...props}
		>
			{children}
		</p>
	);

	switch (variant) {
		case TextVariant.Header:
			const headerClasses = [
				"font-bold",
				"text-l28",
				...(ignoreColor ? [] : ["text-principalRoyalBlue"]),
			];
			return (
				<h1
					className={`${headerClasses.join(" ")} ${className || ""}`}
					{...props}
				>
					{children}
				</h1>
			);

		case TextVariant.SecondaryHeader:
			const secondaryHeaderClasses = [
				"text-l22",
				...(ignoreColor ? [] : ["text-principalRoyalBlue"]),
			];
			return (
				<h2
					className={`${secondaryHeaderClasses.join(" ")}${
						className || ""
					}`}
					{...props}
				>
					{children}
				</h2>
			);

		case TextVariant.SubHeader:
			const subHeaderClasses = [
				"font-medium",
				"text-l22",
				...(ignoreColor ? [] : ["text-yieldLightBlue"]),
			];
			return (
				<h3
					className={`${subHeaderClasses.join(" ")} ${
						className || ""
					}`}
					{...props}
				>
					{children}
				</h3>
			);

		case TextVariant.Navigation:
			const navigationClasses = [
				"text-xl",
				...(ignoreColor ? [] : ["text-principalRoyalBlue"]),
			];
			return (
				<h4
					className={`${navigationClasses.join(" ")} ${
						className || ""
					}`}
					{...props}
				>
					{children}
				</h4>
			);

		case TextVariant.ActiveNavigation:
			const activeNavigationClasses = [
				"text-xl",
				"font-bold",
				...(ignoreColor ? [] : ["text-principalRoyalBlue"]),
			];
			return (
				<h4
					className={`${activeNavigationClasses.join(" ")}${
						className || ""
					}`}
					{...props}
				>
					{children}
				</h4>
			);

		case TextVariant.PastNavigation:
			const pastNavigationClasses = [
				"text-xl",
				"opacity-60",
				...(ignoreColor ? [] : ["text-principalRoyalBlue"]),
			];
			return (
				<h4
					className={`${pastNavigationClasses.join(" ")} ${
						className || ""
					}`}
					{...props}
				>
					{children}
				</h4>
			);

		case TextVariant.Body:
			return bodyText;

		default:
			return bodyText;
	}
}
