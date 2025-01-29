import * as React from "react";

import { cn } from "@/lib/utils";
import { redHatDisplay } from "@/assets/fonts";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex gap-6 px-4 py-6 md:px-6", className)}
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
        "inline-flex items-center gap-4 text-lg font-bold md:text-xl xl:text-2xl",
        redHatDisplay.className,
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
  <div ref={ref} className={cn("xl:text-lg", className)} {...props} />
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
