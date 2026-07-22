import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

const Navbar = () => {
  return (
    <header className="py-4">
      <nav className="max-w-[640px] mx-auto glass-strong flex flex-wrap justify-between items-center py-2 pl-4 pr-2 rounded-full shadow-lg fixed left-4 right-4 sm:left-0 sm:right-0 z-50">
        <div>
          <Link
            href="/"
            className="text-white font-extrabold tracking-wide px-2 text-lg"
          >
            H<span className="gradient-text">Z</span>
          </Link>
        </div>

        <div>
          <ul className="flex-center flex-wrap text-slate-300">
            <li>
              <Button variant="link" className="!text-slate-300 hover:!text-white">
                <Link href="/#">Home</Link>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link" className="!text-slate-300 hover:!text-white">
                <Link href="/#projects">Projects</Link>
              </Button>
            </li>
            <li className="sm:block hidden">
              <Button variant="link" className="!text-slate-300 hover:!text-white">
                <Link href="/#experience">Experience</Link>
              </Button>
            </li>
          </ul>
        </div>

        <div className="flex-between gap-2 flex-wrap">
          <HoverCard>
            <HoverCardTrigger>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/hammad-zahid-357882209"
              >
                <FaLinkedin className="size-5 text-slate-300 hover:text-white cursor-pointer mr-1 transition-colors" />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent>LinkedIn</HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <a
                download
                target="_blank"
                rel="noopener noreferrer"
                href="/Hammad-Zahid-CV.pdf"
              >
                <IoDocumentTextOutline className="size-5 text-slate-300 hover:text-white cursor-pointer transition-colors" />
              </a>
            </HoverCardTrigger>
            <HoverCardContent>Resume</HoverCardContent>
          </HoverCard>

          <div>
            <Button className="ml-1 rounded-full !bg-gradient-to-r !from-blue-500 !to-emerald-500 text-white hover:opacity-90 transition-opacity">
              <Link href="/#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
