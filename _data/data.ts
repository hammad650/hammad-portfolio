export type Project = {
  name: string;
  slug: string;
  show: string;
  desc: string;
  lang: string[];
  img: string;
  link: string;
  git?: string;
  work?: string;
  problem: string;
  solution: string;
};

export type Contribution = {
  name: string;
  category: string;
  desc: string;
  lang: string[];
  link?: string;
  linkLabel?: string;
};

export const contributions: Contribution[] = [
  {
    name: "eBay Live Auction, Donations & Cities",
    category: "Web",
    desc: "Live auction bidding, donation & engagement apps.",
    lang: ["React", "PHP"],
    linkLabel: "Case study",
  },
  {
    name: "Xrouten",
    category: "Android Navigation App",
    desc: "Navigation & routing app published on Google Play.",
    lang: ["Flutter", "Android"],
    linkLabel: "Play Store",
  },
  {
    name: "Patient Assistant",
    category: "Flutter + AI",
    desc: "AI-powered patient assistant with intelligent health flows.",
    lang: ["Flutter", "AI/LLM Integration"],
  },
  {
    name: "Harmony Playground",
    category: "iOS App",
    desc: "Interactive audio & music playground built in SwiftUI.",
    lang: ["SwiftUI", "Combine"],
  },
  {
    name: "Tvinn",
    category: "Internal Web App",
    desc: "Internal web tool; contributed to frontend development.",
    lang: ["React", "REST APIs"],
  },
];

