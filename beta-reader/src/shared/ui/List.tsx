import { VariantProps, cva } from "class-variance-authority";

interface ListContainerProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ListContainerProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <ul className={`flex flex-col gap-1.5 ${className}`} {...props}>
      {children}
    </ul>
  );
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

interface ListItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof listItemVariants> {
  children: React.ReactNode;
  className?: string;
}

export const Item: React.FC<ListItemProps> = ({
  children,
  className = "",
  isActive,
  ...props
}) => {
  return (
    <li
      className={listItemVariants({
        className,
        isActive
      })}
      {...props}
    >
      {children}
    </li>
  );
};
