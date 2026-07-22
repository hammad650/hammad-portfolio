export type Project = {
  name: string;
  slug: string;
  show: string;
  desc: string;
  lang: string[];
  img: string;
  link?: string;
  git?: string;
  work?: string;
};

export const projects: Project[] = [
  {
    name: "Mares Website",
    slug: "mares-website",
    show: "Pixel-perfect media platform with articles, podcasts, videos & shorts",
    desc: "A fully responsive, pixel-perfect media platform featuring articles, podcasts, videos, and short-form video series. Dynamic content is fetched and rendered from Contentful CMS with properly formatted rich text, optimized using TanStack Query with persistent caching, and JW Player powers video/shorts playback alongside category browsing, search, and bookmarking.",
    lang: [
      "Next.js 15",
      "Contentful CMS",
      "JW Player",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    img: "mares-website.svg",
    link: "https://maresmedia.se",
  },
  {
    name: "Receivify",
    slug: "receivify",
    show: "Dashboards & case management for legal and financial professionals",
    desc: "An interactive case management platform for legal and financial professionals managing receivership cases — dashboards, advanced data tables, filtering, search, and watchlist functionality, with case status tracking, recurring task management, and portfolio-level reporting that cut manual case-monitoring effort by 50%.",
    lang: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Server Actions"],
    img: "receivify.svg",
    link: "https://app.receivify.co",
  },
  {
    name: "Fit Society",
    slug: "fit-society",
    show: "Coaching app with workout builders, nutrition plans & live messaging",
    desc: "A responsive coaching app interface featuring a dynamic exercise library, nutrition plan builders, and real-time client-trainer messaging. An intuitive dashboard with drag-and-drop workout builders, interactive nutrition calculators, and client progress tracking cut onboarding time by 40%, alongside dynamic forms with real-time validation for assessments, payments, and subscriptions.",
    lang: ["React", "Next.js", "Tailwind CSS", "Real-time Messaging", "Payments"],
    img: "fit-society.svg",
    link: "https://fitsociety.io",
  },
  {
    name: "MSH",
    slug: "msh",
    show: "Multi-marketplace seller management platform",
    desc: "A multi-marketplace seller management platform integrating eBay and Mirakl APIs for bulk product listing and offer management, with order, returns, and outlet management modules. Includes Azure AD login and role-based route protection, multi-language (i18n) support, dashboard analytics with Recharts, and PDF/label generation with jsPDF.",
    lang: [
      "Next.js 15",
      "Redux Toolkit",
      "TanStack Query/Table",
      "Azure AD (next-auth)",
      "Recharts",
      "jsPDF",
      "i18n",
    ],
    img: "msh.svg",
  },
  {
    name: "Atlas App",
    slug: "atlas-app",
    show: "Onboarding platform with interactive data visualization",
    desc: "A Next.js and TypeScript application featuring interactive user tours (Usertour) to guide onboarding, Auth0 authentication, and PostHog analytics with cohort tracking. Includes a drag-and-drop dashboard with advanced search, plus dynamic data visualization built with Plotly.js and global state managed via TanStack Query and Jotai.",
    lang: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Jotai",
      "Plotly.js",
      "Auth0",
      "PostHog",
    ],
    img: "atlas-app.svg",
  },
  {
    name: "Rain",
    slug: "rain",
    show: "Healthcare dashboard for OT & ward usage monitoring",
    desc: "The frontend of a healthcare application enabling hospital staff across the US and Middle East to monitor OT and ward usage. Includes complex dynamic forms with real-time validation built with React Hook Form, and interactive D3.js data visualizations for real-time OT and ward statistics.",
    lang: ["React", "Material UI", "TanStack Query", "React Hook Form", "D3.js"],
    img: "rain.svg",
  },
  {
    name: "Essay Pro",
    slug: "essay-pro",
    show: "Freelance platform for clients, writers & admins",
    desc: "A freelance platform with dedicated modules for clients, writers, and admins. Built order management functionality with secure Stripe payments integration, real-time notifications and chat, and a review and ratings system for user feedback.",
    lang: ["React", "Redux", "Firebase", "Stripe"],
    img: "essay-pro.svg",
  },
  {
    name: "Streaming App Admin Panel",
    slug: "streaming-app-admin-panel",
    show: "Admin panel for a mobile streaming application",
    desc: "A web-based admin panel to manage content and operations for a mobile streaming application. Built modules for managing novels, series, subscriptions, and coin packages, along with functionality for adding chapters and episodes, and a dashboard displaying key metrics and user activity insights.",
    lang: ["React", "Redux", "Material UI"],
    img: "streaming-app-admin-panel.svg",
  },
  {
    name: "Edjobster",
    slug: "edjobster",
    show: "Job posting platform for companies & candidates",
    desc: "A job posting platform enabling companies to register, post job openings, and manage candidate applications. Built functionality for candidates to apply to jobs and track their applications, plus assessment creation and management tools for interviewers to conduct thorough applicant evaluations.",
    lang: ["React", "Redux", "API Integration"],
    img: "edjobster.svg",
  },
];
