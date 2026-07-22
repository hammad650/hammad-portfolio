"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Mail, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent 💜!");
      setForm({ name: "", email: "", message: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }

  const inputClass =
    "w-full rounded-xl bg-white/5 border border-white/10 py-3.5 px-4 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/10 transition";

  return (
    <div id="contact" className="py-20 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto glass-strong rounded-3xl p-6 sm:p-10 grid md:grid-cols-2 gap-8">
        <div>
          <span className="section-eyebrow">— Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let&apos;s build <span className="gradient-text">something</span>
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Freelance gig, collaboration, or a full-time role — I&apos;m always
            excited to connect with people building meaningful things. Drop a
            message and I&apos;ll get back to you soon.
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

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            required
          />
          <textarea
            placeholder="Hi Hammad, are you available for..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} h-36 resize-none`}
            required
          />
          <Button
            className="rounded-xl !bg-gradient-to-r !from-blue-500 !to-emerald-500 text-white !py-6 text-base hover:opacity-90 transition-opacity !cursor-pointer disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
