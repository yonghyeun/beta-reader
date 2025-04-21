"use client";

import { createContext, useContext } from "react";

interface RadioGroupContextValue
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  name: string;
  onRadioChange: (newValue: string) => void;
}

export const RadioGroupContext = createContext<RadioGroupContextValue | null>(
  null
);

export const useRadioGroupContext = () => {
  const context = useContext(RadioGroupContext);
  if (context === null) {
    throw new Error(
      "useRadioGroupContext는 RadioGroup 내에서만 사용해야 합니다"
    );
  }
  return context;
};
