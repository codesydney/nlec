"use client";

import SectionTitle from "@/components/atoms/section-title";
import SectionWrapper from "@/components/molecules/section-wrapper";
import ContentWrapper from "@/components/molecules/content-wrapper";
import { motion } from "motion/react";
import { variants } from "@/lib/motion-variants";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <ContentWrapper
        className="flex flex-col text-nlec-green"
        shouldTransition
      >
        <SectionTitle className="w-1/12">
          About <span className="font-black">Us</span>
        </SectionTitle>
        <motion.p
          variants={variants}
          className="w-4/5 self-end text-lg md:text-xl xl:text-2xl"
        >
          We are the national collective of formerly incarcerated people across
          Australia, uniting lived prison experiences to drive advocacy,
          insight, and meaningful change. Our mission is to serve as a central
          hub for people and organisations seeking expertise, consulting, and
          perspectives informed by lived experiences. We aim to amplify voices,
          set standards for fair engagement, and foster systemic change while
          ensuring dignity and respect for the community we represent.
        </motion.p>
      </ContentWrapper>
    </SectionWrapper>
  );
}
