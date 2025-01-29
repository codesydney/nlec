import Image from "next/image";
import SectionTitle from "../atoms/section-title";
import SectionWrapper from "../molecules/section-wrapper";
import ContentWrapper from "../molecules/content-wrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <ContentWrapper className="grid items-center gap-6 md:grid-cols-[auto_40%]">
        <div>
          <SectionTitle>About Us</SectionTitle>
          <p className="text-nlec-darkGray xl:text-lg">
            We are the national collective of formerly incarcerated people
            across Australia, uniting lived prison experiences to drive
            advocacy, insight, and meaningful change. Our mission is to serve as
            a central hub for people and organisations seeking expertise,
            consulting, and perspectives informed by lived experiences. We aim
            to amplify voices, set standards for fair engagement, and foster
            systemic change while ensuring dignity and respect for the community
            we represent.
          </p>
        </div>
        {/* SUGGESTION: Use an illustration for the images like in the old site. It's more interesting and looks better than simple images */}
        <div className="relative aspect-video max-h-[320px] w-full rounded shadow-lg shadow-nlec-orange/50 md:aspect-square">
          <Image
            src="/about-image.jpg"
            fill
            alt="Community"
            className="rounded object-cover object-right"
          />
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}
