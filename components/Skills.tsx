"use client";

import { motion, type Variants } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, ExternalLink, Code2, Server, Database, Radio, Terminal, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    icon: Code2,
    skills: ["Java (21)", "JavaScript", "SQL", "Python"],
  },
  {
    category: "Backend Frameworks",
    icon: Server,
    skills: [
      "Spring Boot 3",
      "REST APIs",
      "Spring Security (JWT)",
      "Spring Data JPA / Hibernate",
    ],
  },
  {
    category: "Databases & Cache",
    icon: Database,
    skills: ["PostgreSQL", "Redis", "pgvector"],
  },
  {
    category: "Messaging & Real-Time",
    icon: Radio,
    skills: ["Apache Kafka (KRaft)", "WebSocket", "STOMP", "SockJS"],
  },
  {
    category: "DevOps & Tools",
    icon: Terminal,
    skills: ["Docker Compose", "Maven", "Flyway", "Nginx", "Git", "GitHub"],
  },
  {
    category: "Core CS Fundamentals",
    icon: Cpu,
    skills: [
      "Object-Oriented Programming (OOP)",
      "SOLID Principles",
      "Data Structures & Algorithms",
      "DBMS & Indexing",
      "Operating Systems",
      "JUnit 5 + Mockito",
    ],
  },
];

const EXPERIENCE = [
  {
    type: "education",
    title: "B.Tech, Computer Science & Engineering",
    org: "DYPCET, Kolhapur",
    period: "2023 – 2027",
    tag: "CGPA: 8.3 · Final Year",
    description: "Focusing on enterprise backend systems, distributed architectures, scalable microservices, and practical generative AI integration.",
  },
  {
    type: "work",
    title: "Participant — Smart India Hackathon 2024 (SIH)",
    org: "Government of India",
    period: "2024",
    tag: "National Hackathon",
    description:
      "Collaborated in a team to solve a real-world problem statement, contributing to both frontend logic and backend services under a time-constrained hackathon environment.",
  },
  {
    type: "work",
    title: "Virtual Intern — Cloud & Networking Program",
    org: "Online Program (10 Weeks)",
    period: "2024",
    tag: "Cloud Simulation",
    description:
      "Explored cloud computing concepts, virtual networking architecture, and fundamentals of machine learning using simulation platforms and hands-on lab environments.",
  },
  {
    type: "education",
    title: "HSC (XII), Science",
    org: "AVK Junior College, Kasegaon",
    period: "2023",
    tag: "Percentage: 70.5%",
    description: "Completed higher secondary coursework with a focus on Mathematics, Physics, and Chemistry.",
  },
];

const CERTIFICATIONS = [
  {
    title: "AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services — Jan 2025",
    badge: "AWS Certified",
    url: "https://www.credly.com/badges/edd85307-fef8-40b9-9aed-d9ee908f8c01/linked_in_profile",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services — Jan 2025",
    badge: "AWS Certified",
    url: "https://www.credly.com/badges/b7977e2a-5fdb-4e0c-b185-d21673618a80/linked_in_profile",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    badge: "Microsoft Certified",
    url: "https://www.linkedin.com/learning/certificates/76534693e71065d26c18ca0e055794676b03aefff47038fa65ab9432dca9b0f2",
  },
  {
    title: "Google Cloud Skill Boost",
    issuer: "Google Cloud",
    badge: "Google Cloud",
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
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-2">
            Technical Arsenal
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Skills &amp; Background
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-6">
            Core strengths focused on Java backend development, system design, scalable data stores, and event-driven architectures.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-violet-500/25 active:scale-95"
          >
            <Download size={15} />
            <span>Download Full Resume (PDF)</span>
          </a>
        </motion.div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/80 dark:border-slate-700/70 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-3.5">
                <div className="w-7 h-7 rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                  <cat.icon size={15} />
                </div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
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
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Education &amp; Experience
          </h3>
        </motion.div>

        <div className="relative mb-20 max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-0.5 bg-violet-100 dark:bg-violet-950/80" />
          <div className="flex flex-col gap-7">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative pl-14 sm:pl-16"
              >
                {/* Node icon */}
                <div className="absolute left-0 top-1 w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-white dark:bg-slate-800 border-2 border-violet-500/40 dark:border-violet-500 flex items-center justify-center text-violet-600 dark:text-violet-400 shadow-xs">
                  {item.type === "work" ? (
                    <Briefcase size={17} />
                  ) : (
                    <GraduationCap size={17} />
                  )}
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/80 dark:border-slate-700/70 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-violet-600 dark:text-violet-400 font-medium">
                        {item.org}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/60 px-2 py-0.5 rounded-full whitespace-nowrap">
                        {item.period}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-2">
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
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Verified Certifications
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Credentials certified by AWS, Microsoft, and Google Cloud
            </p>
          </div>

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
                className="flex items-start justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800/80 shadow-xs border border-slate-200/80 dark:border-slate-700/70 hover:border-violet-400 dark:hover:border-violet-500 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3.5">
                  <div className="shrink-0 mt-0.5 w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-950/60 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:scale-105 transition-transform">
                    <Award size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                      {cert.badge}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-snug mt-0.5">
                      {cert.title}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 p-1.5 rounded-lg text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:bg-slate-100 dark:group-hover:bg-slate-700/50 transition-colors">
                  <ExternalLink size={15} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
