import { SVGProps } from "react";

export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 16 17"
    fill="none"
    {...props}
  >
    <path
      d="M4 8.5H8M8 8.5H12M8 8.5V12.5M8 8.5V4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
