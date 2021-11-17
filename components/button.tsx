import React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	fullWidth?: boolean;
	gradientButton?: boolean;
	tokenBalanceButton?: boolean;
	withdrawalOrRemovalButton?: boolean;
}

export default function Button({
	children,
	className,
	fullWidth,
	gradientButton,
	tokenBalanceButton,
	withdrawalOrRemovalButton,
	style,
	...props
}: ButtonProps) {
	const preDefinedSizes = {
		width: gradientButton
			? "163px"
			: tokenBalanceButton
			? "150px"
			: undefined,
		height: gradientButton
			? "49px"
			: tokenBalanceButton
			? "33px"
			: undefined,
		padding: gradientButton || tokenBalanceButton ? "0px" : undefined,
	};

	const classes = [
		"box-border",
		"font-medium",
		"duration-200",
		"inline-block",
		"p-btn",
		"rounded-regular",
		"text-center",
		"text-sm",
		"transition",
		...(gradientButton || tokenBalanceButton || withdrawalOrRemovalButton
			? ["shadow-btn", "hover:shadow-btnAccent"]
			: [
					"text-xxs",
					"bg-principalRoyalBlue",
					"text-white",
					"hover:bg-brandLightBlue",
					"hover:text-clay",
			  ]),
		...(fullWidth ? ["w-full"] : ["w-auto"]),
		...(tokenBalanceButton
			? [
					"text-sm",
					"text-white",
					"bg-gradient-to-br",
					"from-brandLightBlue",
					"to-principalRoyalBlue",
			  ]
			: []),

		...(withdrawalOrRemovalButton
			? ["bg-hackerSky", "text-lg", "text-principalRoyalBlue"]
			: []),

		...(gradientButton
			? [
					"text-lg",
					"text-white",
					"bg-gradient-to-br",
					"from-brandLightBlue",
					"to-principalRoyalBlue",
			  ]
			: []),
	];

	return (
		<button
			className={`${classes.join(" ")} ${className || ""}`}
			style={{
				...preDefinedSizes,
				...(style || {}),
			}}
			{...props}
		>
			{children}
		</button>
	);
}
