import Image from "next/image";
import SectionTitle from "../atoms/section-title";
import { cn } from "@/lib/utils";
import SectionWrapper from "../molecules/section-wrapper";
import ContentWrapper from "../molecules/content-wrapper";

export default function ImpactSection() {
  const IMPACT_ITEMS = [
    {
      image: { src: "/impact-connection.jpg", alt: "Connection" },
      description:
        "Successfully connected voices with lived experience to media outlets, government consultations, and advocacy projects across Australia.",
    },
    {
      image: {
        src: "/impact-developed.jpg",
        alt: "Development",
        position: "object-top",
      },
      description:
        "Developed resources, such as media guidelines and policy engagement frameworks, that set a new standard for working with lived experience contributors.",
    },
    {
      image: {
        src: "/impact-workshops.jpg",
        alt: "Workshops",
      },
      description:
        "Hosted workshops and webinars to empower our members with skills for public speaking, consulting, and advocacy.",
    },
    {
      image: {
        src: "/impact-advocate.jpeg",
        alt: "Advocate",
      },
      description:
        "Advocated for systemic changes, addressing issues identified within the community, and driving social transformation.",
    },
  ];

  return (
    <SectionWrapper id="impact">
      <ContentWrapper>
        <SectionTitle>Our Impact</SectionTitle>
        <div className="grid gap-8 sm:grid-cols-2">
          {IMPACT_ITEMS.map((item, i) => (
            <div key={i} className="inline-flex flex-col gap-2">
              <div className="relative aspect-video max-h-[18rem] w-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className={cn("object-cover", item.image.position)}
                />
              </div>
              <p className="px-2 xl:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}
