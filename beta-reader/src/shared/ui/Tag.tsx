import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import { CloseSmallIcon } from "../assets";

const tagVariants = cva(
  "bg-secondary-700  flex justify-center items-center gap-1 px-3 py-1.5 text-secondary-white text-caption-1-medium",
  {
    variants: {
      variant: {
        default: "",
        interactive:
          "border-secondary-600 hover:border-secondary-500 cursor-pointer border"
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

interface TagProps extends Omit<VariantProps<typeof tagVariants>, "variant"> {
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

  const _className = tagVariants({
    variant,
    rounded,
    class: className
  });

  if (variant === "interactive") {
    return (
      <button
        className={_className}
        onClick={onClick}
        type="button"
        aria-label="tag"
      >
        {children}
        <CloseSmallIcon />
      </button>
    );
  }

  return <span className={_className}>{children}</span>;
};
