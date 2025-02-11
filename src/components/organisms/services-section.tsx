"use client";

import SectionTitle from "@/components/atoms/section-title";
import { Card, CardDescription, CardTitle } from "@/components/atoms/ui/card";
import SectionWrapper from "@/components/molecules/section-wrapper";
import ContentWrapper from "@/components/molecules/content-wrapper";
import { cn } from "@/lib/utils";
import { redHatDisplay } from "@/assets/fonts";
import { SERVICE_ITEMS } from "@/assets/data";
import { motion } from "motion/react";
import { variants } from "@/lib/motion-variants";

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <ContentWrapper
        className="flex flex-col text-nlec-green"
        shouldTransition
      >
        <motion.div
          className="mb-4 flex flex-col gap-4 md:mb-8 md:flex-row md:justify-between"
          variants={variants}
        >
          <SectionTitle className="mb-0 md:mb-0">
            What We <span className="font-black">Offer</span>
          </SectionTitle>
          <div
            className={cn(
              "inline-flex h-fit w-fit items-center justify-center rounded-full border border-nlec-green px-4 py-2 xl:text-2xl",
              redHatDisplay.className
            )}
          >
            Lived Experience
          </div>
        </motion.div>
        <motion.div
          className="mb-12 grid gap-4 border-2 border-transparent border-l-nlec-maroon px-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3"
          variants={variants}
        >
          {SERVICE_ITEMS.map((item, i) => (
            <Card key={i}>
              <div
                className={cn(
                  "min-w-[64px] text-5xl font-black drop-shadow",
                  redHatDisplay.className,
                  i === 0
                    ? "text-[#ef991e]"
                    : i === 1
                      ? "text-[#1b667b]"
                      : i === 2 || i === 3
                        ? "text-[#c04523]"
                        : "text-[#8cb3ba]"
                )}
              >
                {i < 9 ? `0${i + 1}` : `${i + 1}`}
              </div>
              <div>
                <CardTitle level="h3">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </Card>
          ))}
        </motion.div>
      </ContentWrapper>
    </SectionWrapper>
  );
}
