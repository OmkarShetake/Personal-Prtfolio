"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: 2,    suffix: "",  label: "Production Projects" },
  { value: 8.5,  suffix: "",  label: "CGPA",                decimal: true },
  { value: 19,   suffix: "+", label: "Unit Tests Written" },
  { value: 38,   suffix: "",  label: "REST Endpoints" },
  { value: 4,    suffix: "+", label: "Certifications" },
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

function StatItem({ value, suffix, label, decimal, started }: {
  value: number;
  suffix: string;
  label: string;
  decimal?: boolean;
  started: boolean;
}) {
  const count = useCountUp(value, 1200, started, decimal);
  return (
    <div className="flex flex-col items-center gap-1 px-4">
      <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums">
        {decimal ? count.toFixed(1) : count}{suffix}
      </span>
      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium text-center">
        {label}
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
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 sm:gap-12"
      >
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} started={started} />
        ))}
      </motion.div>
    </section>
  );
}
