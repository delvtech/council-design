import React, { createContext, useState, useContext, useRef } from "react";
import { generateUid } from "./utils";

export interface ToggleSwitchProps extends React.HTMLProps<HTMLDivElement> {
	value?: string;
	onValueChange?: (value: string) => void;
}

export interface ToggleSwitchButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	value?: string;
}

const ToggleSwitchContext = createContext({
	currentSelectionId: "",
	onToggle: (id: string) => {},
});

export default function ToggleSwitch({
	children,
	className,
	value,
	onValueChange,
	...props
}: ToggleSwitchProps) {
	const [currentSelectionId, setCurrentSelectionId] = useState(value || "");

	const onToggle = (id: string) => {
		setCurrentSelectionId(id);
		onValueChange && onValueChange(id);
	};

	const classes = ["rounded-regular", "bg-hackerSky", "w-max", "shadow-lg"];

	return (
		<div className={`${classes.join(" ")} ${className}`} {...props}>
			<ToggleSwitchContext.Provider
				value={{ currentSelectionId, onToggle }}
			>
				{children}
			</ToggleSwitchContext.Provider>
		</div>
	);
}

export function ToggleSwitchButton({
	onClick,
	children,
	className,
	value,
	...props
}: ToggleSwitchButtonProps) {
	const id = useRef(value || generateUid());
	const { currentSelectionId, onToggle } = useContext(ToggleSwitchContext);

	const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		onClick && onClick(event);
		onToggle(id.current);
	};

	const isActive = currentSelectionId === id.current;
	const classes = [
		"rounded-regular",
		"flex-1",
		"px-7",
		"py-3",
		"text-principalRoyalBlue",
		"font-medium",
		...(isActive ? ["bg-paleLily"] : []),
	];

	return (
		<button
			className={`${classes.join(" ")} ${className || ""}`}
			onClick={handleClick}
			{...props}
		>
			{children}
		</button>
	);
}
