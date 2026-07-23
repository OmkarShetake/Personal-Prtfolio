"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Backend Frameworks",
    skills: [
      "Spring Boot 3",
      "Spring AI",
      "Spring Security (JWT)",
      "Spring WebSocket",
      "Spring Cloud Gateway",
      "Spring Data JPA / Hibernate",
    ],
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "Vanilla JS", "Leaflet.js", "Chart.js", "SockJS", "STOMP.js"],
  },
  {
    category: "Databases & Cache",
    skills: ["PostgreSQL 16", "pgvector", "Redis 7"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Docker Compose", "Maven", "Flyway", "Nginx", "Git", "GitHub", "Swagger / OpenAPI", "ZXing"],
  },
  {
    category: "Architecture & AI",
    skills: [
      "Apache Kafka (KRaft)",
      "Event-Driven Architecture",
      "REST APIs",
      "WebSocket / STOMP",
      "Google Gemini AI (Multimodal)",
      "Spring AI",
      "pgvector Embeddings",
      "System Design",
    ],
  },
  {
    category: "Core Concepts",
    skills: ["OOP", "SOLID Principles", "Design Patterns", "DSA", "Unit Testing (JUnit 5 + Mockito)"],
  },
  {
    category: "Cloud & Platforms",
    skills: ["AWS Cloud Architecting", "AWS Cloud Foundations", "Cloudinary", "Gmail SMTP"],
  },
];

const EXPERIENCE = [
  {
    type: "education",
    title: "B.Tech, Computer Science & Engineering",
    org: "DYPCET, Kolhapur",
    period: "2023 – 2027",
    description: "CGPA: 8.5 — Final year student. Focused on backend systems, distributed architecture, and AI integration.",
  },
  {
    type: "work",
    title: "Participant — Smart India Hackathon 2024 (SIH)",
    org: "Government of India",
    period: "2024",
    description:
      "Collaborated in a team to solve a real-world problem statement, contributing to both frontend (HTML, CSS, JS) and backend (Python) logic under a time-constrained hackathon environment.",
  },
  {
    type: "work",
    title: "Virtual Intern — Cloud & Networking Program (10 Weeks)",
    org: "Online Program",
    period: "2024",
    description:
      "Explored cloud computing concepts, virtual networking, and fundamentals of machine learning using online simulation platforms and lab environments.",
  },
  {
    type: "education",
    title: "HSC (XII), Science",
    org: "AVK Junior College, Kasegaon",
    period: "2023",
    description: "Percentage: 70.5%",
  },
];

const CERTIFICATIONS = [
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services — Jan 2025",
    url: "https://www.credly.com/badges/edd85307-fef8-40b9-9aed-d9ee908f8c01/linked_in_profile",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services — Jan 2025",
    url: "https://www.credly.com/badges/b7977e2a-5fdb-4e0c-b185-d21673618a80/linked_in_profile",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/76534693e71065d26c18ca0e055794676b03aefff47038fa65ab9432dca9b0f2",
  },
  {
    title: "Google Cloud Skill Boost",
    issuer: "Google Cloud",
    url: "https://www.credly.com/badges/3de4e2de-f24a-4591-8616-a48566de6eb7/public_url",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: "easeOut" as const },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
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
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Background
          </h2>
          {/*
            Resume download:
            - Option A (recommended): drop your PDF into /public/resume.pdf
              and this button will download it automatically.
            - Option B: replace the href with a Google Drive / OneDrive
              direct-download link if you prefer hosting it externally.
          */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors shadow"
          >
            <Download size={16} />
            View Resume
          </a>
        </motion.div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700"
            >
              <h3 className="text-xs font-semibold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 mb-3">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education & Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Education & Experience
          </h3>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border-2 border-indigo-200 dark:border-indigo-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  {item.type === "work" ? (
                    <Briefcase size={16} />
                  ) : (
                    <GraduationCap size={16} />
                  )}
                </div>
                <div className="p-5 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                        {item.org}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all group"
              >
                <div className="shrink-0 mt-0.5 w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/70 transition-colors">
                  <Award size={14} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {cert.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
