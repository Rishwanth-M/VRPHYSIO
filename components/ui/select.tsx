import * as React from "react";
import { cn } from "./cn";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select({ className, children, ...props }: React.PropsWithChildren<SelectProps>) {
  return (
    <select
      className={cn("w-full rounded-2xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald bg-white", className)}
      {...props}
    >
      {children}
    </select>
  );
}
