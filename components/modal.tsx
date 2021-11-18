import React, { useEffect, useState } from "react";
import Card from "./card";

export interface ModalProps {
	children: React.ReactNode;
	open?: boolean;
	onClose?: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {
	const [isOpen, setOpen] = useState(false || open);

	useEffect(() => {
		setOpen(open);
	}, [open]);

	const handleClose = () => {
		setOpen(false);
		onClose && onClose();
	};

	const modalRootClasses = [
		"flex",
		"justify-center",
		"items-center",
		"fixed",
		"top-0",
		"left-0",
		"h-screen",
		"w-screen",
		"box-border",
		"px-2",
		"py-10",
		"md:p-20",
		"lg:px-52",
		"lg:py-24",
		"xxl:px-80",
		"xxl:py-40",
	];
	const backdropClasses = [
		"fixed",
		"bg-black",
		"h-screen",
		"w-screen",
		"opacity-40",
		"z-10",
	];
	const cardClasses = [
		"relative",
		"z-20",
		"max-w-xs",
		"max-w-full",
		"max-h-full",
		"overflow-y-auto",
	];

	return isOpen ? (
		<div className={`${modalRootClasses.join(" ")}`}>
			<div
				className={`${backdropClasses.join(" ")}`}
				onClick={handleClose}
			/>
			<Card className={`${cardClasses.join(" ")}`}>{children}</Card>
		</div>
	) : (
		<></>
	);
}
