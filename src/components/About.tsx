"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Boxes,
  Smartphone,
  Brain,
  Server,
  Wrench,
} from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Languages",
    items: "JavaScript, TypeScript, Dart, Swift, Python, PHP",
  },
  {
    icon: Boxes,
    title: "Frameworks",
    items: "React, Next.js, Flutter, SwiftUI, Node.js, Laravel",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: "Flutter (Clean Arch, GetX, BLoC), SwiftUI, Combine",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    items: "LangChain, AI Agents, LLM Integration, n8n, OpenAI",
  },
  {
    icon: Server,
    title: "APIs & Backend",
    items: "REST, GraphQL, Firebase, MySQL, MongoDB, LAMP",
  },
  {
    icon: Wrench,
    title: "DevOps & Tooling",
    items: "Git, CI/CD, AWS, Docker, Lighthouse",
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
              src="/DP.jpeg"
              alt="Muhammad Talha Waseem"
              width={180}
              height={200}
              className="relative rounded-2xl object-cover w-[150px] h-[180px] sm:w-[180px] sm:h-[200px] border border-white/10"
            />
          </div>
          <p>
            I&apos;m <strong className="text-white">Muhammad Talha Waseem</strong>,
            a Senior Full-Stack Engineer based in Islamabad with 5+ years
            delivering scalable, high-performance applications across web and
            mobile.
          </p>
          <p>
            I&apos;m an expert in{" "}
            <strong className="text-white">React, Next.js, Node.js</strong> and{" "}
            <strong className="text-white">Flutter</strong>, with hands-on{" "}
            <strong className="text-white">AI/LLM integration</strong> using
            LangChain, n8n, and the OpenAI &amp; AWS Bedrock APIs. I&apos;ve led
            full-stack teams, established engineering standards, and shipped
            complex products across Fintech, Healthcare, and Sustainability.
          </p>
          <p>
            At <strong className="text-white">Rayymen Technologies</strong> I
            lead a full-stack team of 5+ engineers, and over three years at{" "}
            <strong className="text-white">i-ways Sales Solutions</strong>{" "}
            (Berlin) I delivered 10+ production-grade Next.js apps and a SwiftUI
            iOS app across European markets. I care deeply about user-centric
            design and clean architecture — feel free to{" "}
            <Link
              href="https://linkedin.com/in/iammtw"
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
