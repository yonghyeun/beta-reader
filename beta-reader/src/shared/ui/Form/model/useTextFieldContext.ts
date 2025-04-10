import { createContext, useContext } from "react";

interface TextFieldContextValue {
  toggleFocus: (value: "on" | "off") => () => void;
}

export const TextFieldContext = createContext<TextFieldContextValue | null>(
  null
);

export const useTextFieldContext = () => {
  const context = useContext(TextFieldContext);
  if (context === null) {
    throw new Error("useTextFieldContext는 TextField 내에서만 사용해야 합니다");
  }
  return context;
};
