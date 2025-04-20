import { VariantProps, cva } from "class-variance-authority";
import { useRef } from "react";

import { SelectorContext, useSelector, useSelectorContext } from "../lib";
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

interface SelectorProps extends VariantProps<typeof selectorVariant> {
  initialValue?: string;
  children: React.ReactNode;
  onSelectorChange?: (value: string) => void;
  className?: string;
}

const selectorIcons = (variant: "default" | "padded") => (status: boolean) => {
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

const SelectorContainer: React.FC<SelectorProps> = ({
  children,
  onSelectorChange,
  initialValue = "",
  className,
  ...props
}) => {
  const selectorRef = useRef<HTMLDivElement>(null);
  const selectorLogic = useSelector(
    selectorRef,
    initialValue,
    onSelectorChange
  );
  const getSelectorIcons = selectorIcons(props.variant || "default");

  const { isOpen, selectorId, closeSelector, openSelector, value } =
    selectorLogic;

  return (
    <SelectorContext value={{ ...selectorLogic }}>
      <div ref={selectorRef} className="relative">
        {/* Selector Button */}
        <button
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={selectorId}
          onClick={() => (isOpen ? closeSelector(value) : openSelector())}
          className={selectorVariant({ ...props, className })}
        >
          <span>{value}</span>
          <span aria-hidden="true">{getSelectorIcons(isOpen)}</span>
        </button>
        {/* Selector Items */}
        {selectorLogic.isOpen && (
          <ul
            id={selectorLogic.selectorId}
            role="listbox"
            className="text-secondary-white bg-secondary-800 border-secondary-500 absolute top-full mt-2 flex min-w-72 flex-col gap-1 rounded-[1.25rem] border p-5"
          >
            {children}
          </ul>
        )}
      </div>
    </SelectorContext>
  );
};

interface ItemProps {
  value: string;
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ value, children }) => {
  const { closeSelector } = useSelectorContext();

  return (
    <li
      role="option"
      aria-selected={false}
      className="min-w-[15.5rem] cursor-pointer rounded-xl px-[0.815rem] py-2.5 hover:bg-[#5E6CFF66]"
      onClick={() => {
        closeSelector(value);
      }}
    >
      {children}
    </li>
  );
};

export const Selector = Object.assign(SelectorContainer, {
  Item
});
