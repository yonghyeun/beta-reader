import { useMemo, useRef } from "react";

import { useDropdown } from "../lib";
import { DropdownContext, useDropdownContext } from "../model";
import { DownLargeIcon, UpLargeIcon } from "@/src/shared/assets";

interface DropDownProps {
  initialValue?: string;
  children: React.ReactNode;
  onDropdownChange?: (value: string) => void;
}

const DropdownContainer: React.FC<DropDownProps> = ({
  children,
  onDropdownChange,
  initialValue = ""
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { value, closeDropDown, isOpen, openDropdown } = useDropdown(
    dropdownRef,
    initialValue,
    onDropdownChange
  );

  const dropdownId = useMemo(
    () => `dropdown-${Math.random().toString(36).slice(2, 9)}`,
    []
  );

  return (
    <DropdownContext
      value={{
        closeDropDown
      }}
    >
      <div ref={dropdownRef} className="relative">
        <button
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={dropdownId}
          onClick={() => (isOpen ? closeDropDown(value) : openDropdown())}
          className="text-secondary-white bg-secondary-900 flex min-w-72 items-center justify-between rounded-[1.25rem] px-5 py-6"
        >
          <span>{value}</span>
          <span aria-hidden="true">
            {isOpen ? <UpLargeIcon /> : <DownLargeIcon />}
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

export const DropDown = Object.assign(DropdownContainer, {
  Item
});
