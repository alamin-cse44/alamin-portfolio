import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-[#171008] font-semibold shadow-[0_8px_24px_-8px_rgba(242,169,59,0.45)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(242,169,59,0.6)]",
        outline:
          "border border-border text-ink hover:border-accent2 hover:bg-accent2/5 hover:-translate-y-0.5",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
