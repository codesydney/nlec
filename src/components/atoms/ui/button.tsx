import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nlec-orange focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-nlec-orange dark:focus-visible:ring-zinc-300 active:scale-[.97]",
  {
    variants: {
      variant: {
        default:
          "bg-nlec-orange text-white hover:bg-nlec-orange/90 dark:bg-white dark:text-nlec-orange dark:hover:bg-white/90",
        destructive:
          "bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
        outline:
          "border border-nlec-darkGray/25 bg-white hover:bg-nlec-darkGray/10 text-nlec-darkGray dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
        secondary:
          "bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
        ghost:
          "hover:bg-nlec-green/10 text-nlec-green dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
        link: "text-nlec-green underline-offset-4 hover:underline hover:text-nlec-orange dark:text-zinc-50",
        logo: "text-nlec-green text-2xl font-medium hover:bg-nlec-darkGray/10 md:text-3xl xl:text-4xl",
      },
      size: {
        default: "px-4 py-2",
        sm: "p-2",
        lg: "px-8",
        icon: "h-10 w-10",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
