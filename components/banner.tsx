import React, { useEffect, useState } from "react";
import { Close } from "../icons";

export interface BannerProps {
	bannerClassName?: string;
	children?: React.ReactNode;
	open?: boolean;
	onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Banner({
	bannerClassName,
	children,
	open,
	onClose,
}: BannerProps) {
	const [isOpen, setIsOpen] = useState(open || false);

	useEffect(() => {
		setIsOpen(open || false);
	}, [open]);

	const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
		setIsOpen(false);
		onClose && onClose(e);
	};

	const bannerRootClasses = [
		"fixed",
		"box-border",
		"bottom-0",
		"left-0",
		"w-screen",
		"px-5",
		"pb-4",
	];

	const bannerBodyClasses = [
		"bg-principalRoyalBlue",
		"text-white",
		"rounded-regular",
		"py-6",
		"px-7",
		"flex",
		"translate-y-0",
		"animate-slideIn",
	];

	const bannerChildrenClasses = [
		"flex-1",
		"pr-2",
		"text-center",
		"font-medium",
	];

	const bannerCloseClasses = ["mr-5"];

	return isOpen ? (
		<div className={`${bannerRootClasses.join(" ")}`}>
			<div
				className={`${bannerBodyClasses.join(" ")} ${bannerClassName}`}
			>
				<div className={`${bannerChildrenClasses.join(" ")}`}>
					{children}
				</div>

				<button onClick={handleClose}>
					<Close className={`${bannerCloseClasses.join(" ")}`} />
				</button>
			</div>
		</div>
	) : null;
}
