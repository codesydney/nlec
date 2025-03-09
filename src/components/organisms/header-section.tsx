"use client";

import { redHatDisplay } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import nlecHeader from "@/public/nlec-header.webp";
import { motion } from "motion/react";
import { variants } from "@/lib/motion-variants";

export default function HeaderSection() {
  return (
    <motion.section
      className="relative mb-8 pt-12 md:mb-16 xl:mb-20"
      initial={"initial"}
      animate={"animate"}
      transition={{ staggerChildren: 0.5 }}
    >
      <div className="relative z-10 -mb-8 flex flex-col px-4 md:-mb-20 md:px-8 xl:px-20 2xl:mb-0">
        <motion.div
          className="z-10 mx-auto inline-flex w-full max-w-[1280px] flex-col items-end gap-4 text-nlec-green md:border-4 md:border-transparent md:border-l-nlec-green md:border-t-nlec-green md:py-8 xl:py-12"
          variants={{
            initial: { opacity: 0, y: -100 },
            animate: { opacity: 1, y: 0 },
          }}
          transition={{
            staggerChildren: 0.125,
            delayChildren: 0.25,
          }}
        >
          <div className="inline-flex max-w-[420px] flex-col gap-4 xl:max-w-[500px]">
            <motion.h1
              className={cn(
                "text-5xl font-semibold md:text-6xl xl:text-7xl",
                redHatDisplay.className
              )}
              variants={variants}
            >
              National Lived Experience Collective
            </motion.h1>
            <motion.p className="text-xl xl:text-2xl" variants={variants}>
              Empowering Voices with Lived Prison Experience. Connecting
              Advocacy, Insight, and Opportunity for Social Change
            </motion.p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className="relative h-[300px] w-full md:h-[400px] xl:h-[500px]"
        variants={{
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <Image
          src={nlecHeader}
          alt="Art of people together"
          fill
          priority
          className="object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
