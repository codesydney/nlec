import { FileText, HeartHandshake, Megaphone, Mic2, Scale } from "lucide-react";
import SectionTitle from "../atoms/section-title";
import { Card, CardDescription, CardTitle } from "../atoms/ui/card";
import SectionWrapper from "../molecules/section-wrapper";
import ContentWrapper from "../molecules/content-wrapper";

export default function ServicesSection() {
  const SERVICE_ITEMS = [
    {
      title: "Speaker and Consultant Network",
      description:
        "Connecting people with lived prison experience for speaking engagements, consulting, writing, and special projects.",
      icon: Mic2,
    },
    {
      title: "Standardised Engagement Framework",
      description:
        "Providing fee schedules and ethical guidelines to ensure fair treatment and minimise exploitation.",
      icon: FileText,
    },
    {
      title: "Support and Coaching Services",
      description:
        "Offering advice and coaching to prepare for interviews, manage challenging situations, or debrief after difficult experiences.",
      icon: HeartHandshake,
    },
    {
      title: "Media and Advocacy Support",
      description:
        "Guiding media engagements to avoid harm and exploitation while amplifying authentic voices.",
      icon: Megaphone,
    },
    {
      title: "Systemic Advocacy and Campaigns",
      description:
        "Identifying and addressing systemic issues impacting the lived experience community through strategic campaigns and policy advisories.",
      icon: Scale,
    },
  ];

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
      <ContentWrapper>
        <SectionTitle>What We Offer</SectionTitle>
        <div className="mb-12 grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {SERVICE_ITEMS.map((item, i) => (
            <Card key={i}>
              <CardTitle level="h3">
                {/* SUGGESTION: Use an illustration for the images like in the old site. It's more interesting and looks better than simple images */}
                {<item.icon className="size-10" />}
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
        <div className="rounded-lg bg-nlec-orange px-4 py-6 text-white md:px-6">
          <h3 className="mb-4 text-2xl font-semibold xl:text-3xl">
            Compensation and Fair Engagement
          </h3>
          <p className="mb-6 xl:text-lg">
            We are committed to ensuring equitable compensation for the
            expertise of people with lived prison experiences. Drawing
            inspiration from the Western Australian Association for Mental
            Health (WAAMH), we have adopted a standardised payment schedule to
            recognise and value the contributions of our members:
          </p>
          <div className="mx-auto mb-8 grid max-w-[768px] gap-4 sm:grid-cols-2">
            {COMPENSATION_ITEMS.map((item, i) => (
              <Card key={i} className="shadow-none">
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
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}
