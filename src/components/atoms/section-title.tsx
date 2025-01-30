import { redHatDisplay } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mb-4 text-5xl font-semibold md:mb-6 md:text-6xl xl:text-7xl",
        redHatDisplay.className,
        className
      )}
    >
      {children}
    </h2>
  );
}
