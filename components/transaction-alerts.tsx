import React from "react";

import { Done, DoneAll, HourGlass, Refresh, Warning } from "../icons";

export enum TransactionAlertsVariant {
	ApproveTransaction = "ApproveTransaction",
	TransactionApproved = "TransactionApproved",
	TransactionRejected = "TransactionRejected",
	ApproveStaking = "ApproveStaking",
	StakingApproved = "StakingApproved",
}

export interface TransactionAlertsProps {
	variant?: TransactionAlertsVariant;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function TransactionAlerts({
	variant,
	onClick,
}: TransactionAlertsProps) {
	const alertSize = {
		width: "302px",
		height: "56px",
	};

	const twoItemClasses = [
		"border",
		"border-solid",
		"border-principalRoyalBlue",
		"rounded-regular",
		"flex",
		"items-center",
		"justify-center",
		"text-principalRoyalBlue",
		"text-lg",
		"font-medium",
	];
	const threeItemClasses = [
		"border",
		"border-solid",
		"border-principalRoyalBlue",
		"rounded-regular",
		"flex",
		"items-center",
		"justify-between",
		"text-principalRoyalBlue",
		"text-lg",
		"font-medium",
	];

	switch (variant) {
		case TransactionAlertsVariant.ApproveTransaction:
			return (
				<button
					className={`${threeItemClasses.join(" ")}`}
					style={alertSize}
					onClick={onClick}
				>
					<HourGlass fill="#005EBE" className="animate-spin ml-6" />
					Approve Transaction
					<div>
						<Done fill="#005EBE" className="mr-5" />
					</div>
				</button>
			);

		case TransactionAlertsVariant.TransactionApproved:
			return (
				<button
					className={`${twoItemClasses.join(" ")}`}
					style={alertSize}
					onClick={onClick}
				>
					<DoneAll className="mr-3.5" />
					Transaction Approved
				</button>
			);

		case TransactionAlertsVariant.TransactionRejected:
			return (
				<button
					className={`${threeItemClasses.join(" ")}`}
					style={alertSize}
					onClick={onClick}
				>
					<Warning className="ml-6" />
					Transaction Rejected
					<div>
						<Refresh className="mr-5" />
					</div>
				</button>
			);

		case TransactionAlertsVariant.ApproveStaking:
			return (
				<button
					className={`${threeItemClasses.join(" ")}`}
					style={alertSize}
					onClick={onClick}
				>
					<HourGlass fill="#005EBE" className="animate-spin ml-6" />
					Approve Staking
					<div>
						<Done fill="#005EBE" className="mr-5" />
					</div>
				</button>
			);

		case TransactionAlertsVariant.StakingApproved:
			return (
				<button
					className={`${twoItemClasses.join(" ")}`}
					style={alertSize}
					onClick={onClick}
				>
					<DoneAll className="mr-3.5" />
					Staking Approved
				</button>
			);

		default:
			return null;
	}
}
