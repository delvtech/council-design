import React from "react";

export interface IndicatorProps {
	accent?: boolean;
	children: React.ReactNode;
	isActive?: boolean;
}

export default function Indicator({
	accent,
	children,
	isActive,
}: IndicatorProps) {
	const color = accent ? tw("bg-votingGreen") : tw("bg-goldYellow");

	const indicatorRootClasses = ["relative", "inline-block"];
	const indicatorPositionClasses = [
		"absolute",
		"flex",
		"h-5",
		"w-5",
		"top-0",
		"right-0",
		"transform",
		"translate-x-2",
		"-translate-y-1.5",
	];
	const indicatorAnimClasses = [
		"absolute",
		"rounded-full",
		"h-5",
		"w-5",
		`bg-${color}`,
		"opacity-75",
		"animate-ping",
	];
	const indicatorClasses = ["h-5", "w-5", `bg-${color}`, "rounded-full"];

	return (
		<span className={`${indicatorRootClasses.join(" ")}`}>
			{children}

			{isActive && (
				<span className={`${indicatorPositionClasses.join(" ")}`}>
					<span className={`${indicatorAnimClasses.join(" ")}`} />
					<span className={`${indicatorClasses.join(" ")}`} />
				</span>
			)}
		</span>
	);
}
