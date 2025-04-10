import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { CloseIcon } from "@/public/assets";

const tagVariants = cva(
  "flex justify-center items-center gap-1 px-3 py-1.5 text-secondary-white text-caption-1-medium",
  {
    variants: {
      variant: {
        default: "bg-secondary-700 hover:bg-secondary-500",
        interactive:
          "bg-secondary-700 hover:bg-secondary-500 border-secondary-600 hover:border-secondary-500 cursor-pointer border"
      },
      rounded: {
        default: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      rounded: "default"
    }
  }
);

interface TagProps extends VariantProps<typeof tagVariants> {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Tag: React.FC<TagProps> = ({
  rounded,
  className = "",
  children,
  onClick
}) => {
  // onClick이 있으면 variant를 interactive로 설정
  const variant = onClick ? "interactive" : "default";
  const roundedValue = rounded ? "full" : "default";

  if (onClick) {
    return (
      <button
        className={tagVariants({
          variant,
          rounded: roundedValue,
          class: className
        })}
        onClick={onClick}
        type="button"
        aria-label="tag"
      >
        {children}
        <CloseIcon />
      </button>
    );
  }

  return (
    <span
      className={tagVariants({
        variant,
        rounded: roundedValue,
        class: className
      })}
    >
      {children}
    </span>
  );
};
