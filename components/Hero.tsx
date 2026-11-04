"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ROLES = [
  "Java Backend Engineer",
  "Spring Boot & Microservices Developer",
  "Event-Driven Architect (Kafka)",
  "AI Systems Integrator (Gemini AI)",
  "Production REST API Builder",
];

const TECH_STACK = [
  { label: "Java 21", category: "Core" },
  { label: "Spring Boot 3", category: "Framework" },
  { label: "Apache Kafka KRaft", category: "Messaging" },
  { label: "PostgreSQL & Docker", category: "Infra" },
  { label: "Gemini AI", category: "AI" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through roles smoothly every 2.4 s
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center overflow-hidden"
    >
      {/* Refined modern top spotlight lighting */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-b from-violet-500/10 via-violet-500/5 to-transparent blur-3xl pointer-events-none rounded-full"
      />
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-radial from-violet-600/8 to-transparent blur-2xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex flex-col items-center gap-7 max-w-3xl z-10"
      >
        {/* Availability Badge — Senior style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.35 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium shadow-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>Available for Java Developer &amp; SWE Roles (2025–2027)</span>
        </motion.div>

        {/* Profile Avatar — Sleek concentric design */}
        <div className="relative group select-none">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 ring-1 ring-zinc-200 dark:ring-zinc-800 bg-white dark:bg-zinc-900 shadow-xl group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full rounded-full overflow-hidden border border-zinc-200/80 dark:border-zinc-700/80">
              <Image
                src="/me-min.jpeg"
                alt="Omkar Shetake"
                width={144}
                height={144}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          {/* Micro Status Chip */}
          <span className="absolute -bottom-1 -right-2 px-2.5 py-0.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono font-medium shadow-md flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            Java 21 · Spring Boot
          </span>
        </div>

        {/* Headline & Rotating Role */}
        <div className="space-y-3.5 max-w-2xl">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-violet-600 dark:text-violet-400 font-semibold">
            Software Engineer · Backend Systems
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Omkar Shetake
          </h1>

          {/* Rotating Role with clean typography */}
          <div className="h-8 sm:h-10 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="text-lg sm:text-2xl font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
              >
                <Sparkles size={18} className="text-violet-500" />
                <span>{ROLES[roleIndex]}</span>
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Final-year B.Tech CSE student (8.3 CGPA) architecting high-throughput, event-driven backends with Java 21, Spring Boot 3, Apache Kafka KRaft, and PostgreSQL.
          </p>

          {/* Tech Stack Chips — Monospace & Clean */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.label}
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 transition-colors"
              >
                <span className="w-1 h-1 rounded-full bg-violet-500" />
                <span>{tech.label}</span>
              </span>
            ))}
          </div>
        </div>

        {/* High-Contrast Senior CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          {/* Primary Action — Stripe/Vercel standard */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white font-semibold text-sm transition-all shadow-sm active:scale-95"
          >
            <span>View Architecture</span>
            <ArrowRight size={15} />
          </a>

          {/* Secondary Action */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-850 border border-zinc-200 dark:border-zinc-800 font-semibold text-sm transition-all shadow-xs active:scale-95"
          >
            <FileText size={15} />
            <span>Download Resume</span>
          </a>

          {/* Tertiary Action */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/80 dark:hover:bg-zinc-850 font-semibold text-sm transition-all active:scale-95"
          >
            <span>Send Message</span>
          </a>
        </div>

        {/* Clean Profiles Bar */}
        <div className="flex items-center gap-3 pt-1 text-zinc-500 dark:text-zinc-400">
          <span className="text-xs font-mono mr-0.5">Profiles:</span>
          <a
            href="https://github.com/OmkarShetake"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/omkar-shetake-53356b285/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <LinkedinIcon />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-12 text-zinc-400 dark:text-zinc-600 hover:text-violet-500 transition-colors"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
