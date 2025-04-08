import React from "react";

const buttonSize = {
  sm: "px-3 py-1.5 text-caption-1-medium gap-1", // 12px, 6px, gap 4px
  md: "px-5 py-2 text-caption-1-medium gap-1", // 20px, 8px, gap 4px
  lg: "px-5 py-3 text-body-1-semibold gap-1.5" // 20px, 12px, gap 6px
} as const;

const buttonColors = {
  primary:
    "bg-primary-400 text-secondary-white hover:bg-primary-500  disabled:bg-secondary-700 disabled:text-secondary-300 ",
  secondary:
    "bg-secondary-700 text-secondary-white hover:bg-secondary-600  disabled:bg-secondary-700 disabled:text-secondary-300 ",
  white:
    "bg-secondary-white text-neuutral-black hover:bg-secondary-200 disabled:bg-secondary-700 disabled:text-secondary-300"
} as const;

const buttonRadius = {
  md: "rounded-xl", // 12px
  full: "rounded-full"
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: keyof typeof buttonSize;
  variant: keyof typeof buttonColors;
  rounded: keyof typeof buttonRadius;
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
    className={`flex items-center ${buttonSize[size]} ${buttonColors[variant]} ${buttonRadius[rounded]} ${className}`}
    {...props}
  >
    {children}
  </button>
);
