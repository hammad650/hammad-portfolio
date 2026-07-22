import { Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="py-20 px-2 sm:px-4">
      <div className="max-w-2xl mx-auto glass-strong rounded-3xl p-6 sm:p-10">
        <span className="section-eyebrow">— Contact</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Let&apos;s build <span className="gradient-text">something</span>
        </h2>
        <p className="mt-4 text-slate-400 leading-relaxed">
          Freelance gig, collaboration, or a full-time role — I&apos;m always
          excited to connect with people building meaningful things. Reach out
          and I&apos;ll get back to you soon.
        </p>

        <div className="mt-8 space-y-3">
          <a
            href="mailto:khanhammad1093@gmail.com"
            className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
          >
            <span className="flex-center size-9 rounded-lg glass">
              <Mail className="size-4 text-emerald-300" />
            </span>
            khanhammad1093@gmail.com
            <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <Link
            href="https://www.linkedin.com/in/hammad-zahid-357882209"
            target="_blank"
            className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
          >
            <span className="flex-center size-9 rounded-lg glass">
              <Linkedin className="size-4 text-emerald-300" />
            </span>
            linkedin.com/in/hammad-zahid-357882209
            <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <div className="flex items-center gap-3 text-slate-300">
            <span className="flex-center size-9 rounded-lg glass">
              <MapPin className="size-4 text-emerald-300" />
            </span>
            Lahore, Pakistan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
