"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { variants } from "@/lib/motion-variants";
import useCheckWidth from "@/hooks/useCheckWidth";

export default function ContentWrapper({
  children,
  className,
  shouldTransition,
}: {
  children: ReactNode;
  className?: string;
  shouldTransition?: boolean;
}) {
  const { width } = useCheckWidth();
  const viewportAmount = width !== undefined && width > 768 ? 0.25 : 0.125;

  return (
    <motion.div
      variants={variants}
      initial={"initial"}
      whileInView={"animate"}
      transition={shouldTransition ? { staggerChildren: 0.125 } : undefined}
      className={cn("mx-auto max-w-[1280px]", className)}
      viewport={{ amount: viewportAmount, once: true }}
    >
      {children}
    </motion.div>
  );
}
