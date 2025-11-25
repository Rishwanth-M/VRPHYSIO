import * as React from "react";
import { cn } from "./cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn("w-full rounded-2xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald", className)}
      {...props}
    />
  );
});
Input.displayName = "Input";
export { Input };
