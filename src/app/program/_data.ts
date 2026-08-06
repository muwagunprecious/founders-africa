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
      "Six months of founder support, structured coaching, and access to a community built for people turning ideas into scalable companies.",
    heroImage: "/images/tech-incubation-hero-image.png",
    heroStatus: "Applications Open",
    heroDeadline: "Deadline: 30 August 2026",
    heroCta: "Applications Open",
    heroSecondaryCta: "Deadline: 30 August 2026",
    applicationCard: {
      title: "Tech Incubation Fellowship",
      subtitle: "Cohort 1 - January 2026",
      items: [
        { label: "Duration", value: "6 Months" },
        { label: "Format", value: "Hybrid" },
        { label: "Cohort Size", value: "25 Fellows" },
        { label: "Grant", value: "$5,000" },
        { label: "Equity", value: "None" },
      ],
      deadlineLabel: "Application Deadline",
      deadlineValue: "30th August 2026",
    },
    about: [
      "The Tech Incubation Fellowship is Founders Africa's flagship programme for early-stage founders. It combines practical product support, operating mentorship, and peer accountability for teams building from the ground up.",
      "The programme runs in two annual cohorts and is designed for founders who are validating a product, finding early traction, and building the discipline needed to scale.",
    ],
    highlights: [
      {
        value: "6",
        label: "Month Programme",
        description: "A focused runway for founders to sharpen product, team, and distribution.",
      },
      {
        value: "1:1",
        label: "Mentorship",
        description: "Direct access to operators and founders who have built before.",
      },
      {
        value: "$5,000",
        label: "Stipend",
        description: "An unrestricted stipend for founders to keep moving with less friction.",
      },
      {
        value: "Pan-Africa",
        label: "Network",
        description: "Join a continent-wide community of founders, experts, and partners.",
      },
    ],
    eligibility: [
      { label: "Location", value: "Any African country" },
      { label: "Stage", value: "Early-stage and idea-stage" },
      { label: "Age", value: "18 - 40 years" },
      { label: "Team", value: "Solo founders or co-founding teams (max 3)" },
      { label: "Equity", value: "No equity taken - fully grant-funded" },
    ],
    faqs: [
      {
        question: "Who is eligible to apply for the Tech Incubation Fellowship?",
        answer:
          "The fellowship is open to early-stage founders across Africa building products or services with clear market potential. We welcome solo founders and small founding teams.",
      },
      {
        question: "Do I need a registered company to apply?",
        answer:
          "No. You can apply at the idea or pre-incorporation stage, provided you can explain the problem you're solving and why you are the right team to solve it.",
      },
      {
        question: "What does the selection process look like?",
        answer:
          "Applications are reviewed in stages, followed by shortlisting, interviews, and final cohort selection.",
      },
      {
        question: "Can I apply if I am already fundraising?",
        answer:
          "Yes. Founders at different levels of funding readiness can apply, as long as the programme is still a fit for their stage.",
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
      "A growth-focused programme for teams with traction who want to tighten execution, sharpen metrics, and prepare for scale.",
    heroImage: "/images/accelerator-program-hero-image.png",
    heroStatus: "Applications Open",
    heroDeadline: "Deadline: 30 September 2026",
    heroCta: "Apply Now",
    heroSecondaryCta: "Save for later",
    applicationCard: {
      title: "Accelerator Program",
      subtitle: "Cohort 2 - April 2026",
      items: [
        { label: "Duration", value: "4 Months" },
        { label: "Format", value: "Hybrid" },
        { label: "Cohort Size", value: "20 Fellows" },
        { label: "Grant", value: "$3,000" },
        { label: "Equity", value: "None" },
      ],
      deadlineLabel: "Application Deadline",
      deadlineValue: "30th September 2026",
    },
    about: [
      "The Accelerator Program is for founders who have validated their product and are ready to build repeatable growth.",
      "Participants work through structured reviews, operator-led workshops, and investor readiness sessions.",
    ],
    highlights: [
      {
        value: "4",
        label: "Month Programme",
        description: "Built around speed, clarity, and measurable growth.",
      },
      {
        value: "1:1",
        label: "Mentorship",
        description: "Direct guidance from operators and growth specialists.",
      },
      {
        value: "$3,000",
        label: "Stipend",
        description: "Support to reduce the drag on founders during the sprint.",
      },
      {
        value: "Pan-Africa",
        label: "Network",
        description: "Join a founder network that continues beyond the cohort.",
      },
    ],
    eligibility: [
      { label: "Location", value: "Any African country" },
      { label: "Stage", value: "MVP and early traction" },
      { label: "Age", value: "18 - 40 years" },
      { label: "Team", value: "Founding team or solo founder" },
      { label: "Equity", value: "No equity taken" },
    ],
    faqs: [
      {
        question: "Is the accelerator only for startups with revenue?",
        answer:
          "Revenue is helpful but not required. We care more about traction, clarity of problem, and your ability to execute.",
      },
      {
        question: "Can I apply from outside Nigeria?",
        answer:
          "Yes, applicants from across Africa are welcome.",
      },
      {
        question: "Does the programme take equity?",
        answer:
          "No equity is taken.",
      },
      {
        question: "Is the programme remote?",
        answer:
          "It is hybrid, with a mix of in-person and remote sessions.",
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
      "A flexible programme for distributed founders who need structured support without relocating.",
    heroImage: "/images/remote-incubation-hero-image.png",
    heroStatus: "Applications Open",
    heroDeadline: "Deadline: 15 October 2026",
    heroCta: "Apply Now",
    heroSecondaryCta: "Save for later",
    applicationCard: {
      title: "Remote Incubation",
      subtitle: "Cohort 3 - July 2026",
      items: [
        { label: "Duration", value: "4 Months" },
        { label: "Format", value: "Remote" },
        { label: "Cohort Size", value: "20 Fellows" },
        { label: "Grant", value: "$3,000" },
        { label: "Equity", value: "None" },
      ],
      deadlineLabel: "Application Deadline",
      deadlineValue: "15th October 2026",
    },
    about: [
      "Remote Incubation is designed for founders who cannot commit to a physical relocation but still need structured support.",
      "The programme combines virtual workshops, weekly check-ins, and access to the Founders Africa community network.",
    ],
    highlights: [
      {
        value: "4",
        label: "Month Programme",
        description: "A remote-first operating cadence with consistent founder support.",
      },
      {
        value: "Weekly",
        label: "Check-ins",
        description: "Keep momentum with structured accountability.",
      },
      {
        value: "$3,000",
        label: "Stipend",
        description: "Support for founders building from wherever they are.",
      },
      {
        value: "Pan-Africa",
        label: "Network",
        description: "A community that works across time zones and countries.",
      },
    ],
    eligibility: [
      { label: "Location", value: "Any African country" },
      { label: "Stage", value: "Early-stage founders" },
      { label: "Age", value: "18 - 40 years" },
      { label: "Team", value: "Solo founders or co-founding teams" },
      { label: "Equity", value: "No equity taken" },
    ],
    faqs: [
      {
        question: "Do I need to attend in person at all?",
        answer:
          "The core programme is remote, though there may be optional in-person community moments where possible.",
      },
      {
        question: "What time zone is the programme based on?",
        answer:
          "Sessions are scheduled with pan-African participation in mind.",
      },
      {
        question: "Is there any support for internet access?",
        answer:
          "Where available, participant support can include founder stipends and practical assistance.",
      },
      {
        question: "Can I participate from outside Africa?",
        answer:
          "The programme is intended for founders based in African markets.",
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
      "A hands-on pathway for emerging operators who want to build experience in research, ecosystems, and startup support.",
    heroImage: "/images/research-internship-hero-image.png",
    heroStatus: "Applications Open",
    heroDeadline: "Deadline: 20 October 2026",
    heroCta: "Apply Now",
    heroSecondaryCta: "Save for later",
    applicationCard: {
      title: "Research Internship",
      subtitle: "Cohort 1 - May 2026",
      items: [
        { label: "Duration", value: "4 Months" },
        { label: "Format", value: "Hybrid" },
        { label: "Cohort Size", value: "20 Fellows" },
        { label: "Grant", value: "$2,500" },
        { label: "Equity", value: "None" },
      ],
      deadlineLabel: "Application Deadline",
      deadlineValue: "20th October 2026",
    },
    about: [
      "The Research Internship prepares young professionals for careers in startup research, ecosystem work, and programme support.",
      "Interns work on real research projects, field interviews, and ecosystem analysis that supports Founders Africa's broader work.",
    ],
    highlights: [
      {
        value: "4",
        label: "Month Programme",
        description: "A structured experience for building research skills.",
      },
      {
        value: "Real",
        label: "Projects",
        description: "Hands-on work that supports active ecosystem programmes.",
      },
      {
        value: "$2,500",
        label: "Stipend",
        description: "Support for participants throughout the internship.",
      },
      {
        value: "Pan-Africa",
        label: "Network",
        description: "A professional network of founders, operators, and researchers.",
      },
    ],
    eligibility: [
      { label: "Location", value: "Any African country" },
      { label: "Stage", value: "Emerging professionals" },
      { label: "Age", value: "18 - 35 years" },
      { label: "Team", value: "Individual applicants only" },
      { label: "Equity", value: "No equity taken" },
    ],
    faqs: [
      {
        question: "Do I need previous research experience?",
        answer:
          "Not necessarily. We look for curiosity, clarity, and a strong ability to learn quickly.",
      },
      {
        question: "Is this internship paid?",
        answer:
          "Yes, participants receive a stipend.",
      },
      {
        question: "What kind of work will I do?",
        answer:
          "You may support interviews, synthesis, desk research, reports, and programme operations.",
      },
      {
        question: "Is this a full-time internship?",
        answer:
          "The internship is designed as a structured hybrid commitment.",
      },
    ],
  },
];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
