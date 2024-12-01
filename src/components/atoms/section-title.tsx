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
        "mb-4 text-3xl font-bold text-nlec-orange md:mb-6 md:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
