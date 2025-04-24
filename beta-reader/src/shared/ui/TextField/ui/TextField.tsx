"use client";

import { VariantProps, cva } from "class-variance-authority";

import { TextFieldContext, useTextField, useTextFieldContext } from "../lib";

interface TextFieldProps {
  children?: React.ReactNode;
  className?: string;
}

const textFieldTextFieldContainerVariant = cva(
  "bg-secondary-900 rounded-[1.25rem] px-7 py-6 ",
  {
    variants: {
      isFocused: {
        true: "border border-primary-300",
        false: "border border-secondary-900"
      }
    }
  }
);

export const Container: React.FC<TextFieldProps> = ({
  children,
  className = ""
}) => {
  const { isFocused, toggleFocus } = useTextField();

  return (
    <fieldset
      className={textFieldTextFieldContainerVariant({
        className,
        isFocused
      })}
    >
      <TextFieldContext value={{ isFocused, toggleFocus }}>
        {children}
      </TextFieldContext>
    </fieldset>
  );
};

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  children,
  className,
  ...props
}) => {
  const {} = useTextFieldContext();

  return (
    <label
      className={`text-title-4-bold cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = "",
  ...props
}) => {
  const { toggleFocus } = useTextFieldContext();

  return (
    <input
      {...props}
      onFocus={toggleFocus("on")}
      onBlur={toggleFocus("off")}
      className={`text-secondary-200 placeholder:text-secondary-200 selection:bg-[#B3BAFF]/30 focus:outline-none ${className}`}
    />
  );
};

const textAreaVariant = cva(
  "placeholder:text-secondary-200 bg-transparent selection:bg-[#B3BAFF]/30 focus:outline-none",
  {
    variants: {
      resize: {
        true: "",
        false: "resize-none"
      }
    },
    defaultVariants: {
      resize: false
    }
  }
);

export const TextArea: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
    VariantProps<typeof textAreaVariant>
> = ({ className = "", resize, ...props }) => {
  const { toggleFocus } = useTextFieldContext();

  return (
    <textarea
      {...props}
      onFocus={toggleFocus("on")}
      onBlur={toggleFocus("off")}
      className={textAreaVariant({
        className,
        resize
      })}
    />
  );
};
