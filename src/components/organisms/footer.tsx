import Link from "next/link";
import ContentWrapper from "../molecules/content-wrapper";
import { Button } from "../atoms/ui/button";
import Fb from "../../../public/fb";
import Twitter from "../../../public/twitter";
import SectionTitle from "../atoms/section-title";
import { cn } from "@/lib/utils";
import { redHatDisplay } from "@/assets/fonts";
import { Instagram } from "lucide-react";
import ContactUsForm from "./contact-us-form";

export default function Footer() {
  const FOOTER_ITEMS = {
    links: [
      {
        label: "Email",
        content: "tina@justicereforminitiative.org.au",
        href: "mailto:tina@justicereforminitiative.org.au",
      },
      {
        label: "Phone",
        content: "+61 123 456 789",
        href: "tel:+61123456789",
      },
      {
        label: "Address",
        content: "Canberra, ACT 2600, Australia",
        href: "https://maps.app.goo.gl/xDYHRutBSzwCfagf7",
      },
    ],
    socials: [
      { icon: Fb, href: "#" },
      { icon: Twitter, href: "#" },
      { icon: Instagram, href: "#" },
    ],
    "TOS-PP": [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms Of Use", href: "#" },
    ],
  };

  return (
    <footer className="px-4 py-12 pb-24 text-nlec-green md:px-8 xl:px-20">
      <ContentWrapper>
        <div className="mb-4 flex flex-col gap-4 md:mb-8 md:flex-row">
          <SectionTitle className="mb-0 w-fit md:mb-0">
            Contact <span className="font-black">Us.</span>
          </SectionTitle>
          <div className="relative h-1 w-full bg-nlec-green" />
        </div>
        <div className="grid gap-8 md:grid-cols-[60%_auto] md:gap-6">
          <ContactUsForm />
          <div className={cn("flex flex-col gap-6", redHatDisplay.className)}>
            {FOOTER_ITEMS.links.map((link, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold">{link.label}</h3>
                <Button asChild variant="link" className="w-fit p-0">
                  <Link href={link.href}>{link.content}</Link>
                </Button>
              </div>
            ))}
            <div className="inline-flex flex-col gap-2">
              <h3 className="text-3xl font-bold">Socials</h3>
              <div className="inline-flex gap-4">
                {FOOTER_ITEMS.socials.map((social, i) => (
                  <Button
                    key={i}
                    asChild
                    variant="link"
                    className="group rounded-full border border-nlec-green p-2 hover:border-nlec-orange"
                  >
                    <Link href={social.href}>
                      <social.icon
                        className={`h-6 ${i === 2 ? "outline-nlec-green group-hover:outline-nlec-orange" : "fill-nlec-green group-hover:fill-nlec-orange"}`}
                      />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <p>Empowering lived prison experiences for a better tomorrow.</p>
            <div className="divide-x-2 divide-nlec-green">
              {FOOTER_ITEMS["TOS-PP"].map((link, i) => (
                <Button
                  asChild
                  variant="link"
                  className={`rounded-none p-0 ${i === 0 ? "pr-4" : "pl-4"}`}
                  key={i}
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
}
