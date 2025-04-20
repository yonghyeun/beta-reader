import { useCallback, useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";

export const useSelector = (
  ref: React.RefObject<HTMLDivElement | null>,
  initialValue?: string,
  onCloseSelector?: (value: string) => void
) => {
  const [value, setValue] = useState<string>(initialValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const selectorId = useMemo(
    () => `selector-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  // selector가 열린 후 외부 영역 클릭 시 자동으로 닫히도록 addEventListener
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

  const closeSelector = useCallback((value: string) => {
    setValue(value);
    setIsOpen(false);
    onCloseSelector?.(value);
  }, []);

  const openSelector = useCallback(() => {
    setIsOpen(true);
  }, []);

  return { value, closeSelector, openSelector, isOpen, selectorId };
};

export const SelectorContext = createContext<ReturnType<
  typeof useSelector
> | null>(null);

export const useSelectorContext = () => {
  const context = useContext(SelectorContext);
  if (!context) {
    throw new Error(
      "useSelector 훅은 SelectorProvider 내부에서만 사용해야 합니다"
    );
  }
  return context;
};
