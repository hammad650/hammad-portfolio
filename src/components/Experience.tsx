"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    period: "Jun 2025 – Present",
    role: "Senior Full-Stack Developer",
    company: "Rayymen Technologies",
    location: "Lahore, Pakistan",
    points: [
      "Lead a full-stack team of 5+ engineers, building reusable UIs in Next.js & Flutter alongside scalable Node.js/Express REST APIs following clean architecture.",
      "Designed backend services — auth, role-based access control, RESTful endpoints — reducing API response times by 30%.",
      "Defined team-wide coding standards and reusable component libraries, cutting onboarding time by 40%.",
      "Mentored 3+ junior developers and shipped PWAs, AI-assisted flows, and AR experiences.",
    ],
  },
  {
    period: "Jun 2022 – Jul 2025",
    role: "Senior Full-Stack Developer (Remote)",
    company: "i-ways Sales Solutions GmbH",
    location: "Berlin, Germany",
    points: [
      "Led frontend & mobile for a German SaaS company — delivered 10+ production-grade Next.js apps and a SwiftUI iOS app across European markets.",
      "Collaborated with cross-functional teams across 3+ time zones to translate requirements into scalable solutions.",
      "Pioneered PWA adoption and AI-driven UX, reducing technical debt by 35%.",
    ],
  },
  {
    period: "Jun 2018 – Mar 2020",
    role: "Full Stack Developer",
    company: "RogenTech",
    location: "Islamabad, Pakistan",
    points: [
      "Built 5+ full-stack web applications with HTML, CSS, JavaScript, Laravel, and MySQL/MongoDB.",
      "Collaborated in Agile teams and managed deployments across multiple hosting environments.",
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
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/60 via-emerald-500/40 to-transparent" />
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
                <span className="absolute left-0 top-0 flex-center size-10 rounded-xl bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 border border-white/10 backdrop-blur">
                  <Briefcase className="size-4 text-emerald-300" />
                </span>
                <div className="glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <span className="chip !text-blue-300 !border-blue-400/30 !bg-blue-400/10">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-300/90 mt-1 font-medium">
                    {exp.company} · <span className="text-slate-400">{exp.location}</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-400 leading-relaxed flex gap-2"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex-center size-10 rounded-xl bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 border border-white/10">
                <GraduationCap className="size-5 text-emerald-300" />
              </span>
              <h3 className="font-semibold text-white">Education</h3>
            </div>
            <p className="mt-3 text-sm text-white">
              B.S. Computer Software Engineering
            </p>
            <p className="text-sm text-slate-400">
              COMSATS University Islamabad · 2018–2022
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass rounded-2xl p-5"
          >
            <div className="flex items-center gap-3">
              <span className="flex-center size-10 rounded-xl bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 border border-white/10">
                <Award className="size-5 text-emerald-300" />
              </span>
              <h3 className="font-semibold text-white">Certification</h3>
            </div>
            <p className="mt-3 text-sm text-white">DevOps on AWS</p>
            <p className="text-sm text-slate-400">Amazon Web Services</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
