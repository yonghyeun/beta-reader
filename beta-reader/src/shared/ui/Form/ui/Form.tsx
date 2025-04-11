interface FormProps extends React.HTMLProps<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

const FormContainer: React.FC<FormProps> = ({
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

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section
      className={`bg-secondary-900 rounded-[1.25rem] px-7 py-6 ${className}`}
    >
      {children}
    </section>
  );
};

export const Form = Object.assign(FormContainer, { Container });
