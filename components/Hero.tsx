"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, FileText, ArrowRight, Mail } from "lucide-react";
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

const TECH = [
  "Java 21 · Spring Boot 3",
  "Apache Kafka",
  "Google Gemini AI & pgvector",
  "PostgreSQL · Docker",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through roles smoothly every 2.4 s
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2400
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 text-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 max-w-3xl z-10"
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-semibold shadow-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for Java Developer &amp; SWE Roles (2025/2026/2027)
        </motion.div>

        {/* Profile photo with subtle gradient aura */}
        <div className="relative group select-none">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 shadow-xl group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-2 border-white dark:border-slate-900">
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
          {/* Micro Stack Badge */}
          <span className="absolute -bottom-1 -right-2 px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[11px] font-mono font-medium shadow-md flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            ☕ Java 21 · Spring Boot 3
          </span>
        </div>

        {/* Headline & Rotating Role */}
        <div className="space-y-3 max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-cyan-400">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Omkar Shetake
          </h1>

          {/* Rotating Role with AnimatePresence */}
          <div className="h-9 sm:h-11 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent"
              >
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
            B.Tech CSE student building production-grade, AI-integrated backend systems with Spring Boot, event-driven Kafka messaging, and PostgreSQL.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {TECH.map((item) => (
              <span
                key={item}
                className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Recruiter-Focused Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-indigo-500/25 active:scale-95"
          >
            <span>View Projects</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm transition-all shadow-md active:scale-95"
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-sm transition-all active:scale-95"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Quick Social Links Bar */}
        <div className="flex items-center gap-3 pt-2 text-slate-500 dark:text-slate-400">
          <span className="text-xs font-medium mr-1">Connect:</span>
          <a
            href="https://github.com/OmkarShetake"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/omkar-shetake-53356b285/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:omkarshetake4655@gmail.com"
            aria-label="Send Email"
            className="p-2 rounded-lg hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-12 text-slate-400 dark:text-slate-600 hover:text-indigo-500 transition-colors"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
