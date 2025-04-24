"use client";

import { createContext, useContext, useState } from "react";

interface CheckboxGroupContextValue
  extends React.InputHTMLAttributes<HTMLInputElement> {
  values: string[];
  name: string;
  onCheckboxClick: (newValue: string) => void;
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

export const useCheckbox = (
  initialValue?: string,
  callback?: (value: string[]) => void
) => {
  const [values, setValues] = useState<string[]>(() =>
    initialValue ? [initialValue] : []
  );

  const onCheckboxClick = (value: string) => {
    const newCheckboxValues = values.includes(value)
      ? values.filter((item) => item !== value)
      : [...values, value];

    setValues(newCheckboxValues);
    callback?.(newCheckboxValues);
  };

  return {
    values,
    onCheckboxClick
  };
};
