"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import StackLoop from "./StackLoop";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <div>
      <section className="grid justify-center items-center text-center pt-32 pb-16">

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-6 flex justify-center"
        >
          <span className="chip !border-emerald-400/30 !bg-emerald-400/10 !text-emerald-300">
            <span className="mr-2 inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance &amp; full-time
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="font-extrabold md:leading-[1.05] leading-tight md:text-[64px] text-[34px] mt-6 tracking-tight text-white"
        >
          Hi, I&apos;m Muhammad Talha
          <br />
          Waseem —{" "}
          <span className="gradient-text">Senior Full-Stack Engineer</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="text-slate-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg md:px-0 px-2"
        >
          5+ years shipping scalable, high-performance products across web and
          mobile with React, Next.js, Node.js &amp; Flutter — plus hands-on
          AI/LLM integration across Fintech, Healthcare &amp; Sustainability.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center mt-8 gap-3 flex-wrap"
        >
          <Button className="rounded-full !bg-gradient-to-r !from-blue-500 !to-emerald-500 text-white !py-6 !px-7 text-base hover:opacity-90 transition-opacity !cursor-pointer">
            <a href="#contact" className="flex items-center gap-2">
              Hire Me <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button className="rounded-full glass !text-slate-200 !py-6 !px-7 text-base hover:!bg-white/10 transition-colors !cursor-pointer">
            <a
              href="/Talha-CV.pdf"
              download
              className="flex items-center gap-2"
            >
              Download CV <Download className="size-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-1.5 mt-6 text-sm text-slate-500"
        >
          <MapPin className="size-4" />
          Islamabad, Pakistan
        </motion.div>
      </section>

      <StackLoop />
    </div>
  );
};

export default Hero;
