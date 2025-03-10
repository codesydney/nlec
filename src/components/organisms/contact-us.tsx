import Link from "next/link";
import ContentWrapper from "@/components/molecules/content-wrapper";
import { Button } from "@/components/atoms/ui/button";
import SectionTitle from "@/components/atoms/section-title";
import { cn } from "@/lib/utils";
import { redHatDisplay } from "@/assets/fonts";
import ContactUsForm from "@/components/organisms/contact-us-form";
import { FOOTER_ITEMS } from "@/assets/data";

export default function ContactUsSection() {
  return (
    <section className="px-4 py-12 text-nlec-green md:px-8 xl:px-20">
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
            {/* <div className="inline-flex flex-col gap-2">
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
                      <social.icon className="h-6 fill-nlec-green group-hover:fill-nlec-orange" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div> */}
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
    </section>
  );
}
