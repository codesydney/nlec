import Link from "next/link";
import SectionTitle from "../atoms/section-title";
import { Button } from "../atoms/ui/button";
import ContentWrapper from "../molecules/content-wrapper";
import SectionWrapper from "../molecules/section-wrapper";

export default function JoinUsSection() {
  const JOIN_US_BUTTONS = [
    {
      label: "Get Involved",
      href: "#",
    },
    { label: "Support Our Work", href: "#" },
    { label: "Hire Expertise", href: "#" },
  ];

  return (
    <SectionWrapper id="join">
      <ContentWrapper className="flex flex-col items-center rounded-lg bg-nlec-orange px-4 py-6 text-white md:px-6">
        <SectionTitle className="text-center text-white">
          Join the Movement for Change
        </SectionTitle>
        <p className="mb-6 text-center xl:text-lg">
          Are you a formerly incarcerated individual looking to share your
          expertise? Or are you seeking authentic voices for your project,
          campaign, or research?
        </p>
        <div className="inline-flex flex-col gap-4 sm:flex-row">
          {JOIN_US_BUTTONS.map((button, i) => (
            <Button
              asChild
              key={i}
              className={`border-2 border-transparent bg-white px-6 font-semibold text-nlec-orange hover:border-white hover:bg-nlec-orange hover:text-white`}
            >
              <Link href={button.href}>{button.label}</Link>
            </Button>
          ))}
        </div>
      </ContentWrapper>
    </SectionWrapper>
  );
}
