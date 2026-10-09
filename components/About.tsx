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
      <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>
          I&apos;m a <span className="font-semibold text-indigo-600 dark:text-indigo-400">final-year B.Tech CS student</span> at{" "}
          <span className="font-semibold text-slate-900 dark:text-slate-200">DYPCET, Kolhapur</span> with a CGPA of{" "}
          <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold text-xs border border-indigo-200 dark:border-indigo-800">8.3</span>,
          passionate about building production-grade, AI-integrated backend systems.
        </p>
        <p>
          I&apos;ve shipped two full-stack projects —{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">StayFinder</span> and{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">MedChain</span> — both integrating
          Google Gemini AI, Apache Kafka, WebSockets, Docker, and PostgreSQL.
        </p>
        <p>
          I&apos;m actively seeking a{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Java Developer / Backend SWE role</span> where I
          can contribute to scalable, resilient backend systems, write clean and tested code, and keep growing as an engineer.
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
          { icon: MapPin,        text: "Kolhapur, Maharashtra, India" },
          { icon: Layers,        text: "Speciality: Backend · AI Integration · Event-Driven Systems" },
          { icon: Coffee,        text: "Stack: Java · Spring Boot · Kafka · Gemini AI · PostgreSQL" },
          { icon: Rocket,        text: "19 unit tests written · 38 REST endpoints shipped" },
        ].map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <span className="shrink-0 mt-0.5 w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-950/70 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
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
          { emoji: "🎯", title: "Short-term",  desc: "Land a full-time Java Developer role and contribute to a real-world backend system at scale." },
          { emoji: "⚡", title: "Mid-term",    desc: "Deepen expertise in distributed systems, cloud-native architecture (AWS/GCP), and ML-powered APIs." },
          { emoji: "🚀", title: "Long-term",   desc: "Build or contribute to products that solve meaningful problems — especially at the intersection of AI and social impact." },
        ].map((g) => (
          <div key={g.title} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 shadow-xs">
            <span className="text-xl shrink-0 mt-0.5">{g.emoji}</span>
            <div>
              <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-0.5">{g.title}</p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{g.desc}</p>
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
    title: "Backend & Systems",
    description: "Spring Boot, Kafka, REST APIs, JWT security, Docker deployments.",
    bullets: ["Event-driven architectures", "Clean REST API design", "Docker containerization"],
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50/70 dark:bg-indigo-950/30",
    border: "border-indigo-100 dark:border-indigo-900/60",
    glow: "hover:shadow-indigo-200/50 dark:hover:shadow-indigo-900/40",
  },
  {
    icon: Lightbulb,
    title: "AI & Vector Search",
    description: "Gemini AI, Spring AI, pgvector embeddings, NLP in production apps.",
    bullets: ["Multimodal Gemini Flash", "Semantic vector retrieval", "Intelligent summarization"],
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50/70 dark:bg-violet-950/30",
    border: "border-violet-100 dark:border-violet-900/60",
    glow: "hover:shadow-violet-200/50 dark:hover:shadow-violet-900/40",
  },
  {
    icon: Rocket,
    title: "Ship & Learn Fast",
    description: "Two solo full-stack projects applying OOP, SOLID, design patterns.",
    bullets: ["Rigorous JUnit 5 testing", "SOLID & OOP principles", "Rapid full-stack execution"],
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50/70 dark:bg-pink-950/30",
    border: "border-pink-100 dark:border-pink-900/60",
    glow: "hover:shadow-pink-200/50 dark:hover:shadow-pink-900/40",
  },
];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function About() {
  const [activeTab, setActiveTab] = useState("bio");

  return (
    <section id="about" className="py-24 px-4 bg-slate-50/70 dark:bg-slate-900/60">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        {/* ── Top: Tabbed bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 shadow-xs"
        >
          {/* Segmented Tab buttons */}
          <div className="flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-700/60 rounded-xl mb-6 w-fit">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content with fade */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
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
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`relative flex flex-col justify-between p-6 rounded-2xl border shadow-xs hover:shadow-xl transition-all duration-300 cursor-default ${item.bg} ${item.border} ${item.glow}`}
            >
              <div>
                {/* Gradient icon */}
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md mb-4`}>
                  <item.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Micro bullet badges */}
              <ul className="space-y-1.5 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
                    <CheckCircle2 size={13} className="text-indigo-500 dark:text-indigo-400 shrink-0" />
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
