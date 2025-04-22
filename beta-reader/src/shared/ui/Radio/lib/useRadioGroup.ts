"use client";

import { createContext, useContext, useState } from "react";

interface RadioGroupContextValue
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  name: string;
  onRadioChange: (value: string) => void;
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

export const useRadioGroup = (
  initialValue?: string,
  callback?: (value: string) => void
) => {
  const [value, setValue] = useState<string>(() => initialValue || "");

  const onRadioGroupChange = (value: string) => {
    setValue(value);
    callback?.(value);
  };

  return {
    value,
    onRadioGroupChange
  };
};
