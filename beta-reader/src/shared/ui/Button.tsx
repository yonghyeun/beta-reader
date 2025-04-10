import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva("flex items-center justify-center", {
  variants: {
    size: {
      sm: "px-3 py-1.5 text-caption-1-medium gap-1", // 12px, 6px, gap 4px
      md: "px-5 py-2 text-caption-1-medium gap-1", // 20px, 8px, gap 4px
      lg: "px-5 py-3 text-body-1-semibold gap-1.5" // 20px, 12px, gap 6px
    },
    variant: {
      primary:
        "bg-primary-400 text-secondary-white hover:bg-primary-500 disabled:bg-secondary-700 disabled:text-secondary-300",
      secondary:
        "bg-secondary-700 text-secondary-white hover:bg-secondary-600 disabled:bg-secondary-700 disabled:text-secondary-300",
      white:
        "bg-secondary-white text-secondary-black hover:bg-secondary-200 disabled:bg-secondary-700 disabled:text-secondary-300"
    },
    rounded: {
      md: "rounded-xl", // 12px
      full: "rounded-full"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
    rounded: "md"
  }
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  rounded,
  className = "",
  children,
  ...props
}) => (
  <button
    className={buttonVariants({ size, variant, rounded, className })}
    {...props}
  >
    {children}
  </button>
);