export const projects: Project[] = [
  {
    name: "Receivify",
    slug: "receivify",
    show: "AI-powered case management for legal & financial professionals",
    desc: "A production platform for legal and financial professionals managing receivership cases — interactive dashboards, advanced data tables, portfolio-level reporting, and AI-generated case narratives powered by AWS Bedrock.",
    lang: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Server Actions",
      "Tailwind CSS",
      "AWS ECS",
      "S3",
      "Bedrock",
    ],
    img: "receivify.svg",
    link: "https://app.receivify.co",
    problem:
      "Legal and financial professionals managing receivership cases were buried in manual monitoring — tracking case status, recurring tasks, and portfolio reporting across scattered tools, while drafting case narratives by hand consumed hours of billable time.",
    solution:
      "I built interactive dashboards with advanced data tables, filtering, search, and watchlist functionality tailored to receivership workflows. Case status tracking, recurring task management, and portfolio-level reporting cut manual case-monitoring effort by 50%. I then integrated AI-powered case narrative generation using AWS Bedrock, reducing narrative drafting time by 70%. The stack — Next.js, React, TypeScript, PostgreSQL with Server Actions, and AWS ECS/S3 — was shipped to production in an agile, cross-functional environment.",
  },
  {
    name: "Mares Media",
    slug: "mares-media",
    show: "End-to-end Flutter app shipped to Android, iOS & Web across 2 app stores",
    desc: "A cross-platform media app delivered end-to-end in Flutter with pixel-perfect UI, smooth animations, and real-time dynamic content rendering — shipped to both the Google Play and Apple app stores.",
    lang: [
      "Flutter",
      "Clean Architecture",
      "Next.js",
      "REST APIs",
      "State Management",
      "Tailwind CSS",
    ],
    img: "mares-media.svg",
    link: "https://maresmedia.se",
    problem:
      "The client needed a single, maintainable codebase to reach Android, iOS, and Web audiences with a polished, animation-rich experience and real-time content — without the cost and drift of three separate native builds.",
    solution:
      "I led end-to-end Flutter development across Android, iOS, and Web, shipping to 2 app stores with pixel-perfect UI, smooth animations, and real-time dynamic content rendering. I implemented clean architecture with a modular code structure and integrated REST APIs backed by efficient state management, improving content load performance. Reusable components, disciplined error handling, and close collaboration with backend, product, and design teams kept quality high throughout.",
  },
  {
    name: "GetKong",
    slug: "getkong",
    show: "Fully digital medical cannabis treatment journeys in Germany",
    desc: "A digital medical cannabis platform enabling patients in Germany to complete fully digital treatment journeys — dynamic multi-step questionnaires, secure e-prescription payments, and a pharmacy onboarding network.",
    lang: [
      "Next.js",
      "React",
      "TypeScript",
      "Stripe",
      "Adyen",
      "REST APIs",
    ],
    img: "getkong.svg",
    link: "https://getkong.de",
    problem:
      "Patients seeking medical cannabis treatment in Germany faced fragmented, paper-heavy processes across consultations, prescriptions, pharmacies, and payments — with strict regulatory requirements at every step.",
    solution:
      "I built dynamic multi-step medical questionnaires with conditional logic, validation, and progress tracking so patients could complete fully digital treatment journeys. I integrated Stripe and Adyen to process secure e-prescription payments and developed pharmacy onboarding workflows connecting 20+ partner pharmacies. REST APIs across 6+ domains — patient registration, consultations, prescriptions, pharmacy operations, and payment processing — were integrated in close collaboration with backend and design teams.",
  },
  {
    name: "WeAid",
    slug: "weaid",
    show: "Pan-European non-profit fundraising & fiscal hosting platform",
    desc: "A legally compliant, pan-European non-profit platform for donations, initiatives, and campaign management — built with a library of reusable UI components and integrated REST APIs.",
    lang: ["Next.js", "React", "TypeScript", "REST APIs"],
    img: "weaid.svg",
    link: "https://we-aid.org",
    problem:
      "A pan-European nonprofit needed a donation, initiative, and campaign platform that stayed legally compliant across jurisdictions while remaining fast and consistent across browsers and devices.",
    solution:
      "I built 15+ reusable UI components and integrated REST APIs for donation, initiative, and campaign management across the platform. Focusing on UX, application performance, and cross-browser compatibility, I achieved a 30% reduction in page load time, collaborating with designers and backend engineers in an agile environment.",
  },
  {
    name: "Distill",
    slug: "distill",
    show: "Interactive geospatial maps for logistics simulation",
    desc: "A logistics simulation tool that visualises geospatial data on interactive transportation maps to support supply-chain optimisation workflows.",
    lang: ["React", "Leaflet.js", "Geospatial APIs"],
    img: "distill.svg",
    link: "https://map.distill-lausitz.de",
    problem:
      "Planners optimising supply chains needed to reason about routes and transportation networks spatially, but lacked an interactive map-based tool to simulate and visualise logistics scenarios.",
    solution:
      "I integrated geospatial data and built interactive transportation maps using React and Leaflet.js, supporting supply-chain optimisation and logistics simulation workflows with a responsive, data-driven map experience.",
  },
  {
    name: "Emproc",
    slug: "emproc",
    show: "CMS-driven platform for architects, engineers & construction experts",
    desc: "A robust, CMS-driven construction and project management platform delivering scalable cost management and project tracking for architects, engineers, and construction experts.",
    lang: ["Next.js", "Contentful CMS", "Tailwind CSS"],
    img: "emproc.svg",
    link: "https://emproc.de",
    problem:
      "Construction teams needed a content-rich platform for cost management and project tracking that non-technical staff could keep up to date without engineering involvement.",
    solution:
      "I built a robust CMS-driven platform using Next.js and Contentful, giving architects, engineers, and construction experts scalable cost-management and project-tracking features while letting content be managed independently through the CMS.",
  },
  {
    name: "Revalu",
    slug: "revalu",
    show: "Helping architects choose low-carbon building materials",
    desc: "A sustainability-focused construction platform that helps architects select low-carbon building materials, with frontend development and EPD (Environmental Product Declaration) data integration.",
    lang: ["Next.js", "React", "TypeScript", "Data Integration"],
    img: "revalu.svg",
    link: "https://platform.revalu.io",
    problem:
      "Architects wanting to reduce the carbon footprint of their designs struggled to compare building materials, because Environmental Product Declaration data was scattered and hard to act on.",
    solution:
      "I contributed to frontend development and EPD data integration for the platform, surfacing sustainability data in a usable interface so architects can select low-carbon building materials with confidence.",
  },
];
