import { SVGProps } from "react";

export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25rem"
      height="1.25rem"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <circle cx="24" cy="24" r="24" fill="#D9DCFF" />
      <circle cx="24" cy="18.5454" r="8.72727" fill="#B3BAFF" />
      <path
        d="M25.0916 29.4546C32.4956 29.4548 38.8215 34.0654 41.3582 40.5718C36.9879 45.148 30.8272 48.0005 23.9998 48.0005C17.9941 48.0004 12.5038 45.7938 8.29468 42.1479C10.3671 34.8223 17.1023 29.4546 25.0916 29.4546Z"
        fill="#B3BAFF"
      />
    </svg>
  );
};
