import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function ContentWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
}
