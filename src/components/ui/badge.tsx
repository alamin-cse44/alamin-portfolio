import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-mono whitespace-nowrap transition-colors",
  {
    variants: {
      variant: {
        tag: "border border-border text-muted bg-white/[0.02] text-[0.72rem] px-2.5 py-1 rounded-md",
        advanced:
          "bg-accent3/10 text-accent3 border border-accent3/30 text-[0.68rem] px-2.5 py-1",
        proficient:
          "bg-accent2/10 text-accent2 border border-accent2/30 text-[0.68rem] px-2.5 py-1",
      },
    },
    defaultVariants: { variant: "tag" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
