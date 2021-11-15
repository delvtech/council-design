import React from "react";
import { IconProps } from "./propType";

export default function HourGlass({ fill, style, ...props }: IconProps) {
	return (
		<svg
			width="12"
			height="20"
			viewBox="0 0 12 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{
				width: "20px",
				height: "20px",
				...style,
			}}
			{...props}
		>
			<path
				d="M0 0L0.0100002 6L4 10L0.0100002 14.01L0 20H12V14L8 10L12 6.01V0H0ZM10 14.5V18H2V14.5L6 10.5L10 14.5Z"
				fill={fill || "white"}
			/>
		</svg>
	);
}
