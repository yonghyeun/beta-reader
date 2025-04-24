"use client";

import { createContext, useCallback, useContext, useState } from "react";

export const TextFieldContext = createContext<ReturnType<
  typeof useTextField
> | null>(null);

export const useTextFieldContext = () => {
  const context = useContext(TextFieldContext);
  if (context === null) {
    throw new Error("useTextFieldContext는 TextField 내에서만 사용해야 합니다");
  }
  return context;
};

export const useTextField = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const toggleFocus = useCallback(
    (value: "on" | "off") => () => {
      setIsFocused(value === "on");
    },
    []
  );

  return {
    isFocused,
    toggleFocus
  };
};
