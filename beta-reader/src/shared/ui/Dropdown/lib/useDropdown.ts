import { useCallback, useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";

export const useDropdown = (
  ref: React.RefObject<HTMLDivElement | null>,
  initialValue?: string,
  onCloseDropdown?: (value: string) => void
) => {
  const [value, setValue] = useState<string>(initialValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownId = useMemo(
    () => `dropdown-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  // dropdown 이 열린 후 외부 영역 클릭 시 자동으로 닫히도록 addEventListener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (!ref.current) {
      return;
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // 외부에서 initlalValue가 변경되면 value도 변경
  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

  const closeDropDown = useCallback((value: string) => {
    setValue(value);
    setIsOpen(false);
    onCloseDropdown?.(value);
  }, []);

  const openDropdown = useCallback(() => {
    setIsOpen(true);
  }, []);

  return { value, closeDropDown, openDropdown, isOpen, dropdownId };
};

export const DropdownContext = createContext<ReturnType<
  typeof useDropdown
> | null>(null);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdown 훅은 DropdownProvider 내부에서만 사용해야 합니다"
    );
  }
  return context;
};
