import Link from "next/link";
import ContentWrapper from "../molecules/content-wrapper";
import { Button } from "../atoms/ui/button";
import Fb from "../../../public/fb";
import Twitter from "../../../public/twitter";
import Linkedin from "../../../public/linkedin";

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
      { icon: Linkedin, href: "#" },
    ],
  };

  return (
    <footer className="bg-nlec-darkBlue px-4 py-12 text-white md:px-8 xl:px-20">
      <ContentWrapper>
        <div>
          <h1 className="mb-1 text-2xl font-bold text-nlec-orange md:text-3xl">
            Connect With Us
          </h1>
          <div className="inline-flex flex-col gap-4 sm:flex-row sm:gap-8 md:gap-12">
            <ul>
              {FOOTER_ITEMS.links.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold text-nlec-orange">
                    {item.label}
                  </span>
                  :{" "}
                  <Button
                    asChild
                    variant="link"
                    size="none"
                    className="text-white hover:text-white"
                  >
                    <Link href={item.href}>{item.content}</Link>
                  </Button>
                </li>
              ))}
            </ul>
            <ul className="inline-flex gap-4 sm:gap-6 md:gap-8">
              {FOOTER_ITEMS.socials.map((social, i) => (
                <Link key={i} href={social.href} className="size-6">
                  {
                    <social.icon className="fill-white transition-all ease-in-out hover:fill-nlec-orange" />
                  }
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center border-t border-nlec-orange pt-4 text-center text-sm">
          <div className="md:inline-flex">
            <p>© {new Date().getFullYear()} Lived Experts Collective</p>
            <p className="md:ml-2 md:border-l md:border-nlec-orange md:pl-2">
              Empowering lived prison experiences for a better tomorrow.
            </p>
          </div>
          <div className="mt-2 inline-flex gap-4">
            <Button
              asChild
              variant="link"
              size="none"
              className="text-nlec-orange"
            >
              <Link href="#">Privacy Policy</Link>
            </Button>
            <Button
              asChild
              variant="link"
              size="none"
              className="text-nlec-orange"
            >
              <Link href="#">Terms Of Use</Link>
            </Button>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  );
}
