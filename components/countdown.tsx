import React, { useEffect, useState } from "react";

import { tw } from "src/elf-tailwindcss-classnames";

const calculateSeconds = (time: {
  hours?: number;
  minutes?: number;
  seconds?: number;
}) => {
  const { hours, minutes, seconds } = time;
  if (!(hours || minutes || seconds)) {
    throw new Error(
      "You must provide at least one value of hours, minutes or seconds"
    );
  }
  return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
};

const formatTime = (seconds: number, format: string) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsLeft = seconds % 60;
  const formattedTime = format
    .replace("hh", hours.toString().padStart(2, "0"))
    .replace("mm", minutes.toString().padStart(2, "0"))
    .replace("ss", secondsLeft.toString().padStart(2, "0"));
  return formattedTime;
};

export interface CountdownProps extends React.HTMLAttributes<HTMLSpanElement> {
  hours?: number;
  minutes?: number;
  seconds?: number;
  timeFormat?: string;
  onComplete?: () => void;
}

let intervalId: NodeJS.Timeout;

export default function Countdown({
  className,
  hours,
  minutes,
  seconds,
  timeFormat,
  onComplete,
  ...props
}: CountdownProps) {
  const [secondsLeft, setsecondsLeft] = useState(
    calculateSeconds({ hours, minutes, seconds })
  );
  const format = timeFormat || "hhH mmM ssS";

  useEffect(() => {
    intervalId = setInterval(() => {
      setsecondsLeft((secondsLeft) => secondsLeft - 1);
    }, 1000);
    return () => intervalId && clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (secondsLeft <= 0) {
      intervalId && clearInterval(intervalId);
      onComplete && onComplete();
    }
  }, [secondsLeft]);

  return (
    <span className={tw("text-principalRoyalBlue", "text-base")} {...props}>
      {formatTime(secondsLeft, format)}
    </span>
  );
}
