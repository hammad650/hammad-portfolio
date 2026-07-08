"use client";

import React from "react";
import { contributions } from "../../_data/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Contributions = () => {
  return (
    <div id="contributions" className="py-16 px-2 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <span className="section-eyebrow">— More</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Other <span className="gradient-text">Contributions</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl">
          Smaller apps, experiments, and published side projects across web,
          mobile, and AI.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contributions.map((c, index) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
              className="glass card-hover rounded-2xl p-5 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="flex-center size-9 rounded-lg bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 border border-white/10">
                  <Sparkles className="size-4 text-emerald-300" />
                </span>
                {c.linkLabel && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                    {c.linkLabel} <ArrowUpRight className="size-3" />
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-bold text-white leading-snug">
                {c.name}
              </h3>
              <p className="text-xs uppercase tracking-wider text-emerald-300/80 mt-1">
                {c.category}
              </p>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed flex-grow">
                {c.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {c.lang.map((tech) => (
                  <span key={tech} className="chip !text-[11px] !px-2.5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contributions;
