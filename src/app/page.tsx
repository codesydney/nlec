import AboutSection from "@/components/organisms/about-section";
import ContactUsSection from "@/components/organisms/contact-us";
import HeaderSection from "@/components/organisms/header-section";
import ImpactSection from "@/components/organisms/impact-section";
import JoinUsSection from "@/components/organisms/join-us-section";
import ServicesSection from "@/components/organisms/services-section";
import WhatWeDoSection from "@/components/organisms/what-we-do-section";
import AnnouncementModal from "@/components/organisms/announcement-modal";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <AboutSection />
      <ServicesSection />
      <WhatWeDoSection />
      <ImpactSection />
      <JoinUsSection />
      <ContactUsSection />
      <AnnouncementModal
        title="Title of the announcement"
        content="lorem ipsum"
      />
    </>
  );
}
