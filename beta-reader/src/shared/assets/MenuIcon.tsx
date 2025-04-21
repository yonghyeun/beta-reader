import { SVGProps } from "react";

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M5 17H19M5 12H19M5 7H19"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
