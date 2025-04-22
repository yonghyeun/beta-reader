import { VariantProps, cva } from "class-variance-authority";
import { useRef } from "react";

import {
  DownLargeIcon,
  DownSmallIcon,
  UpLargeIcon,
  UpSmallIcon
} from "@/shared/assets";

import { DropdownContext, useDropdown, useDropdownContext } from "../lib";

const dropdownVariant = cva(
  "flex items-center justify-between cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        padded:
          "px-5 py-6 rounded-[1.25rem] bg-secondary-900 rounded-[1.25rem] min-w-[15.5rem]"
      }
    }
  }
);

// 드롭다운 메뉴의 위치를 정의하는 타입
export type DropdownPosition =
  | "bottom-left" // 기본값: 버튼 아래, 왼쪽 정렬
  | "bottom-right" // 버튼 아래, 오른쪽 정렬
  | "top-left" // 버튼 위, 왼쪽 정렬
  | "top-right" // 버튼 위, 오른쪽 정렬
  | "left-top" // 버튼 왼쪽, 위쪽 정렬
  | "left-bottom" // 버튼 왼쪽, 아래쪽 정렬
  | "right-top" // 버튼 오른쪽, 위쪽 정렬
  | "right-bottom"; // 버튼 오른쪽, 아래쪽 정렬

interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

const dropdownIcons = (variant: "default" | "padded") => (status: boolean) => {
  const icons = {
    default: {
      open: <UpSmallIcon />,
      close: <DownSmallIcon />
    },
    padded: {
      open: <UpLargeIcon />,
      close: <DownLargeIcon />
    }
  };
  return icons[variant][status ? "open" : "close"];
};

const DropdownContainer: React.FC<DropdownProps> = ({
  children,
  className
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownLogic = useDropdown(dropdownRef);

  return (
    <DropdownContext.Provider value={{ ...dropdownLogic }}>
      <div ref={dropdownRef} className={`relative ${className || ""}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

interface TriggerProps extends VariantProps<typeof dropdownVariant> {
  children?: React.ReactNode;
  label?: string;
  className?: string;
}

const Trigger: React.FC<TriggerProps> = ({
  children,
  label = "선택",
  className,
  ...props
}) => {
  const { isOpen, dropdownId, toggleDropdown } = useDropdownContext();
  const getDropdownIcons = dropdownIcons(props.variant || "default");

  return (
    <button
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-controls={dropdownId}
      onClick={toggleDropdown}
      className={dropdownVariant({ ...props, className })}
    >
      {children || <span>{label}</span>}
      <span aria-hidden="true">{getDropdownIcons(isOpen)}</span>
    </button>
  );
};

interface ItemsProps {
  children: React.ReactNode;
  className?: string;
  position?: DropdownPosition;
}

const getPositionStyles = (position: DropdownPosition): string => {
  const positions = {
    "bottom-left": "top-full left-0 mt-2",
    "bottom-right": "top-full right-0 mt-2",
    "top-left": "bottom-full left-0 mb-2",
    "top-right": "bottom-full right-0 mb-2",
    "left-top": "right-full top-0 mr-2",
    "left-bottom": "right-full bottom-0 mr-2",
    "right-top": "left-full top-0 ml-2",
    "right-bottom": "left-full bottom-0 ml-2"
  };

  return positions[position];
};

const Items: React.FC<ItemsProps> = ({
  children,
  className,
  position = "bottom-left" // 기본값은 bottom-left
}) => {
  const { isOpen, dropdownId } = useDropdownContext();

  if (!isOpen) return null;

  const positionClasses = getPositionStyles(position);

  return (
    <ul
      id={dropdownId}
      role="listbox"
      className={`text-secondary-white bg-secondary-800 border-secondary-500 absolute ${positionClasses} flex min-w-72 flex-col gap-1 rounded-[1.25rem] border p-5 ${className || ""} fade-in-animation`}
    >
      {children}
    </ul>
  );
};

interface ItemProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Item: React.FC<ItemProps> = ({ onClick, children, className }) => {
  const { closeDropdown } = useDropdownContext();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    closeDropdown();
  };

  return (
    <li
      role="option"
      aria-selected={false}
      className={`min-w-[15.5rem] cursor-pointer rounded-xl px-[0.815rem] py-2.5 hover:bg-[#5E6CFF66] ${className || ""}`}
      onClick={handleClick}
    >
      {children}
    </li>
  );
};

export const Dropdown = Object.assign(DropdownContainer, {
  Trigger,
  Items,
  Item
});
