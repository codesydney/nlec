import SectionTitle from "../atoms/section-title";
import { Card, CardDescription, CardTitle } from "../atoms/ui/card";
import SectionWrapper from "../molecules/section-wrapper";
import ContentWrapper from "../molecules/content-wrapper";
import { cn } from "@/lib/utils";
import { redHatDisplay } from "@/assets/fonts";

export default function ServicesSection() {
  const SERVICE_ITEMS = [
    {
      title: "Speaker and Consultant Network",
      description:
        "Connecting people with lived prison experience for speaking engagements, consulting, writing, and special projects.",
    },
    {
      title: "Standardised Engagement Framework",
      description:
        "Providing fee schedules and ethical guidelines to ensure fair treatment and minimise exploitation.",
    },
    {
      title: "Support and Coaching Services",
      description:
        "Offering advice and coaching to prepare for interviews, manage challenging situations, or debrief after difficult experiences.",
    },
    {
      title: "Media and Advocacy Support",
      description:
        "Guiding media engagements to avoid harm and exploitation while amplifying authentic voices.",
    },
    {
      title: "Systemic Advocacy and Campaigns",
      description:
        "Identifying and addressing systemic issues impacting the lived experience community through strategic campaigns and policy advisories.",
    },
  ];

  return (
    <SectionWrapper id="services">
      <ContentWrapper className="flex flex-col text-nlec-green">
        <div className="mb-4 flex flex-col gap-4 md:mb-8 md:flex-row md:justify-between">
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
        </div>
        <div className="mb-12 grid gap-4 border-2 border-transparent border-l-nlec-maroon px-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {SERVICE_ITEMS.map((item, i) => (
            <Card key={i}>
              <div
                className={cn(
                  "text-5xl font-black drop-shadow",
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
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}
