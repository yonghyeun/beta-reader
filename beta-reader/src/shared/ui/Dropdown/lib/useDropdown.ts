import { useCallback, useEffect, useMemo, useState } from "react";
import { createContext, useContext } from "react";

export const useDropdown = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownId = useMemo(
    () => `dropdown-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  // dropdown이 열린 후 외부 영역 클릭 시 자동으로 닫히도록 addEventListener
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
  }, [isOpen, ref]);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openDropdown = useCallback(() => {
    setIsOpen(true);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { closeDropdown, openDropdown, toggleDropdown, isOpen, dropdownId };
};

export const DropdownContext = createContext<ReturnType<
  typeof useDropdown
> | null>(null);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext 훅은 DropdownProvider 내부에서만 사용해야 합니다"
    );
  }
  return context;
};
