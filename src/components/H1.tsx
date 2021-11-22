import classNames from "classnames";
import { ReactElement, ReactNode } from "react";
import tw from "src/elf-tailwindcss-classnames";

interface H1Props {
  className?: string;
  children?: ReactNode;
}
export default function H1({ className, children }: H1Props): ReactElement {
  return (
    <h1
      className={classNames(
        tw("text-brandDarkBlue-dark", "text-2xl", "font-bold"),
        className
      )}
    >
      {children}
    </h1>
  );
}
