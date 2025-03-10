import Fb from "@/public/fb";
import Twitter from "@/public/twitter";
import Instagram from "@/public/instagram";

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

export const SERVICE_ITEMS = [
  {
    title: "Speaker and Consultant Network",
    description:
      "Connecting people with lived prison experience for speaking engagements, consulting, writing, and special projects.",
  },
  {
    title: "Standardised Engagement Framework",
    description:
      "Providing fee schedules and ethical guidelines to ensure fair treatment and minimise exploitation.",
  },
  {
    title: "Support and Coaching Services",
    description:
      "Offering advice and coaching to prepare for interviews, manage challenging situations, or debrief after difficult experiences.",
  },
  {
    title: "Media and Advocacy Support",
    description:
      "Guiding media engagements to avoid harm and exploitation while amplifying authentic voices.",
  },
  {
    title: "Systemic Advocacy and Campaigns",
    description:
      "Identifying and addressing systemic issues impacting the lived experience community through strategic campaigns and policy advisories.",
  },
];

export const COMPENSATION_ITEMS = [
  {
    level: "Participant Level",
    compensation: "$35 per hour (minimum 3 hours)",
    description:
      "for contributions requiring an individual perspective or low-medium level expertise.",
  },
  {
    level: "Advisor Level",
    compensation: "$65 per hour (minimum 3 hours)",
    description: "for providing advanced advice or broader perspectives.",
  },
];

export const NAV_ITEMS = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#impact", label: "Our Impact" },
  { href: "#join", label: "Join Us" },
];

export const ANNOUNCEMENT = {
  shouldShow: true,
  title: "Title of the announcement",
  content: "lorem ipsum",
};
