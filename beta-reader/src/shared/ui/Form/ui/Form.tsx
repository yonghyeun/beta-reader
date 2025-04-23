interface FormProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<FormProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <form className={className} {...props}>
      {children}
    </form>
  );
};

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <fieldset
      className={`bg-secondary-900 rounded-[1.25rem] px-7 py-6 ${className}`}
    >
      {children}
    </fieldset>
  );
};
