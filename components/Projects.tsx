"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, X, Cpu, GitFork, Lightbulb, Workflow } from "lucide-react";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const PROJECTS = [
  {
    title: "StayFinder",
    label: "Full-Stack · Event-Driven · AI",
    badge: "Production Distributed Architecture",
    summary: "Production-grade AI-powered Airbnb-inspired rental platform with event-driven notifications and real-time messaging.",
    architectureFlow: "STOMP WebSockets → Spring Boot 3 Gateway → Kafka KRaft Queue → PostgreSQL & Docker",
    decision: {
      question: "Why Event-Driven Kafka KRaft?",
      answer: "Decoupled asynchronous message queues isolate peak booking spikes from instant push notifications, preventing database locks and guaranteeing strictly ordered message delivery.",
    },
    images: [
      "/projects/Stayfinder/1777714953106.jpg",
      "/projects/Stayfinder/1777714953565.jpg",
      "/projects/Stayfinder/1777714954172.jpg",
      "/projects/Stayfinder/1777714955088.jpg",
    ],
    metrics: [
      { label: "Messaging", value: "Kafka KRaft" },
      { label: "Unit Tests", value: "19 (JUnit 5 + Mockito)" },
      { label: "Real-Time", value: "WebSocket STOMP" },
    ],
    highlights: [
      "Google Gemini AI for smart description generation, dynamic pricing recommendations & natural language search",
      "Apache Kafka (KRaft mode) for decoupled, fully asynchronous and ordered notification delivery",
      "Real-time bidirectional host-guest chat & push alerts via WebSocket (STOMP + SockJS)",
      "Stateless JWT security with RBAC (GUEST / HOST / ADMIN), BCrypt password hashing, and XSS sanitisation",
      "19 comprehensive unit tests (JUnit 5 + Mockito) with complete containerized Docker Compose stack",
    ],
    tags: ["Java 21", "Spring Boot 3", "Gemini AI", "Kafka KRaft", "PostgreSQL", "WebSocket", "Cloudinary", "Docker Compose"],
    githubUrl: "https://github.com/OmkarShetake/StayFinderProject",
    liveUrl: "",
  },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  images, index, onClose, onPrev, onNext,
}: {
  images: string[]; index: number;
  onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close image preview"
        className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous screenshot"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Image Preview */}
      <motion.div
        key={index}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="relative max-h-[85vh] max-w-[90vw] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`Screenshot preview ${index + 1}`}
          width={1100}
          height={700}
          className="rounded-xl object-contain max-h-[82vh] w-auto shadow-2xl border border-white/10"
          style={{ maxWidth: "88vw" }}
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-mono bg-black/70 border border-white/10 text-white backdrop-blur-sm">
          {index + 1} / {images.length}
        </div>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next screenshot"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <p className="absolute bottom-4 text-xs text-white/40 hidden sm:block">
        Use Arrow Keys (← / →) or click outside to dismiss
      </p>
    </motion.div>
  );
}

// ── Image gallery with thumbnails ─────────────────────────────────────────────
function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive]       = useState(0);
  const [lightbox, setLightbox]   = useState(false);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setActive(next);
  }, []);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    go((active - 1 + images.length) % images.length, -1);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    go((active + 1) % images.length, 1);
  };

  const slideVariants = {
    enter:  (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  return (
    <>
      {/* Main preview */}
      <div
        className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 cursor-zoom-in group/img shadow-sm"
        onClick={() => setLightbox(true)}
        title="Click to view full size"
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            <Image
              src={images[active]}
              alt={`${title} screenshot ${active + 1}`}
              width={800}
              height={500}
              className="w-full h-auto object-contain rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Zoom badge */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none bg-black/25 backdrop-blur-[2px]">
          <span className="px-3.5 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-medium shadow-lg border border-white/20">
            🔍 Click to enlarge
          </span>
        </div>

        {/* Carousel buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white shadow-md transition-all z-10 hover:scale-105"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white shadow-md transition-all z-10 hover:scale-105"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-none">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i, i > active ? 1 : -1)}
              className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-indigo-600 dark:border-indigo-400 scale-105 shadow-sm"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`View screenshot ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                width={80}
                height={52}
                className="object-cover w-20 h-13"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={images}
            index={active}
            onClose={() => setLightbox(false)}
            onPrev={() => go((active - 1 + images.length) % images.length, -1)}
            onNext={() => go((active + 1) % images.length, 1)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
            Production &amp; Engineering Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Architected with modern Java, enterprise Spring Boot, event-driven messaging, and integrated generative AI capabilities.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">

                {/* LEFT: Project Architecture & Details */}
                <div className="p-7 sm:p-9 lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/60">
                        {project.label}
                      </span>
                      <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700/50">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                      {project.summary}
                    </p>

                    {/* System Topology Pipeline Flow */}
                    <div className="flex items-center gap-2 p-2.5 px-3 rounded-xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-700/80 mb-5 overflow-x-auto scrollbar-none">
                      <Workflow size={14} className="text-cyan-500 shrink-0" />
                      <span className="text-[11px] font-mono text-slate-700 dark:text-cyan-300 whitespace-nowrap">
                        {project.architectureFlow}
                      </span>
                    </div>

                    {/* Key Engineering Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 p-3 mb-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 tracking-wider mb-0.5">
                            {m.label}
                          </p>
                          <p className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Architectural Decision Callout */}
                    <div className="p-3.5 rounded-xl bg-gradient-to-r from-indigo-50/80 via-sky-50/50 to-emerald-50/50 dark:from-indigo-950/40 dark:via-sky-950/30 dark:to-emerald-950/20 border border-indigo-200/70 dark:border-indigo-800/60 mb-5">
                      <div className="flex items-center gap-1.5 mb-1 text-indigo-700 dark:text-cyan-300">
                        <Lightbulb size={13} className="text-amber-500 shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-wider">
                          Architectural Decision: {project.decision.question}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                        &ldquo;{project.decision.answer}&rdquo;
                      </p>
                    </div>

                    {/* Architectural Highlights */}
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                        <Cpu size={14} className="text-indigo-500" />
                        <span>System Highlights &amp; Engineering</span>
                      </p>
                      <ul className="flex flex-col gap-2.5">
                        {project.highlights.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-indigo-600 dark:text-indigo-400" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech stack & CTAs */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/70">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 transition-all shadow-xs"
                      >
                        <GithubIcon />
                        <span>View Source Code</span>
                      </a>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-xs"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/40 border border-slate-200/60 dark:border-slate-700/50">
                          <GitFork size={13} className="text-indigo-500" />
                          <span>Full Architecture on GitHub</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT: High-Fidelity Gallery */}
                <div className="p-6 lg:p-7 lg:col-span-5 bg-slate-50/80 dark:bg-slate-900/60 flex flex-col justify-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-slate-200/70 dark:border-slate-700/70">
                  <Gallery images={project.images} title={project.title} />
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
