import React from "react";

export interface ProgressProps {
	className?: string;
	progress?: number;
}

export default function Progress({ className, progress }: ProgressProps) {
	const totalPercent = Math.min(100 * (progress || 0), 100);

	const progressRootClasses = [
		"w-full",
		"h-4",
		"bg-gradient-to-b",
		"from-brandLightBlue",
		"to-principalRoyalBlue",
		"shadow-lg",
		"rounded-full",
	];
	const progressBarClasses = [
		"bg-gradient-to-b",
		"from-indianYellow",
		"to-hackerSky",
		"h-full",
		"rounded-full",
	];

	return (
		<div className={`${progressRootClasses.join(" ")} ${className || ""}`}>
			<div
				className={`${progressBarClasses.join(" ")}`}
				style={{ width: `${totalPercent}%` }}
			/>
		</div>
	);
}
