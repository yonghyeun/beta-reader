import React, { useEffect, useState } from "react";

import { RadioGroupContext, useRadioGroupContext } from "../model";
import { CheckIcon } from "@/public/assets";

export const Form = () => {};

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  children: React.ReactNode;
  className?: string;
  effect?: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  children,
  className,
  effect,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(() => value);

  useEffect(() => {
    if (effect) {
      effect(selectedValue);
    }
  }, [selectedValue]);

  return (
    <fieldset className={className}>
      <RadioGroupContext
        value={{
          name,
          value: selectedValue,
          onRadioChange: setSelectedValue,
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
}

export const Radio: React.FC<RadioProps> = ({ value, label }) => {
  const {
    value: radioGoupValue,
    name,
    onRadioChange,
    ...props
  } = useRadioGroupContext();
  const isChecked = radioGoupValue === value;

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
      className="hover:bg-secondary-200 flex cursor-pointer items-center justify-center gap-1 rounded-full px-2 py-1"
    >
      {/* 
        시각적 라디오 버튼 표시 - 실제 input은 sr-only로 화면에 보이지 않지만
        스크린 리더는 인식 가능
      */}
      <div className="relative flex items-center justify-center">
        <div
          className={`${
            isChecked
              ? "bg-primary-300 flex items-center justify-center"
              : "border-secondary-400 border-2"
          } h-6 w-6 rounded-full transition-colors`}
          aria-hidden="true"
        >
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
