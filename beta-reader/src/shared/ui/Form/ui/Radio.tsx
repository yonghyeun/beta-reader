import { cva } from "class-variance-authority";
import React, { useState } from "react";

import { RadioGroupContext, useRadioGroupContext } from "../model";
import { CheckIcon } from "@/src/shared/assets";

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  children: React.ReactNode;
  onRadioGroupChange: (value: string) => void;
  className?: string;
}

export const RadioGroupContainer: React.FC<RadioGroupProps> = ({
  name,
  value,
  children,
  className,
  onRadioGroupChange,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(() => value);

  const _onRadioGroupChange = (value: string) => {
    setSelectedValue(value);
    onRadioGroupChange(value);
  };

  return (
    <fieldset className={className}>
      <RadioGroupContext
        value={{
          name,
          value: selectedValue,
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
}

const radioInputVariants = cva("h-5 w-5 p-0.5 rounded-full transition-colors", {
  variants: {
    isChecked: {
      true: "bg-primary-300 flex items-center justify-center",
      false: "border-secondary-400 border"
    }
  },
  defaultVariants: {
    isChecked: false
  }
});

const Input: React.FC<RadioProps> = ({ value, label, className = "" }) => {
  const {
    value: radioGroupValue,
    name,
    onRadioChange,
    ...props
  } = useRadioGroupContext();
  const isChecked = radioGroupValue === value;

  /**
   * 라디오 버튼 상태 변경을 처리하는 핸들러
   * 접근성을 위해 onChange 이벤트 사용
   */
  const handleChange = () => {
    onRadioChange(value);
  };

  return (
    <label
      htmlFor={value}
      className={`flex w-fit cursor-pointer items-center justify-center gap-1 rounded-full px-2 py-1 hover:bg-[#FFFFFF1A] ${className}`}
    >
      {/* 
        시각적 라디오 버튼 표시 - 실제 input은 sr-only로 화면에 보이지 않지만
        스크린 리더는 인식 가능
      */}
      <div className="relative flex items-center justify-center">
        <div className={radioInputVariants({ isChecked })} aria-hidden="true">
          {isChecked && <CheckIcon />}
        </div>
      </div>

      {/* 실제 라디오 입력 요소 - 접근성을 위해 존재하지만 시각적으로는 숨김 */}
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        className="sr-only" // 시각적으로 숨기되 스크린 리더는 접근 가능
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />

      {/* 라디오 버튼 레이블 텍스트 */}
      {label && <span className="text-body-3-medium">{label}</span>}
    </label>
  );
};

export const RadioGroup = Object.assign(RadioGroupContainer, {
  Input
});
