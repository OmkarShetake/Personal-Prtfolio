"use client";

import { motion, type Variants } from "framer-motion";
import { Lightbulb, Layers, Rocket, GraduationCap, MapPin, Coffee } from "lucide-react";
import { useState } from "react";

// ── Tabs ──────────────────────────────────────────────────────────────────────
const TABS = [
  {
    id: "bio",
    label: "Bio",
    content: (
      <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        <p>
          I&apos;m a <span className="font-semibold text-indigo-600 dark:text-indigo-400">final-year B.Tech CS student</span> at
          DYPCET, Kolhapur with a CGPA of <span className="font-semibold text-slate-800 dark:text-slate-200">8.3</span>, passionate
          about building production-grade, AI-integrated backend systems.
        </p>
        <p>
          I&apos;ve shipped two full-stack projects —{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">StayFinder</span> and{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">MedChain</span> — both integrating
          Google Gemini AI, Apache Kafka, WebSockets, Docker, and PostgreSQL.
        </p>
        <p>
          I&apos;m actively seeking a{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Software Engineer role</span> where I
          can contribute to scalable, intelligent backend systems and keep growing as an engineer.
        </p>
      </div>
    ),
  },
  {
    id: "facts",
    label: "Quick Facts",
    content: (
      <ul className="space-y-3">
        {[
          { icon: GraduationCap, text: "B.Tech CSE — DYPCET, Kolhapur (2023–2027)" },
          { icon: MapPin,        text: "Kolhapur, Maharashtra, India" },
          { icon: Layers,        text: "Speciality: Backend · AI Integration · Event-Driven Systems" },
          { icon: Coffee,        text: "Stack: Java · Spring Boot · Kafka · Gemini AI · PostgreSQL" },
          { icon: Rocket,        text: "19 unit tests written · 38 REST endpoints shipped" },
        ].map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
            <span className="shrink-0 mt-0.5 w-6 h-6 rounded-md bg-indigo-50 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Icon size={13} />
            </span>
            {text}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "goals",
    label: "Goals",
    content: (
      <div className="space-y-3">
        {[
          { emoji: "🎯", title: "Short-term",  desc: "Land a full-time Software Engineer role and contribute to a real-world backend system at scale." },
          { emoji: "⚡", title: "Mid-term",    desc: "Deepen expertise in distributed systems, cloud-native architecture (AWS/GCP), and ML-powered APIs." },
          { emoji: "🚀", title: "Long-term",   desc: "Build or contribute to products that solve meaningful problems — especially at the intersection of AI and social impact." },
        ].map((g) => (
          <div key={g.title} className="flex gap-3 p-3 rounded-lg bg-indigo-50/60 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
            <span className="text-lg">{g.emoji}</span>
            <div>
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-0.5">{g.title}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{g.desc}</p>
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
    color: "from-indigo-500 to-blue-500",
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
    border: "border-indigo-100 dark:border-indigo-800",
    glow: "hover:shadow-indigo-200/60 dark:hover:shadow-indigo-900/60",
  },
  {
    icon: Lightbulb,
    title: "AI Integration",
    description: "Gemini AI, Spring AI, pgvector embeddings, NLP in production apps.",
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50 dark:bg-violet-900/30",
    border: "border-violet-100 dark:border-violet-800",
    glow: "hover:shadow-violet-200/60 dark:hover:shadow-violet-900/60",
  },
  {
    icon: Rocket,
    title: "Ship & Learn Fast",
    description: "Two solo full-stack projects applying OOP, SOLID, design patterns.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50 dark:bg-pink-900/30",
    border: "border-pink-100 dark:border-pink-800",
    glow: "hover:shadow-pink-200/60 dark:hover:shadow-pink-900/60",
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
    <section id="about" className="py-24 px-4 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
        </motion.div>

        {/* ── Top: Tabbed bio (full width) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          {/* Tab buttons */}
          <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-700/50 rounded-xl mb-6 w-fit">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content with fade */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="min-h-[160px]"
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
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative flex flex-col gap-4 p-6 rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 cursor-default ${item.bg} ${item.border} ${item.glow}`}
            >
              {/* Gradient icon */}
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}>
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Subtle corner decoration */}
              <div className={`absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} opacity-5`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
