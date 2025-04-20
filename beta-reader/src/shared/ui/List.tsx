import { VariantProps, cva } from "class-variance-authority";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const ListItemContainer: React.FC<ListProps> = ({
  children,
  className = ""
}) => {
  return <ul className={`flex flex-col gap-1.5 ${className}`}>{children}</ul>;
};

const listItemVariants = cva(
  "rounded-lg hover:bg-[#FFFFFF1A] text-caption-1-medium px-[0.88rem] py-[0.38rem]",
  {
    variants: {
      isActive: {
        true: "bg-secondary-800 text-caption-1-bold",
        false: "bg-transparent"
      }
    }
  }
);

export const Item: React.FC<
  ListProps & VariantProps<typeof listItemVariants>
> = ({ children, className = "", isActive }) => {
  return (
    <li
      className={listItemVariants({
        className,
        isActive
      })}
    >
      {children}
    </li>
  );
};

export const List = Object.assign(ListItemContainer, {
  Item
});
