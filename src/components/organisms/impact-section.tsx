import SectionTitle from "../atoms/section-title";
import SectionWrapper from "../molecules/section-wrapper";
import ContentWrapper from "../molecules/content-wrapper";
import { IMPACT_ITEMS } from "@/assets/data";

export default function ImpactSection() {
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
