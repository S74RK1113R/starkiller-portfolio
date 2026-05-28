"use client";

import { Slot } from "@radix-ui/react-slot";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  asChild?: boolean;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg active:scale-[0.97]",
  outline:
    "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white active:scale-[0.97]",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  asChild,
  target,
  rel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900";
  const classes = `${baseClasses} ${variantStyles[variant]} ${className}`;

  if (asChild) {
    return <Slot className={classes}>{children}</Slot>;
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type="button">
      {children}
    </button>
  );
}
