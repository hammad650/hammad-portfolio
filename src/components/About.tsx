"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Boxes,
  Database,
  Palette,
  Server,
  Wrench,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Languages",
    items: "JavaScript (ES6+), TypeScript, HTML5, CSS3",
  },
  {
    icon: Boxes,
    title: "Frameworks",
    items: "React.js, Next.js",
  },
  {
    icon: Database,
    title: "State & Data Management",
    items: "Redux / Redux Toolkit, Zustand, TanStack Query / Table",
  },
  {
    icon: Palette,
    title: "UI & Visualization",
    items: "Tailwind CSS, shadcn/ui, Material UI, D3.js, Recharts",
  },
  {
    icon: Server,
    title: "Backend",
    items: "Node.js, Express.js, MongoDB",
  },
  {
    icon: Wrench,
    title: "Tools & Deployment",
    items: "Git, GitHub, Vite, Webpack, Vercel, Netlify",
  },
];

const About = () => {
  return (
    <div id="about" className="py-24 px-2 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          — About
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-4 space-y-4 text-slate-300 text-[17px] leading-relaxed"
        >
          <div className="float-none sm:float-right sm:ml-6 mb-4 relative w-fit">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-blue-500 to-emerald-400 blur-lg opacity-30" />
            <Image
              src="/img/hammad.jpeg"
              alt="Hammad Zahid"
              width={180}
              height={200}
              className="relative rounded-2xl object-cover w-[150px] h-[180px] sm:w-[180px] sm:h-[200px] border border-white/10"
            />
          </div>
          <p>
            I&apos;m <strong className="text-white">Hammad Zahid</strong>, a
            Frontend Developer based in Lahore with 4+ years of experience
            building responsive, high-performance web applications.
          </p>
          <p>
            I specialize in{" "}
            <strong className="text-white">React, Next.js, and TypeScript</strong>,
            with a proven track record developing{" "}
            <strong className="text-white">CMS-integrated platforms</strong>,
            admin dashboards, and data-driven interfaces using modern state
            management and API integration.
          </p>
          <p>
            At <strong className="text-white">Rayymen Technologies</strong> I
            build pixel-perfect UIs across content platforms, admin panels, and
            marketplace management systems, integrating REST APIs and
            third-party services like Contentful CMS and eBay/Mirakl. I&apos;m
            adept at leading frontend projects and collaborating with
            cross-functional teams — feel free to{" "}
            <Link
              href="https://www.linkedin.com/in/hammad-zahid-357882209"
              className="gradient-text font-semibold underline-offset-4 hover:underline"
            >
              connect on LinkedIn
            </Link>
            .
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass card-hover rounded-2xl p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex-center size-10 rounded-xl bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 border border-white/10">
                    <Icon className="size-5 text-emerald-300" />
                  </span>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {s.items}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
