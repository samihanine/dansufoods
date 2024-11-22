import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10 sm:py-20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
