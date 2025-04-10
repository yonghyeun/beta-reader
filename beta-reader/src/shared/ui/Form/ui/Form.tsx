import React, { useState } from "react";

import { CheckboxGroupContext, useCheckboxGroupContext } from "../model";
import { CheckIcon } from "@/public/assets";

export const Form = () => {};

interface CheckboxGroupProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string[];
  children: React.ReactNode;
  onCheckboxGroupChange: (value: string[]) => void;
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  value,
  children,
  className,
  onCheckboxGroupChange,
  ...props
}) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(() => value);

  const _onCheckboxGroupChange = (newValue: string) => {
    const newValues = selectedValues.includes(newValue)
      ? selectedValues.filter((item) => item !== newValue)
      : [...selectedValues, newValue];

    setSelectedValues(newValues);
    onCheckboxGroupChange(newValues);
  };

  return (
    <fieldset className={className}>
      <CheckboxGroupContext
        value={{
          name,
          value: selectedValues,
          onCheckboxChange: _onCheckboxGroupChange,
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
}

export const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  className = ""
}) => {
  const {
    value: checkboxValues,
    name,
    onCheckboxChange,
    ...props
  } = useCheckboxGroupContext();
  const isChecked = checkboxValues.includes(value);

  /**
   * 체크박스 버튼 상태 변경을 처리하는 핸들러
   * 접근성을 위해 onChange 이벤트 사용
   */
  const handleChange = () => {
    onCheckboxChange(value);
  };

  return (
    <label
      htmlFor={value}
      className={`flex w-fit cursor-pointer items-center justify-center gap-1 rounded-lg px-2 py-1 hover:bg-[#FFFFFF1A] ${className}`}
    >
      {/* 
        시각적 체크박스 버튼 표시 - 실제 input은 sr-only로 화면에 보이지 않지만
        스크린 리더는 인식 가능
      */}
      <div className="relative flex items-center justify-center">
        <div
          className={`${
            isChecked
              ? "bg-primary-300 flex items-center justify-center"
              : "border-secondary-400 border-2"
          } h-6 w-6 rounded-sm transition-colors`}
          aria-hidden="true"
        >
          {isChecked && <CheckIcon />}
        </div>
      </div>

      {/* 실제 체크박스 입력 요소 - 접근성을 위해 존재하지만 시각적으로는 숨김 */}
      <input
        type="checkbox"
        id={value}
        name={name}
        value={value}
        className="sr-only" // 시각적으로 숨기되 스크린 리더는 접근 가능
        checked={isChecked}
        onChange={handleChange}
        aria-checked={isChecked}
        {...props}
      />

      {/* 체크박스 버튼 레이블 텍스트 */}
      {label && <span className="text-body-3-medium">{label}</span>}
    </label>
  );
};
