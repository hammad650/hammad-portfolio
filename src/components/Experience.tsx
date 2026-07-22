"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    period: "Jan 2026 – Present",
    role: "Mid Senior Frontend Developer",
    company: "Rayymen Technologies Private Limited",
    location: "Lahore, Pakistan",
    points: [
      "Built responsive, high-performance, pixel-perfect UIs using Next.js and React 19 across multiple company products, including content platforms, admin panels, and marketplace management systems.",
      "Integrated REST APIs for authentication, role-based access, and data-driven views, along with third-party services including Contentful CMS and eBay/Mirakl APIs.",
      "Contributed to WBS planning for frontend deliverables, supporting predictable delivery timelines across projects.",
      "Worked in an Agile environment, contributing to iterative development cycles and timely feature delivery.",
    ],
  },
  {
    period: "Jan 2025 – Dec 2025",
    role: "Frontend Developer",
    company: "BottomCode",
    location: "Lahore, Pakistan",
    points: [
      "Translated requirements into functional features, coordinating with backend teams to align on data flow and API integration.",
      "Assisted junior developers with code reviews and technical troubleshooting across multiple projects.",
      "Collaborated with the team to ensure timely and accurate delivery of assigned features.",
    ],
  },
  {
    period: "Jan 2022 – Nov 2024",
    role: "Front End Developer",
    company: "Silicon Nexus",
    location: "Lahore, Pakistan",
    points: [
      "Participated in client calls to gather and clarify requirements, ensuring accurate translation into frontend implementation.",
      "Collaborated with UI/UX designers to review and refine Figma designs, ensuring alignment with client requirements before development.",
      "Built responsive frontend applications using React and Redux, integrating REST APIs and third-party services (Firebase, Stripe).",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="py-16 px-2 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <span className="section-eyebrow">— Career</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="mt-12 relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-600/60 via-violet-400/40 to-transparent" />
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-0 flex-center size-10 rounded-xl bg-gradient-to-tr from-violet-600/20 to-violet-400/20 border border-white/10 backdrop-blur">
                  <Briefcase className="size-4 text-violet-200" />
                </span>
                <div className="glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="chip !text-violet-300 !border-violet-400/30 !bg-violet-400/10">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-violet-200/90 mt-1 font-medium">
                    {exp.company} · <span className="text-slate-400">{exp.location}</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-400 leading-relaxed flex gap-2"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-violet-300/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex-center size-10 rounded-xl bg-gradient-to-tr from-violet-600/20 to-violet-400/20 border border-white/10">
                <GraduationCap className="size-5 text-violet-200" />
              </span>
              <h3 className="font-semibold text-white">Education</h3>
            </div>
            <p className="mt-3 text-sm text-white">B.S. Information Technology</p>
            <p className="text-sm text-slate-400">
              Lahore Garrison University · 2016–2020
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
