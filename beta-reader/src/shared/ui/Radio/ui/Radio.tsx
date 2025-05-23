"use client";

import { cva } from "class-variance-authority";
import React from "react";

import { RadioGroupContext, useRadioGroup, useRadioGroupContext } from "../lib";

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  children: React.ReactNode;
  onRadioGroupChange: (value: string) => void;
  value?: string;
  className?: string;
}

export const Container: React.FC<RadioGroupProps> = ({
  name,
  value,
  children,
  className,
  onRadioGroupChange,
  ...props
}) => {
  const { value: _value, onRadioGroupChange: _onRadioGroupChange } =
    useRadioGroup(value, onRadioGroupChange);

  return (
    <fieldset className={className}>
      <RadioGroupContext
        value={{
          name,
          value: _value,
          onRadioChange: _onRadioGroupChange,
          ...props
        }}
      >
        {children}
      </RadioGroupContext>
    </fieldset>
  );
};

interface RadioProps {
  value: string;
  label?: string;
  className?: string;
  id: string;
}

const radioInputVariants = cva(
  "bg-primary-300 h-4 w-4 rounded-full transition-transform duration-200 origin-center",
  {
    variants: {
      isChecked: {
        true: "scale-100",
        false: "scale-0"
      }
    },
    defaultVariants: {
      isChecked: false
    }
  }
);

export const Input: React.FC<RadioProps> = ({
  value,
  label,
  className = "",
  id
}) => {
  const {
    value: radioGroupValue,
    name,
    onRadioChange,
    ...props
  } = useRadioGroupContext();
  const isChecked = radioGroupValue === value;

  const handleClick = () => {
    onRadioChange(value);
  };

  return (
    <label
      htmlFor={id}
      className={`flex w-fit cursor-pointer items-center justify-center gap-1 rounded-full px-2 py-1 hover:bg-[#FFFFFF1A] ${className}`}
    >
      {/* 
        시각적 라디오 버튼 표시 - 실제 input은 sr-only로 화면에 보이지 않지만
        스크린 리더는 인식 가능
      */}
      <div className="relative flex items-center justify-center">
        <div
          className="border-secondary-400 flex h-5 w-5 items-center justify-center rounded-full border transition-colors"
          aria-hidden="true"
        >
          <div className={radioInputVariants({ isChecked })} />
        </div>
      </div>

      {/* 실제 라디오 입력 요소 - 접근성을 위해 존재하지만 시각적으로는 숨김 */}
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="sr-only" // 시각적으로 숨기되 스크린 리더는 접근 가능
        checked={isChecked}
        onChange={() => {}} // onChange 핸들러는 필요 없지만 React에서 요구되어 빈 함수로 대체
        onClick={handleClick}
        aria-checked={isChecked}
        aria-labelledby={value}
        {...props}
      />

      {/* 라디오 버튼 레이블 텍스트 */}
      {label && <span className="text-body-3-medium">{label}</span>}
    </label>
  );
};
