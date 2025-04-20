import { VariantProps, cva } from "class-variance-authority";
import { useRef } from "react";

import { DropdownContext, useDropdown, useDropdownContext } from "../lib";
import {
  DownLargeIcon,
  DownSmallIcon,
  UpLargeIcon,
  UpSmallIcon
} from "@/src/shared/assets";

const selectorVariant = cva("flex items-center justify-between", {
  variants: {
    variant: {
      default: "",
      padded:
        "px-5 py-6 rounded-[1.25rem] bg-secondary-900 rounded-[1.25rem] min-w-[15.5rem]"
    }
  }
});

interface DropDownProps extends VariantProps<typeof selectorVariant> {
  initialValue?: string;
  children: React.ReactNode;
  onDropdownChange?: (value: string) => void;
  className?: string;
}

const dropdownIcons = (variant: "default" | "padded") => (status: boolean) => {
  const dropdownIcons = {
    default: {
      open: <UpSmallIcon />,
      close: <DownSmallIcon />
    },
    padded: {
      open: <UpLargeIcon />,
      close: <DownLargeIcon />
    }
  };
  return dropdownIcons[variant][status ? "open" : "close"];
};

const DropdownContainer: React.FC<DropDownProps> = ({
  children,
  onDropdownChange,
  initialValue = "",
  className,
  ...props
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdonwLogic = useDropdown(
    dropdownRef,
    initialValue,
    onDropdownChange
  );
  const getDropdownIcons = dropdownIcons(props.variant || "default");

  const { isOpen, dropdownId, closeDropDown, openDropdown, value } =
    dropdonwLogic;

  return (
    <DropdownContext value={{ ...dropdonwLogic }}>
      <div ref={dropdownRef} className="relative">
        {/* Dropdown Selector */}
        <button
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={dropdownId}
          onClick={() => (isOpen ? closeDropDown(value) : openDropdown())}
          className={selectorVariant({ ...props, className })}
        >
          <span>{value}</span>
          <span aria-hidden="true">{getDropdownIcons(isOpen)}</span>
        </button>
        {/* Dropdown Items */}
        {dropdonwLogic.isOpen && (
          <ul
            id={dropdonwLogic.dropdownId}
            role="listbox"
            className="text-secondary-white bg-secondary-800 border-secondary-500 absolute top-full mt-2 flex min-w-72 flex-col gap-1 rounded-[1.25rem] border p-5"
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
