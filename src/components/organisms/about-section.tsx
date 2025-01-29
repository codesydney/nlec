import SectionTitle from "../atoms/section-title";
import SectionWrapper from "../molecules/section-wrapper";
import ContentWrapper from "../molecules/content-wrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <ContentWrapper className="flex flex-col text-nlec-green">
        <SectionTitle className="w-[160px] md:w-[200px] xl:w-[250px]">
          About <span className="font-black">Us</span>
        </SectionTitle>
        <p className="w-4/5 self-end text-lg md:text-xl xl:text-2xl">
          We are the national collective of formerly incarcerated people across
          Australia, uniting lived prison experiences to drive advocacy,
          insight, and meaningful change. Our mission is to serve as a central
          hub for people and organisations seeking expertise, consulting, and
          perspectives informed by lived experiences. We aim to amplify voices,
          set standards for fair engagement, and foster systemic change while
          ensuring dignity and respect for the community we represent.
        </p>
      </ContentWrapper>
    </SectionWrapper>
  );
}
