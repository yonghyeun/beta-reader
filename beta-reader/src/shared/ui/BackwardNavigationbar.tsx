import { PropsWithChildren } from "react";

import { BackwardButton } from "./Button";

export const BackwardNavigationbar: React.FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <nav className="border-b-secondary-600 bg-secondary-black sticky top-0 z-50 flex gap-5 border-b px-10 py-5">
      <BackwardButton width="2rem" height="2rem" />
      {children}
    </nav>
  );
};
