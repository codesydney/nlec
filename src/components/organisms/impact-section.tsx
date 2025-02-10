"use client";

import SectionTitle from "@/components/atoms/section-title";
import SectionWrapper from "@/components/molecules/section-wrapper";
import ContentWrapper from "@/components/molecules/content-wrapper";
import { IMPACT_ITEMS } from "@/assets/data";
import { motion } from "motion/react";
import { variants } from "@/lib/motion-variants";

export default function ImpactSection() {
  return (
    <SectionWrapper id="impact">
      <ContentWrapper
        className="flex flex-col text-nlec-green"
        shouldTransition
      >
        <motion.div
          className="mb-4 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center"
          variants={variants}
        >
          <SectionTitle className="mb-0 w-fit text-nlec-maroon md:mb-0 md:min-w-[324px] xl:min-w-[389px]">
            Our <span className="font-black">Impact</span>
          </SectionTitle>
          <div className="relative h-1 w-full bg-nlec-maroon" />
        </motion.div>
        <motion.ol
          className="inline-flex flex-col gap-4 pl-4"
          variants={variants}
        >
          {IMPACT_ITEMS.map((item, i) => (
            <li key={i} className="list-disc md:text-lg">
              {item}
            </li>
          ))}
        </motion.ol>
      </ContentWrapper>
    </SectionWrapper>
  );
}
