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

  const dropdownId = `dropdown-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <DropdownContext
      value={{
        closeDropDown
      }}
    >
      <div ref={dropDownRef} className="relative">
        <button
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={dropdownId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-secondary-white bg-secondary-900 flex min-w-72 items-center justify-between rounded-[1.25rem] px-5 py-6"
        >
          <span>{value}</span>
          <span aria-hidden="true">
            {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </span>
        </button>

        {isOpen && (
          <ul
            id={dropdownId}
            role="listbox"
            className="text-secondary-white bg-secondary-800 absolute top-full mt-2 flex min-w-72 flex-col gap-1 rounded-[1.25rem] p-5"
          >
            {children}
          </ul>
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
    <li
      role="option"
      aria-selected={false}
      className="min-w-[15.5rem] cursor-pointer rounded-xl px-[0.815rem] py-2.5 hover:bg-[#5E6CFF66]"
      onClick={() => {
        closeDropDown(value);
      }}
    >
      {children}
    </li>
  );
};

export const DropDown = Object.assign(Wrapper, {
  Item
});
