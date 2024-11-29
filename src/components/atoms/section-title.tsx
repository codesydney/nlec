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
        "text-3xl font-bold text-nlec-orange md:text-4xl xl:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
