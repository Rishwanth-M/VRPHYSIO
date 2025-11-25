import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/components/ui/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, variant="default", size="md", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const base = "inline-flex items-center justify-center rounded-2xl font-semibold transition shadow-soft disabled:opacity-50 disabled:cursor-not-allowed";
    const variants = {
      default: "bg-emerald text-white hover:bg-emerald-700",
      ghost: "bg-transparent hover:bg-emerald-50 text-emerald",
      outline: "border border-emerald text-emerald hover:bg-emerald hover:text-white"
    };
    const sizes = { sm: "px-3 py-2 text-sm", md: "px-5 py-3 text-sm", lg: "px-6 py-4 text-base" };
    return <Comp ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />;
  }
);
Button.displayName = "Button";
