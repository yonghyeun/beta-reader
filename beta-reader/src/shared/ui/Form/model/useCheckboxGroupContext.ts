import { createContext, useContext } from "react";

interface CheckboxGroupContextValue
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string[];
  name: string;
  onCheckboxChange: (newValue: string) => void;
}

export const CheckboxGroupContext =
  createContext<CheckboxGroupContextValue | null>(null);

export const useCheckboxGroupContext = () => {
  const context = useContext(CheckboxGroupContext);
  if (context === null) {
    throw new Error(
      "useCheckboxGroupContext CheckboxGroup 내에서만 사용해야 합니다"
    );
  }
  return context;
};
