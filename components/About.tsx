"use client";

import { motion, type Variants } from "framer-motion";
import { Lightbulb, Layers, Rocket, GraduationCap, MapPin, Coffee, CheckCircle2 } from "lucide-react";
import { useState } from "react";

// ── Tabs ──────────────────────────────────────────────────────────────────────
const TABS = [
  {
    id: "bio",
    label: "Background",
    content: (
      <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <p>
          I&apos;m a <span className="font-semibold text-zinc-900 dark:text-zinc-100">final-year B.Tech CS student</span> at{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">DYPCET, Kolhapur</span> with a CGPA of{" "}
          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-mono font-bold text-xs border border-zinc-200 dark:border-zinc-700">8.3</span>,
          focused on building production-grade, AI-integrated backend systems.
        </p>
        <p>
          I&apos;ve shipped a production-grade full-stack project &mdash;{" "}
          <span className="font-semibold text-zinc-900 dark:text-zinc-100">StayFinder</span> &mdash; integrating
          Google Gemini AI, Apache Kafka (KRaft), WebSockets, Docker, and PostgreSQL into a scalable event-driven system.
        </p>
        <p>
          I&apos;m actively seeking a{" "}
          <span className="font-semibold text-violet-600 dark:text-violet-400">Java Developer / Backend Software Engineer role</span> where I
          can contribute to scalable, resilient backend systems, write clean and tested code, and continuously grow as an engineer.
        </p>
      </div>
    ),
  },
  {
    id: "facts",
    label: "Quick Facts",
    content: (
      <ul className="grid sm:grid-cols-2 gap-3.5">
        {[
          { icon: GraduationCap, text: "B.Tech CSE — DYPCET, Kolhapur (2023–2027)" },
          { icon: MapPin,        text: "Kolhapur, Maharashtra, India (Open to Relocation)" },
          { icon: Layers,        text: "Speciality: Backend · AI Integration · Event-Driven Systems" },
          { icon: Coffee,        text: "Stack: Java 21 · Spring Boot 3 · Kafka · Gemini AI · PostgreSQL" },
          { icon: Rocket,        text: "19 unit tests written (JUnit 5 + Mockito) · Docker Compose stack" },
        ].map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50/70 dark:bg-zinc-850/60 border border-zinc-200/70 dark:border-zinc-700/60 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
            <span className="shrink-0 mt-0.5 w-6 h-6 rounded-md bg-zinc-200/80 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
              <Icon size={14} />
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "goals",
    label: "Career Goals",
    content: (
      <div className="space-y-3">
        {[
          { emoji: "🎯", title: "Short-term",  desc: "Join a high-performing backend engineering team as a Java Developer and contribute to production services at scale." },
          { emoji: "⚡", title: "Mid-term",    desc: "Deepen expertise in distributed consensus, cloud-native architecture (AWS/GCP), and AI-augmented backend workflows." },
          { emoji: "🚀", title: "Long-term",   desc: "Architect resilient, high-throughput systems that solve real-world problems with high reliability and low latency." },
        ].map((g) => (
          <div key={g.title} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-50/70 dark:bg-zinc-850/60 border border-zinc-200/70 dark:border-zinc-700/60 shadow-xs">
            <span className="text-xl shrink-0 mt-0.5">{g.emoji}</span>
            <div>
              <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide mb-0.5">{g.title}</p>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

// ── Strengths ─────────────────────────────────────────────────────────────────
const STRENGTHS = [
  {
    icon: Layers,
    title: "Backend & Distributed Systems",
    description: "Spring Boot 3, Kafka KRaft, clean REST APIs, stateless JWT security, and Docker Compose orchestration.",
    bullets: ["Event-driven architectures", "Decoupled async message queues", "Docker containerization"],
  },
  {
    icon: Lightbulb,
    title: "Generative AI Integration",
    description: "Google Gemini AI, automated natural language generation, semantic search, and prompt engineering in backend services.",
    bullets: ["Gemini AI API integration", "Dynamic description generation", "Intelligent data parsing"],
  },
  {
    icon: Rocket,
    title: "Engineering Rigor & Quality",
    description: "Applying OOP, SOLID principles, clean architecture patterns, and comprehensive JUnit 5 + Mockito unit tests.",
    bullets: ["Rigorous unit testing (JUnit 5)", "SOLID & design patterns", "Production code quality"],
  },
];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: "easeOut" as const },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function About() {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <section id="about" className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-mono font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2">
            Professional Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100">
            About Me
          </h2>
        </motion.div>

        {/* ── Top: Tabbed bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
        >
          {/* Segmented Tab buttons */}
          <div className="flex gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-6 w-fit">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-xs"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content with fade */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="min-h-[140px]"
          >
            {TABS.find((t) => t.id === activeTab)?.content}
          </motion.div>
        </motion.div>

        {/* ── Bottom: Strength cards ── */}
        <div className="grid sm:grid-cols-3 gap-5">
          {STRENGTHS.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.18 } }}
              className="relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all cursor-default"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center shadow-xs mb-4">
                  <item.icon size={18} />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Micro bullet badges */}
              <ul className="space-y-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
