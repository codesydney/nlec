"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { variants } from "@/lib/motion-variants";

export default function ContentWrapper({
  children,
  className,
  shouldTransition,
}: {
  children: ReactNode;
  className?: string;
  shouldTransition?: boolean;
}) {
  return (
    <motion.div
      variants={variants}
      initial={"initial"}
      whileInView={"animate"}
      transition={shouldTransition ? { staggerChildren: 0.125 } : undefined}
      className={cn("mx-auto max-w-[1280px]", className)}
      viewport={{ amount: 0.25, once: true }}
    >
      {children}
    </motion.div>
  );
}
