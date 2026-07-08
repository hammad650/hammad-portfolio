import { Mail, Phone } from "lucide-react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-10 pb-12 px-2 sm:px-4">
      <div className="max-w-5xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-extrabold text-white tracking-wide">
            M<span className="gradient-text">T</span>W
          </p>
          <p className="text-sm text-slate-500 mt-1">
            © 2026 Muhammad Talha Waseem · Islamabad, Pakistan
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/iammtw"
            className="flex-center size-10 rounded-full glass text-slate-300 hover:text-white hover:border-emerald-400/40 transition-colors"
          >
            <FaLinkedin className="size-4" />
          </a>
          <a
            rel="noreferrer"
            href="mailto:muhammadtalhawaseem@gmail.com"
            className="flex-center size-10 rounded-full glass text-slate-300 hover:text-white hover:border-emerald-400/40 transition-colors"
          >
            <Mail className="size-4" />
          </a>
          <a
            rel="noreferrer"
            href="tel:+923485583125"
            className="flex-center size-10 rounded-full glass text-slate-300 hover:text-white hover:border-emerald-400/40 transition-colors"
          >
            <Phone className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
