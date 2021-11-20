import React from "react";

export interface LinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  bannerLink?: boolean;
  externalLink?: boolean;
}

export default function Link({
  active,
  bannerLink,
  children,
  className,
  externalLink,
  href,
  ...props
}: LinkProps) {
  const classes = [
    "no-underline",
    "transition",
    "duration-200",
    "cursor-pointer",
    ...(active ? ["font-bold"] : ["font-medium"]),
    ...(bannerLink
      ? ["text-goldYellow", "hover:text-white"]
      : ["text-principalRoyalBlue", "hover:text-principalBlue"]),
  ];

  const link = (
    <a
      className={`${classes.join(" ")} ${className || ""}`}
      href={href}
      target={externalLink ? "_blank" : undefined}
      {...props}
    >
      {children}
    </a>
  );

  return link;
}
