"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, FileText, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("hero");

  // Shadow and border on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/80 shadow-xs"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-bold text-slate-900 dark:text-white hover:opacity-90 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-violet-600 dark:bg-violet-500 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <Code2 size={18} />
          </div>
          <span className="text-base sm:text-lg tracking-tight font-semibold">
            Omkar Shetake
          </span>
          <span className="hidden sm:inline-flex items-center text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-950/70 text-violet-600 dark:text-violet-400 border border-violet-200/80 dark:border-violet-800/80 font-medium">
            Backend SWE
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/60 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-xs">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      isActive
                        ? "text-violet-600 dark:text-violet-400 bg-white dark:bg-zinc-900 shadow-xs"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Quick Resume Link */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-violet-600 hover:bg-violet-700 text-white transition-all shadow-xs hover:shadow-violet-500/20"
          >
            <FileText size={13} />
            <span>Resume</span>
            <ArrowUpRight size={13} className="opacity-70" />
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-violet-600 text-white"
          >
            <FileText size={12} />
            Resume
          </a>
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-violet-600 transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-lg"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400"
                          : "text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold bg-violet-600 text-white"
                >
                  <FileText size={15} />
                  <span>View Resume (PDF)</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
