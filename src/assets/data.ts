import { Instagram } from "lucide-react";
import Fb from "../../public/fb";
import Twitter from "../../public/twitter";

export const FOOTER_ITEMS = {
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

export const IMPACT_ITEMS = [
  "Successfully connected voices with lived experience to media outlets, government consultations, and advocacy projects across Australia.",
  "Developed resources, such as media guidelines and policy engagement frameworks, that set a new standard for working with lived experience contributors.",
  "Hosted workshops and webinars to empower our members with skills for public speaking, consulting, and advocacy.",
  "Advocated for systemic changes, addressing issues identified within the community, and driving social transformation.",
];
