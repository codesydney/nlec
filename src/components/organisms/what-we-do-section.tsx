"use client";

import SectionTitle from "@/components/atoms/section-title";
import SectionWrapper from "@/components/molecules/section-wrapper";
import ContentWrapper from "@/components/molecules/content-wrapper";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { variants } from "@/lib/motion-variants";

export default function WhatWeDoSection() {
  return (
    <SectionWrapper id="services">
      <ContentWrapper
        className="flex flex-col text-nlec-green"
        shouldTransition
      >
        <motion.div
          className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
          variants={variants}
        >
          <SectionTitle className="mb-0 text-nlec-maroon md:mb-0">
            What We <span className="font-black">do</span>
          </SectionTitle>
          <div className={cn("text-2xl xl:text-3xl")}>
            COMPENSATION AND FAIR ENGAGEMENT
          </div>
        </motion.div>
        <motion.div
          variants={variants}
          className="inline-flex flex-col gap-2 xl:text-xl"
        >
          <p>
            We are committed to ensuring equitable compensation for the
            expertise of people with lived prison experiences. We have adopted a
            standardised payment schedule to recognise and value the
            contributions of our members.
          </p>
          <p>
            This ensures transparency and fairness while promoting meaningful
            participation across all activities, from individual engagements to
            high-level advisory roles.
          </p>
        </motion.div>
      </ContentWrapper>
    </SectionWrapper>
  );
}
