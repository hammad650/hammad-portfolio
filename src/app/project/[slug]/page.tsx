import React from "react";
import { projects } from "../../../../_data/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="py-3 px-1 sm:px-2 max-w-4xl mx-auto">
      <div className="mt-28">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="size-4" /> Back to projects
        </Link>

        <div className="mt-6">
          <h1 className="font-extrabold text-[32px] sm:text-[44px] leading-tight tracking-tight text-white">
            {project.name}
            {project.work && (
              <span className="ml-3 align-middle chip !text-blue-300 !border-blue-400/30 !bg-blue-400/10">
                {project.work}
              </span>
            )}
          </h1>
          <p className="text-slate-400 text-lg mt-3">{project.show}</p>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 glow-ring">
          <Image
            src={`/img/${project.img}`}
            alt={project.name}
            width={1200}
            height={750}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.link && (
            <Link target="_blank" href={project.link}>
              <Button className="rounded-full !bg-gradient-to-r !from-blue-500 !to-emerald-500 text-white !py-6 !px-6 hover:opacity-90 transition-opacity !cursor-pointer">
                Visit Live Site <ExternalLink className="size-4" />
              </Button>
            </Link>
          )}
          {project.git && (
            <Link target="_blank" href={project.git}>
              <Button className="rounded-full glass !text-slate-200 !py-6 !px-6 hover:!bg-white/10 !cursor-pointer">
                GitHub <FiGithub />
              </Button>
            </Link>
          )}
        </div>

        <div className="mt-8 glass-strong rounded-3xl p-6 sm:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Overview
          </h2>
          <p className="text-slate-300 mt-3 leading-relaxed">{project.desc}</p>

          <hr className="my-8 border-white/10" />

          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Tech Stack
          </h2>
          <ul className="flex flex-wrap gap-2 mt-4">
            {project.lang.map((tech) => (
              <li key={tech}>
                <span className="chip !text-emerald-200 !border-emerald-400/25 !bg-emerald-400/10">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
