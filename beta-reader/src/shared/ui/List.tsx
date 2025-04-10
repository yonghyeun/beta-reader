import { VariantProps, cva } from "class-variance-authority";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper: React.FC<ListProps> = ({ children, className = "" }) => {
  return <ul className={`flex flex-col gap-1.5 ${className}`}>{children}</ul>;
};

const listItemVariants = cva(" rounded-xl hover:bg-[#FFFFFF1A]", {
  variants: {
    isActivate: {
      true: "bg-secondary-700",
      false: "bg-transparent"
    },
    size: {
      sm: "text-caption-1-medium px-[0.8125rem] py-2",
      md: "text-caption-1-medium px-[0.8125rem] py-2.5"
    }
  }
});

export const Item: React.FC<
  ListProps & VariantProps<typeof listItemVariants>
> = ({ children, className = "", isActivate, size }) => {
  return (
    <li
      className={listItemVariants({
        className,
        isActivate,
        size
      })}
    >
      {children}
    </li>
  );
};

export const List = Object.assign(Wrapper, {
  Item
});
