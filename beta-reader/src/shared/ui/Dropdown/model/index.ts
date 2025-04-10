import { createContext, useContext } from "react";

interface DropdownContextProps {
  closeDropDown: (value: string) => void;
}

export const DropdownContext = createContext<DropdownContextProps | null>(null);

export const useDropdownContext = (): DropdownContextProps => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdown 훅은 DropdownProvider 내부에서만 사용해야 합니다"
    );
  }
  return context;
};
