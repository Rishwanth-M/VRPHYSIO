import * as React from "react";
import { cn } from "./cn";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn("w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald min-h-[120px]", className)}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
export { Textarea };
