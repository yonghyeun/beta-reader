import { CloseIcon } from "@/public/assets";

interface TagProps {
  rounded?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const paddingClassName = "px-3 py-1.5";
const backgroundClassName = "bg-secondary-700 hover:bg-secondary-500";
const textClassName = "text-secondary-white text-caption-1-medium";

const baseClassName = `
  ${paddingClassName} 
  ${backgrondClassName} 
  ${textClassName}
  flex justify-center items-center gap-1
`;

export const Tag: React.FC<TagProps> = ({
  rounded,
  className,
  children,
  onClick
}) => {
  const roundClassName = rounded ? "rounded-full" : "rounded-lg";

  if (onClick) {
    return (
      <button
        className={`${baseClassName} ${roundClassName} ${className} border-secondary-600 hover:border-secondary-500 cursor-pointer border`}
        onClick={onClick}
        type="button"
        aria-label="tag"
      >
        {children}
        <CloseIcon />
      </button>
    );
  }

  return (
    <span className={`${baseClassName} ${roundClassName} ${className}`}>
      {children}
    </span>
  );
};
