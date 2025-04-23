"use client";

import { ArrowLeftLargeIcon } from "@/shared/assets";

import { useRouter } from "next/navigation";

interface BackwardButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: string;
  height?: string;
}

export const BackwardButton: React.FC<BackwardButtonProps> = ({
  className,
  width = "1.5rem",
  height = "1.5rem",
  ...props
}) => {
  const router = useRouter();

  return (
    <button {...props} onClick={() => router.back()} className={className}>
      <ArrowLeftLargeIcon width={width} height={height} />
    </button>
  );
};
