"use client";

import React from "react";
import { projects } from "../../_data/data";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="projects" className="py-16 px-2 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow"
        >
          — Work
        </motion.span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl">
          Production products I&apos;ve built and shipped across European and
          global markets.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
            >
              <Link href={`/project/${data.slug}`} className="group block h-full">
                <div className="glass card-hover rounded-3xl p-4 h-full flex flex-col">
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={`/img/${data.img}`}
                      alt={data.name}
                      width={1200}
                      height={750}
                      className="w-full object-cover aspect-[16/10] transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="p-3 flex flex-col flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {data.name}
                      </h3>
                      <span className="flex-center size-8 rounded-full glass text-slate-300 transition-all group-hover:bg-gradient-to-tr group-hover:from-violet-600 group-hover:to-violet-400 group-hover:text-white">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 line-clamp-2 mt-2 h-10 shrink-0">
                      {data.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {data.lang.slice(0, 4).map((tech) => (
                        <span key={tech} className="chip !text-[11px] !px-2.5">
                          {tech}
                        </span>
                      ))}
                      {data.lang.length > 4 && (
                        <span className="chip !text-[11px] !px-2.5 !text-slate-500">
                          +{data.lang.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
