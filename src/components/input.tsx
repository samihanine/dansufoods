import * as React from "react";
import { cn } from "../lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, before, ...props }, ref) => {
    return (
      <div className="flex">
        {before && (
          <div className="flex items-center text-sm px-4 h-11 py-2 rounded-l-md border border-input border-r-0 text-muted-foreground">
            {before}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex items-center h-11 w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            before && "rounded-l-none",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
