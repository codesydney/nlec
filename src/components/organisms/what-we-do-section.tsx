import SectionTitle from "../atoms/section-title";
import { Card, CardDescription, CardTitle } from "../atoms/ui/card";
import SectionWrapper from "../molecules/section-wrapper";
import ContentWrapper from "../molecules/content-wrapper";
import { cn } from "@/lib/utils";

export default function WhatWeDoSection() {
  const COMPENSATION_ITEMS = [
    {
      level: "Participant Level",
      compensation: "$35 per hour (minimum 3 hours)",
      description:
        "for contributions requiring an individual perspective or low-medium level expertise.",
    },
    {
      level: "Advisor Level",
      compensation: "$65 per hour (minimum 3 hours)",
      description: "for providing advanced advice or broader perspectives.",
    },
  ];

  return (
    <SectionWrapper id="services">
      <ContentWrapper className="flex flex-col text-nlec-green">
        <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle className="mb-0 text-nlec-maroon md:mb-0">
            What We <span className="font-black">Do</span>
          </SectionTitle>
          <div className={cn("text-center text-2xl xl:text-3xl")}>
            COMPENSATION AND FAIR ENGAGEMENT
          </div>
        </div>
        <p className="xl:text-lg">
          We are committed to ensuring equitable compensation for the expertise
          of people with lived prison experiences. Drawing inspiration from the
          Western Australian Association for Mental Health (WAAMH), we have
          adopted a standardised payment schedule to recognise and value the
          contributions of our members:
        </p>

        <div className="mb-4 grid max-w-[768px] gap-4 sm:grid-cols-2">
          {COMPENSATION_ITEMS.map((item, i) => (
            <Card key={i} className="flex-col gap-4 shadow-none">
              <div className="w-fit bg-nlec-maroon px-2 py-1 text-white">{`0${i + 1}`}</div>
              <div>
                <CardTitle level="h4">{item.level}</CardTitle>
                <p className="text-sm text-nlec-orange xl:text-base">
                  {item.compensation}
                </p>
              </div>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
        <p className="xl:text-lg">
          This ensures transparency and fairness while promoting meaningful
          participation across all activities, from individual engagements to
          high-level advisory roles.
        </p>
      </ContentWrapper>
    </SectionWrapper>
  );
}
