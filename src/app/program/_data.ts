export type ProgramSlug =
  | "tech-incubation"
  | "accelerator-program"
  | "remote-incubation"
  | "research-internship";

export type ProgramHighlight = {
  value: string;
  label: string;
  description: string;
};

export type ProgramFAQ = {
  question: string;
  answer: string;
};

export type ProgramData = {
  slug: ProgramSlug;
  navLabel: string;
  title: string;
  eyebrow: string;
  heroTitle: string;
  heroCopy: string;
  heroImage: string;
  heroStatus: string;
  heroDeadline: string;
  heroCta: string;
  heroSecondaryCta: string;
  applicationCard: {
    title: string;
    subtitle: string;
    items: Array<{ label: string; value: string }>;
    deadlineLabel: string;
    deadlineValue: string;
  };
  about: string[];
  highlights: ProgramHighlight[];
  eligibility: Array<{ label: string; value: string }>;
  faqs: ProgramFAQ[];
};

export const programmes: ProgramData[] = [
  {
    slug: "tech-incubation",
    navLabel: "Tech Incubation",
    title: "Tech Incubation Fellowship",
    eyebrow: "Tech Incubation Fellowship",
    heroTitle: "Tech Incubation Fellowship",
    heroCopy:
      "A structured incubation programme for technology entrepreneurs, open both to founders with existing businesses and to those still at the ideation stage.",
    heroImage: "/images/tech-incubation-hero-image.png",
    heroStatus: "Applications Open",
    heroDeadline: "Deadline: 30 August 2026",
    heroCta: "Apply Now",
    heroSecondaryCta: "Deadline: 30 August 2026",
    applicationCard: {
      title: "Tech Incubation Fellowship",
      subtitle: "Autumn Cohort • September - December",
      items: [
        { label: "Duration", value: "4 Months (Sep - Dec)" },
        { label: "Format", value: "Hybrid" },
        { label: "Cohort Size", value: "25 Fellows" },
        { label: "Grant", value: "$5,000" },
        { label: "Equity", value: "None" },
      ],
      deadlineLabel: "Application Deadline",
      deadlineValue: "30th August 2026",
    },
    about: [
      "The Tech Incubation Fellowship is a structured incubation programme for technology entrepreneurs, open both to founders with existing businesses and to those still at the ideation stage.",
      "The programme is designed to support founders in building scalable, investment-ready technology businesses through structured mentorship, technical guidance, and business-model development.",
      "Where the Summit is a moment, the founders' fellowship is a process: an intensive four-month season of training, mentorship, and hands-on building, running from September through December.",
    ],
    highlights: [
      {
        value: "Early & Idea",
        label: "Target Stage",
        description: "Open to early-stage and ideation-stage tech founders.",
      },
      {
        value: "Scalability",
        label: "Structured Curriculum",
        description: "Curriculum focused on scalability and investment readiness.",
      },
      {
        value: "1:1",
        label: "Operator Mentorship",
        description: "Mentorship from experienced technology entrepreneurs and operators.",
      },
      {
        value: "4 Months",
        label: "Autumn Season",
        description: "An intensive season of training, mentorship, and hands-on building (Sept - Dec).",
      },
    ],
    eligibility: [
      { label: "Location", value: "Any African country" },
      { label: "Stage", value: "Early-stage and ideation-stage tech founders" },
      { label: "Focus", value: "Building scalable, investment-ready tech businesses" },
      { label: "Duration", value: "4 Months (September – December)" },
      { label: "Equity", value: "No equity taken" },
    ],
    faqs: [
      {
        question: "Who is eligible to apply for the Tech Incubation Fellowship?",
        answer:
          "The fellowship is open to early-stage and ideation-stage tech founders across Africa. Whether you have an existing business or are validating an initial idea, you can apply.",
      },
      {
        question: "Do I need a registered company to apply?",
        answer:
          "No. You can apply at the ideation or pre-incorporation stage, provided you can articulate the problem you are solving and your approach to building a solution.",
      },
      {
        question: "What is the duration and timeline of the programme?",
        answer:
          "It is an intensive four-month season of training, mentorship, and hands-on building running from September through December.",
      },
      {
        question: "What support do founders receive?",
        answer:
          "Participants receive a structured curriculum focused on scalability, 1:1 mentorship from experienced technology entrepreneurs and operators, and business-model development.",
      },
    ],
  },

  {
    slug: "accelerator-program",
    navLabel: "Accelerator Program",
    title: "Accelerator Program",
    eyebrow: "Accelerator Program",
    heroTitle: "Accelerator Program",
    heroCopy:
      "A bootcamp-style programme for businesses that already have a Minimum Viable Product (MVP) or early-stage market traction.",
    heroImage: "/images/accelerator-program-hero-image.png",
    heroStatus: "Applications Open",
    heroDeadline: "Deadline: 30 August 2026",
    heroCta: "Apply Now",
    heroSecondaryCta: "Deadline: 30 August 2026",
    applicationCard: {
      title: "Accelerator Program",
      subtitle: "Autumn Cohort • September - December",
      items: [
        { label: "Duration", value: "4 Months (Sep - Dec)" },
        { label: "Format", value: "Bootcamp / Hybrid" },
        { label: "Cohort Size", value: "20 Fellows" },
        { label: "Grant", value: "$3,000" },
        { label: "Equity", value: "None" },
      ],
      deadlineLabel: "Application Deadline",
      deadlineValue: "30th August 2026",
    },
    about: [
      "The Accelerator Program is a bootcamp-style programme for businesses that already have a Minimum Viable Product (MVP) or early-stage market traction.",
      "The Accelerator is built to compress the distance between early traction and sustainable growth, sharpening go-to-market strategy, unit economics, and fundraising readiness.",
      "Where the Summit is a moment, the founders' fellowship is a process: an intensive four-month season of training, mentorship, and hands-on building, running from September through December.",
    ],
    highlights: [
      {
        value: "MVP & Traction",
        label: "Proven Concept",
        description: "For businesses with an existing MVP or measurable early traction.",
      },
      {
        value: "Bootcamp",
        label: "Intensive Format",
        description: "Intensive, bootcamp-format sessions over the programme period.",
      },
      {
        value: "Growth & GTM",
        label: "Core Focus",
        description: "Focus on growth metrics, go-to-market execution, and fundraising readiness.",
      },
      {
        value: "4 Months",
        label: "Autumn Sprint",
        description: "Compressing the distance between early traction and sustainable growth.",
      },
    ],
    eligibility: [
      { label: "Location", value: "Any African country" },
      { label: "Stage", value: "Businesses with an existing MVP or measurable early traction" },
      { label: "Focus", value: "Go-to-market strategy, unit economics & fundraising readiness" },
      { label: "Duration", value: "4 Months (September – December)" },
      { label: "Equity", value: "No equity taken" },
    ],
    faqs: [
      {
        question: "Is the Accelerator Program only for revenue-generating startups?",
        answer:
          "Revenue is helpful but not required. The programme is designed for businesses that already have a Minimum Viable Product (MVP) or early-stage market traction.",
      },
      {
        question: "How are sessions structured during the 4-month period?",
        answer:
          "The program uses intensive, bootcamp-format sessions focusing on growth metrics, go-to-market execution, unit economics, and fundraising readiness.",
      },
      {
        question: "What is the timeline for the Accelerator?",
        answer:
          "The Accelerator runs as an intensive 4-month season from September through December.",
      },
      {
        question: "Does Founders Africa take equity?",
        answer:
          "No, the fellowship is grant-funded and takes zero equity.",
      },
    ],
  },

  {
    slug: "remote-incubation",
    navLabel: "Remote Incubation",
    title: "Remote Incubation",
    eyebrow: "Remote Incubation",
    heroTitle: "Remote Incubation",
    heroCopy:
      "A career acceleration programme designed to prepare young Nigerians for successful careers in the global digital and remote workforce.",
    heroImage: "/images/remote-incubation-hero-image.png",
    heroStatus: "Applications Open",
    heroDeadline: "Deadline: 30 August 2026",
    heroCta: "Apply Now",
    heroSecondaryCta: "Deadline: 30 August 2026",
    applicationCard: {
      title: "Remote Incubation",
      subtitle: "Autumn Cohort • September - December",
      items: [
        { label: "Duration", value: "4 Months (Sep - Dec)" },
        { label: "Format", value: "Remote-First" },
        { label: "Cohort Size", value: "20 Fellows" },
        { label: "Grant", value: "$3,000" },
        { label: "Equity", value: "None" },
      ],
      deadlineLabel: "Application Deadline",
      deadlineValue: "30th August 2026",
    },
    about: [
      "The Remote Incubation Program is a career acceleration programme designed to prepare young Nigerians for successful careers in the global digital and remote workforce.",
      "This track recognises that not every promising young person will found a company immediately; many will first build careers as remote professionals, and this programme equips them to do so competitively on the global stage.",
      "Where the Summit is a moment, the founders' fellowship is a process: an intensive four-month season of training, mentorship, and hands-on building, running from September through December.",
    ],
    highlights: [
      {
        value: "Global",
        label: "Remote Careers",
        description: "Prepares participants for remote-first, globally competitive careers.",
      },
      {
        value: "Skills",
        label: "Digital Workforce",
        description: "Builds digital workforce skills aligned with global hiring standards.",
      },
      {
        value: "Access",
        label: "Global Opportunities",
        description: "Positions young Nigerians to access international remote opportunities.",
      },
      {
        value: "4 Months",
        label: "Autumn Season",
        description: "Intensive training, mentorship, and career acceleration (Sept - Dec).",
      },
    ],
    eligibility: [
      { label: "Target", value: "Young Nigerians & emerging digital professionals" },
      { label: "Focus", value: "Global digital and remote workforce preparation" },
      { label: "Format", value: "Fully Remote" },
      { label: "Duration", value: "4 Months (September – December)" },
      { label: "Equity", value: "No equity taken" },
    ],
    faqs: [
      {
        question: "Who is the Remote Incubation Program designed for?",
        answer:
          "It is designed for young talent and emerging professionals who want to build high-impact careers as remote digital professionals on the global stage.",
      },
      {
        question: "Do I need to be building a startup to join this track?",
        answer:
          "No. This track explicitly focuses on career acceleration and preparing young Nigerians for successful careers in the global digital workforce.",
      },
      {
        question: "What is the schedule for this programme?",
        answer:
          "The track is a 4-month remote-first experience running from September through December.",
      },
      {
        question: "What outcomes can participants expect?",
        answer:
          "Participants gain digital workforce skills aligned with global hiring standards and are positioned to access international remote opportunities.",
      },
    ],
  },

  {
    slug: "research-internship",
    navLabel: "Research Internship",
    title: "Research Internship",
    eyebrow: "Research Internship",
    heroTitle: "Research Internship",
    heroCopy:
      "A research-focused internship track that gives emerging talent structured exposure to applied research within the startup and innovation ecosystem.",
    heroImage: "/images/research-internship-hero-image.png",
    heroStatus: "Applications Open",
    heroDeadline: "Deadline: 30 August 2026",
    heroCta: "Apply Now",
    heroSecondaryCta: "Deadline: 30 August 2026",
    applicationCard: {
      title: "Research Internship",
      subtitle: "Autumn Cohort • September - December",
      items: [
        { label: "Duration", value: "4 Months (Sep - Dec)" },
        { label: "Format", value: "Hybrid / Applied Research" },
        { label: "Cohort Size", value: "20 Fellows" },
        { label: "Grant", value: "$2,500" },
        { label: "Equity", value: "None" },
      ],
      deadlineLabel: "Application Deadline",
      deadlineValue: "30th August 2026",
    },
    about: [
      "The Research Internship is a research-focused track that gives emerging talent structured exposure to applied research within the startup and innovation ecosystem.",
      "The programme builds the analytical and research capacity that underpins informed business and policy decisions across the Founders community.",
      "Running from September through December during the Founders Autumn Fellowship, interns feed insight back into the broader Founders platform and programming.",
    ],
    highlights: [
      {
        value: "Applied",
        label: "Ecosystem Research",
        description: "Structured exposure to applied research within the startup ecosystem.",
      },
      {
        value: "Capacity",
        label: "Analytical Talent",
        description: "Builds research and analytical capacity among emerging talent.",
      },
      {
        value: "Insights",
        label: "Platform Impact",
        description: "Feeds insight back into the broader Founders platform and programming.",
      },
      {
        value: "4 Months",
        label: "Autumn Term",
        description: "An intensive four-month season of applied research and analysis (Sept - Dec).",
      },
    ],
    eligibility: [
      { label: "Location", value: "Any African country" },
      { label: "Target", value: "Emerging research talent & analytical minds" },
      { label: "Focus", value: "Applied research within the startup & innovation ecosystem" },
      { label: "Duration", value: "4 Months (September – December)" },
      { label: "Equity", value: "No equity taken" },
    ],
    faqs: [
      {
        question: "What is the main objective of the Research Internship?",
        answer:
          "It gives emerging talent structured exposure to applied research within the startup and innovation ecosystem, building analytical capacity that underpins informed business and policy decisions.",
      },
      {
        question: "How does the research feed into Founders Africa?",
        answer:
          "Insights gathered during the internship feed directly back into the broader Founders platform, strategy, and ecosystem programming.",
      },
      {
        question: "When does the Research Internship run?",
        answer:
          "It runs for 4 months from September through December alongside the main Founders Autumn Fellowship season.",
      },
      {
        question: "Are interns supported with a stipend?",
        answer:
          "Yes, all accepted interns receive a stipend and structured mentorship throughout the 4-month term.",
      },
    ],
  },
];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
