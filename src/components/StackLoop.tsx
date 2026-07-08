"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const techStack = [
  { name: "React", src: "/tech/react.svg" },
  { name: "Next.js", src: "/tech/nextjs.svg" },
  { name: "TypeScript", src: "/tech/typescript.svg" },
  { name: "Node.js", src: "/tech/nodejs.svg" },
  { name: "JavaScript", src: "/tech/javascript.svg" },
  { name: "Tailwind", src: "/tech/tailwind.svg" },
  { name: "Firebase", src: "/tech/firebase.svg" },
  { name: "MongoDB", src: "/tech/mongodb.svg" },
];

const StackLoop = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-center text-xs uppercase tracking-[0.24em] text-slate-500 mb-4">
        My daily tech stack
      </p>
      <div className="relative overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#060814] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#060814] to-transparent" />
        <Marquee delay={2} speed={35} gradient={false}>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="mx-4 flex items-center gap-2.5 text-slate-400"
            >
              <Image
                src={tech.src}
                alt={tech.name}
                width={30}
                height={30}
                className="object-contain opacity-90"
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default StackLoop;
