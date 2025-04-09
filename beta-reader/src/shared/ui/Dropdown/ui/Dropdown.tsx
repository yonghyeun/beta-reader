import { useCallback, useEffect, useRef, useState } from "react";

import { DropdownContext, useDropdownContext } from "../model";
import { ArrowDownIcon, ArrowUpIcon } from "@/public/assets";

interface DropDownProps {
  initialValue?: string;
  children: React.ReactNode;
  onDropdownChange?: (value: string) => void;
}

const Wrapper: React.FC<DropDownProps> = ({
  children,
  onDropdownChange,
  initialValue = ""
}) => {
  const [value, setValue] = useState<string>(() => initialValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const closeDropDown = useCallback((value: string) => {
    setValue(value);
    setIsOpen(false);
    onDropdownChange?.(value);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        console.log("clicked outside");

        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DropdownContext
      value={{
        closeDropDown
      }}
    >
      <div ref={dropDownRef}>
        {/* 토글 상부 */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-secondary-white bg-secondary-900 flex min-w-72 items-center justify-between rounded-[1.25rem] px-5 py-6"
        >
          <span>{value}</span>
          <span>{isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}</span>
        </button>
        {/* 내부 아이템 */}
        {isOpen && (
          <div className="text-secondary-white bg-secondary-800 absolute top-full mt-2 flex min-w-72 flex-col gap-1 rounded-[1.25rem] p-5">
            {children}
          </div>
        )}
      </div>
    </DropdownContext>
  );
};

interface ItemProps {
  value: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ value, children }) => {
  const { closeDropDown } = useDropdownContext();

  return (
    <div
      className="min-w-[15.5rem] rounded-xl px-[0.815rem] py-2.5 hover:bg-[#5E6CFF66]"
      onClick={() => {
        closeDropDown(value);
      }}
    >
      {children}
    </div>
  );
};

export const DropDown = Object.assign(Wrapper, {
  Item
});
