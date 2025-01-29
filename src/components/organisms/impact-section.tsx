import SectionTitle from "../atoms/section-title";
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
      <ContentWrapper className="flex flex-col overflow-hidden text-nlec-green">
        <div className="mb-4 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center">
          <SectionTitle className="mb-0 w-fit text-nlec-maroon md:mb-0 md:min-w-[324px] xl:min-w-[389px]">
            Our <span className="font-black">Impact</span>
          </SectionTitle>
          <div className="relative h-1 w-full bg-nlec-maroon" />
        </div>
        <ol className="inline-flex flex-col gap-4 pl-4">
          {IMPACT_ITEMS.map((item, i) => (
            <li key={i} className="list-disc md:text-lg">
              {item.description}
            </li>
          ))}
        </ol>
      </ContentWrapper>
    </SectionWrapper>
  );
}
