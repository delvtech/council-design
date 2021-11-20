import classNames from "classnames";
import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";
import { ButtonStyles, getButtonClass } from "src/ui/base/Button/styles";
import tw from "src/elf-tailwindcss-classnames";

interface LinkButtonProps extends ButtonStyles {
  /**
   * path for next router to navigate to
   */
  link: string;
  children?: ReactNode;
}

/**
 * Button for next router links
 */
export default function LinkButton(props: LinkButtonProps): ReactElement {
  const { link, variant, round, children } = props;
  const buttonClass = getButtonClass({ variant, round });
  return (
    <Link href={link} passHref>
      <div className={classNames(buttonClass, tw("cursor-pointer"))}>
        {children}
      </div>
    </Link>
  );
}
