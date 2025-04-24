import { VariantProps, cva } from "class-variance-authority";
import React from "react";

import type { LinkProps as OriginalLinkProps } from "next/link";
import Link from "next/link";

type TextButtonProps = Omit<
  VariantProps<typeof textButtonVariants>,
  "isWithIcon"
> &
  (ButtonProps | LinkProps);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: "button";
  className?: string;
  children: React.ReactNode;
}
interface LinkProps extends OriginalLinkProps {
  as?: "link";
  className?: string;
  children: React.ReactNode;
}

const textButtonVariants = cva(
  "text-primary-200 text-body-2-midium gap-0.5 hover:text-primary-100 inline-flex items-center rounded-lg hover:bg-[#FFFFFF1A]",
  {
    variants: {
      size: {
        sm: "",
        md: "py-0.5"
      },
      isWithIcon: {
        true: "pr-0.5 pl-1.5",
        false: "px-0.5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  className = "",
  size,
  as = "button",
  ...props
}) => {
  const isWithIcon = Array.isArray(children) && children.length > 1;

  return as === "button" ? (
    <button
      className={textButtonVariants({
        size,
        isWithIcon,
        className
      })}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      type="button"
    >
      {children}
    </button>
  ) : (
    <Link
      className={textButtonVariants({
        size,
        isWithIcon,
        className
      })}
      {...(props as OriginalLinkProps)}
    >
      {children}
    </Link>
  );
};
