"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Layers, GraduationCap, CheckCircle, Server, Award } from "lucide-react";

const STATS = [
  { value: 1,    suffix: "",  label: "Production Project",  sublabel: "Full-Stack & Event-Driven", icon: Layers },
  { value: 8.3,  suffix: "",  label: "B.Tech CGPA",         sublabel: "DYPCET Kolhapur",          decimal: true, icon: GraduationCap },
  { value: 19,   suffix: "+", label: "Unit Tests Written",  sublabel: "JUnit 5 + Mockito",       icon: CheckCircle },
  { value: 5,    suffix: "+", label: "Kafka Topics",        sublabel: "Async Event Pipeline",     icon: Server },
  { value: 4,    suffix: "+", label: "Certifications",      sublabel: "AWS & Google Cloud",       icon: Award },
];

function useCountUp(target: number, duration: number, started: boolean, decimal = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(decimal ? Math.round(start * 10) / 10 : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [started, target, duration, decimal]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  sublabel,
  decimal,
  started,
  icon: Icon,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  decimal?: boolean;
  started: boolean;
  icon: React.ComponentType<{ size: number; className?: string }>;
}) {
  const count = useCountUp(value, 1200, started, decimal);
  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 shadow-xs hover:border-violet-300 dark:hover:border-violet-600 transition-all group">
      <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-950/60 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
        <Icon size={16} />
      </div>
      <span className="text-2.5xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
        {decimal ? count.toFixed(1) : count}
        <span className="text-violet-600 dark:text-violet-400">{suffix}</span>
      </span>
      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
        {label}
      </span>
      <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
        {sublabel}
      </span>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
