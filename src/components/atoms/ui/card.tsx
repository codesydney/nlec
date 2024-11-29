import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-4 rounded-lg border border-nlec-darkGray/25 bg-white px-4 py-6 text-nlec-darkGray shadow-sm shadow-nlec-darkGray/50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 md:px-6",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { level?: React.ElementType }
>(({ className, level, ...props }, ref) => {
  const Comp = level ?? "div";

  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center gap-4 text-2xl font-semibold",
        className
      )}
      {...props}
    />
  );
});
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-nlec-darkGray dark:text-zinc-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardFooter, CardTitle, CardDescription };
