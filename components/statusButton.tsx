import React from "react";

export enum ButtonStatus {
	Failed = "failed",
	Default = "default",
	Queued = "queued",
	Success = "success",
}

export interface StatusButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	status: ButtonStatus;
}

export default function StatusButton({
	className,
	status,
	style,
	...props
}: StatusButtonProps) {
	const preDefinedSizes = {
		width: "121px",
		height: "49px",
		padding: "0",
	};
	const markerSize = {
		width: "12px",
		height: "12px",
	};

	const isSuccess = status === ButtonStatus.Success;
	const isFailed = status === ButtonStatus.Failed;
	const isQueued = status === ButtonStatus.Queued;
	const isDefault = status === ButtonStatus.Default;

	const buttonClasses = [
		"flex",
		"items-center",
		"justify-center",
		"box-border",
		"font-medium",
		"rounded-regular",
		"text-xs",
		"border",
		"border-solid",
		...(isSuccess
			? ["bg-votingGreen", "text-statusGreen", "border-votingGreen"]
			: []),
		...(isFailed
			? ["bg-statusRed", "text-deepRed", "border-statusRed"]
			: []),
		...(isQueued
			? ["text-principalRoyalBlue", "border-principalRoyalBlue"]
			: []),
		...(isDefault ? ["text-statusGreen", "border-votingGreen"] : []),
	];
	const markerClasses = [
		"inline-block",
		"rounded-full",
		"mr-2",
		...(isSuccess ? ["bg-statusGreen"] : []),
		...(isFailed ? ["bg-deepRed"] : []),
		...(isQueued ? ["bg-principalRoyalBlue"] : []),
		...(isDefault ? ["bg-statusGreen"] : []),
	];

	return (
		<button
			className={`${buttonClasses.join(" ")} ${className}`}
			style={{ ...preDefinedSizes, ...(style || {}) }}
			{...props}
		>
			<span style={markerSize} className={`${markerClasses.join(" ")}`} />
			{isSuccess
				? "Executed"
				: isFailed
				? "Failed"
				: isQueued
				? "Queued"
				: "Execute"}
		</button>
	);
}
