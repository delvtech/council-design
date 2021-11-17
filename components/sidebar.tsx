import React from "react";

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Sidebar({
	children,
	className,
	...props
}: SidebarProps) {
	const sidebarClasses = [
		"border-2",
		"border-solid",
		"border-brandLightBlue",
		"bg-white",
		"w-max",
		"min-h-screen",
		"px-11",
		"py-7",
		"flex",
		"flex-col",
	];
	const imgClasses = ["mb-7"];

	return (
		<aside
			className={`${sidebarClasses.join(" ")} ${className || ""}`}
			{...props}
		>
			<img
				src="/assets/council-logo.png"
				className={`${imgClasses.join(" ")}`}
			/>
			{children}
		</aside>
	);
}
