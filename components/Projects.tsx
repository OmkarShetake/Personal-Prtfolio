"use client";

import { motion, type Variants, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useCallback } from "react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const PROJECTS = [
  {
    title: "StayFinder",
    label: "Full-Stack · AI · Event-Driven",
    summary: "Production-grade AI-powered Airbnb-inspired rental platform.",
    images: [
      "/projects/Stayfinder/1777714953106.jpg",
      "/projects/Stayfinder/1777714953565.jpg",
      "/projects/Stayfinder/1777714954172.jpg",
      "/projects/Stayfinder/1777714955088.jpg",
    ],
    highlights: [
      "Google Gemini AI for description generation, smart pricing & NL search",
      "Apache Kafka (KRaft) for fully async, ordered notification delivery",
      "Real-time chat & push notifications via WebSocket (STOMP + SockJS)",
      "JWT + RBAC (GUEST / HOST / ADMIN), BCrypt, XSS sanitisation",
      "19 unit tests (JUnit 5 + Mockito) · Docker Compose full stack",
    ],
    tags: ["Java 21", "Spring Boot 3", "Gemini AI", "Kafka KRaft", "PostgreSQL", "WebSocket", "Cloudinary", "Docker"],
    githubUrl: "https://github.com/OmkarShetake/StayFinderProject",
    liveUrl: "",
  },
  {
    title: "MedChain",
    label: "Full-Stack · AI · Healthcare",
    summary: "AI-powered fake medicine detection platform protecting rural India.",
    images: [
      "/projects/Medchain/1782634347804.jpg",
      "/projects/Medchain/1782634348276.jpg",
      "/projects/Medchain/1782634349182.jpg",
    ],
    highlights: [
      "Gemini 2.5 Flash (multimodal) — image scan, symptom check, drug interactions",
      "pgvector semantic search for natural language medicine queries",
      "ZXing QR generation & Redis caching — sub-100ms verification",
      "Multi-role JWT RBAC (Admin / Manufacturer / Patient / Chemist)",
      "38 REST endpoints via Swagger/OpenAPI · WebSocket recall alerts",
    ],
    tags: ["Java 21", "Spring Boot 3", "Spring AI", "Gemini 2.5 Flash", "pgvector", "Redis", "ZXing", "Docker"],
    githubUrl: "https://github.com/OmkarShetake/Medchain",
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1,    opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="relative max-h-[85vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`Screenshot ${index + 1}`}
          width={900}
          height={600}
          className="rounded-xl object-contain max-h-[85vh] w-auto shadow-2xl"
          style={{ maxWidth: "90vw" }}
        />
        <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs bg-black/50 text-white">
          {index + 1} / {images.length}
        </span>
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      {/* Close hint */}
      <p className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-white/50">
        Click outside to close
      </p>
    </motion.div>
  );
}

// ── Image gallery — thumbnail row + big preview ───────────────────────────────
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
    enter:  (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <>
      {/* Main preview — natural aspect ratio, no crop */}
      <div
        className="relative rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700 cursor-zoom-in group/img"
        onClick={() => setLightbox(true)}
        title="Click to enlarge"
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

        {/* Zoom hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-black/50 text-white text-xs backdrop-blur-sm">
            🔍 Click to enlarge
          </span>
        </div>

        {/* Arrow buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/80 flex items-center justify-center text-slate-700 dark:text-white hover:bg-white shadow transition-colors z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-900/80 flex items-center justify-center text-slate-700 dark:text-white hover:bg-white shadow transition-colors z-10"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => go(i, i > active ? 1 : -1)}
              className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                i === active
                  ? "border-indigo-500 scale-105 shadow-md"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`View screenshot ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Thumbnail ${i + 1}`}
                width={72}
                height={48}
                className="object-cover w-[72px] h-12"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
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

// ── Project card ──────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: "easeOut" as const },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-800/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 mb-2">
            What I&apos;ve built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
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
              className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* ── Two-column layout on md+ ── */}
              <div className="grid md:grid-cols-2 gap-0">

                {/* LEFT — text content */}
                <div className="p-7 flex flex-col justify-between order-2 md:order-1">
                  {/* Header */}
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-indigo-500 dark:text-indigo-400">
                      {project.label}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
                      {project.summary}
                    </p>

                    {/* Bullet highlights */}
                    <ul className="flex flex-col gap-2 mb-6">
                      {project.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-indigo-500 dark:text-indigo-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags + buttons at bottom */}
                  <div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <GithubIcon />
                        View Code
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* RIGHT — image gallery */}
                <div className="p-5 bg-slate-50 dark:bg-slate-900/40 flex flex-col justify-center order-1 md:order-2 border-b md:border-b-0 md:border-l border-slate-100 dark:border-slate-700">
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
