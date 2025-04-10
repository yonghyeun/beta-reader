import { useCallback, useEffect, useState } from "react";

export const useDropdown = (
  ref: React.RefObject<HTMLDivElement | null>,
  initialValue?: string,
  onCloseDropdown?: (value: string) => void
) => {
  const [value, setValue] = useState<string>(initialValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  return { value, closeDropDown, openDropdown, isOpen };
};
