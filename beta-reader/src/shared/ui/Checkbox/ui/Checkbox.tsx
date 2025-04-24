"use client";

import { cva } from "class-variance-authority";
import React from "react";

import { CheckIcon } from "@/shared/assets";

import {
  CheckboxGroupContext,
  useCheckbox,
  useCheckboxGroupContext
} from "../lib";

interface CheckboxGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  children: React.ReactNode;
  onCheckboxGroupChange: (value: string[]) => void;
  className?: string;
}

export const Container: React.FC<CheckboxGroupProps> = ({
  name,
  value,
  children,
  className,
  onCheckboxGroupChange,
  ...props
}) => {
  const { values, onCheckboxClick: _onCheckboxClick } = useCheckbox(
    value,
    onCheckboxGroupChange
  );

  return (
    <fieldset className={className}>
      <CheckboxGroupContext
        value={{
          name,
          values,
          onCheckboxClick: _onCheckboxClick,
          ...props
        }}
      >
        {children}
      </CheckboxGroupContext>
    </fieldset>
  );
};

interface CheckboxProps {
  value: string;
  label?: string;
  className?: string;
  id: string;
}

const checkboxVariants = cva("h-5 w-5 p-0.5 rounded-sm transition-colors", {
  variants: {
    isChecked: {
      true: "bg-primary-300 flex items-center justify-center",
      false: "border-secondary-400 border"
    }
  }
});

export const Input: React.FC<CheckboxProps> = ({
  value,
  label,
  className = "",
  id
}) => {
  const {
    values: checkboxValues,
    name,
    onCheckboxClick,
    ...props
  } = useCheckboxGroupContext();
  const isChecked = checkboxValues.includes(value);

  const handleClick = () => {
    onCheckboxClick(value);
  };

  return (
    <label
      htmlFor={id}
      className={`flex w-fit cursor-pointer items-center justify-center gap-1 rounded-lg px-2 py-1 hover:bg-[#FFFFFF1A] ${className}`}
    >
      {/* 
        시각적 체크박스 버튼 표시 - 실제 input은 sr-only로 화면에 보이지 않지만
        스크린 리더는 인식 가능
      */}
      <div className="relative flex items-center justify-center">
        <div className={checkboxVariants({ isChecked })} aria-hidden="true">
          {isChecked && <CheckIcon />}
        </div>
      </div>

      {/* 실제 체크박스 입력 요소 - 접근성을 위해 존재하지만 시각적으로는 숨김 */}
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className="sr-only" // 시각적으로 숨기되 스크린 리더는 접근 가능
        checked={isChecked}
        onChange={() => {}}
        onClick={handleClick}
        aria-checked={isChecked}
        aria-labelledby={value}
        {...props}
      />

      {/* 체크박스 버튼 레이블 텍스트 */}
      {label && <span className="text-body-3-medium">{label}</span>}
    </label>
  );
};
