import SectionTitle from "../atoms/section-title";
import SectionWrapper from "../molecules/section-wrapper";
import ContentWrapper from "../molecules/content-wrapper";

export default function ImpactSection() {
  const IMPACT_ITEMS = [
    "Successfully connected voices with lived experience to media outlets, government consultations, and advocacy projects across Australia.",
    "Developed resources, such as media guidelines and policy engagement frameworks, that set a new standard for working with lived experience contributors.",
    "Hosted workshops and webinars to empower our members with skills for public speaking, consulting, and advocacy.",
    "Advocated for systemic changes, addressing issues identified within the community, and driving social transformation.",
  ];

  return (
    <SectionWrapper id="impact">
      <ContentWrapper className="flex flex-col text-nlec-green">
        <div className="mb-4 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center">
          <SectionTitle className="mb-0 w-fit text-nlec-maroon md:mb-0 md:min-w-[324px] xl:min-w-[389px]">
            Our <span className="font-black">Impact</span>
          </SectionTitle>
          <div className="relative h-1 w-full bg-nlec-maroon" />
        </div>
        <ol className="inline-flex flex-col gap-4 pl-4">
          {IMPACT_ITEMS.map((item, i) => (
            <li key={i} className="list-disc md:text-lg">
              {item}
            </li>
          ))}
        </ol>
      </ContentWrapper>
    </SectionWrapper>
  );
}
