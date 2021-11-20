import classNames from "classnames";
import React, { ReactElement, ReactNode } from "react";
import tw from "src/elf-tailwindcss-classnames";

interface LabelProps {
  /**
   * Whether or not the label should be small (14px).
   * Default set to false (16px).
   */
  small?: boolean;
  className?: string;
  children?: ReactNode;
}

export function Label({
  small,
  className,
  children,
}: LabelProps): ReactElement {
  return (
    <span
      className={classNames(tw(small ? "text-sm" : "text-base"), className)}
    >
      {children}
    </span>
  );
}
