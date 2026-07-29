"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const ROLES = [
  "Backend Engineer",
  "Spring Boot Developer",
  "Software Engineer",
  "Java Backend Developer",
];

const TECH = ["Java · Spring Boot", "Google Gemini AI", "Apache Kafka", "PostgreSQL · Docker"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through roles every 2.2 s
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden"
    >
      {/* Background orbs */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-3xl pointer-events-none"
      />
      {/* Extra centre glow */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-300/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 max-w-2xl"
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 text-xs font-semibold"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for Software Engineer & Backend Roles
        </motion.div>

        {/* Profile photo */}
        <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg ring-4 ring-indigo-200 dark:ring-indigo-800 select-none">
          <Image
            src="/me-min.jpeg"
            alt="Omkar Shetake"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Omkar Shetake
          </h1>

          {/* Rotating role */}
          <div className="h-8 sm:h-10 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400"
              >
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-500 tracking-wide">
            {TECH.join("  ·  ")}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-indigo-300/50 dark:hover:shadow-indigo-700/50 hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 hover:border-indigo-500 dark:hover:border-indigo-400 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold text-sm transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 text-slate-400 dark:text-slate-600 hover:text-indigo-500 transition-colors"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
