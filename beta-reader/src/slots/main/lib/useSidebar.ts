import { useState } from "react";

export const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (action: "open" | "close") => () =>
    setIsOpen(action === "open");

  return {
    isOpen,
    toggle
  };
};
